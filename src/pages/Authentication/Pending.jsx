import React from 'react'
import {Link} from 'react-router-dom'
// styling
import './styling/style.scss'
// widgets
import Button from '../../widgets/Button'

const Pending = () => {
    return <div className="page account-pending">
            <div className="image"></div>
            <div className="font-24">Your Account is being reviewed</div>
            <div className="font-16">Your account is being reviewed by our admin an email will be sent to you to know if it was approved or declined.</div>
                <Button
                    text="Go to Profile"
                    type="button"
                    styling="bg-white-border-primary"
                />
    </div>
}

export default Pending
