import React, { Component } from 'react';

import WorkItem from './work-item/work-item';
import { workData } from './work-item/work-item.data';


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

                { workData.map(({ name, image, liveUrl, backUrl, frontUrl, tags }) => {
                        return <WorkItem name={ name } image={ image } liveUrl={ liveUrl } backUrl={ backUrl} frontUrl={ frontUrl } tags={ tags } />
                })}

            </div>
            </section>
        );
    }
}

export default Work;
