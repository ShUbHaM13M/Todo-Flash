import React from 'react'
import { useAuth } from '../../context/AuthContext'

function AvatarIcon() {

    const { currentUser } = useAuth();

    return (
        <div>
            { currentUser ?
            <img className="avatar" src={currentUser.photoURL} alt={currentUser.email[0]}/> :
            <div className="avatar">T</div> }
        </div>
    )
}

export default AvatarIcon
