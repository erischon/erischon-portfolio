import React from 'react'

import portrait from "../assets/img/erischon_b.png"

function Home() {
  return (
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
  )
}

export default Home