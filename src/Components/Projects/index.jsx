import React from 'react'
import { useSelector } from 'react-redux';
import './Project.css'

const Projects = props => {
    
    const projects = useSelector(state => state.project)

    return (
        <div className="project-container">
            {projects.map(project => (
                <div className="project" key={project.id} style={{
                    background: project.bgcolor,
                    color: project.color
                }} >
                    {project.title}
                </div>
            ))}
        </div>
    )
}

export default Projects
