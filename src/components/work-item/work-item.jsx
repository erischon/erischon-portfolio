import React from 'react'


const WorkItem = ({ name, image, liveUrl, backUrl, frontUrl, tags }) => {
  return (
    <div className="work__card mix web">
        <img src={ `/images/${ image }` } alt="" className="work__img" />
        
        <h3 className="work__title">{ name }</h3>

        <div className='work__tag--container'>
            { tags.map(tag => {
                return <span className='work__tag'>{ tag }</span>
            }) }        
        </div>

        <div className='work__button--container'>
            <a href={ backUrl } className="work__button button" target="_blank" rel="noopener noreferrer">
                Back
            </a>
            <a href={ frontUrl } className="work__button button" target="_blank" rel="noopener noreferrer">
                Front
            </a>
            <a href={ liveUrl } className="work__button button" target="_blank" rel="noopener noreferrer">
                Live
            </a>
        </div>

    </div>
  )
}

export default WorkItem