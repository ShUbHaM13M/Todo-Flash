import React, { useRef, useEffect } from 'react'

function Input({img, type, name, refer ,isVisible, placeholder}) {

    const thisInput = useRef(null);

    useEffect(() => {
        if(isVisible)
            thisInput.current.style.animation = "pulse forwards .5s ease"
        else 
            thisInput.current.style.animation = ""
    }, [isVisible])

    return (
        <div className="cus-input" ref={thisInput}>
            {img && <img src={img} alt='' />}
            <input type={type}
                ref={refer} 
                name={name} placeholder={placeholder} 
                autoComplete='new-password'  />
        </div>
    )
}

export default Input
