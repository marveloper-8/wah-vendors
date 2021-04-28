import React, {useState} from 'react'
import {Link} from 'react-router-dom'
// styling
import './style/modal-profile.scss'
// icons
import profile from '../icons/profile.svg'
import history from '../icons/history.svg'
import bank from '../icons/bank-two.svg'
import help from '../icons/help.svg'

import profile_active from '../icons/profile-active.svg'
import history_active from '../icons/history-active.svg'
import bank_active from '../icons/bank-two-active.svg'
import help_active from '../icons/help-active.svg'
// widgets
import Button from '../widgets/Button'

const ModalProfile = e => {
    const [active, setActive] = useState({
        profile: false,
        history: false,
        bank: false,
        help: false
    })
    return <div className={e.open ? "modal-profile-container modal-profile-container-open" : "modal-profile-container"}>
        <div className="background" onClick={e.close}></div>
        <div className="modal-profile-content">
            <div className="head">
                <div className="image"></div>
                <div className="semi-bold">Afrities Waters</div>
                <div className="font-16">afritieswaters@gmail.com</div>
            </div>
            <Link to='/profile' className="link">
                <div className="item" 
                    onClick={e.close}
                    onMouseOver={() => setActive({profile: true})} 
                    onMouseOut={() => setActive({profile: false})}
                >
                    <img src={e.active === "profile"  || active.profile
                        ? profile_active 
                        : profile
                    } alt="profile" />
                    <span className={e.active === "profile"  || active.profile
                        ? "active" 
                        : ""
                    }>My Account</span>
                </div>
            </Link>
            <Link to='/order-history' className="link">
                <div className="item" 
                    onClick={e.close}
                    onMouseOver={() => setActive({history: true})} 
                    onMouseOut={() => setActive({history: false})}
                >
                    <img src={active.history || e.active === "history"
                        ? history_active 
                        : history
                    } alt="history" />
                    <span className={e.active === "history"  || active.history
                        ? "active" 
                        : ""
                    }>Order History</span>
                </div>
            </Link>
            <Link to='/connected-banks' className="link">
                <div className="item" 
                    onClick={e.close}
                    onMouseOver={() => setActive({bank: true})} 
                    onMouseOut={() => setActive({bank: false})}
                >
                    <img src={active.bank || e.active === "bank"
                        ? bank_active 
                        : bank
                    } alt="bank" />
                    <span className={e.active === "bank"  || active.bank
                        ? "active" 
                        : ""
                    }>Connected Banks</span>
                </div>
            </Link>
            {/* <div className="item">
                <img src={e.active === "bank" 
                    ? bank_active 
                    : bank
                } alt="bank" />
                Connected Banks
            </div> */}
            <div className="item">
                <img src={e.active === "help" 
                    ? help_active 
                    : help
                } alt="help" />
                Help
            </div>
            <div className="action">
                <span onClick={e.close}>
                    <Button
                        text="Sign Out"
                        type="button"
                        styling="bg-red-light button-six"
                    />
                </span>
            </div>
            
        </div>
    </div>
}

export default ModalProfile
