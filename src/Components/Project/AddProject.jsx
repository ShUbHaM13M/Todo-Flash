import React, { useEffect, useRef } from 'react'
import Input from '../Utils/Input'

function AddProject({showModal, setShowModal}) {

    const modalRef = useRef(null)

    useEffect(() => {
        if (showModal) 
            modalRef.current.classList.remove('disabled')
        else 
            modalRef.current.classList.add('disabled')
    }, [showModal])

    return (
        <div ref={modalRef} className="modal" onClick={e => {
            if (e.target !== modalRef.current) return
            setShowModal(false) 
        }} >
            <div className="add-project-modal">
                <h2>Add a new Project</h2>
                <div className="inputs" >
                    <Input type="text" placeholder="Project Name" />
                    <textarea name="description" id="desc" placeholder="Project description"
                     className="desc">
                    </textarea>
                </div>
                <div className="color-chooser">
                    <span className="color active"></span>
                    <span className="color"></span>
                    <span className="color"></span>
                    <span className="color"></span>
                    <span className="color"></span>
                </div>
                <button className="btn primary save-btn">Save</button>
            </div>
        </div>
    )
}

export default AddProject
