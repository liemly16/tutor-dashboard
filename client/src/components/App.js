// eslint-disable-next-line camelcase
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
// import jwt_decode from "jwt-decode";
// import setAuthToken from "../utils/setAuthToken";
// import store from "../store";
// import { setCurrentUser, logoutUser } from "../actions/authActions";
import "antd/dist/antd.css";
import LoginPageContainer from "../containers/LoginPage/LoginPage.container";
import Admin from "../layouts/Admin";

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

const App = ({ currentUser }) => (
  <Router>
    <div className="App">
    <Switch> 
      <Route path="/login" component={LoginPageContainer} />
      <Route path="/" component={Admin} />
      {/* {currentUser ? (
        <Switch> 
          <Route path="/" component={Admin} />
          <Redirect  to="/users" />
          </Switch> 
      ) : (
        <Switch> 
       
        <Redirect from ="/" to="/login" />
        </Switch> 
      )} */}
      </Switch> 
    </div>
  </Router>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(App);
