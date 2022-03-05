import React from 'react'


const WorkItem = ({ id, name, type, description, image, liveUrl, backUrl, frontUrl, tags }) => {

    const itemButton = (type) => {
        if (type === "back") {
            return (
                <div className='work__button--container'>
                    <a href={ liveUrl } className="button" target="_blank" rel="noopener noreferrer">
                        Live
                    </a>
                    <a href={ backUrl } className="work__button" target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-github work__icon'></i> Back
                    </a>
                </div> 
            )   
        } else if (type === "front") {
            return (
                <div className='work__button--container'>
                    <a href={ liveUrl } className="button" target="_blank" rel="noopener noreferrer">
                        Live
                    </a>
                    <a href={frontUrl } className="work__button" target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-github work__icon'></i> Front
                    </a>
                </div>
            )
        } else {
            return (
                <div className='work__button--container'>
                    <a href={ liveUrl } className="button" target="_blank" rel="noopener noreferrer">
                        Live
                    </a>
                    <a href={ backUrl } className="work__button" target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-github work__icon'></i> Back
                    </a>
                    <a href={frontUrl } className="work__button" target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-github work__icon'></i> Front
                    </a>
                </div>
            )
        }
    }

    return (
        <div className="work__card mix web">
            <img src={ `/images/${ image }` } alt="" className="work__img" />
            
            <h2 className="work__title">{ name }</h2>
            <p className='work__description'>{ description }</p>

            <div className='work__tag--container'>
                { tags.map((tag, index) => {
                    return <span key={ index } className='work__tag'>{ tag }</span>
                }) }        
            </div>
    
            { itemButton(type) }

        </div>
    )
}

export default WorkItem