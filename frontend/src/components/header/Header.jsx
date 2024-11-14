import React from 'react'
import './header.css'

function Header() {
  return (
    <header className='header'>
      <div className="logo">
        <a>SB</a>
      </div>

      <nav className='navbar'>
        <ul className='navList'>
          <li className='navItem'>
            <a href="#" className='navLink'>ATM</a>
          </li>

          <li className='navItem'>
            <a href="#" className='navLink home'>SenaX Banking</a>
          </li>

          <li className='navItem'>
            <a href="#" className='navLink'>About</a>
          </li>
        </ul>
      </nav>

      <div className="join">
        <a href="#">Register now</a>
      </div>
    </header>
  )
}

export default Header