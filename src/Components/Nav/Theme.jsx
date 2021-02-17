import React from 'react'

function Theme({ currentTheme, setTheme, themeName }) {


    return (
        <div 
            className={
                currentTheme === themeName ?
                `theme active ${themeName}` :
                `theme ${themeName}`
            }
            onClick={() => {setTheme(themeName)}}
            >
            
        </div>
    )
}

export default Theme
