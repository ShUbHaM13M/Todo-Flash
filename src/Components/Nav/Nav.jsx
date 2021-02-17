import React, { useState } from 'react'
import HamMenu from './HamMenu'
import SideMenu from './SideMenu'
import './nav.css'
import AvatarIcon from './AvatarIcon'

function Nav() {

    const [ isActive, setIsActive ] = useState(false)

    return (
        <nav>
            <AvatarIcon />
            <HamMenu toggleSideMenu={setIsActive} isActive={isActive} />
            <SideMenu isActive={isActive} setIsActive={setIsActive} />
        </nav>
    )
}

export default Nav
