import React from "react"

import WorkItem from "./work-item"


const WorkCollection = ({ workData }) => {
    return (
        <div className="work__container container grid">
            { workData
                .map(({ id, ...allData }) => {
                    return <WorkItem key={ id } { ...allData } />
                })
            }
        </div>
    )
}

export default WorkCollection
