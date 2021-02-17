import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

function ProjectDetails({ location }) {

    const project = location.state === undefined ? undefined : location.state.contents
    const history = useHistory()
    const [ previous, setPrevious ] = useState('')

    useEffect(() => {
        if (project === undefined) {
            history.push('/projects')
            return
        }
        
        const body = document.querySelector('body')
        setPrevious(body.style.backgroundColor)
        body.style.backgroundColor = project.bgcolor
        
        return () => {
            body.style.backgroundColor = previous
        }

    }, [project, history, previous])

    return (
        <div className="project-detail">
            <div className='title'>{project && project.title}</div>
            <div className="subtitle">Tasks</div>
            <ul className="tasks">
                <li>
                    <div className="task">
                        Task 1
                        <i className="material-icons delete">close</i>
                    </div>
                </li>
                <li>
                    <div className="task">
                        Task 2
                        <i className="material-icons delete">close</i>
                    </div>
                </li>
                <li>
                    <div className="task">
                        Task 3
                        <i className="material-icons delete">close</i>
                    </div>
                </li>
                <li>
                    <div className="task">
                        Task 4
                        <i className="material-icons delete">close</i>
                    </div>
                </li>
                <li>
                    <div className="task">
                        Task 5
                        <i className="material-icons delete">close</i>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ProjectDetails
