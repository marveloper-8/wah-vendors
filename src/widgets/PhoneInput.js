import React from 'react'
// styles
import './style/input.scss'

const PhoneInput = ({placeholder, label, styling, label_size}) => {
    return <div className={`phone-input ${styling}`}>
            <div className="label" style={{fontSize: `${label_size}px`}}>{label}</div>
            <div className="phone-input-container">
                <input 
                    type="text"
                    placeholder={placeholder}
                    className="number"
                    value={`+234`}
                ></input>
                <input 
                    type="phone"
                    placeholder={placeholder}
                    className="phone"
                ></input>
            </div>
        </div>
}

export default PhoneInput