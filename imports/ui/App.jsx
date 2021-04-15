import { Button } from '@material-ui/core'
import React from 'react'
import NewNavbar from './NewNavbar'
import Login from './components/Login'
import RegisterForm from './components/RegisterForm'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import LoginController from './LoginController'

export const  App=() =>{
//   const PrivateRoute = ({ component: Component, ...rest }) => 
//   (  
//     <Route {...rest} render={props => 
//     (
//       Meteor.userId() ? <Redirect to={{pathname: '/navbar'}}/> : <Redirect to={{pathname: '/login'}}/>
//     )}/>
//   );

//   return (
//   <Router>
//   <Switch>
//     <PrivateRoute path="/" component={Login} exact />
//     <Route path="/register" component={RegisterForm} />
//     <Route path="/login" component={Login} />
//     <Route path="/navbar" Component= { NewNavbar } />
//   </Switch>      
// </Router>

// )
return (<LoginController/>)
}

