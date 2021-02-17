import React, { useState, useEffect } from 'react'
import Theme from './Theme';

function changeTheme (theme) {
    const body = document.querySelector('body')
    body.className = theme
    localStorage.setItem('currentTheme', theme)
    return false
}

function ThemeChooser ({ setIsActive }) {

    const [ theme, setTheme ] = useState('light');

    useEffect(() => {
        const theme = localStorage.getItem('currentTheme') === null ?
                        'light' :
                        localStorage.getItem('currentTheme')
        setTheme(theme)
        setIsActive(changeTheme(theme))
    }, [setIsActive])

    useEffect(() => {
        setIsActive(changeTheme(theme))

    }, [theme, setIsActive])

    return (
        <div className="theme-chooser">
            <Theme currentTheme={theme} setTheme={setTheme} themeName='light' />
            <Theme currentTheme={theme} setTheme={setTheme} themeName='dark' />
        </div>
    )
}

export default ThemeChooser
