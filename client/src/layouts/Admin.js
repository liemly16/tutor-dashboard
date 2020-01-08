import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import Dashboard from "../containers/Dashboard";
import ManagerTagSkill from "../containers/ManagerTagSkill/ManagerTagSkill.container";
import ManagerContract from "../containers/ManagerContract/ManagerContract.container";
import DetailContractPage from "../containers/DetailContractPage/DetailContractPage.container";
import ManagerReport from "../containers/ManagerReport/ManagerReport.container";
import DetailContractReport from "../containers/DetailContractReport/DetailContractReport.container";
import StatisticPage from "../containers/StatisticPage/StatisticPage.container";
import TopSalePageBySkill from "../containers/TopSalePageBySkill/TopSalePageBySkill.container";
import SalaryStatisticPageContainer from "../containers/SalaryStatisticsPage/SalaryStatisticsPage.container";
import ManagerAccountUserContainer from "../containers/ManagerAccountUser/ManagerAccountUser.container";
import DetailInformationUserContainer from "../containers/DetailInformationUser/DetailInformationUser.container";
import { logout } from "../redux/user/user.actions";

const switchRoutes = (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/users" component={ManagerAccountUserContainer} />
    <Route exact path="/users/:id" component={DetailInformationUserContainer} />
    <Route exact path="/tags" component={ManagerTagSkill} />
    <Route exact path="/contracts" component={ManagerContract} />
    <Route exact path="/contracts/:id" component={DetailContractPage} />
    <Route exact path="/reports" component={ManagerReport} />
    <Route exact path="/reports/:id" component={DetailContractReport} />
    <Route exact path="/statistic" component={StatisticPage} />
    <Route
      exact
      path="/salary-statistic"
      component={SalaryStatisticPageContainer}
    />
    <Route exact path="/top-sales-skill" component={TopSalePageBySkill} />
    <Redirect from="/" to="/users" />
  </Switch>
);

class Admin extends Component {
  handleLogout = () => {
    this.props.logout();
  };

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.user) {
  //     this.props.history.push("/users");
  //   }
  // }

  // componentDidMount() {
  //   // If logged in and user navigates to Login page, should redirect them to dashboard
  //   if (!this.props.user) {
  //     this.props.history.push("/login");
  //   }
  // }
 
  
  render() {
    
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
                  <a
                    href="/login"
                    onClick={this.handleLogout}
                    className="ho-dr-con-last waves-effect"
                  >
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
                    {this.props.user?this.props.user.displayName:"Xuan Tam"} 
                    </h5>
                  </li>
                  <li />
                </ul>
              </div>
              {/*== LEFT MENU ==*/}
              <div className="sb2-13">
                <ul className="collapsible" data-collapsible="accordion">
                  <li>
                    <a href="/" className="menu-active">
                      <i className="fa fa-bar-chart" aria-hidden="true" />{" "}
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="/users" className="collapsible-header">
                      <i className="fa fa-user" aria-hidden="true" /> Users
                    </a>
                    <div className="collapsible-body left-sub-menu"></div>
                  </li>
                  <li>
                    <a href="/tags" className="collapsible-header">
                      <i className="fa fa-tag" aria-hidden="true" /> Tags
                    </a>
                    <div className="collapsible-body left-sub-menu"></div>
                  </li>
                  <li>
                    <a href="/contracts" className="collapsible-header">
                      <i className="fa fa-bookmark-o" aria-hidden="true" />
                      Contracts
                    </a>
                  </li>
                  <li>
                    <a href="/reports" className="collapsible-header">
                      <i className="fa fa-bars" aria-hidden="true" /> Reports
                    </a>
                  </li>
                  <li>
                    <a href="/statistic">
                      <i className="fa fa-image" aria-hidden="true" /> Statistic
                    </a>
                  </li>
                  <li>
                    <a href="/salary-statistic">
                      <i
                        className="fa fa-external-link-square"
                        aria-hidden="true"
                      />{" "}
                      Top revenue by tutor
                    </a>
                  </li>
                  <li>
                    <a href="/top-sales-skill" className="collapsible-header">
                      <i className="fa fa-calendar" aria-hidden="true" />
                      Top revenue by skill
                    </a>
                  </li>
                  {/* <li>
                  <a href="javascript:void(0)" className="collapsible-header">
                    <i className="fa fa-bullhorn" aria-hidden="true" /> Seminar
                  </a>
                  <div className="collapsible-body left-sub-menu">
                    <ul>
                      <li>
                        <a href="admin-seminar-all.html">All Seminar</a>
                      </li>
                      <li>
                        <a href="admin-seminar-add.html">Create New Seminar</a>
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
                    <i className="fa fa-pencil" aria-hidden="true" /> Exam time
                    table
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
                </li> */}
                  {/* <li>
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
                        <a href="admin-seminar-enquiry.html">Seminar Enquiry</a>
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
                </li> */}
                </ul>
              </div>
            </div>
            {/*== BODY INNER CONTAINER ==*/}
            <div className="sb2-2">{switchRoutes}</div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.currentUser
});

export default connect(mapStateToProps, { logout })(Admin);
