import React from 'react'
import Markdown from 'markdown-to-jsx'
import './repo-readme.scss'
import PropagateLoader from 'react-spinners/PropagateLoader'

const RepoView = (props) => {
  return (
    <div className="markdown-body text-white">
      <Markdown>{props.readMe}</Markdown>
      {!props.readMe && (
        <div className="flex justify-center items-center mt-40">
          <PropagateLoader size={20} color="#abc123" />
        </div>
      )}
    </div>
  )
}

RepoView.propTypes = {}
export default RepoView
