import React from 'react'
import {Link} from 'react-router-dom'
// styling
import './styling/style.scss'
// icons
import logo from '../../icons/logo.svg'
// images
import login from '../../images/login.png'
// widgets
import TextInput from '../../widgets/TextInput'
import Button from '../../widgets/Button'

const Login = () => {
    return <div className="page authentication">
        <form>
            <div className="head">
                <img src={logo} alt="logo" className="logo" />
                <h4>Welcome Back</h4>
                <div className="font-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </div>
            </div>            
            <div className="input-container">
                <div className="item">
                    <TextInput
                        label="Email Address"
                        type="email"
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

                <Link className="link" to="/account-pending">
                    <Button
                        text="Login"
                        type="button"
                        styling="bg-primary full-input"
                    />
                </Link>

                <div className="note-2 font-16">
                    <Link className="link2" to='/forgot-password'>Forgot Password?</Link>
                </div>
            </div>
        </form>
        <div className="aesthetics" style={{
            backgroundImage: `url(${login})`, 
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`
        }}>
            <Link className="link" to="/sign-up">
                <Button
                    text="Apply as a Vendor"
                    type="button"
                    styling="bg-none-border-white button-three"
                />
            </Link>
        </div>
    </div>
}

export default Login
