import React, {useState} from 'react'
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

const Transactions = e => {
    const [status, setStatus] = useState({
        credit: true,
        debit: true
    })
    return <div className="page normal-page">
        <SideBar active="wallet" function={e.function} />
        <div className="main-container">
            <Navigation name="< All Transactions" active="wallet" />
            <div className="content-body wallet">
                <section>
                    <div className="item-head-two">
                        <div className="inner">
                            <span className={status.credit && status.debit ? "active" : ""} onClick={() => setStatus({
                                credit: true,
                                debit: true
                            })}>All</span>
                            <span className={status.credit && !status.debit ? "active" : ""} onClick={() => setStatus({
                                credit: true,
                                debit: false
                            })}>Credits</span>
                            <span className={!status.credit && status.debit ? "active" : ""} onClick={() => setStatus({
                                credit: false,
                                debit: true
                            })}>Debits</span>
                        </div>
                        <div></div>
                    </div>
                    {status.credit &&
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
                    }
                    
                    {status.credit &&
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
                    }
                    
                    {status.debit &&
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
                    }

                    {status.credit &&
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
                    }
                    
                    {status.credit &&
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
                    }
                    
                    {status.debit &&
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
                    }
                </section>
            </div>
        </div>
    </div>
}

export default Transactions
