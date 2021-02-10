import React, { useState } from 'react'
import HamMenu from './HamMenu'
import SideMenu from './SideMenu'
import './nav.css'
import AvatarIcon from './AvatarIcon'

function Nav() {

    const [ isActive, setIsActive ] = useState(false)

    //Get avatar img from server or the first initial of the name

    return (
        <nav>
            {/* Show user image if logged in else app logo */}
            <AvatarIcon />
            <HamMenu toggleSideMenu={setIsActive} isActive={isActive} />
            <SideMenu isActive={isActive} />
        </nav>
    )
}

export default Nav
