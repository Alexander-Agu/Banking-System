import React from 'react'
import SB from './sbLogo.png'
import './header.css'
import { FaChevronRight } from "react-icons/fa";

function Header() {
  return (
    <header className='header'>
        <div className="logo">
            <img src={SB} alt="Senax Banking Logo" className='logoIMG' />

            <h2>SenaxBanking</h2>
        </div>

        <nav className='navbar'>
            <ul className='navList'>
                <li className='navItem'>
                    <a href="#" className='navLink'>Home</a>
                </li>
                <li className='navList extra'>
                    <a href="#" className='navLink'>Register</a>
                </li>
                <li className='navList'>
                    <a href="#" className='navLink'>My Account</a>
                </li>
                <li className='navList'>
                    <a href="#" className='navLink'>About us</a>
                </li>
            </ul>
        </nav>

        <div className="register">
            <button className='regButton'>Register {<FaChevronRight />}</button>
        </div>
    </header>
  )
}

export default Header