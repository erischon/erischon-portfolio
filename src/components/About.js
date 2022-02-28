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
                        <h3 className="about__title">Experience</h3>
                        <span className="about__subtitle">8 Years Working</span>
                    </div>

                    <div className="about__box">
                        <i className='bx bx-briefcase-alt about__icon' ></i>
                        <h3 className="about__title">Completed</h3>
                        <span className="about__subtitle">48 + Projects</span>
                    </div>

                    <div className="about__box">
                        <i className='bx bx-support about__icon' ></i>
                        <h3 className="about__title">Support</h3>
                        <span className="about__subtitle">Online 24/7</span>
                    </div>
                </div>

                <p className="about__description">
                    Je suis un Développeur Back-end Python Freelance avec une expertise en création et modification d’application Web et d’API REST sous Django ou Flask. J’ai aussi une bonne expérience dans le domaine du Testing Backend.
                </p>

                <a href="#contact" className="button">Me Contacter</a>
            </div>
        </div>
    </section>
  )
}

export default About