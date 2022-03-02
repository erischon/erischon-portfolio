import React, { Component } from 'react';

import "./work.styles.css"
import { workData } from './work-item.data';
import WorkCollection from './work-collection';


class Work extends Component {
    constructor (props) {
        super(props)
        this.state = {
            type: "",
            workData: workData
        }
    }

    setType(type) {
        return this.setState({type: type})
    }
    
    
    render() {
        const { type, workData } = this.state
        const filteredWork = (this.state.type !== "" ) ? workData.filter(work => work.type === this.state.type) : workData

        return (
            <section className="work section" id="work">
            <span className="section__subtitle">Mon Portfolio</span>
            <h2 className="section__title">Projets Récents</h2>

            <div className="work__filters">
                <span className="work__item" onClick={ (e) => this.setType("", e) } data-filter="all">Tous</span>
                <span className="work__item" onClick={ (e) => this.setType("full", e) }>Full Stack</span>
                <span className="work__item" onClick={ (e) => this.setType("back", e) }>Backend</span>
                <span className="work__item" onClick={ (e) => this.setType("front", e) }>Frontend</span>
            </div>

            <WorkCollection workData={ filteredWork } />

            </section>
        );
    }
}

export default Work;
