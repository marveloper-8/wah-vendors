import React from 'react'
// styles
import './style/input.scss'

const TextArea = e => {
    return <div className={`text-input ${e.styling}`}>
            <div className="label" style={{fontSize: `${e.label_size}px`}}>{e.label}</div>
            <textarea placeholder={e.placeholder}
                value={e.value}
                onChange={e.onChange}
                name={e.name}
            ></textarea>
        </div>
}

export default TextArea