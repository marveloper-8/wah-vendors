import React from 'react'
// styling
import './style/modal.scss'
// icons
import close from '../icons/close.svg'
// widgets
import Button from '../widgets/Button'

const ModalStatus = e => {
    return <div className={e.open ? "modal-container modal-container-open" : "modal-container"}>
        <div className="background" onClick={e.close}></div>
        <div className="modal-content">
            <div className="head">
                <span className="semi-bold font-24">{e.title}</span>
                <img src={close} alt="close" onClick={e.close} />
            </div>
            <div className="list-container">
                <div className="list">
                    <span onClick={e.received}>
                        <Button
                            text="Received"
                            type="button"
                            styling={e.active === "Received" 
                                ? "bg-primary button-four"
                                : "bg-white button-four"
                            }
                        />
                    </span>
                    <span onClick={e.processing}>
                        <Button
                            text="Processing"
                            type="button"
                            styling={e.active === "Processing" 
                                ? "bg-primary button-four"
                                : "bg-white button-four"
                            }
                        />
                    </span>
                    <span onClick={e.sent}>
                        <Button
                            text="Sent"
                            type="button"
                            styling={e.active === "Sent" 
                                ? "bg-primary button-four"
                                : "bg-white button-four"
                            }
                        />
                    </span>
                    <span onClick={e.delivered}>
                        <Button
                            text="Delivered"
                            type="button"
                            styling={e.active === "Delivered" 
                                ? "bg-primary button-four"
                                : "bg-white button-four"
                            }
                        />
                    </span>
                </div>    
            </div>
            <span onClick={e.select}>
                <Button
                    text={e.button_text}
                    type="button"
                    styling="bg-primary button-two full-input"
                />
            </span>
            
        </div>
    </div>
}

export default ModalStatus
