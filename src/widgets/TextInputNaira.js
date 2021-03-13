import React from 'react'
// styles
import './style/input.scss'

const TextInputNaira = ({placeholder, type, styling}) => {
    return <div className="text-input-naira">
            ₦ <input 
                type={type}
                className={styling}
                placeholder={placeholder}
            ></input>
        </div>
}

export default TextInputNaira
