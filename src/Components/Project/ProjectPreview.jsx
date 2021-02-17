import React from 'react'
import { useHistory } from 'react-router-dom'

function Project({ project }) {

    const history = useHistory()

    function routeTo() {    
        history.push(`/projects/${project.id}`, {contents: project})
    }

    return (
        <div className="project" key={project.id} style={{
            background: project.bgcolor,
            color: project.color
        }} 
            onClick={routeTo} >
            <div className='title'>{project.title}</div>
            <span className="remaining">{`${project.task_remaining} tasks`}</span>
        </div>
    )
}

export default Project
