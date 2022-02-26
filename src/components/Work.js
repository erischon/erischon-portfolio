import React, { Component } from 'react';


class Work extends Component {

    render() {
        return (
            <section className="work section" id="work">
            <span className="section__subtitle">My Portfolio</span>
            <h2 className="section__title">Recent Work</h2>

            <div className="work__filters">
                <span className="work__item active-work" data-filter="all">All</span>
                <span className="work__item" data-filter=".web">Web</span>
                <span className="work__item" data-filter=".movil">Movil</span>
                <span className="work__item" data-filter=".design">Design</span>
            </div>

            <div className="work__container container grid">
                <div className="work__card mix web">
                    <img src="assets/img/work1.jpg" alt="" className="work__img" />

                    <h3 className="work__title">Web Design</h3>

                    <a href="#" className="work__button">
                        Demo <i className='bx bx-right-arrow-alt work__icon' ></i>
                    </a>
                </div>

                <div className="work__card mix movil">
                    <img src="assets/img/work2.jpg" alt="" className="work__img" />

                    <h3 className="work__title">App Movil</h3>

                    <a href="#" className="work__button">
                        Demo <i className='bx bx-right-arrow-alt work__icon' ></i>
                    </a>
                </div>

                <div className="work__card mix design">
                    <img src="assets/img/work3.jpg" alt="" className="work__img" />

                    <h3 className="work__title">Brand Design</h3>

                    <a href="#" className="work__button">
                        Demo <i className='bx bx-right-arrow-alt work__icon' ></i>
                    </a>
                </div>

                <div className="work__card mix web">
                    <img src="assets/img/work4.jpg" alt="" className="work__img" />

                    <h3 className="work__title">Web Design</h3>

                    <a href="#" className="work__button">
                        Demo <i className='bx bx-right-arrow-alt work__icon' ></i>
                    </a>
                </div>

                <div className="work__card mix movil">
                    <img src="assets/img/work5.jpg" alt="" className="work__img" />

                    <h3 className="work__title">App Movil</h3>

                    <a href="#" className="work__button">
                        Demo <i className='bx bx-right-arrow-alt work__icon' ></i>
                    </a>
                </div>
            </div>
            </section>
        );
    }
}

export default Work;
