import React from 'react'
// styling
import './style/modal.scss'
// icons
import close from '../icons/close.svg'
// widgets
import TextInput from '../widgets/TextInput'
import Button from '../widgets/Button'

const Modal = e => {
    return <div className={e.open ? "modal-container modal-container-open" : "modal-container"}>
        <div className="background" onClick={e.close}></div>
        <div className="modal-content">
            <div className="head">
                <span className="semi-bold font-24">{e.title}</span>
                <img src={close} alt="close" onClick={e.close} />
            </div>
            <div className="text">{e.text}</div>
            <TextInput
                placeholder={e.placeholder}
                type="text"
                styling="bg-white"
            />
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

export default Modal
