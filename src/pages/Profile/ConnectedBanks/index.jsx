import React, {useState} from 'react'
import {Link} from 'react-router-dom'
// styling
import './style/style.scss'
// icons
import bank from '../../../icons/bank.svg'
// widgets
import SideBar from '../../../widgets/SideBar'
import Navigation from '../../../widgets/Navigation'
import TextInput from '../../../widgets/TextInput'
import Button from '../../../widgets/Button'

const ConnectedBanks = e => {
    const [card, setCard] = useState(false)
    return <div className="page normal-page">
        <SideBar active="bank" function={e.function} />
        <div className="main-container">
            <Navigation name="Connected Banks" active="bank" />
            <div className="content-body bank">
                <section>
                    <div className="head">
                        <div className="font-24">Connected Banks</div>
                        <div className="font-16">This are the banks your funds will be sent to when a withdrawal is made.</div>
                    </div>
                    
                    <div className="item">
                        <div className={card ? "info inactive" : "info"}>
                            <div className="image-container">
                                <img src={bank} alt="bank" />
                            </div>
                            <div className="text">
                                <div className="font-16 semi-bold">Guaranty Trust Bank</div>
                                <div className="account-number">**** 0000</div>
                            </div>
                        </div>
                        <div className={card ? "right inactive" : "right"}>
                            <Button
                                text="Delete"
                                type="button"
                                styling="bg-white-border-grey3 button-three"
                            />
                        </div>
                        <div className={card ? "default font-16 inactive" : "default font-16"}>Default Bank</div>
                    </div>
                    
                    {card 
                        ? <div className="inner-container">
                            <form>
                                <div className="head">
                                    <div className="semi-bold">Add Bank Beneficiary</div>
                                    <div className="font-16">Add your details to match your bank account.</div>
                                </div>
                                

                                <TextInput
                                    label="Account Name"
                                    type="text"
                                    styling="bg-white full-input"
                                />

                                <TextInput
                                    label="Bank Name"
                                    type="text"
                                    styling="bg-white full-input"
                                />

                                <TextInput
                                    label="Account Number"
                                    type="number"
                                    styling="bg-white full-input"
                                />
                                
                                <span onClick={() => setCard(!card)}>
                                    <Button
                                        text="Add Bank"
                                        type="button"
                                        styling="bg-primary button-five half-input"
                                    />
                                </span>
                            </form>
                            
                        </div>
                        : <div className="inner-container">
                            <div className="button-container">
                                <span onClick={() => setCard(!card)}>
                                    <Button
                                        text="Add bank beneficiary"
                                        type="button"
                                        styling="bg-white-border-primary button-five full-input"
                                    />
                                </span>
                            </div>
                        </div>
                    }
                </section>
            </div>
        </div>
    </div>
}

export default ConnectedBanks