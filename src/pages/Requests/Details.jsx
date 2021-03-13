import React from 'react'
import {Link} from 'react-router-dom'
// styling
import './style/details.scss'
// icons
import clipboard from '../../icons/clipboard.svg'
import orders from '../../icons/orders.svg'
import date from '../../icons/date.svg'
// widgets
import SideBar from '../../widgets/SideBar'
import Navigation from '../../widgets/Navigation'
import Button from '../../widgets/Button'

const Details = e => {
    return <div className="page normal-page">
        <SideBar active="requests" function={e.function} />
        <div className="main-container">
            <Navigation name={`<    View Order`} active="requests" />
            <div className="content-body requests">
                <section className="info details">
                    <div className="top">
                        <div className="image"></div>
                        <div className="right-section">
                            <div className="text">
                                <div className="semi-bold">Be Refreshed and cooled sachet water</div>
                                <div className="font-16">Ordered by Adewale Uchechi</div>
                            </div>
                            <Button
                                text="Accept Request"
                                type="button"
                                styling="bg-primary button-two"
                            />
                            <Button
                                text="Reject"
                                type="button"
                                styling="bg-white-border-red button-two"
                            />
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="text font-16">
                            <div className="item">
                                <div className="label">
                                    <img src={orders} alt="orders" /> Order No:
                                </div>
                                <div className="semi-bold value">568237414</div>
                            </div>
                            <div className="item">
                                <div className="label">
                                    <img src={date} alt="date" /> Order Date:
                                </div>
                                <div className="semi-bold value">Dec 04, 2020</div>
                            </div>
                            <div className="item">
                                <div className="label">
                                    <img src={clipboard} alt="quantity" /> Quantity:
                                </div>
                                <div className="semi-bold value">10</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="details">
                    <div className="font-24 head">Delivery Details</div>
                    <div className="text">
                        <p>Adewale Uchechi</p>
                        <p>244, Felix brown street, Epic place estate, Ikeja, Lagos Nigeria.</p>
                        <p>08128765467</p>
                    </div>
                </section>
                <section className="orders details">
                    <div className="font-24 head">Order Total</div>
                    <div className="item">
                        <span>SUB-TOTAL</span>
                        <span>₦ 4000.00</span>
                    </div>
                    <div className="item">
                        <span>DELIVERY</span>
                        <span>₦ 800.00</span>
                    </div>
                    <div className="total bold font-24">
                        <span>Total</span>
                        <span>₦ 4800.00</span>
                    </div>
                </section>
            </div>
        </div>
    </div>
}

export default Details
