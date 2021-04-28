// packages
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import Swal from 'sweetalert2'
// style
import './app.scss';
import './responsiveness.scss'
// pages
import BadRequest from './pages/BadRequest'
import Dashboard from './pages/Dashboard'
// pages -- authentication
import Authentication from './pages/Authentication'
import Login from './pages/Authentication/Login'
import ForgotPassword from './pages/Authentication/ForgotPassword'
import AccountPending from './pages/Authentication/Pending'
// pages -- requests
import Requests from './pages/Requests'
import RequestDetails from './pages/Requests/Details'
// pages -- products
import Products from './pages/Products'
import ProductsCreate from './pages/Products/Create'
//pages -- wallet
import Wallet from './pages/Wallet'
import WalletTransactions from './pages/Wallet/Transactions'
import WalletWithdraw from './pages/Wallet/Withdraw'
import WalletWithdrawConfirm from './pages/Wallet/Confirm'
//pages -- reports
import Reports from './pages/Reports'
// pages -- profile
import Profile from './pages/Profile'
// pages -- profile - order history
import OrderHistory from './pages/Profile/OrderHistory'
import OrderDetails from './pages/Profile/OrderHistory/Details'
// pages -- profile - connected banks
import ConnectedBanks from './pages/Profile/ConnectedBanks'

const Routing = e => {
  // const {dispatch} = useContext(UserContext)

  return(
    <Switch>
      <Route exact path='/' component={() => <Dashboard function={e.function} />} />
      {/* authentication */}
      <Route exact path='/sign-up' component={Authentication} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/forgot-password' component={ForgotPassword} />
      <Route exact path='/account-pending' component={AccountPending} />
      {/* requests */}
      <Route exact path='/requests' component={() => <Requests function={e.function} />} />
      <Route exact path='/request/details' component={() => <RequestDetails function={e.function} />} />
      {/* products */}
      <Route exact path='/products' component={() => <Products function={e.function} />} />
      <Route exact path='/products/create' component={() => <ProductsCreate function={e.function} />} />
      {/* wallet */}
      <Route exact path='/wallet' component={() => <Wallet function={e.function} />} />
      <Route exact path='/wallet/transactions' component={() => <WalletTransactions function={e.function} />} />
      <Route exact path='/wallet/withdraw' component={() => <WalletWithdraw function={e.function} />} />
      <Route exact path='/wallet/withdraw/confirm' component={() => <WalletWithdrawConfirm function={e.function} />} />
      {/* reports */}
      <Route exact path='/reports' component={() => <Reports function={e.function} />} />
      {/* profile */}
      <Route exact path='/profile' component={() => <Profile function={e.function} />} />
      <Route exact path='/order-history' component={() => <OrderHistory function={e.function} />} />
      <Route exact path='/order-details' component={() => <OrderDetails function={e.function} />} />
      <Route exact path='/connected-banks' component={() => <ConnectedBanks function={e.function} />} />
      {/* bad request */}
      <BadRequest />
    </Switch>
  )
}

const App = () => {
  const [sideBar, setSideBar] = useState(true)
  return <Provider store={store}>
    <div className={sideBar ? "App side-bar-open" : "App side-bar-close"}>
      <Router>
        <Routing function={() => setSideBar(!sideBar)} />
      </Router>
    </div>
  </Provider>
    
}

export default App;
