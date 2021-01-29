import React from 'react'

function HamBurger({ toggleSideMenu }) {

    function onClick() {
        toggleSideMenu(prev => !prev);
    }
    
    return (
        <div onClick={onClick} className="ham-menu" >
            =
        </div>
    )
}

export default HamBurger
