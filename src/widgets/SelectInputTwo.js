import React from 'react'
// styles
import './style/select.scss'

const SelectInput = e => {
    return <div className={`select-input-two ${e.styling}`}>
                <div className="label" style={{fontSize: `${e.label_size}px`}}>{e.label}</div>
                <select 
                    className={e.border}
                    value={e.value}
                    onChange={e.onChange}
                    name={e.name}
                >{
                    e.options.map(item => {
                        return (
                            <option 
                                key={item.value} 
                                value={item.value}
                            >
                                {item.name}
                            </option>
                        )
                    })
                }</select>
            </div>
}

export default SelectInput
