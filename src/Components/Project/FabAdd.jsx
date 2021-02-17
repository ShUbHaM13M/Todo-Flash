import React, { useState, useEffect } from 'react'

function Addbutton({ showModal, setShowModal }) {

    const [ classList, setClassList ] = useState('fab-add')

    useEffect(() => {
        if (showModal) setClassList('fab-add cross')
        else setClassList('fab-add')
 
    }, [showModal])

    return (
        <div className={classList} onClick={() => {setShowModal(prev => !prev)}} >
            <i className="material-icons add-icon">add</i>
        </div>
    )
}

export default Addbutton
