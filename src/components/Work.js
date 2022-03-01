import React, { Component } from 'react';

import { workData } from './work-item/work-item.data';
import WorkCollection from './work-collection/work-collection';


class Work extends Component {
    constructor (props) {
        super(props)
        this.state = {
            type: "appli",
            workData: workData
        }
    }

    setType(type) {
        return this.setState({type: type})
    }
    
    
    render() {
        const { type, workData } = this.state
        const filteredWork = workData.filter(work => work.type === this.state.type )

        return (
            <section className="work section" id="work">
            <span className="section__subtitle">My Portfolio</span>
            <h2 className="section__title">Recent Work</h2>

            <div className="work__filters">
                <span className="work__item active-work" data-filter="all">All</span>
                <span className="work__item" onClick={ (e) => this.setType("appli", e) }>Appli Web</span>
                <span className="work__item" onClick={ (e) => this.setType("refonte", e) }>Refonte</span>
                <span className="work__item" onClick={ (e) => this.setType("entretien", e) }>Entretien</span>
            </div>

            <WorkCollection workData={ filteredWork } />

            </section>
        );
    }
}

export default Work;
