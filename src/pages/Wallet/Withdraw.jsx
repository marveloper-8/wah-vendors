import React, {useState} from 'react'
import {Link} from 'react-router-dom'
// styling
import './style/withdraw.scss'
// icons
import bank from '../../icons/bank.svg'
import arrow_right from '../../icons/arrow-right.svg'
// widgets
import SideBar from '../../widgets/SideBar'
import Navigation from '../../widgets/Navigation'
import TextInput from '../../widgets/TextInput'
import Button from '../../widgets/Button'

const Withdraw = e => {
    const [card, setCard] = useState(false)
    return <div className="page normal-page">
        <SideBar active="wallet" function={e.function} />
        <div className="main-container">
            <Navigation name="< Withdraw Funds" active="wallet" />
            <div className="content-body wallet">
                <section className="withdraw">
                    <div className={card ? "inactive" : ""}>
                        <div className="head">
                            <div className="semi-bold">Withdraw Funds</div>
                            <div className="font-16">Select the bank you want to withdraw your funds to:</div>
                        </div>
                        <Link to='/wallet/withdraw/confirm' className="link">
                            <div className="item">
                                <div className="info">
                                    <div className="image-container">
                                        <img src={bank} alt="bank" />
                                    </div>
                                    <div className="text">
                                        <div className="font-16 semi-bold">Guaranty Trust Bank</div>
                                        <div className="account-number">**** 0000</div>
                                    </div>
                                </div>
                                <div className="right desktop">
                                    <img src={arrow_right} alt="arrow" />
                                </div>
                            </div>
                        </Link>
                    </div>
                    
                    
                    {card 
                        ? <div className="inner-container-two">
                            <div className="semi-bold">Add Bank Beneficiary</div>
                            <div className="font-16">Add your details to match your bank account.</div>

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
                                
                            <div className="button-container">
                                <span onClick={() => setCard(!card)}>
                                    <Button
                                        text="Add Bank"
                                        type="button"
                                        styling="bg-primary button-five half-input"
                                    />
                                </span>
                            </div>
                        </div>
                        : <div className="inner-container-two">
                            <div className="button-container-two">
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

export default Withdraw
