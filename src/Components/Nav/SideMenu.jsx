import React from 'react'
import ThemeChooser from './ThemeChooser'
import { useAuth } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'

function SideMenu({ isActive, setIsActive }) {

    const { currentUser, logout } = useAuth()

    const handleLogout = async () => {
        await logout();
        setIsActive(false)
    }

    const history = useHistory();

    const redirectTo = (path) => {
        setIsActive(false)
        history.push(path)
    }

    return (
        <div className={
            isActive === true ?
            "sidemenu active" :
            "sidemenu disabled"
        }>
            <ThemeChooser setIsActive={setIsActive} />
            <div className="nav-links">
                <div className="nav-link" onClick={() => {redirectTo('/about')}} >
                    About
                </div>
                {currentUser && 
                    <>
                        <div className="nav-link" onClick={() => {redirectTo('/projects')}} >
                           Projects
                        </div>
                        <div className="nav-link" onClick={() => {redirectTo('/settings')}} >
                            Settings
                        </div>
                        <button onClick={handleLogout} className="nav-link">Logout</button>
                    </>
                }
                {!currentUser && 
                    <div className="nav-link" onClick={() => {redirectTo('/auth')}} >
                        Login
                    </div>
                }
            </div>
        </div>
    )
}

export default SideMenu
