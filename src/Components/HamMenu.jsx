import React from 'react'

function HamBurger({ toggleSideMenu, isActive }) {

    function onClick() {
        toggleSideMenu(prev => !prev);
    }
    
    return (
        <div onClick={onClick}
             className={isActive === true ? "ham-menu active" : "ham-menu"} >
            <span className="line one"></span>
            <span className="line two"></span>
            <span className="line three"></span>
        </div>
    )
}

export default HamBurger
