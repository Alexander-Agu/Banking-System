import React from 'react'
import { GiArchiveRegister } from "react-icons/gi";
import './header.css'
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
  return (
    <header className='header'>
      <div className="logo">
        <a>SB</a>
      </div>

      <nav className='navbar'>
        <input type="checkbox" id="sidebar" className='extra' />
        <label htmlFor="sidebar" className='extra'>{<CiMenuFries />}</label>

        <ul className='navList'>
          <li>
            <label htmlFor="sidebar extra">{<IoCloseSharp />}</label>
          </li>

          <li className='navItem extra'>
            <a href="#" className='navLink'>Home</a>
          </li>

          <li className='navItem extra'>
            <a href="#" className='navLink'>Register</a>
          </li>


          <li className='navItem'>
            <a href="#" className='navLink'>ATM</a>
          </li>

          <li className='navItem'>
            <a href="#" className=' home'>SenaX Banking</a>
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