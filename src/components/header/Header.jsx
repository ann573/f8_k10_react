import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'

function Header() {
  const location = useLocation();
  const isAdminPage = location.pathname.includes("/admin") ;
  console.log(isAdminPage);
  if (isAdminPage) {
    return (
      <>
        <header className='bg-red-500 mb-5'>
          <ul className='flex p-5 gap-10'>
            <li>
              <NavLink to="/">Home UI</NavLink>
            </li>
            <li>
              <NavLink to="/admin">DashBoard Page</NavLink>
            </li>

          </ul>
        </header>
      </>
    )
  }
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
          <li>
            <NavLink to="/admin">Trang Admin</NavLink>
          </li>
          
        </ul>
      </header>
    </>
  )
}

export default Header