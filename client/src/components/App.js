import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import store from '../store';
import { setCurrentUser, logoutUser } from '../actions/authActions';
import Register from '../containers/auth/Register';
import Login from '../containers/auth/Login';
import Navbar from "./NavBar";
import Dashboard from "../containers/Dashboard"

// Check for token to keep user logged in
// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));
//   // Check for expired token
//   const currentTime = Date.now() / 1000; // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logoutUser());

//     // Redirect to login
//     window.location.href = './login';
//   }
// }

const App = () => (
  <Router>
    <div className="App">
    <Navbar />
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>
);

export default App;
