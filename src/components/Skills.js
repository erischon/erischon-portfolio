import React from 'react'

function Skills() {
  return (
    <section className="skills section" id="skills">
        <span className="section__subtitle">Mes compétences</span>
        <h2 className="section__title">Mes Connaissances</h2>

        <div className="skills__container container grid">
            <div className="skills__content">
                <h3 className="skills__title">Développement Frontend</h3>

                <div className="skills__box">
                    <div className="skills__group">
                        <div className="skills__data">
                            <i className='bx bxl-html5' ></i>
                            <div>
                                <h3 className="skills__name">HTML</h3>
                            </div>
                        </div>
                        <div className="skills__data">
                            <i className='bx bxl-css3' ></i>
                            <div>
                                <h3 className="skills__name">CSS</h3>
                            </div>
                        </div>                                
                        <div className="skills__data">
                            <i className='bx bxl-javascript' ></i>
                            <div>
                                <h3 className="skills__name">Javascript</h3>
                            </div>
                        </div>
                    </div>

                    <div className="skills__group">
                        <div className="skills__data">
                            <i className='bx bxl-react' ></i>
                            <div>
                                <h3 className="skills__name">React</h3>
                            </div>
                        </div>
                        <div className="skills__data">
                            <i className='bx bx-badge-check' ></i>           
                            <div>
                                <h3 className="skills__name">Next.js</h3>
                            </div>
                        </div>                                
                        <div className="skills__data">
                            <i className='bx bx-badge-check' ></i>                            
                            <div>
                                <h3 className="skills__name">Tailwind</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skills__content">
                <h3 className="skills__title">Développement Backend</h3>

                <div className="skills__box">
                    <div className="skills__group">
                        <div className="skills__data">
                            <i className='bx bxl-python' ></i>     
                            <div>
                                <h3 className="skills__name">Python</h3>
                            </div>
                        </div>
                        <div className="skills__data">
                            <i className='bx bxl-django' ></i>
                            <div>
                                <h3 className="skills__name">Django</h3>
                            </div>
                        </div>                                
                        <div className="skills__data">
                            <i className='bx bx-data'></i>  
                            <div>
                                <h3 className="skills__name">PostgreSQL</h3>
                            </div>
                        </div>
                        <div className="skills__data">
                            <i className='bx bx-badge-check' ></i>  
                            <div>
                                <h3 className="skills__name">REST</h3>
                            </div>
                        </div>
                    </div>

                    <div className="skills__group">
                        <div className="skills__data">
                            <i className='bx bxl-nodejs' ></i>
                            <div>
                                <h3 className="skills__name">Node.js</h3>
                            </div>
                        </div>
                        <div className="skills__data">
                            <i className='bx bx-badge-check' ></i>
                            <div>
                                <h3 className="skills__name">Express</h3>
                            </div>
                        </div>                                
                        <div className="skills__data">
                            <i className='bx bx-data'></i>             
                            <div>
                                <h3 className="skills__name">MongoDB</h3>
                            </div>
                        </div>
                        <div className="skills__data">
                            <i className='bx bx-badge-check' ></i>  
                            <div>
                                <h3 className="skills__name">GraphQL</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skills__content">
            <h3 className="skills__title">Outils / Deploy</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bxl-git'></i>           
                        <div>
                            <h3 className="skills__name">Github</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bxl-firebase'></i>   
                        <div>
                            <h3 className="skills__name">Firebase</h3>
                        </div>
                    </div>                                
                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">Vercel</h3>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bxl-docker' ></i> 
                        <div>
                            <h3 className="skills__name">Docker</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bxl-digitalocean' ></i>       
                        <div>
                            <h3 className="skills__name">DigitalOcean</h3>
                        </div>
                    </div>                                
                    <div className="skills__data">
                        <i className='bx bxl-netlify' ></i>          
                        <div>
                            <h3 className="skills__name">Netlify</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Skills