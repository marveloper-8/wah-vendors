import React from 'react'
import {Link} from 'react-router-dom'
// styling
import './styling/style.scss'
// icons
import logo from '../../icons/logo.svg'
// images
import signup from '../../images/signup.png'
// widgets
import TextInput from '../../widgets/TextInput'
import TextInputDouble from '../../widgets/TextInputDouble'
import PhoneInput from '../../widgets/PhoneInput'
import Button from '../../widgets/Button'

const Autentication = () => {
    return <div className="page authentication">
        <form>
            <div className="head">
                <img src={logo} alt="logo" className="logo" />
                <h4>Apply as a Vendor</h4>
                <div className="font-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </div>
            </div>            
            <div className="input-container">
                <div className="double-item">
                    <TextInputDouble
                        label="First Name"
                        type="text"
                        styling="bg-white"
                    />
                    <TextInputDouble
                        label="Last Name"
                        type="text"
                        styling="bg-white"
                    />
                </div>

                <div className="item">
                    <TextInput
                        label="Email Address"
                        type="email"
                        styling="bg-white"
                    />
                </div>

                <div className="item">
                    <TextInput
                        label="Business Name"
                        type="text"
                        styling="bg-white"
                    />
                </div>

                <div className="item">
                    <TextInput
                        label="Business Address"
                        type="address"
                        styling="bg-white"
                    />
                </div>

                <div className="item">
                    <TextInput
                        label="NAFDAC No"
                        type="text"
                        styling="bg-white"
                    />
                </div>

                <div className="item">
                    <PhoneInput
                        label="Phone No"
                        styling="bg-white"
                    />
                </div>

                <div className="item">
                    <TextInput
                        label="Password"
                        type="password"
                        styling="bg-white"
                    />
                </div>
            </div>

            <div className="note font-16">
                By signing up you agree to our Terms and Conditions & Privacy Policy
            </div>

            <Button
                text="Apply"
                type="button"
                styling="bg-primary full-input"
            />
        </form>
        <div className="aesthetics" style={{
            backgroundImage: `url(${signup})`, 
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`
        }}>
            <Link className="link" to="/login">
                <Button
                    text="Login"
                    type="button"
                    styling="bg-none-border-white button-three"
                />
            </Link>
        </div>
    </div>
}

export default Autentication
