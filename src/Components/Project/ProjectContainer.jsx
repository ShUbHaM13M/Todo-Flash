import React, { useEffect } from 'react'
import FabAdd from './FabAdd';
import Project from './Project';
import './Project.css'

const ProjectContainer = props => {
    
    const projects = [
        {id: 1, title: 'project1', desc: 'project1 description', bgcolor: 'black', color: 'white'},
        {id: 2, title: 'project2', desc: 'project2 description', bgcolor: 'green', color: 'white'},
        {id: 3, title: 'project3', desc: 'project3 description', bgcolor: 'blue', color: 'white'}
    ]

    useEffect(() => {
        
    }, [])

    return (
        <div className="project-container">
            {projects.map(project => (
                <Project project={project} />
            ))}
            <FabAdd />
        </div>
    )
}

export default ProjectContainer
