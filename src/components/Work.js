import React, { Component } from 'react';


class Work extends Component {

    render() {
        return (
            <section className="work section" id="work">
            <span className="section__subtitle">My Portfolio</span>
            <h2 className="section__title">Recent Work</h2>

            <div className="work__filters">
                <span className="work__item active-work" data-filter="all">All</span>
                <span className="work__item" data-filter=".web">Appli Web</span>
                <span className="work__item" data-filter=".refonte">Refonte</span>
                <span className="work__item" data-filter=".entretien">Entretien</span>
            </div>

            <div className="work__container container grid">
                <div className="work__card mix web">
                    <img src="assets/img/work1.jpg" alt="" className="work__img" />

                    <h3 className="work__title">Appli Web</h3>

                    <a href="#" className="work__button">
                        Demo <i className='bx bx-right-arrow-alt work__icon' ></i>
                    </a>
                </div>

                <div className="work__card mix refonte">
                    <img src="assets/img/work2.jpg" alt="" className="work__img" />

                    <h3 className="work__title">Refonte</h3>

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
