import React, { useState } from 'react'
import FabAdd from '../Components/Project/FabAdd';
import Project from '../Components/Project/ProjectPreview';
import '../Components/Project/Project.css'
import ProjectProvider from '../context/ProjectContext';
import { useProject } from '../context/ProjectContext'
import AddProject from '../Components/Project/AddProject';

const ProjectContainer = props => {
    
    return (
        <ProjectProvider>
            <Projects />
        </ProjectProvider>
    )
}

const Projects = props => {

    const { error, loading, projects } = useProject().data
        
    const [ showModal, setShowModal ] = useState(false)

    return (
        <div className="project-container">
            {/* Add a loading state */}
            {loading && <p>loading...</p>}
            {/* Add an error state */}
            {error && <p>err</p>}
            {!loading && !error && projects.map(project => (
                <Project project={project} key={project.id} />
            ))}
            <AddProject showModal={showModal} setShowModal={setShowModal} />
            <FabAdd showModal={showModal} setShowModal={setShowModal} />
        </div>
    )
}

export default ProjectContainer
