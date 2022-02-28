import React from "react"
import Layout from "../components/Layout"

import Header from "../components/Header"
import Home from "../components/Home"
import About from "../components/About"
import Skills from "../components/Skills"
import Work from "../components/Work"
import Testimonial from "../components/Testimonial"
import Services from "../components/Services"
import Contact from "../components/Contact"


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
            <Contact />
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
