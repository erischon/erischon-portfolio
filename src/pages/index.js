import React from "react"
import Layout from "../components/Layout"

import Header from "../components/Header"

import portrait from "../assets/img/erischon_b.png"


const IndexPage = () => {
  return (
    <Layout>
    
        <Header />
        
        <main class="main">
            
            <section class="home section" id="home">
                <div class="home__container container grid">
                    <div class="home__data">
                        <span class="home__greeting">Bonjour, je suis</span>
                        <h1 class="home__name">Eri Schön</h1>
                        <h3 class="home__education">Développeur Fullstack</h3>

                        <div class="home__buttons">
                            <a download="" href="./assets/pdf/cv-eri-schon.pdf" class="button button--ghost">
                                Télécharger le CV
                            </a>
                            <a href="#about" class="button">A propos</a>
                        </div>
                    </div>

                    <div class="home__handle">
                        <img src={ portrait } alt="" class="home__img" />
                    </div>
                    <div class="home__social">
                        <a href="https://twitter.com/erischon" class="home__social--link" target="_blank">
                            <i class='bx bxl-twitter' ></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ericschonhofen/" class="home__social--link" target="_blank">
                            <i class='bx bxl-linkedin-square'></i>
                        </a>
                        <a href="https://github.com/erischon" class="home__social--link" target="_blank">
                            <i class='bx bxl-github'></i>
                        </a>
                    </div>

                    <a href="#about" class="home__scroll">
                        <i class='bx bx-mouse home__scroll--icon'></i>
                        <span class="home__scroll--name">Scroll Down</span>
                    </a>
                </div>
            </section>
            
            
            <section class="about section" id="about">
                <span class="section__subtitle">My Intro</span>
                <h2 class="section__title">About me</h2>

                <div class="about__container container grid">
                    <img src="./assets/img/about.png" alt="Eric Schön" class="about__img" />

                    <div class="about__data">
                        <div class="about__info">
                            <div class="about__box">
                                <i class='bx bx-award about__icon'></i>
                                <h3 class="about__title">Experience</h3>
                                <span class="about__subtitle">8 Years Working</span>
                            </div>

                            <div class="about__box">
                                <i class='bx bx-briefcase-alt about__icon' ></i>
                                <h3 class="about__title">Completed</h3>
                                <span class="about__subtitle">48 + Projects</span>
                            </div>

                            <div class="about__box">
                                <i class='bx bx-support about__icon' ></i>
                                <h3 class="about__title">Support</h3>
                                <span class="about__subtitle">Online 24/7</span>
                            </div>
                        </div>

                        <p class="about__description">
                            Je suis un Développeur Back-end Python Freelance avec une expertise en création et modification d’application Web et d’API REST sous Django ou Flask. J’ai aussi une bonne expérience dans le domaine du Testing Backend.
                        </p>

                        <a href="#contact" class="button">Contact Me</a>
                    </div>
                </div>
            </section>

            
            <section class="skills section" id="skills">
                <span class="section__subtitle">My abilities</span>
                <h2 class="section__title">My experience</h2>

                <div class="skills__container container grid">
                    <div class="skills__content">
                        <h3 class="skills__title">Developpement Frontend</h3>

                        <div class="skills__box">
                            <div class="skills__group">
                                <div class="skills__data">
                                    <i class='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 class="skills__name">HTML</h3>
                                        <span class="skills__level">Intermédiaire</span>
                                    </div>
                                </div>
                                <div class="skills__data">
                                    <i class='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 class="skills__name">CSS</h3>
                                        <span class="skills__level">Intermédiaire</span>
                                    </div>
                                </div>                                
                                <div class="skills__data">
                                    <i class='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 class="skills__name">Javascript</h3>
                                        <span class="skills__level">Intermédiaire</span>
                                    </div>
                                </div>
                            </div>

                            <div class="skills__group">
                                <div class="skills__data">
                                    <i class='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 class="skills__name">Git</h3>
                                        <span class="skills__level">Intermediate</span>
                                    </div>
                                </div>
                                <div class="skills__data">
                                    <i class='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 class="skills__name">Tailwindcss</h3>
                                        <span class="skills__level">Intermédiaire</span>
                                    </div>
                                </div>                                
                                <div class="skills__data">
                                    <i class='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 class="skills__name">React</h3>
                                        <span class="skills__level">Intermédiaire</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="skills__content">
                        <h3 class="skills__title">Developpement Backend</h3>

                        <div class="skills__box">
                            <div class="skills__group">
                                <div class="skills__data">
                                    <i class='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 class="skills__name">Python</h3>
                                        <span class="skills__level">Intermédiaire</span>
                                    </div>
                                </div>
                                <div class="skills__data">
                                    <i class='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 class="skills__name">Django</h3>
                                        <span class="skills__level">Intermédiaire</span>
                                    </div>
                                </div>                                
                                <div class="skills__data">
                                    <i class='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 class="skills__name">PostgreSQL</h3>
                                        <span class="skills__level">Intermédiaire</span>
                                    </div>
                                </div>
                            </div>

                            <div class="skills__group">
                                <div class="skills__data">
                                    <i class='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 class="skills__name">Node.js</h3>
                                        <span class="skills__level">Intermediate</span>
                                    </div>
                                </div>
                                <div class="skills__data">
                                    <i class='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 class="skills__name">Express</h3>
                                        <span class="skills__level">Intermédiaire</span>
                                    </div>
                                </div>                                
                                <div class="skills__data">
                                    <i class='bx bxs-badge-check'></i>
                                    
                                    <div>
                                        <h3 class="skills__name">MongoDB</h3>
                                        <span class="skills__level">Intermédiaire</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section class="services section">
                <span class="section__subtitle">My Services</span>
                <h2 class="section__title">What I offer</h2>

                <div class="services__container container grid">
                    <div class="services__card">
                        <h3 class="services__title">Product <br /> Designer</h3>

                        <span class="services__button">
                            See more <i class='bx bx-right-arrow-alt services__icon' ></i>
                        </span>

                        <div class="services__modal">
                            <div class="services__modal--content">
                                <i class='bx bx-x services__modal--close'></i>

                                <h3 class="services__modal--title">Product Designer</h3>
                                <p class="services__modal--description">
                                    Service with more than 3 years of experience. 
                                    Providing quality work to clients and companies.
                                </p>
                                
                                <ul class="services__modal--list">
                                    <li class="services__modal--item">
                                        <i class='bx bx-check services__modal--icon' ></i>
                                        <p class="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li class="services__modal--item">
                                        <i class='bx bx-check services__modal--icon' ></i>
                                        <p class="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li class="services__modal--item">
                                        <i class='bx bx-check services__modal--icon' ></i>
                                        <p class="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li class="services__modal--item">
                                        <i class='bx bx-check services__modal--icon' ></i>
                                        <p class="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li class="services__modal--item">
                                        <i class='bx bx-check services__modal--icon' ></i>
                                        <p class="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="services__card">
                        <h3 class="services__title">Ui/Ux <br /> Designer</h3>

                        <span class="services__button">
                            See more <i class='bx bx-right-arrow-alt services__icon' ></i>
                        </span>

                        <div class="services__modal">
                            <div class="services__modal--content">
                                <i class='bx bx-x services__modal--close'></i>

                                <h3 class="services__modal--title">Ui/UX Designer</h3>
                                <p class="services__modal--description">
                                    Service with more than 3 years of experience. 
                                    Providing quality work to clients and companies.
                                </p>
                                
                                <ul class="services__modal--list">
                                    <li class="services__modal--item">
                                        <i class='bx bx-check services__modal--icon' ></i>
                                        <p class="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li class="services__modal--item">
                                        <i class='bx bx-check services__modal--icon' ></i>
                                        <p class="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li class="services__modal--item">
                                        <i class='bx bx-check services__modal--icon' ></i>
                                        <p class="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li class="services__modal--item">
                                        <i class='bx bx-check services__modal--icon' ></i>
                                        <p class="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li class="services__modal--item">
                                        <i class='bx bx-check services__modal--icon' ></i>
                                        <p class="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="services__card">
                        <h3 class="services__title">Visual <br /> Designer</h3>

                        <span class="services__button">
                            See more <i class='bx bx-right-arrow-alt services__icon' ></i>
                        </span>

                        <div class="services__modal">
                            <div class="services__modal--content">
                                <i class='bx bx-x services__modal--close'></i>

                                <h3 class="services__modal--title">Visual designer</h3>
                                <p class="services__modal--description">
                                    Service with more than 3 years of experience. 
                                    Providing quality work to clients and companies.
                                </p>
                                
                                <ul class="services__modal--list">
                                    <li class="services__modal--item">
                                        <i class='bx bx-check services__modal--icon' ></i>
                                        <p class="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li class="services__modal--item">
                                        <i class='bx bx-check services__modal--icon' ></i>
                                        <p class="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li class="services__modal--item">
                                        <i class='bx bx-check services__modal--icon' ></i>
                                        <p class="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li class="services__modal--item">
                                        <i class='bx bx-check services__modal--icon' ></i>
                                        <p class="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li class="services__modal--item">
                                        <i class='bx bx-check services__modal--icon' ></i>
                                        <p class="services__modal--info">
                                            I develop the user interface.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section class="work section" id="work">
                <span class="section__subtitle">My Portfolio</span>
                <h2 class="section__title">Recent Work</h2>

                <div class="work__filters">
                    <span class="work__item active-work" data-filter="all">All</span>
                    <span class="work__item" data-filter=".web">Web</span>
                    <span class="work__item" data-filter=".movil">Movil</span>
                    <span class="work__item" data-filter=".design">Design</span>
                </div>

                <div class="work__container container grid">
                    <div class="work__card mix web">
                        <img src="assets/img/work1.jpg" alt="" class="work__img" />

                        <h3 class="work__title">Web Design</h3>

                        <a href="#" class="work__button">
                            Demo <i class='bx bx-right-arrow-alt work__icon' ></i>
                        </a>
                    </div>

                    <div class="work__card mix movil">
                        <img src="assets/img/work2.jpg" alt="" class="work__img" />

                        <h3 class="work__title">App Movil</h3>

                        <a href="#" class="work__button">
                            Demo <i class='bx bx-right-arrow-alt work__icon' ></i>
                        </a>
                    </div>

                    <div class="work__card mix design">
                        <img src="assets/img/work3.jpg" alt="" class="work__img" />

                        <h3 class="work__title">Brand Design</h3>

                        <a href="#" class="work__button">
                            Demo <i class='bx bx-right-arrow-alt work__icon' ></i>
                        </a>
                    </div>

                    <div class="work__card mix web">
                        <img src="assets/img/work4.jpg" alt="" class="work__img" />

                        <h3 class="work__title">Web Design</h3>

                        <a href="#" class="work__button">
                            Demo <i class='bx bx-right-arrow-alt work__icon' ></i>
                        </a>
                    </div>

                    <div class="work__card mix movil">
                        <img src="assets/img/work5.jpg" alt="" class="work__img" />

                        <h3 class="work__title">App Movil</h3>

                        <a href="#" class="work__button">
                            Demo <i class='bx bx-right-arrow-alt work__icon' ></i>
                        </a>
                    </div>
                </div>
            </section>

            
            <section class="testimonial section">
                <span class="section__subtitle">My clients say</span>
                <h2 class="section__title">Testimonial</h2>

                <div class="testimonial__container container swiper">
                    <div class="swiper-wrapper">
                        <div class="testimonial__card swiper-slide">
                            <img src="assets/img/testimonial1.png" alt="" class="testimonial__img" />

                            <h3 class="testimonial__name">John Doe</h3>
                            <p class="testimonial__description">
                                A really good job, all aspects of the project were followed step by step and with good results.
                            </p>
                        </div>

                        <div class="testimonial__card swiper-slide">
                            <img src="assets/img/testimonial2.png" alt="" class="testimonial__img" />

                            <h3 class="testimonial__name">Paula Vusy</h3>
                            <p class="testimonial__description">
                                A really good job, all aspects of the project were followed step by step and with good results.
                            </p>
                        </div>

                        <div class="testimonial__card swiper-slide">
                            <img src="assets/img/testimonial3.png" alt="" class="testimonial__img" />

                            <h3 class="testimonial__name">Sara Cill</h3>
                            <p class="testimonial__description">
                                A really good job, all aspects of the project were followed step by step and with good results.
                            </p>
                        </div>
                    </div>

                    <div class="swiper-pagination"></div>
                </div>
            </section>

            
            <section class="contact section" id="contact">
                <span class="section__subtitle">Get in Touch</span>
                <h2 class="section__title">Contact Me</h2>
                
                <div class="contact__container container grid">
                    <div class="contact__content">
                        <h3 class="contact__title">Talk to me</h3>

                        <div class="contact__info">
                            <div class="contact__card">
                                <i class='bx bx-mail-send contact__card--icon' ></i>
                                <h3 class="contact__card--title">Email</h3>
                                <span class="contact__card--data">erischon@gmail.com</span>

                                <a href="mailto:erischon@gmail.com" target="_blank" class="contact__button">
                                    Write me <i class='bx bx-right-arrow-alt contact__button--icon' ></i>
                                </a>
                            </div>

                            <div class="contact__card">
                                <i class='bx bxl-twitter contact__card--icon'></i>
                                <h3 class="contact__card--title">Twitter</h3>
                                <span class="contact__card--data">@erischon</span>

                                <a href="https://twitter.com/messages/compose?recipient_id=46720943" target="_blank" class="contact__button">
                                    Write me <i class='bx bx-right-arrow-alt contact__button--icon' ></i>
                                </a>
                            </div>

                            <div class="contact__card">
                                <i class='bx bxl-linkedin-square contact__card--icon' ></i>
                                <h3 class="contact__card--title">Linkedin</h3>
                                <span class="contact__card--data">Eric Schönhofen</span>

                                <a href="https://www.linkedin.com/in/ericschonhofen/" target="_blank" class="contact__button">
                                    Write me <i class='bx bx-right-arrow-alt contact__button--icon'></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="contact__content">
                        <h3 class="contact__title">Write me your project</h3>

                        <form action="" class="contact__form">
                            <div class="contact__form--div">
                                <label for="" class="contact__form--tag">Name</label>
                                <input type="text" placeholder="Insert your name" class="contact__form--input" />
                            </div>

                            <div class="contact__form--div">
                                <label for="" class="contact__form--tag">Email</label>
                                <input type="email" placeholder="Insert your email" class="contact__form--input" />
                            </div>

                            <div class="contact__form--div contact__form--area">
                                <label for="" class="contact__form--tag">Project</label>
                                <textarea name="" id="" cols="30" rows="10" placeholder="Write your project" class="contact__form--input"></textarea>
                            </div>

                            <button class="button">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
     
        <footer class="footer">
            <div class="footer__container container">
                <h1 class="footer__title">Eri Schön</h1>

                <ul class="footer__list">
                    <li>
                        <a href="#about" class="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#work" class="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonial" class="footer__link">Testimonials</a>
                    </li>
                </ul>

                <ul class="footer__social">
                    <a href="https://twitter.com/erischon" target="_blank" class="footer__social--link">
                        <i class='bx bxl-twitter' ></i>
                    </a>
                    <a href="https://www.linkedin.com/in/ericschonhofen/" target="_blank" class="footer__social--link">
                        <i class='bx bxl-linkedin' ></i>
                    </a>
                    <a href="https://github.com/erischon" target="_blank" class="footer__social--link">
                        <i class='bx bxl-github' ></i>
                    </a>
                </ul>

                <span class="footer__copy">
                    &#169 Eri Schön All rights reserved
                </span>
            </div>
        </footer>

    </Layout>
  )
}

export default IndexPage
