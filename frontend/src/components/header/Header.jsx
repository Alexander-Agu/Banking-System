import React from 'react'
import './header.css'

function Header() {
  return (
    <header className='header'>
        <div className="logo">
          <a href="#">SenaX</a>
        </div>

        <nav className='navbar'>

          <ul className='navList'>

            <li className='navItem'>
              <a href="#" className='navLink'>
                Home
              </a>
            </li>

            <li className='navItem'>
              <a href="#" className='navLink'>
                Register
              </a>
            </li>
            

            <li className='navItem'>
              <a href="#" className='navLink'>
                ATM
              </a>
            </li>

            <li className='navItem'>
              <a href="#" className='navLink'>
                About
              </a>
            </li>

          </ul>

        </nav>
    </header>
  )
}

export default Header