
import React, { useEffect, useState } from 'react'
import colors from '../Utils/Colors'

function ColorChooser({ setColors }) {

    const [ currentColor, setCurrentColor ] = useState(colors[0])

    const changeColor = e => {
        const selectedColor = e.target.id
        const colorSpans = Array.from(document.querySelectorAll('.color'))

        colorSpans.forEach(colorSpan => {
            if (colorSpan.id !== selectedColor)
                colorSpan.classList.remove('active')
            else 
                colorSpan.classList.add('active')
        })

        setCurrentColor(colors.filter(color => ( color.name === selectedColor ))[0])
    }

    useEffect(() => {
        setColors(currentColor)
    }, [currentColor, setColors])

    return (
        <div className="color-chooser">
            <span id="cyan" className="color cyan active" onClick={changeColor} ></span>
            <span id="purple" className="color purple" onClick={changeColor} ></span>
            <span id="magnolia" className="color magnolia" onClick={changeColor}></span>
            <span id="orange" className="color orange" onClick={changeColor}></span>
            <span id="saffron" className="color saffron" onClick={changeColor}></span>
        </div>
    )
}

export default ColorChooser
