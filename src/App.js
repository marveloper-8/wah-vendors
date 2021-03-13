// packages
import React, {createContext, useReducer, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// style
import './app.scss';
import './responsiveness.scss'
// pages
import BadRequest from './pages/BadRequest'
import Dashboard from './pages/Dashboard'
import Requests from './pages/Requests'
// pages -- authentication
import Authentication from './pages/Authentication'
import Login from './pages/Authentication/Login'
import ForgotPassword from './pages/Authentication/ForgotPassword'
import AccountPending from './pages/Authentication/Pending'
// pages -- authentication
import RequestDetails from './pages/Requests/Details'
// pages -- profile
// import Account from './pages/Account'
//pages -- marketplace
// import Market from './pages/Market'
// import ProductDetails from './pages/Market/Details'
// import Favourites from './pages/Market/Favourites'
// import Cart from './pages/Market/Cart'
// import Checkout from './pages/Market/Checkout'
// widgets
// import Navigation from './widgets/Navigation'
// import Footer from './widgets/Footer'
// extras
import {reducer, initialState} from './reducers/userReducer'
export const UserContext = createContext()

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
      {/* profile */}
      {/* <Route exact path='/account' component={Account} /> */}
      {/* requests */}
      <Route exact path='/requests' component={() => <Requests function={e.function} />} />
      <Route exact path='/request/details' component={() => <RequestDetails function={e.function} />} />
      {/* bad request */}
      <BadRequest />
    </Switch>
  )
}

const App = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  useEffect(() => {
    if(user){
      dispatch({type: "USER", payload: user})
    }
  }, [])
  const [state, dispatch] = useReducer(reducer, initialState)

  const [sideBar, setSideBar] = useState(true)
  return (
    <div className={sideBar ? "App side-bar-open" : "App side-bar-close"}>
      <Router>
        {/* <Navigation /> */}
        {/* {user ? <Navigation /> : ''} */}
        <Routing function={() => setSideBar(!sideBar)} />
        {/* {user ? <Footer /> : ''} */}
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
