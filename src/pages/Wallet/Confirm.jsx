import React, {useState} from 'react'
import {Link} from 'react-router-dom'
// styling
import './style/withdraw.scss'
// icons
import trend_up from '../../icons/trend-up.svg'
import trend_down from '../../icons/trend-down.svg'
// widgets
import SideBar from '../../widgets/SideBar'
import Navigation from '../../widgets/Navigation'
import TextInput from '../../widgets/TextInput'
import Button from '../../widgets/Button'
import ModalTwo from '../../widgets/ModalTwo'

const Confirm = e => {
    const [withdraw, setWithdraw] = useState(false)
    return <div className="page normal-page">
        <SideBar active="wallet" function={e.function} />
        <div className="main-container">
            <Navigation name="< Withdraw Funds" active="wallet" />
            <div className="content-body wallet">
                <section className="withdraw">
                    <div className="head">
                        <div className="semi-bold">Withdraw Funds</div>
                        <div className="font-16">How much do you want to withdraw to Guaranty Trust Bank **** 0000</div>
                    </div>
                    <div className="inner-container">
                        <TextInput
                            label="Amount"
                            type="number"
                            styling="bg-white full-input"
                        />

                        <TextInput
                            label="Password"
                            type="password"
                            styling="bg-white full-input"
                        />
                            
                        <div className="button-container">
                            <span onClick={() => setWithdraw(!withdraw)}>
                                <Button
                                    text="Withdraw"
                                    type="button"
                                    styling="bg-primary button-five full-input"
                                />
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <ModalTwo
            open={withdraw}
            close={() => setWithdraw(!withdraw)}
        />
    </div>
}

export default Confirm
