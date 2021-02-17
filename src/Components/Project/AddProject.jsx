import React, { useEffect, useRef, useState, useCallback } from 'react'
import ColorChooser from './ColorChooser'
import { useAuth } from '../../context/AuthContext'
import { useProject } from '../../context/ProjectContext'

function AddProject({showModal, setShowModal}) {

    const modalRef = useRef(null)

    const { currentUser } = useAuth()
    const { addNewProject } = useProject()

    const [ project, setProject ] = useState({
        bgcolor: "",
        color: "",
        desc: '',
        task_remaining: 0,
        title: '',
        user_id: currentUser.uid 
    }) 

    useEffect(() => {
        if (showModal) 
            modalRef.current.classList.remove('disabled')
        else 
            modalRef.current.classList.add('disabled')
    }, [showModal])

    const handleSubmit = e => {
        e.preventDefault();

        if (project.title === '' || project.desc === '') return

        addNewProject(project);
        setProject(project => ({...project, title: '', desc: ''}))
        setShowModal(false)
    }

    const setInfo = e => {
        const { name, value } = e.target
        if (name ===  'title') 
            setProject(prev => ({
                ...prev,
                title: value
            }))
        else if (name === 'desc') 
            setProject(prev => ({
                ...prev,
                desc: value
            }))
            
    }

    const setColors = useCallback(
        (obj) => {
            setProject(prev => ({
                ...prev,
                bgcolor: obj.bgcolor,
                color: obj.color
            }))
        },
        [],
    )

    return (
        <div ref={modalRef} className="modal disabled" onClick={e => {
            if (e.target !== modalRef.current) return
            setShowModal(false) 
        }} >
            <form onSubmit={handleSubmit} className="add-project-modal">
                <h2>Add a new Project</h2>
                <div className="inputs" >
                    <div className="cus-input">
                        <input value={project.title} type="text" name="title" placeholder="Project Name" onChange={e => setInfo(e)} />
                    </div>
                    <textarea value={project.desc} name="desc" id="desc" placeholder="Project description" onChange={e => setInfo(e)}
                     className="desc">
                    </textarea>
                </div>
                <ColorChooser setColors={setColors} />
                <button className="btn primary save-btn">Save</button>
            </form>
        </div>
    )
}

export default AddProject
