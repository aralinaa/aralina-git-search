import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

const Header = (props) => {
  return (
    <nav className="flex items-center justify-between flex-wrap header-bg-cl p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {props.userName && <img className="w-16 mx-2" src={props.user.avatar_url} alt="" />}
        {props.userName && (
          <span className="text-3xl uppercase font-serif mx-2">{props.user.login}</span>
        )}
      </div>
      <div id="menu" className="flex space-x-6 ">
        <div>
          <button
            type="button"
            className="flex items-center px-1 py-1 rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            {props.userName && <Link to="/">Main</Link>}
          </button>
        </div>
        <div>
          <button
            type="button"
            className="flex items-center px-1 py-1 rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            {props.readMe && <Link to={`/${props.userName}`}>Repositories</Link>}
          </button>
        </div>
      </div>
    </nav>
  )
}
export default React.memo(Header)
