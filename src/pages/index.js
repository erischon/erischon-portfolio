import React from "react"
import Layout from "../components/Layout"

import Header from "../components/Header"
import Home from "../components/Home"
import About from "../components/About"
import Work from "../components/Work"


const IndexPage = () => {
  return (
    <Layout>
    
        <Header />
        
        <main className="main">
            <Home />
            <About />   
            


            
            <section className="skills section" id="skills">
                <span className="section__subtitle">My abilities</span>
                <h2 className="section__title">My experience</h2>

                <div className="skills__container container grid">
                    <div className="skills__content">
                        <h3 className="skills__title">Developpement Frontend</h3>

                        <div className="skills__box">
                            <div className="skills__group">
                                <div className="skills__data">
                                    <i className='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 className="skills__name">HTML</h3>
                                        <span className="skills__level">Intermédiaire</span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <i className='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 className="skills__name">CSS</h3>
                                        <span className="skills__level">Intermédiaire</span>
                                    </div>
                                </div>                                
                                <div className="skills__data">
                                    <i className='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 className="skills__name">Javascript</h3>
                                        <span className="skills__level">Intermédiaire</span>
                                    </div>
                                </div>
                            </div>

                            <div className="skills__group">
                                <div className="skills__data">
                                    <i className='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 className="skills__name">Git</h3>
                                        <span className="skills__level">Intermediate</span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <i className='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 className="skills__name">Tailwindcss</h3>
                                        <span className="skills__level">Intermédiaire</span>
                                    </div>
                                </div>                                
                                <div className="skills__data">
                                    <i className='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 className="skills__name">React</h3>
                                        <span className="skills__level">Intermédiaire</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skills__content">
                        <h3 className="skills__title">Developpement Backend</h3>

                        <div className="skills__box">
                            <div className="skills__group">
                                <div className="skills__data">
                                    <i className='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 className="skills__name">Python</h3>
                                        <span className="skills__level">Intermédiaire</span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <i className='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 className="skills__name">Django</h3>
                                        <span className="skills__level">Intermédiaire</span>
                                    </div>
                                </div>                                
                                <div className="skills__data">
                                    <i className='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 className="skills__name">PostgreSQL</h3>
                                        <span className="skills__level">Intermédiaire</span>
                                    </div>
                                </div>
                            </div>

                            <div className="skills__group">
                                <div className="skills__data">
                                    <i className='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 className="skills__name">Node.js</h3>
                                        <span className="skills__level">Intermediate</span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <i className='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 className="skills__name">Express</h3>
                                        <span className="skills__level">Intermédiaire</span>
                                    </div>
                                </div>                                
                                <div className="skills__data">
                                    <i className='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 className="skills__name">MongoDB</h3>
                                        <span className="skills__level">Intermédiaire</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="services section">
                <span className="section__subtitle">My Services</span>
                <h2 className="section__title">What I offer</h2>

                <div className="services__container container grid">
                    <div className="services__card">
                        <h3 className="services__title">Product <br /> Designer</h3>

                        <span className="services__button">
                            See more <i className='bx bx-right-arrow-alt services__icon' ></i>
                        </span>

                        <div className="services__modal">
                            <div className="services__modal--content">
                                <i className='bx bx-x services__modal--close'></i>

                                <h3 className="services__modal--title">Product Designer</h3>
                                <p className="services__modal--description">
                                    Service with more than 3 years of experience. 
                                    Providing quality work to clients and companies.
                                </p>
                                
                                <ul className="services__modal--list">
                                    <li className="services__modal--item">
                                        <i className='bx bx-check services__modal--icon' ></i>
                                        <p className="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li className="services__modal--item">
                                        <i className='bx bx-check services__modal--icon' ></i>
                                        <p className="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li className="services__modal--item">
                                        <i className='bx bx-check services__modal--icon' ></i>
                                        <p className="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li className="services__modal--item">
                                        <i className='bx bx-check services__modal--icon' ></i>
                                        <p className="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li className="services__modal--item">
                                        <i className='bx bx-check services__modal--icon' ></i>
                                        <p className="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="services__card">
                        <h3 className="services__title">Ui/Ux <br /> Designer</h3>

                        <span className="services__button">
                            See more <i className='bx bx-right-arrow-alt services__icon' ></i>
                        </span>

                        <div className="services__modal">
                            <div className="services__modal--content">
                                <i className='bx bx-x services__modal--close'></i>

                                <h3 className="services__modal--title">Ui/UX Designer</h3>
                                <p className="services__modal--description">
                                    Service with more than 3 years of experience. 
                                    Providing quality work to clients and companies.
                                </p>
                                
                                <ul className="services__modal--list">
                                    <li className="services__modal--item">
                                        <i className='bx bx-check services__modal--icon' ></i>
                                        <p className="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li className="services__modal--item">
                                        <i className='bx bx-check services__modal--icon' ></i>
                                        <p className="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li className="services__modal--item">
                                        <i className='bx bx-check services__modal--icon' ></i>
                                        <p className="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li className="services__modal--item">
                                        <i className='bx bx-check services__modal--icon' ></i>
                                        <p className="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li className="services__modal--item">
                                        <i className='bx bx-check services__modal--icon' ></i>
                                        <p className="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="services__card">
                        <h3 className="services__title">Visual <br /> Designer</h3>

                        <span className="services__button">
                            See more <i className='bx bx-right-arrow-alt services__icon' ></i>
                        </span>

                        <div className="services__modal">
                            <div className="services__modal--content">
                                <i className='bx bx-x services__modal--close'></i>

                                <h3 className="services__modal--title">Visual designer</h3>
                                <p className="services__modal--description">
                                    Service with more than 3 years of experience. 
                                    Providing quality work to clients and companies.
                                </p>
                                
                                <ul className="services__modal--list">
                                    <li className="services__modal--item">
                                        <i className='bx bx-check services__modal--icon' ></i>
                                        <p className="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li className="services__modal--item">
                                        <i className='bx bx-check services__modal--icon' ></i>
                                        <p className="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li className="services__modal--item">
                                        <i className='bx bx-check services__modal--icon' ></i>
                                        <p className="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li className="services__modal--item">
                                        <i className='bx bx-check services__modal--icon' ></i>
                                        <p className="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li className="services__modal--item">
                                        <i className='bx bx-check services__modal--icon' ></i>
                                        <p className="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <Work />

            
            <section className="testimonial section">
                <span className="section__subtitle">My clients say</span>
                <h2 className="section__title">Testimonial</h2>

                <div className="testimonial__container container swiper">
                    <div className="swiper-wrapper">
                        <div className="testimonial__card swiper-slide">
                            <img src="assets/img/testimonial1.png" alt="" className="testimonial__img" />

                            <h3 className="testimonial__name">John Doe</h3>
                            <p className="testimonial__description">
                                A really good job, all aspects of the project were followed step by step and with good results.
                            </p>
                        </div>

                        <div className="testimonial__card swiper-slide">
                            <img src="assets/img/testimonial2.png" alt="" className="testimonial__img" />

                            <h3 className="testimonial__name">Paula Vusy</h3>
                            <p className="testimonial__description">
                                A really good job, all aspects of the project were followed step by step and with good results.
                            </p>
                        </div>

                        <div className="testimonial__card swiper-slide">
                            <img src="assets/img/testimonial3.png" alt="" className="testimonial__img" />

                            <h3 className="testimonial__name">Sara Cill</h3>
                            <p className="testimonial__description">
                                A really good job, all aspects of the project were followed step by step and with good results.
                            </p>
                        </div>
                    </div>

                    <div className="swiper-pagination"></div>
                </div>
            </section>

            
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
                    &#169 Eri Schön All rights reserved
                </span>
            </div>
        </footer>



    </Layout>
  )
}

export default IndexPage
