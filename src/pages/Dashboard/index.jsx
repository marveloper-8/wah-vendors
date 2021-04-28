import React from 'react'
// styling
import './style/style.scss'
// widgets
import SideBar from '../../widgets/SideBar'
import Navigation from '../../widgets/Navigation'

const Dashboard = e => {
    return <div className="page normal-page">
            <SideBar active="dashboard" function={e.function} />
            <div className="main-container">
                <Navigation name="Dashboard" active="dashboard" />
                <div className="content-body dashboard">
                    <div className="main-main">
                        <section className="wallet">
                            <div className="balance">
                                <div>My Wallet</div>
                                <div className="font-32">₦ 250,000.00</div>
                            </div>
                            <div className="view font-16">
                                View Wallet <span>></span>
                            </div>
                        </section>
                        <section className="purchases">
                            <div className="item-head">Total Purchases</div>
                            <div className="item">
                                <div>Be Refreshed and cooled sachet water</div>
                                <div className="right">11,223 Items</div>
                            </div>
                            <div className="item">
                                <div>Fountain of life sachet water</div>
                                <div className="right">11,223 Items</div>
                            </div>
                            <div className="item">
                                <div>Fountain of life sachet water</div>
                                <div className="right">11,223 Items</div>
                            </div>
                            <div className="item">
                                <div>Fountain of life sachet water</div>
                                <div className="right">11,223 Items</div>
                            </div>
                            <div className="item">
                                <div>Fountain of life sachet water</div>
                                <div className="right">11,223 Items</div>
                            </div>
                            <div className="view font-16 color-primary">
                                View Products <span>></span>
                            </div>
                        </section>
                    </div>
                    <div className="side-side">
                        <section>
                            <div className="item-head">Recent Activities</div>
                            <div className="item">
                                <div>
                                    <div>Added a product</div>
                                    <small>Jan 14, 2020</small>
                                </div>
                            </div>
                            <div className="item">
                                <div>
                                    <div>Wallet credited from a purchase</div>
                                    <small>Jan 14, 2020</small>
                                </div>
                            </div>
                            <div className="item">
                                <div>
                                    <div>Added a product</div>
                                    <small>Jan 14, 2020</small>
                                </div>
                            </div>
                            <div className="view font-16 color-primary">
                                View All Activities <span>></span>
                            </div>
                        </section>

                        <section>
                            <div className="item-head">To-do List</div>
                            <div className="item">
                                Be Refreshed and cooled sachet water
                            </div>
                            <div className="item">
                                Be Refreshed and cooled sachet water
                            </div>
                            <div className="item">
                                Be Refreshed and cooled sachet water
                            </div>
                        </section>
                    </div>
                </div>
            </div>
    </div>
}

export default Dashboard
