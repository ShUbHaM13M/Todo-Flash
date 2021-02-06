import React, { useState } from 'react'
import HamMenu from './HamMenu'
import SideMenu from './SideMenu'
import '../css/nav.css'

function Nav() {

    const [ isActive, setIsActive ] = useState(false)

    //Get avatar img from server or the first initial of the name

    return (
        <nav>
            {/* Show user image if logged in else app logo */}
            <img className="avatar" src="https://i.pravatar.cc/300" alt="avatar"/>
            <HamMenu toggleSideMenu={setIsActive} isActive={isActive} />
            <SideMenu isActive={isActive} />
        </nav>
    )
}

export default Nav
