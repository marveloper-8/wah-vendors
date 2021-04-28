import React from 'react'
import {Link} from 'react-router-dom'
// styling
import './style/navigation.scss'
// icons
import logo from '../icons/logo.svg'
import logo_text from '../icons/logo-text.svg'

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

import menu from '../icons/menu.svg'

const SideBar = e => {
    return <div className="side-bar nav-desktop">
        <div className="icons">
            <div className="head">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="list">
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
                    </Link>
                </div>
                <div className="item">
                    <Link className="link" to="/products">
                        <img 
                            src={
                                e.active === "products" 
                                ? products_active
                                : products
                            } 
                            alt="products" 
                        />
                    </Link>
                </div>
                <div className="item">
                    <Link className="link" to="/wallet">
                        <img 
                            src={
                                e.active === "wallet" 
                                ? wallet_active
                                : wallet
                            } 
                            alt="wallet" 
                        />
                    </Link>
                </div>
                <div className="item">
                    <Link className="link" to="/reports">
                        <img 
                            src={
                                e.active === "reports" 
                                ? reports_active
                                : reports
                            } 
                            alt="reports" 
                        />
                    </Link>
                </div>
            </div>
        </div>
        
        <div className="text">
            <div className="head">
                <img src={logo_text} alt="logo" className="logo" />
                <span>
                    <img src={menu} alt="menu" className="menu" onClick={e.function} />
                </span>
            </div>
            <div className="list">
                <Link className="link" to="/">
                    <div className={
                        e.active === "dashboard"
                        ? "item active"
                        : "item"
                    }>Dashboard</div>
                </Link>


                <Link className="link" to="/requests">
                    <div className={
                        e.active === "requests"
                        ? "item active"
                        : "item"
                    }>Requests</div>
                </Link>

                <Link className="link" to="/products">
                    <div className={
                        e.active === "products"
                        ? "item active"
                        : "item"
                    }>Products</div>
                </Link>
                
                <Link className="link" to="/wallet">
                    <div className={
                        e.active === "wallet"
                        ? "item active"
                        : "item"
                    }>Wallet</div>
                </Link>
                
                <Link className="link" to="/reports">
                    <div className={
                        e.active === "reports"
                        ? "item active"
                        : "item"
                    }>Reports</div>
                </Link>
            </div>
        </div>
    </div>
}

export default SideBar
