import React, {useState} from 'react'
// styling
import './style/details.scss'
// icons
import clipboard from '../../icons/clipboard.svg'
import orders from '../../icons/orders.svg'
import date from '../../icons/date.svg'
import arrow_down from '../../icons/arrow-down.svg'
// widgets
import SideBar from '../../widgets/SideBar'
import Navigation from '../../widgets/Navigation'
import Button from '../../widgets/Button'
import ButtonIcon from '../../widgets/ButtonIcon'
import Modal from '../../widgets/Modal'
import ModalStatus from '../../widgets/ModalStatus'

const Details = e => {
    const [functions, setFunctions] = useState({
        accept: false,
        reject: false,
        status: false,
        order_accepted: false
    })
    const [status, setStatus] = useState("Received")
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
                            {functions.order_accepted
                                ? <span onClick={() => setFunctions({status: true, order_accepted: true})}>
                                    <ButtonIcon
                                        text={status}
                                        type="submit"
                                        styling="bg-primary"
                                        icon={arrow_down}
                                    />
                                </span>
                                : <>
                                <span onClick={() => setFunctions({accept: true})}>
                                    <Button
                                        text="Accept Request"
                                        type="button"
                                        styling="bg-primary button-two"
                                    />
                                </span>
                                <span onClick={() => setFunctions({reject: true})}>
                                    <Button
                                        text="Reject"
                                        type="button"
                                        styling="bg-white-border-red button-two"
                                    />
                                </span>
                                </>
                            }
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
            <Modal 
                open={functions.accept}
                close={() => setFunctions({accept: false})}
                select={() => setFunctions({order_accepted: true})}
                title="Accept Request"
                text="You are about to accept the order request of this customer. Kindly add the scheduled delivery date to proceed."
                placeholder="Delivery Date"
                button_text="Confirm"
            />
            <Modal 
                open={functions.reject}
                close={() => setFunctions({reject: false})}
                title="Reject Request"
                text="You are about to reject the order request of this customer. Kindly add the reason for rejecting the order."
                placeholder="Why did you reject this order?"
                button_text="Confirm"
            />
            <ModalStatus
                open={functions.status}
                close={() => setFunctions({reject: false, order_accepted: true})}
                received={() => setStatus("Received")}
                processing={() => setStatus("Processing")}
                sent={() => setStatus("Sent")}
                delivered={() => setStatus("Delivered")}
                active={status}
                title="Change Order Status"
                button_text="Confirm"
            />
        </div>
    </div>
}

export default Details
