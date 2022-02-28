import React from 'react'

function Testimonial() {
  return (
    <section className="testimonial section">
        <span className="section__subtitle">My clients say</span>
        <h2 className="section__title">Testimonial</h2>

        <div className="testimonial__container container swiper">
            <div className="swiper-wrapper">
                <div className="testimonial__card swiper-slide">
                    <img src="assets/img/testimonial1.png" alt="" className="testimonial__img" />

                    <h3 className="testimonial__name">John Doe</h3>
                    <p className="testimonial__description">
                        A
                    </p>
                </div>
                
            </div>

            <div className="swiper-pagination"></div>
        </div>
    </section>
  )
}

export default Testimonial