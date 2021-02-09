import React from 'react'
import { useSelector } from 'react-redux'

function AvatarIcon() {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    return (
        <div>
            {isLoggedIn === false ?
            <div className="avatar">T</div> :
            <img className="avatar" src="https://i.pravatar.cc/300" alt="avatar"/>}
        </div>
    )
}

export default AvatarIcon
