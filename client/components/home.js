import React, { useEffect, useState } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Head from './head'
import RepoList from './list'
import RepoView from './repo-readme'
import Header from './header'
import Footer from './footer'
import './home.scss'

const Home = () => {
  const [userRepositories, setUserRepositories] = useState([])
  const [readMe, setReadMe] = useState('')
  const { userName, repositoryName } = useParams()
  const [user, setUser] = useState({})
  const [commit, setCommit] = useState({})
  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/repos`).then(({ data }) =>
      setUserRepositories(data)
    )
  }, [userName])
  useEffect(() => {
    if (repositoryName !== undefined) {
      const headers = { Accept: 'application/vnd.github.VERSION.raw' }
      axios(`https://api.github.com/repos/${userName}/${repositoryName}/readme`, {
        param: {},
        headers
      }).then(({ data }) => {
        setReadMe(data)
      })
    }
  }, [repositoryName, userName])
  useEffect(() => {
    axios(`https://api.github.com/users/${userName}`).then(({ data }) => setUser(data))
  }, [userName])
  useEffect(() => {
    axios(`https://api.github.com/users/${userName}`).then(({ data }) => setCommit(data))
  }, [userName])
  return (
    <div>
      <Head />
      <Header userName={userName} readMe={readMe} user={user} />
      <div className="home-bg page-wrap">
        <div className="container mx-auto pt-24 pb-8 ">
          <Route
            exact
            path="/:userName"
            component={() => (
              <RepoList userRepositories={userRepositories} userName={userName} commit={commit} />
            )}
          />
          <Route
            exact
            path="/:userName/:repositoryName"
            component={() => <RepoView readMe={readMe} />}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}
Home.propTypes = {}
export default Home
