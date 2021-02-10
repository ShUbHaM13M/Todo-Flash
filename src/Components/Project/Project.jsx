import React from 'react'

function Project({ project }) {
    return (
        <div className="project" key={project.id} style={{
            background: project.bgcolor,
            color: project.color
        }} >
            {project.title}
        </div>
    )
}

export default Project
