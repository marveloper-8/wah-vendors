import React from 'react'
// styles
import './style/button.scss'

const ButtonTwo = ({text, type, styling}) => {
    return <button 
                type={type}
                className={`${styling} button-two`}
            >{text}</button>
}

export default ButtonTwo
