import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/destination">Destination</NavLink>
        <NavLink to="/crew">Crew</NavLink>
        <NavLink to="/technology">Technology</NavLink>
      </nav>
    </div>
  )
}

export default Header