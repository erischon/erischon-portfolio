import React from 'react'

import bsharpe from "../assets/img/b-sharpe.jpg"
import butterflai from "../assets/img/butterflai.png"

function Testimonial() {
  return (
    <section className="testimonial section" id="testimonial">
        <span className="section__subtitle">Ce que mes Clients disent de moi</span>
        <h2 className="section__title">Témoignages</h2>

        <div className="testimonial__container container swiper">
            <div className="swiper-wrapper">
                <div className="testimonial__card swiper-slide">
                    <img src={ bsharpe } alt="B-Sharpe" className="testimonial__img" />

                    <h3 className="testimonial__name">Julien - b-sharpe</h3>
                    <p className="testimonial__description">
                    Approche rigoureuse et centrée sur les tests. Très bon relationnel pour s'intégrer efficacement dans l'équipe.<br />
                    Bonne continuation dans le dev python-backend !
                    </p>
                </div>
                
                <div className="testimonial__card swiper-slide">
                  <img src={ butterflai } alt="B-Sharpe" className="testimonial__img" />

                  <h3 className="testimonial__name">Thomas - Butterfl.ai</h3>
                  <p className="testimonial__description">
                  Eri a développé pour nous une super API REST sous Django, je le recommande vivement !
                  </p>
                </div>
            </div>

            <div className="swiper-pagination"></div>
        </div>
    </section>
  )
}

export default Testimonial