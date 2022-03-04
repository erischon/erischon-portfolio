import React from 'react'

import bsharpe from "../assets/img/b-sharpe.jpg"

function Testimonial() {
  return (
    <section className="testimonial section">
        <span className="section__subtitle">Ce que mes Clients disent de moi</span>
        <h2 className="section__title">Témoignages</h2>

        <div className="testimonial__container container swiper">
            <div className="swiper-wrapper">
                <div className="testimonial__card swiper-slide">
                    <img src={ bsharpe } alt="B-Sharpe" className="testimonial__img" />

                    <h3 className="testimonial__name">Julien Dubost</h3>
                    <p className="testimonial__description">
                    Approche rigoureuse et centrée sur les tests. Très bon relationnel pour s'intégrer efficacement dans l'équipe.<br />
                    Bonne continuation dans le dev python-backend !
                    </p>
                </div>
                
            </div>

            <div className="swiper-pagination"></div>
        </div>
    </section>
  )
}

export default Testimonial