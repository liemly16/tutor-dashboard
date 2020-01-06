/* eslint-disable no-nested-ternary */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */

import "./ManagerContract.scss";

import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Table, Tag, Spin, Rate, Select, Alert, Button, Icon } from "antd";
import * as monment from "moment";
import NumberFormat from "react-number-format";
import CustomPagination from "../../components/Pagination/Pagination.component";
import EContractType from "../../enum/EContractType";
import { StatisticDatePickerComponent } from "../StatisticPage/StatisticDatePickerComponent/StatisticDatePickerComponent.component";

const { Option } = Select;

const columns = [
  {
    title: "Tên hợp đồng",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Giáo viên",
    dataIndex: "teacher",
    key: "teacher",
    render: (_id, row) => <span>{row.teacherId.displayName}</span>
  },
  {
    title: "Học sinh",
    dataIndex: "student",
    key: "student",
    render: (_id, row) => <span>{row.studentId.displayName}</span>
  },
  {
    title: "Ngày bắt đầu",
    dataIndex: "startDate",
    key: "startDate",
    render: startDate => <span>{monment(startDate).format("DD/MM/YYYY")}</span>
  },
  {
    title: "Ngày kết thúc",
    dataIndex: "endDate",
    key: "endDate",
    render: (_id, row) => (
      <span>
        {row.endDate ? monment(row.endDate).format("DD/MM/YYYY") : null}
      </span>
    )
  },
  {
    title: "Đánh giá",
    dataIndex: "rating",
    key: "rating",
    render: rating => (
      <Rate disabled defaultValue={rating} style={{ fontSize: 16 }} />
    )
  },
  {
    title: "Tổng tiền",
    dataIndex: "tottal",
    key: "tottal",
    render: (_id, row) => (
      <NumberFormat
        value={row.workingHour * row.costPerHour * 1000}
        displayType="text"
        thousandSeparator
        prefix=""
        renderText={value => <span>{value}&nbsp;VND</span>}
      />
    )
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    render: (_id, row) => (
      <span>
        <Tag color={EContractType.color[row.status]}>
          {EContractType.type[row.status]}
        </Tag>
        <Tag color={row.isPaid ? "green" : "red"} style={{ marginTop: "5px" }}>
          {row.isPaid ? "Đã chuyển tiền" : "Chưa chuyển tiền"}
        </Tag>
      </span>
    )
  }
];

// eslint-disable-next-line react/prop-types
const ManagerContract = ({ getAllContract, history }) => {
  const [dataTable, setData] = useState(null);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);
  const [err, setErr] = useState(null);
  const [status, setStatus] = useState(-1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endOpen, setendOpen] = useState(false);

  useEffect(() => {
    getAllContract(
      { limit: 5, offset: 1, status, startDate, endDate },
      getAllContractSuccess,
      getAllContractFailure
    );
  }, [getAllContract, setStartDate, setEndDate]);

  const getAllContractSuccess = ({ data, length }) => {
    setLoading(false);
    setData(data);
    setTotal(length);
  };

  const getAllContractFailure = _message => {
    setErr(_message);
    setLoading(false);
  };

  const onChangeTable = page => {
    setCurrentPage(page);
    getAllContract(
      { limit: pageSize, offset: page, status, startDate, endDate },
      getAllContractSuccess,
      getAllContractFailure
    );
  };

  const handleOnChangeSelect = value => {
    setStatus(value);
    getAllContract(
      {
        limit: pageSize,
        offset: currentPage,
        status: value,
        startDate,
        endDate
      },
      getAllContractSuccess,
      getAllContractFailure
    );
  };

  const disabledStartDate = _startDate => {
    if (!_startDate || !endDate) {
      return false;
    }
    return _startDate.valueOf() > endDate.valueOf();
  };

  const disabledEndDate = _endDate => {
    if (!_endDate || !startDate) {
      return false;
    }
    return _endDate.valueOf() <= startDate.valueOf();
  };

  const onStartChange = value => {
    setStartDate(value);
  };

  const onEndChange = value => {
    setEndDate(value);
  };

  const handleStartOpenChange = open => {
    if (!open) {
      setendOpen(true);
    }
  };

  const handleEndOpenChange = open => {
    setendOpen(open);
  };

  const handleClickButton = () => {
    getAllContract(
      { limit: pageSize, offset: currentPage, status, startDate, endDate },
      getAllContractSuccess,
      getAllContractFailure
    );
  };
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
                    <span> Santa Ana, CA</span>
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
                    <i className="fa fa-cogs" aria-hidden="true" /> Site Setting
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="collapsible-header">
                    <i className="fa fa-book" aria-hidden="true" /> All Courses
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
                        <Link to="/users">All Users</Link>
                      </li>
                      <li>
                        <a href="admin-user-add.html">Add New user</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="javascript:void(0)" className="collapsible-header">
                    <i className="fa fa-tag" aria-hidden="true" /> Tags
                  </a>
                  <div className="collapsible-body left-sub-menu">
                    <ul>
                      <li>
                        <Link to="/tags">All Tags</Link>
                      </li>
                      <li>
                        <Link to="/tags/add">Add New Tags</Link>
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
            <div className="sb2-2-1">
              <div className="table-contract">
                {!loading ? (
                  <div className="table-contract__header">
                    <Select
                      defaultValue={-1}
                      style={{ width: 180 }}
                      onChange={handleOnChangeSelect}
                    >
                      <Option value={-1}>Tất cả</Option>
                      <Option value={0}>{EContractType.type[0]}</Option>
                      <Option value={1}>{EContractType.type[1]}</Option>
                      <Option value={2}>{EContractType.type[2]}</Option>
                      <Option value={3}>{EContractType.type[3]}</Option>
                      <Option value={4}>{EContractType.type[4]}</Option>
                      <Option value={5}>{EContractType.type[5]}</Option>
                    </Select>
                    <div className="table-contract__header--picker">
                      <StatisticDatePickerComponent
                        startValue={startDate}
                        endValue={endDate}
                        endOpen={endOpen}
                        disabledStartDate={disabledStartDate}
                        onStartChange={onStartChange}
                        handleStartOpenChange={handleStartOpenChange}
                        disabledEndDate={disabledEndDate}
                        onEndChange={onEndChange}
                        handleEndOpenChange={handleEndOpenChange}
                      />
                      <Button onClick={handleClickButton}>Lọc</Button>
                    </div>
                  </div>
                ) : null}
                {loading ? (
                  <div
                    style={{
                      textAlign: "center"
                    }}
                  >
                    <Spin indicator={<Icon type="loading" spin />} />
                  </div>
                ) : err ? (
                  <Alert
                    message="Oops"
                    description="Có lỗi trong quá trình xảy ra. Vui lòng thử lại"
                    type="error"
                    style={{
                      width: "240px",
                      margin: "30px",
                      marginLeft: "auto",
                      marginRight: "auto"
                    }}
                  />
                ) : (
                  <Table
                    rowKey={record => record._id}
                    columns={columns}
                    dataSource={dataTable}
                    loading={loading}
                    pagination={false}
                    onRow={r => {
                      return {
                        onClick: () =>
                          history.push(`${history.location.pathname}/${r._id}`)
                      };
                    }}
                  />
                )}
                {!loading ? (
                  <CustomPagination
                    current={currentPage}
                    total={total}
                    onChange={onChangeTable}
                    className="pagination-custom"
                    pageSize={pageSize}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagerContract;
