import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
// styling
import './style/navigation.scss'
// icons
import notification from '../icons/notification.svg'
import logo from '../icons/logo.svg'
import logo_full from '../icons/logo-full.svg'
import menu from '../icons/menu.svg'

import dashboard from '../icons/dashboard.svg'
import requests from '../icons/requests.svg'
import products from '../icons/products.svg'
import wallet from '../icons/wallet.svg'
import reports from '../icons/reports.svg'

import dashboard_active from '../icons/dashboard-active.svg'
import requests_active from '../icons/requests-active.svg'
import products_active from '../icons/products-active.svg'
import wallet_active from '../icons/wallet-active.svg'
import reports_active from '../icons/reports-active.svg'

const Navigation = e => {
    const [menu_container, openMenu] = useState(false)
    const [icon, setIcon] = useState(dashboard_active)

    useEffect(() => {
        if(e.active === "dashboard"){
            setIcon(dashboard_active)
        } else if(e.active === "requests"){
            setIcon(requests_active)
        } else if(e.active === "products"){
            setIcon(products_active)
        } else if(e.active === "wallet"){
            setIcon(wallet_active)
        } else if(e.active === "reports"){
            setIcon(reports_active)
        }
    }, [])

    return (
        <>
            <div className="navigation nav-desktop">
                <div className="name">{e.name}</div>

                <div>
                    <img src={notification} className="notification" alt="notification" />
                    <div className="image"></div>
                    <div className="username">Afrities Waters</div>
                </div>
            </div>

            <div className="navigation nav-mobile">
                <div className="top">
                    <img src={icon} alt="dashboard" />

                    <div>
                        <div className="username font-16">Afrities Waters</div>
                        <div className="image"></div>
                    </div>
                </div>
                <div className="bottom">
                    <img onClick={() => openMenu(true)} src={menu} alt="menu" />
                    <img src={logo} alt="logo" />
                    <img src={notification} alt="notification" />
                </div>
            </div>

            <div className={menu_container ? "navigation-container nav-mobile" : "navigation-container-close navigation-container nav-mobile"}>
                <div className="close">
                    <span onClick={() => openMenu(false)}>&times;</span>
                </div>
                <div className="logo">
                    <img src={logo_full} alt="logo" />
                </div>
                <div className="item">
                    <Link className="link" to="/">
                        <img 
                            src={
                                e.active === "dashboard" 
                                ? dashboard_active
                                : dashboard
                            } 
                            alt="dashboard" 
                        /> 
                        <span className={
                            e.active === "dashboard"
                            ? "active"
                            : ""
                        }>Dashboard</span>
                    </Link>
                </div>
                <div className="item">
                    <Link className="link" to="/requests">
                        <img 
                            src={
                                e.active === "requests" 
                                ? requests_active
                                : requests
                            } 
                            alt="requests" 
                        />
                        <span className={
                            e.active === "requests"
                            ? "active"
                            : ""
                        }>Requests</span>
                    </Link>
                </div>
                <div className="item">
                    <img 
                        src={
                            e.active === "products" 
                            ? products_active
                            : products
                        } 
                        alt="products" 
                    />
                    <span className={
                        e.active === "products"
                        ? "active"
                        : ""
                    }>Products</span>
                </div>
                <div className="item">
                    <img 
                        src={
                            e.active === "wallet" 
                            ? wallet_active
                            : wallet
                        } 
                        alt="wallet" 
                    />
                    <span className={
                        e.active === "wallet"
                        ? "active"
                        : ""
                    }>Wallet</span>
                </div>
                <div className="item">
                    <img 
                        src={
                            e.active === "reports" 
                            ? reports_active
                            : reports
                        } 
                        alt="reports" 
                    />
                    <span className={
                        e.active === "reports"
                        ? "active"
                        : ""
                    }>Reports</span>
                </div>
            </div>
        </>
    )
}

export default Navigation
