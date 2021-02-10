import React from 'react'

function AvatarIcon() {

    const isLoggedIn = false;

    return (
        <div>
            {isLoggedIn === false ?
            <div className="avatar">T</div> :
            <img className="avatar" src="https://i.pravatar.cc/300" alt="avatar"/>}
        </div>
    )
}

export default AvatarIcon
