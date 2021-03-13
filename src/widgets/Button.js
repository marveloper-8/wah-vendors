import React from 'react'
// styles
import './style/button.scss'

const Button = ({text, type, styling}) => {
    return <button 
                type={type}
                className={styling}
            >{text}</button>
}

export default Button
