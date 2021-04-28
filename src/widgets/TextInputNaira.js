import React from 'react'
// styles
import './style/input.scss'

const TextInputNaira = e => {
    return <div className={`text-input ${e.styling}`}>
            <div className="label" style={{fontSize: `${e.label_size}px`}}>{e.label}</div>
            <div className="text-input-naira">
                ₦ <input 
                    type={e.type}
                    className={e.styling}
                    placeholder={e.placeholder}
                    value={e.value}
                    onChange={e.onChange}
                    name={e.name}
                ></input>
            </div>
        </div>
}

export default TextInputNaira
