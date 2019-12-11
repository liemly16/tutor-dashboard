import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class Users extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    const users = [
      {
        name: "Marsha Hogan",
        locate: "Illunois, United States",
        phone: "+01 3214 6522",
        email: "chadengle@dummy.com",
        country: "united states",
        id: "ST17241",
        dob: "03 Jun 1990"
      },

      {
        name: "Marsha",
        locate: "United States",
        phone: "+01 3214 6522",
        email: "chadengle@dummy.com",
        country: "united states",
        id: "ST17241",
        dob: "03 Jun 1990"
      }
    ];
    let infor = users.map((user, i) => {
      return (
        <tr>
          <td>
            <span className="list-img">
              <img src="images/user/1.png" alt="" />
            </span>
          </td>
          <td>
            <a href="#">
              <span className="list-enq-name">{user.name}</span>
              <span className="list-enq-city">{user.locate}</span>
            </a>
          </td>
          <td>{user.phone}</td>
          <td>{user.email}</td>
          <td>{user.country}</td>
          <td>{user.id}</td>
          <td>{user.dob}</td>
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
        {/*== MAIN CONTRAINER ==*/}
        <div className="container-fluid sb1">
          <div className="row">
            {/*== LOGO ==*/}
            <div className="col-md-2 col-sm-3 col-xs-6 sb1-1">
              <a href="#" className="btn-close-menu">
                <i className="fa fa-times" aria-hidden="true" />
              </a>
              <a href="#" className="atab-menu">
                <i className="fa fa-bars tab-menu" aria-hidden="true" />
              </a>
              <a href="index.html" className="logo">
                <img src="images/logo1.png" alt="" />
              </a>
            </div>
            {/*== SEARCH ==*/}
            <div className="col-md-6 col-sm-6 mob-hide">
              <form className="app-search">
                <input
                  type="text"
                  placeholder="Search..."
                  className="form-control"
                />
                <a href="#">
                  <i className="fa fa-search" />
                </a>
              </form>
            </div>
            {/*== NOTIFICATION ==*/}
            <div className="col-md-2 tab-hide">
              <div className="top-not-cen">
                <a
                  className="waves-effect btn-noti"
                  href="admin-all-enquiry.html"
                  title="all enquiry messages"
                >
                  <i className="fa fa-commenting-o" aria-hidden="true" />
                  <span>5</span>
                </a>
                <a
                  className="waves-effect btn-noti"
                  href="admin-course-enquiry.html"
                  title="course booking messages"
                >
                  <i className="fa fa-envelope-o" aria-hidden="true" />
                  <span>5</span>
                </a>
                <a
                  className="waves-effect btn-noti"
                  href="admin-admission-enquiry.html"
                  title="admission enquiry"
                >
                  <i className="fa fa-tag" aria-hidden="true" />
                  <span>5</span>
                </a>
              </div>
            </div>
            {/*== MY ACCCOUNT ==*/}
            <div className="col-md-2 col-sm-3 col-xs-6">
              {/* Dropdown Trigger */}
              <a
                className="waves-effect dropdown-button top-user-pro"
                href="#"
                data-activates="top-menu"
              >
                <img src="images/user/6.png" alt="" />
                My Account <i className="fa fa-angle-down" aria-hidden="true" />
              </a>
              {/* Dropdown Structure */}
              <ul id="top-menu" className="dropdown-content top-menu-sty">
                <li>
                  <a href="admin-panel-setting.html" className="waves-effect">
                    <i className="fa fa-cogs" aria-hidden="true" />
                    Admin Setting
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a href="#" className="ho-dr-con-last waves-effect">
                    <i className="fa fa-sign-in" aria-hidden="true" /> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*== BODY CONTNAINER ==*/}
        <div className="container-fluid sb2">
          <div className="row">
            <div className="sb2-1">
              {/*== USER INFO ==*/}
              <div className="sb2-12">
                <ul>
                  <li>
                    <img src="images/placeholder.jpg" alt="" />
                  </li>
                  <li>
                    <h5>
                      Victoria Baker <span> Santa Ana, CA</span>
                    </h5>
                  </li>
                  <li />
                </ul>
              </div>
              {/*== LEFT MENU ==*/}
              <div className="sb2-13">
                <ul className="collapsible" data-collapsible="accordion">
                  <li>
                    <a href="admin.html" className="menu-active">
                      <i className="fa fa-bar-chart" aria-hidden="true" />{" "}
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="admin-setting.html">
                      <i className="fa fa-cogs" aria-hidden="true" /> Site
                      Setting
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="collapsible-header">
                      <i className="fa fa-book" aria-hidden="true" /> All
                      Courses
                    </a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li>
                          <a href="admin-all-courses.html">All Course</a>
                        </li>
                        <li>
                          <a href="admin-add-courses.html">Add New Course</a>
                        </li>
                        <li>
                          <a href="admin-trash-courses.html">Trash Course</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="collapsible-header">
                      <i className="fa fa-user" aria-hidden="true" /> Users
                    </a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li>
                          <a href="admin-user-all.html">All Users</a>
                        </li>
                        <li>
                          <a href="admin-user-add.html">Add New user</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="collapsible-header">
                      <i className="fa fa-bookmark-o" aria-hidden="true" />
                      All Pages
                    </a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li>
                          <a href="admin-page-all.html">Pages</a>
                        </li>
                        <li>
                          <a href="admin-page-add.html">Create New Page</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="collapsible-header">
                      <i className="fa fa-bars" aria-hidden="true" /> Menu
                    </a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li>
                          <a href="admin-main-menu.html">Main menu</a>
                        </li>
                        <li>
                          <a href="admin-about-menu.html">About menu</a>
                        </li>
                        <li>
                          <a href="admin-admission-menu.html">Admission menu</a>
                        </li>
                        <li>
                          <a href="admin-all-menu.html">All page menu</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="admin-slider.html">
                      <i className="fa fa-image" aria-hidden="true" /> Slider
                    </a>
                  </li>
                  <li>
                    <a href="admin-quick-link.html">
                      <i
                        className="fa fa-external-link-square"
                        aria-hidden="true"
                      />{" "}
                      Slider quick link
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="collapsible-header">
                      <i className="fa fa-calendar" aria-hidden="true" /> Events
                    </a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li>
                          <a href="admin-event-all.html">All Events</a>
                        </li>
                        <li>
                          <a href="admin-event-add.html">Create New Events</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="collapsible-header">
                      <i className="fa fa-bullhorn" aria-hidden="true" />{" "}
                      Seminar
                    </a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li>
                          <a href="admin-seminar-all.html">All Seminar</a>
                        </li>
                        <li>
                          <a href="admin-seminar-add.html">
                            Create New Seminar
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="collapsible-header">
                      <i className="fa fa-graduation-cap" aria-hidden="true" />{" "}
                      Job Vacants
                    </a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li>
                          <a href="admin-job-all.html">All Jobs</a>
                        </li>
                        <li>
                          <a href="admin-job-add.html">Create New Job</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="collapsible-header">
                      <i className="fa fa-pencil" aria-hidden="true" /> Exam
                      time table
                    </a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li>
                          <a href="admin-exam-all.html">All Exams</a>
                        </li>
                        <li>
                          <a href="admin-exam-add.html">Add New Exam</a>
                        </li>
                        <li>
                          <a href="admin-exam-group-all.html">All Groups</a>
                        </li>
                        <li>
                          <a href="admin-exam-group-add.html">
                            Create New Groups
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="collapsible-header">
                      <i className="fa fa-users" aria-hidden="true" /> Students
                    </a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li>
                          <a href="admin-user-all.html">All Students</a>
                        </li>
                        <li>
                          <a href="admin-user-add.html">Add New Students</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="collapsible-header">
                      <i className="fa fa-commenting-o" aria-hidden="true" />{" "}
                      Enquiry
                    </a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li>
                          <a href="admin-all-enquiry.html">All Enquiry</a>
                        </li>
                        <li>
                          <a href="admin-course-enquiry.html">Course Enquiry</a>
                        </li>
                        <li>
                          <a href="admin-admission-enquiry.html">
                            Admission Enquiry
                          </a>
                        </li>
                        <li>
                          <a href="admin-seminar-enquiry.html">
                            Seminar Enquiry
                          </a>
                        </li>
                        <li>
                          <a href="admin-event-enquiry.html">Event Enquiry</a>
                        </li>
                        <li>
                          <a href="admin-common-enquiry.html">Common Enquiry</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="collapsible-header">
                      <i className="fa fa-cloud-download" aria-hidden="true" />{" "}
                      Import &amp; Export
                    </a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li>
                          <a href="admin-export-data.html">Export all datas</a>
                        </li>
                        <li>
                          <a href="admin-import-data.html">Import all datas</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/*== BODY INNER CONTAINER ==*/}
            <div className="sb2-2">
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
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Country</th>
                                <th>Id</th>
                                <th>Date of birth</th>
                                <th>Status</th>
                                <th>View</th>
                              </tr>
                            </thead>
                            <tbody>
                                {infor}
                              <tr>
                                <td>
                                  <span className="list-img">
                                    <img src="images/user/1.png" alt="" />
                                  </span>
                                </td>
                                <td>
                                  <a href="#">
                                    <span className="list-enq-name">
                                      Marsha Hogan
                                    </span>
                                    <span className="list-enq-city">
                                      Illunois, United States
                                    </span>
                                  </a>
                                </td>
                                <td>+01 3214 6522</td>
                                <td>chadengle@dummy.com</td>
                                <td>united states</td>
                                <td>ST17241</td>
                                <td>03 Jun 1990</td>
                                <td>
                                  <span className="label label-success">
                                    Active
                                  </span>
                                </td>
                                <td>
                                  <a
                                    href="admin-student-details.html"
                                    className="ad-st-view"
                                  >
                                    View
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="list-img">
                                    <img src="images/user/2.png" alt="" />
                                  </span>
                                </td>
                                <td>
                                  <a href="#">
                                    <span className="list-enq-name">
                                      Lucas Caden
                                    </span>
                                    <span className="list-enq-city">
                                      Illunois, United States
                                    </span>
                                  </a>
                                </td>
                                <td>+01 8574 6854</td>
                                <td>lucas@gmail.com</td>
                                <td>Illinois</td>
                                <td>ST10231</td>
                                <td>16 Feb 1987</td>
                                <td>
                                  <span className="label label-success">
                                    Active
                                  </span>
                                </td>
                                <td>
                                  <a
                                    href="admin-student-details.html"
                                    className="ad-st-view"
                                  >
                                    View
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="list-img">
                                    <img src="images/user/4.png" alt="" />
                                  </span>
                                </td>
                                <td>
                                  <a href="#">
                                    <span className="list-enq-name">
                                      Ethan Oliver
                                    </span>
                                    <span className="list-enq-city">
                                      Illunois, United States
                                    </span>
                                  </a>
                                </td>
                                <td>+01 8574 6854</td>
                                <td>Ethan@gmail.com</td>
                                <td>Illinois</td>
                                <td>ST32168</td>
                                <td>21 Jun 1992</td>
                                <td>
                                  <span className="label label-success">
                                    Active
                                  </span>
                                </td>
                                <td>
                                  <a
                                    href="admin-student-details.html"
                                    className="ad-st-view"
                                  >
                                    View
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="list-img">
                                    <img src="images/user/5.png" alt="" />
                                  </span>
                                </td>
                                <td>
                                  <a href="#">
                                    <span className="list-enq-name">
                                      Ethan Oliver
                                    </span>
                                    <span className="list-enq-city">
                                      Illunois, United States
                                    </span>
                                  </a>
                                </td>
                                <td>+01 8574 6854</td>
                                <td>Ethan@gmail.com</td>
                                <td>Illinois</td>
                                <td>ST32168</td>
                                <td>21 Jun 1992</td>
                                <td>
                                  <span className="label label-success">
                                    Active
                                  </span>
                                </td>
                                <td>
                                  <a
                                    href="admin-student-details.html"
                                    className="ad-st-view"
                                  >
                                    View
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="list-img">
                                    <img src="images/user/1.png" alt="" />
                                  </span>
                                </td>
                                <td>
                                  <a href="#">
                                    <span className="list-enq-name">
                                      Marsha Hogan
                                    </span>
                                    <span className="list-enq-city">
                                      Illunois, United States
                                    </span>
                                  </a>
                                </td>
                                <td>+01 3214 6522</td>
                                <td>chadengle@dummy.com</td>
                                <td>united states</td>
                                <td>ST17241</td>
                                <td>03 Jun 1990</td>
                                <td>
                                  <span className="label label-success">
                                    Active
                                  </span>
                                </td>
                                <td>
                                  <a
                                    href="admin-student-details.html"
                                    className="ad-st-view"
                                  >
                                    View
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="list-img">
                                    <img src="images/user/2.png" alt="" />
                                  </span>
                                </td>
                                <td>
                                  <a href="#">
                                    <span className="list-enq-name">
                                      Lucas Caden
                                    </span>
                                    <span className="list-enq-city">
                                      Illunois, United States
                                    </span>
                                  </a>
                                </td>
                                <td>+01 8574 6854</td>
                                <td>lucas@gmail.com</td>
                                <td>Illinois</td>
                                <td>ST10231</td>
                                <td>16 Feb 1987</td>
                                <td>
                                  <span className="label label-success">
                                    Active
                                  </span>
                                </td>
                                <td>
                                  <a
                                    href="admin-student-details.html"
                                    className="ad-st-view"
                                  >
                                    View
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="list-img">
                                    <img src="images/user/4.png" alt="" />
                                  </span>
                                </td>
                                <td>
                                  <a href="#">
                                    <span className="list-enq-name">
                                      Ethan Oliver
                                    </span>
                                    <span className="list-enq-city">
                                      Illunois, United States
                                    </span>
                                  </a>
                                </td>
                                <td>+01 8574 6854</td>
                                <td>Ethan@gmail.com</td>
                                <td>Illinois</td>
                                <td>ST32168</td>
                                <td>21 Jun 1992</td>
                                <td>
                                  <span className="label label-success">
                                    Active
                                  </span>
                                </td>
                                <td>
                                  <a
                                    href="admin-student-details.html"
                                    className="ad-st-view"
                                  >
                                    View
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="list-img">
                                    <img src="images/user/5.png" alt="" />
                                  </span>
                                </td>
                                <td>
                                  <a href="#">
                                    <span className="list-enq-name">
                                      Ethan Oliver
                                    </span>
                                    <span className="list-enq-city">
                                      Illunois, United States
                                    </span>
                                  </a>
                                </td>
                                <td>+01 8574 6854</td>
                                <td>Ethan@gmail.com</td>
                                <td>Illinois</td>
                                <td>ST32168</td>
                                <td>21 Jun 1992</td>
                                <td>
                                  <span className="label label-success">
                                    Active
                                  </span>
                                </td>
                                <td>
                                  <a
                                    href="admin-student-details.html"
                                    className="ad-st-view"
                                  >
                                    View
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
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

export default connect(mapStateToProps, { logoutUser })(Users);
