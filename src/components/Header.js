import React from 'react'

function Header() {
  return (
    <header class="header" id="header">
        <nav class="nav container">
            <a href="#" class="nav__logo">Eri Schön</a>

            <div class="nav__menu">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="#home" class="nav__link active-link">
                            <i class='bx bx-home-alt' ></i>
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#about" class="nav__link">
                            <i class='bx bx-user' ></i>
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#skills" class="nav__link">
                            <i class='bx bx-book'></i>
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#work" class="nav__link">
                            <i class='bx bx-briefcase-alt-2' ></i>
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#contact" class="nav__link">
                            <i class='bx bx-message-square-detail' ></i>
                        </a>
                    </li>
                </ul>
            </div>

            
            <i class='bx bx-moon change-theme' id="theme-button"></i>
        </nav>
    </header>
  )
}

export default Header