import React from 'react'

import ThemeButton from './theme-button/theme-button'
import logo from "../assets/img/logo-es-classic-A488D4-1.png"

function Header() {
  return (
    <header className="header" id="header">
        <nav className="nav container">
            <div className='nav__logo--container'>
                <img src={ logo } alt="Eri Schön's logo" className="nav__logo--image" />
                <a href="#home" className="nav__logo">Eri Schön</a>
            </div>

            <div className="nav__menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                            <i className='bx bx-home-alt' ></i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#work" className="nav__link">
                            <i className='bx bx-briefcase-alt-2' ></i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className='bx bx-user' ></i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className='bx bx-book'></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className='bx bx-message-square-detail' ></i>
                        </a>
                    </li>
                </ul>
            </div>

            <ThemeButton />
            
        </nav>
    </header>
  )
}

export default Header