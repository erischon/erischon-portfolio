import React from 'react'

import about from "../assets/img/about.png"

function About() {
  return (
    <section className="about section" id="about">
        <span className="section__subtitle">Mon Intro</span>
        <h2 className="section__title">A propos</h2>

        <div className="about__container container grid">
            <img src={ about } alt="Eric Schön" className="about__img" />

            <div className="about__data">
                <div className="about__info">
                    <div className="about__box">
                        <i className='bx bx-award about__icon'></i>
                        <h3 className="about__title">Expérience</h3>
                        <span className="about__subtitle">2+ ans</span>
                    </div>

                    <div className="about__box">
                        <i className='bx bx-briefcase-alt about__icon' ></i>
                        <h3 className="about__title">Accompli</h3>
                        <span className="about__subtitle">10+ Projets</span>
                    </div>

                    <div className="about__box">
                        <i className='bx bx-support about__icon' ></i>
                        <h3 className="about__title">Support</h3>
                        <span className="about__subtitle">Online 24/7</span>
                    </div>
                </div>

                <p className="about__description">
                    Je suis un Développeur d'Application Freelance ayant une expertise en création et modification d’application Web et d’API REST.<br />
                    
                </p>

                <a href="#contact" className="button">Me Contacter</a>
            </div>
        </div>
    </section>
  )
}

export default About