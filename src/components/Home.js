import React from 'react'

import portrait from "../assets/img/erischon_b.png"

function Home() {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
        <div className="home__data">
            <span className="home__greeting">Bonjour, je suis</span>
            <h1 className="home__name">Eri Schön</h1>
            <h3 className="home__education">Développeur d'Application Web Freelance</h3>

            <div className="home__buttons">
                <a download="" href="./assets/pdf/cv-eri-schon.pdf" className="button button--ghost">
                    Télécharger le CV
                </a>
                <a href="#about" className="button">A propos</a>
            </div>
        </div>

        <div className="home__handle">
            <img src={ portrait } alt="" className="home__img" />
        </div>
        <div className="home__social">
            <a href="https://twitter.com/erischon" className="home__social--link" target="_blank">
                <i className='bx bxl-twitter' ></i>
            </a>
            <a href="https://www.linkedin.com/in/ericschonhofen/" className="home__social--link" target="_blank">
                <i className='bx bxl-linkedin-square'></i>
            </a>
            <a href="https://github.com/erischon" className="home__social--link" target="_blank">
                <i className='bx bxl-github'></i>
            </a>
        </div>

        <a href="#services" className="home__scroll">
            <i className='bx bx-mouse home__scroll--icon'></i>
            <span className="home__scroll--name">Scroll Down</span>
        </a>
        </div>
    </section>
  )
}

export default Home