import React from 'react'
// styles
import './style/select.scss'

const SelectInput = ({options, label, styling, border}) => {
    return <div className={`select-input-two select-input-double ${styling}`}>
                <div className="label">{label}</div>
                <select className={border}>
                    {
                        options.map(item => {
                            return (
                                <option 
                                    key={item.value} 
                                    value={item.value}
                                >
                                    {item.name}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
}

export default SelectInput
