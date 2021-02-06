import React, { useState, useEffect } from 'react'
import Theme from './Theme';

function ThemeChooser() {

    const [ theme, setTheme ] = useState('light');

    useEffect(() => {
        setTheme(localStorage.getItem('currentTheme'))
    }, [])

    return (
        <div className="theme-chooser">
            <Theme currentTheme={theme} setTheme={setTheme} themeName={'light'} />
            <Theme currentTheme={theme} setTheme={setTheme} themeName={'dark'} />
        </div>
    )
}

export default ThemeChooser
