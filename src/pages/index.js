import React from "react"
import Layout from "../components/Layout"

import Header from "../components/Header"
import Home from "../components/Home"
import About from "../components/About"
import Skills from "../components/Skills"
import Work from "../components/Work"
import Testimonial from "../components/Testimonial"
import Services from "../components/Services"


const IndexPage = () => {
  return (
    <Layout>
    
        <Header />
        
        <main className="main">
            <Home />
            <About />
            <Skills />
            <Services />
            <Work />
            <Testimonial />
            
            <section className="contact section" id="contact">
                <span className="section__subtitle">Get in Touch</span>
                <h2 className="section__title">Contact Me</h2>
                
                <div className="contact__container container grid">
                    <div className="contact__content">
                        <h3 className="contact__title">Talk to me</h3>

                        <div className="contact__info">
                            <div className="contact__card">
                                <i className='bx bx-mail-send contact__card--icon' ></i>
                                <h3 className="contact__card--title">Email</h3>
                                <span className="contact__card--data">erischon@gmail.com</span>

                                <a href="mailto:erischon@gmail.com" target="_blank" className="contact__button">
                                    Write me <i className='bx bx-right-arrow-alt contact__button--icon' ></i>
                                </a>
                            </div>

                            <div className="contact__card">
                                <i className='bx bxl-twitter contact__card--icon'></i>
                                <h3 className="contact__card--title">Twitter</h3>
                                <span className="contact__card--data">@erischon</span>

                                <a href="https://twitter.com/messages/compose?recipient_id=46720943" target="_blank" className="contact__button">
                                    Write me <i className='bx bx-right-arrow-alt contact__button--icon' ></i>
                                </a>
                            </div>

                            <div className="contact__card">
                                <i className='bx bxl-linkedin-square contact__card--icon' ></i>
                                <h3 className="contact__card--title">Linkedin</h3>
                                <span className="contact__card--data">Eric Schönhofen</span>

                                <a href="https://www.linkedin.com/in/ericschonhofen/" target="_blank" className="contact__button">
                                    Write me <i className='bx bx-right-arrow-alt contact__button--icon'></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact__content">
                        <h3 className="contact__title">Write me your project</h3>

                        <form action="" className="contact__form">
                            <div className="contact__form--div">
                                <label htmlFor="" className="contact__form--tag">Name</label>
                                <input type="text" placeholder="Insert your name" className="contact__form--input" />
                            </div>

                            <div className="contact__form--div">
                                <label htmlFor="" className="contact__form--tag">Email</label>
                                <input type="email" placeholder="Insert your email" className="contact__form--input" />
                            </div>

                            <div className="contact__form--div contact__form--area">
                                <label htmlFor="" className="contact__form--tag">Project</label>
                                <textarea name="" id="" cols="30" rows="10" placeholder="Write your project" className="contact__form--input"></textarea>
                            </div>

                            <button className="button">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
     
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Eri Schön</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#work" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonial" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <ul className="footer__social">
                    <a href="https://twitter.com/erischon" target="_blank" className="footer__social--link">
                        <i className='bx bxl-twitter' ></i>
                    </a>
                    <a href="https://www.linkedin.com/in/ericschonhofen/" target="_blank" className="footer__social--link">
                        <i className='bx bxl-linkedin' ></i>
                    </a>
                    <a href="https://github.com/erischon" target="_blank" className="footer__social--link">
                        <i className='bx bxl-github' ></i>
                    </a>
                </ul>

                <span className="footer__copy">
                    &copy; { new Date().getFullYear() } Eri Schön All rights reserved
                </span>
            </div>
        </footer>



    </Layout>
  )
}

export default IndexPage
