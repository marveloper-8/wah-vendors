import React from 'react'
import {Link} from 'react-router-dom'
// styling
import './style/style.scss'
// icons
import trend_up from '../../icons/trend-up.svg'
import trend_down from '../../icons/trend-down.svg'
// widgets
import SideBar from '../../widgets/SideBar'
import Navigation from '../../widgets/Navigation'
import Button from '../../widgets/Button'

const Wallet = e => {
    return <div className="page normal-page">
        <SideBar active="wallet" function={e.function} />
        <div className="main-container">
            <Navigation name="Wallet" active="wallet" />
            <div className="content-body wallet">
                <section>
                    <div className="wallet-container">
                        <div className="balance">
                            <div>My Wallet</div>
                            <div className="font-32">₦ 250,000.00</div>
                        </div>
                        <div className="action">
                            <Link to='/wallet/withdraw' className="link">
                                <Button
                                    text="Withdraw Funds"
                                    type="button"
                                    styling="bg-white-border-primary button-five full-input"
                                />
                            </Link>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="item-head">Recent Transactions</div>
                    <div className="item">
                        <div className="info">
                            <div className="image-container">
                                <img src={trend_up} alt="trend up" />
                            </div>
                            <div className="text">
                                <div>Wallet credit from purchase of Be Refreshed and cooled sachet water</div>
                                <div className="date">Jan 14, 2020</div>
                            </div>
                        </div>
                        <div className="right">
                            <div></div>
                            <div>₦ 25,000</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="info">
                            <div className="image-container">
                                <img src={trend_up} alt="trend up" />
                            </div>
                            <div className="text">
                                <div>Wallet credit from purchase of Be Refreshed and cooled sachet water</div>
                                <div className="date">Jan 14, 2020</div>
                            </div>
                        </div>
                        <div className="right">
                            <div></div>
                            <div>₦ 100,000</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="info">
                            <div className="image-container">
                                <img src={trend_down} alt="trend down" />
                            </div>
                            <div className="text">
                                <div>Wallet debit from withdrawal approval</div>
                                <div className="date">Jan 14, 2020</div>
                            </div>
                        </div>
                        <div className="right">
                            <div></div>
                            <div>₦ 120,000</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="info">
                            <div className="image-container">
                                <img src={trend_up} alt="trend up" />
                            </div>
                            <div className="text">
                                <div>Wallet credit from purchase of Be Refreshed and cooled sachet water</div>
                                <div className="date">Jan 14, 2020</div>
                            </div>
                        </div>
                        <div className="right">
                            <div></div>
                            <div>₦ 25,000</div>
                        </div>
                    </div>
                    <Link to='/wallet/transactions' className="link">
                        <div className="view">
                            View Transactions >
                        </div>
                    </Link>
                    
                </section>
            </div>
        </div>
    </div>
}

export default Wallet
