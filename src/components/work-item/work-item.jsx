import React from 'react'


const WorkItem = ({ name, image, demoUrl, tags }) => {
  return (
    <div className="work__card mix web">
        <img src={ `/images/${ image }` } alt="" className="work__img" />
        
        <h3 className="work__title">{ name }</h3>

        <div className='work__tag--container'>
            { tags.map(tag => {
                return <span className='work__tag'>{ tag }</span>
            }) }        
        </div>

        <a href={ demoUrl } className="work__button">
            Demo <i className='bx bx-right-arrow-alt work__icon' ></i>
        </a>
    </div>
  )
}

export default WorkItem