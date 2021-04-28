import React from 'react'
import {Link} from 'react-router-dom'
// styling
import './style/style.scss'
// widgets
import SideBar from '../../../widgets/SideBar'
import Navigation from '../../../widgets/Navigation'
import Button from '../../../widgets/Button'

const OrderHistory = e => {
    return <div className="page normal-page">
        <SideBar active="history" function={e.function} />
        <div className="main-container">
            <Navigation name="Order History" active="history" />
            <div className="content-body history">
                <section>
                    <div className="history-navigation">
                        <div className="inner">
                            <div className="nav-item active">All</div>
                            <div className="nav-item">Delivered</div>
                            <div className="nav-item">Cancelled</div>
                        </div>
                    </div>
                    <div className="product-item">
                        <div className="left">
                            <div className="image"></div>
                            <div className="info">
                                <div className="head">
                                    <div className="semi-bold">Be Refreshed and cooled sachet water</div>
                                    <div className="small">Ordered by Adewale Uchechi</div>
                                </div>
                                <div className="extras">
                                    <div className="extras-item">
                                        <div className="small">Quantity:</div>
                                        10
                                    </div>
                                    <div className="extras-item">
                                        <div className="small">Order Date:</div>
                                        Dec 04, 2020
                                    </div>
                                    <div className="extras-item">
                                        <div className="small">Status:</div>
                                        Pending
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <Link className="link" to="/order-details">
                                <Button
                                    text="View Order"
                                    type="button"
                                    styling="bg-white-border-primary button-three"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="product-item">
                        <div className="left">
                            <div className="image"></div>
                            <div className="info">
                                <div className="head">
                                    <div className="semi-bold">Be Refreshed and cooled sachet water</div>
                                    <div className="small">Ordered by Adewale Uchechi</div>
                                </div>
                                <div className="extras">
                                    <div className="extras-item">
                                        <div className="small">Quantity:</div>
                                        10
                                    </div>
                                    <div className="extras-item">
                                        <div className="small">Order Date:</div>
                                        Dec 04, 2020
                                    </div>
                                    <div className="extras-item">
                                        <div className="small">Status:</div>
                                        Pending
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <Link className="link" to="/order-details">
                                <Button
                                    text="View Order"
                                    type="button"
                                    styling="bg-white-border-primary button-three"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="product-item">
                        <div className="left">
                            <div className="image"></div>
                            <div className="info">
                                <div className="head">
                                    <div className="semi-bold">Be Refreshed and cooled sachet water</div>
                                    <div className="small">Ordered by Adewale Uchechi</div>
                                </div>
                                <div className="extras">
                                    <div className="extras-item">
                                        <div className="small">Quantity:</div>
                                        10
                                    </div>
                                    <div className="extras-item">
                                        <div className="small">Order Date:</div>
                                        Dec 04, 2020
                                    </div>
                                    <div className="extras-item">
                                        <div className="small">Status:</div>
                                        Pending
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <Link className="link" to="/order-details">
                                <Button
                                    text="View Order"
                                    type="button"
                                    styling="bg-white-border-primary button-three"
                                />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
}

export default OrderHistory
