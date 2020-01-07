import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllUsers } from "../actions/authActions";
import UserDetail from "../components/Users/Modal"
import 'antd/dist/antd.css';

class Users extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount(){
    this.props.getAllUsers();
  }

  render() {
    const { user } = this.props.auth;
    // const users = [
    //   {
    //     name: "Marsha Hogan",
    //     locate: "Illunois, United States",
    //     phone: "+01 3214 6522",
    //     email: "chadengle@dummy.com",
    //     country: "united states",
    //     id: "ST17241",
    //     dob: "03 Jun 1990"
    //   },

    //   {
    //     name: "Marsha",
    //     locate: "United States",
    //     phone: "+01 3214 6522",
    //     email: "chadengle@dummy.com",
    //     country: "united states",
    //     id: "ST17241",
    //     dob: "03 Jun 1990"
    //   }
    // ];
    // if (this.props.auth.users.length === 0) {
    //   this.props.getAllUsers();
    // }
    const { users } = this.props.auth;
    let infor = users.map((user, i) => {
      return (
        <tr key={i} onClick={() => UserDetail(user)}>
          <td>
            <span className="list-img">
              <img src="images/user/1.png" alt="" />
            </span>
          </td>
          <td>
            <a href="#">
              <span className="list-enq-name">{user.name}</span>
              <span className="list-enq-city">{user.name}</span>
            </a>
          </td>
          <td>{user.email}</td>
          
       
          <td>
            <span className="label label-success">Active</span>
          </td>
          <td>
            <a href="admin-student-details.html" className="ad-st-view">
              View
            </a>
          </td>
        </tr>
      );
    });

    return (
      <>
        {/*== breadcrumbs ==*/}
        <div className="sb2-2-2">
                <ul>
                  <li>
                    <a href="index.html">
                      <i className="fa fa-home" aria-hidden="true" /> Home
                    </a>
                  </li>
                  <li className="active-bre">
                    <a href="#"> Users(Students)</a>
                  </li>
                  <li className="page-back">
                    <a href="index.html">
                      <i className="fa fa-backward" aria-hidden="true" /> Back
                    </a>
                  </li>
                </ul>
              </div>
              {/*== User Details ==*/}
              <div className="sb2-2-3">
                <div className="row">
                  <div className="col-md-12">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Student Details</h4>
                        <p>
                          All about students like name, student id, phone,
                          email, country, city and more
                        </p>
                      </div>
                      <div className="tab-inn">
                        <div className="table-responsive table-desi">
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>User</th>
                                <th>Name</th>
                              
                                <th>Email</th>
                              
                                <th>Status</th>
                                <th>View</th>
                              </tr>
                            </thead>
                            <tbody>
                              {infor}
                              
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </>
    );
  }
}

Users.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { getAllUsers })(Users);
