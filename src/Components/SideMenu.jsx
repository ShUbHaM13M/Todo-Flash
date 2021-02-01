import React from 'react'

function SideMenu({ isActive }) {
    return (
        <div className={
            isActive === true ?
            "sidemenu active" :
            "sidemenu"
        }>
            <div className="nav-links">
                {/* Todo: Show only when user logged in */}
                <div className="nav-link">Projects</div>
                <div className="nav-link">About</div>
                <div className="nav-link">Settings</div>
                {/* Todo: Show only when user logged in */}
                <div className="nav-link">Logout</div>
            </div>
        </div>
    )
}

export default SideMenu
