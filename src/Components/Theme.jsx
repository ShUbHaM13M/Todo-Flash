import React from 'react'

function Theme({ currentTheme, setTheme, themeName }) {

    function changeTheme (theme) {
        const body = document.querySelector('body')
        body.className = theme
        setTheme(theme)
        localStorage.setItem('currentTheme', theme)
    }

    return (
        <div 
            className={
                currentTheme === themeName ?
                `theme active ${themeName}` :
                `theme ${themeName}`
            }
            onClick={() => {changeTheme(themeName)}}
            >
            
        </div>
    )
}

export default Theme
