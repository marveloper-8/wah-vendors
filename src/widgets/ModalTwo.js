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
        <div className="modal-content-two">
            <div className="head">
                <span className="semi-bold font-24">Confirm Withdrawal</span>
            </div>
            <div className="text">Are you sure you want to withdraw <span className="semi-bold">₦20,000</span> from your wallet?</div>
            <div className="button-container">
                <span onClick={e.close}>
                    <Button
                        text="Cancel"
                        type="button"
                        styling="bg-none-color-red button-two"
                    />
                </span>
                <span onClick={e.close}>
                    <Button
                        text="Confirm"
                        type="button"
                        styling="bg-primary button-two"
                    />
                </span>
            </div>
            
        </div>
    </div>
}

export default Modal
