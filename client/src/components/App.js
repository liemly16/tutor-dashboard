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
import Login from "../containers/auth/Login";
import Admin from "../layouts/Admin";
import "antd/dist/antd.css";

// import Dashboard from "../containers/Dashboard";
// import Users from "../containers/Users";
// import ManagerTagSkill from "../containers/ManagerTagSkill/ManagerTagSkill.container";
// import ManagerContract from "../containers/ManagerContract/ManagerContract.container";
// import DetailContractPage from "../containers/DetailContractPage/DetailContractPage.container";
// import ManagerReport from "../containers/ManagerReport/ManagerReport.container";
// import DetailContractReport from "../containers/DetailContractReport/DetailContractReport.container";

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
        <Route path="/login" component={Login} />
        <Route path="/" component={Admin} />
        {/* <Route path="/admin/users" component={Users} />
        <Route path="/admin/tags" component={ManagerTagSkill} />
        <Route path="/admin/contracts" component={ManagerContract} />
        <Route path="/admin/contracts/:id" component={DetailContractPage} />
        <Route path="/admin/reports" component={ManagerReport} />
        <Route path="/admin/reports/:id" component={DetailContractReport} /> */}
      </Switch>
    </div>
  </Router>
);

const mapStateToProps = state => ({
  currentUser: state.auth.user
});

export default connect(mapStateToProps)(App);

// {currentUser ? (
//   <Switch>
//     {/* <Route path="/admin" component={Admin} />
//     <Redirect to="/admin/reports" /> */}
//     <Route path="/admin/users" component={Users} />
// <Route path="/admin/tags" component={ManagerTagSkill} />
// <Route path="/admin/contracts" component={ManagerContract} />
// <Route path="/admin/contracts/:id" component={DetailContractPage} />
// <Route path="/admin/reports" component={ManagerReport} />
// <Route path="/admin/reports/:id" component={DetailContractReport} />
//   </Switch>
// ) : (
//   <Switch>
//     <Redirect to="/admin/reports" />
//   </Switch>

// )}
