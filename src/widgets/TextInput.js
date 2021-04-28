import React from 'react'
// styles
import './style/input.scss'

const TextInput = e => {
    return <div className={`text-input ${e.styling}`}>
            <div className="label" style={{fontSize: `${e.label_size}px`}}>{e.label}</div>
            <input 
                type={e.type}
                placeholder={e.placeholder}
                value={e.value}
                onChange={e.onChange}
                name={e.name}
            ></input>
        </div>
}

export default TextInput