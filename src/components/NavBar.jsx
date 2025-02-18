import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const NavBar = () => {
  const user = useSelector(store => store.user);
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Dev-Tinder</Link>
      </div>
      {user && <div className="flex gap-2">
        <p> Welcome, {user.firstName}</p>
        <div className="dropdown dropdown-end mx-5 flex">

          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user.photoUrl} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li> <Link>Settings</Link></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>}
    </div>
  )
}

export default NavBar
