import React from 'react'

function Contact() {
  return (
    <section className="contact section" id="contact">
        <span className="section__subtitle">Prise de contact</span>
        <h2 className="section__title">Me Contacter</h2>
        
        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Parlez-moi</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className='bx bx-mail-send contact__card--icon' ></i>
                        <h3 className="contact__card--title">Email</h3>
                        <span className="contact__card--data">erischon@gmail.com</span>

                        <a href="mailto:erischon@gmail.com" target="_blank" rel="noopener noreferrer" className="contact__button">
                            Ecrivez-moi <i className='bx bx-right-arrow-alt contact__button--icon' ></i>
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className='bx bxl-twitter contact__card--icon'></i>
                        <h3 className="contact__card--title">Twitter</h3>
                        <span className="contact__card--data">@erischon</span>

                        <a href="https://twitter.com/messages/compose?recipient_id=46720943" target="_blank" rel="noopener noreferrer" className="contact__button">
                            Ecrivez-moi <i className='bx bx-right-arrow-alt contact__button--icon' ></i>
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className='bx bxl-linkedin-square contact__card--icon' ></i>
                        <h3 className="contact__card--title">Linkedin</h3>
                        <span className="contact__card--data">Eric Schönhofen</span>

                        <a href="https://www.linkedin.com/in/ericschonhofen/" target="_blank" rel="noopener noreferrer" className="contact__button">
                            Ecrivez-moi <i className='bx bx-right-arrow-alt contact__button--icon'></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Expliquez-moi votre Projet</h3>

                <form name="contact" method="POST" className="contact__form" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="contact__form--div">
                        <label htmlFor="nom" className="contact__form--tag">Nom</label>
                        <input type="text" name="nom" placeholder="Votre nom" className="contact__form--input" />
                    </div>

                    <div className="contact__form--div">
                        <label htmlFor="email" className="contact__form--tag">Email</label>
                        <input type="email" name="email" placeholder="Votre email" className="contact__form--input" />
                    </div>

                    <div className="contact__form--div contact__form--area">
                        <label htmlFor="texte" className="contact__form--tag">Projet</label>
                        <textarea name="texte" id="" cols="30" rows="10" placeholder="Votre projet" className="contact__form--input"></textarea>
                    </div>

                    <button type="submit" className="button">Envoyer le message</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact