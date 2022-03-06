import React from 'react'

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Eri Schön</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">A propos</a>
                </li>
                <li>
                    <a href="#work" className="footer__link">Projets</a>
                </li>
                <li>
                    <a href="#testimonial" className="footer__link">Témoignages</a>
                </li>
            </ul>

            <ul className="footer__social">
                <a href="https://twitter.com/erischon" target="_blank" rel="noopener noreferrer" className="footer__social--link">
                    <i className='bx bxl-twitter' ></i>
                </a>
                <a href="https://www.linkedin.com/in/ericschonhofen/" target="_blank" rel="noopener noreferrer" className="footer__social--link">
                    <i className='bx bxl-linkedin' ></i>
                </a>
                <a href="https://github.com/erischon" target="_blank" rel="noopener noreferrer" className="footer__social--link">
                    <i className='bx bxl-github' ></i>
                </a>
            </ul>

            <span className="footer__copy">
                &copy; { new Date().getFullYear() } Eri Schön All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer