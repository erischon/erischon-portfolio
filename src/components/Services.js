import React from 'react'


function Services() {

  return (
    <section className="services section" id="services">
        <span className="section__subtitle">Mes Services</span>
        <h2 className="section__title">Je SOUTIENS la réalisation de vos Projets Web</h2>

        <div className="services__container container grid">
            <div className="services__card">
                <h3 className="services__title">Création <br /> d'Appli.</h3>
            </div>

            <div className="services__card">
                <h3 className="services__title">Refonte &<br /> Migration</h3>
            </div>

            <div className="services__card">
                <h3 className="services__title">Entretien &<br /> Mise à Jour</h3>
            </div>
        </div>
    </section>
  )
}

export default Services