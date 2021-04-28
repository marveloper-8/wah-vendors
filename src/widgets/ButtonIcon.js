import React from 'react'
// styles
import './style/button.scss'

const ButtonIconTwo = ({icon, text, type, styling}) => {
    return <button 
                type={type}
                className={`button-icon ${styling}`}
            >
                {text} 
                <img src={icon} alt="icon" />
            </button>
}

export default ButtonIconTwo
