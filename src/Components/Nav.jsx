import React, { useState } from 'react'
import HamMenu from './HamMenu'
import SideMenu from './SideMenu'

function Nav() {

    const [ isActive, setIsActive ] = useState(true)

    //Get avatar img from server or the first initial of the name

    return (
        <nav>
            <img className="avatar" src="https://i.pravatar.cc/300" alt="avatar"/>
            <HamMenu toggleSideMenu={setIsActive} />
            {isActive && <SideMenu />}
        </nav>
    )
}

export default Nav
