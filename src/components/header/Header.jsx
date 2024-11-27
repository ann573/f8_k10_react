import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (  
    <>
      <header className='bg-red-500 mb-5'>
        <ul className='flex p-5 gap-10'>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/service">Service</NavLink>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header