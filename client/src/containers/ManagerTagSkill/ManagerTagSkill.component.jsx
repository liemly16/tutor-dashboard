/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import "./ManagerTagSkill.scss";

import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Table, Tag, Divider, Button, Modal } from "antd";
import ModalSkill from "../../components/ModalSkill/ModalSkill.component";
import CustomPagination from "../../components/Pagination/Pagination.component";

const { confirm } = Modal;

// eslint-disable-next-line react/prop-types
const ManagerTagSkill = ({
  data,
  dataMajor,
  loadingData,
  getAllMajor,
  getAllTag,
  createTag,
  editTag,
  length,
  deleteTag,
  user
}) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [tag, setTag] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);

  useEffect(() => {
    getAllMajor();
    getAllTag({ limit: pageSize, page: 1 });
  }, [getAllTag, getAllMajor, pageSize]);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = values => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 1000);
    createTag(values);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const showModalEdit = row => {
    setTag(row);
    setVisibleEdit(true);
  };

  const handleOkEdit = values => {
    setLoadingEdit(true);
    setTimeout(() => {
      setLoadingEdit(false);
      setVisibleEdit(false);
    }, 1000);

    editTag({ ...values, _id: tag._id });
  };

  const handleCancelEdit = () => {
    setVisibleEdit(false);
  };

  const showConfirm = row => {
    confirm({
      title: "Bạn có muốn xóa tag kĩ năng này?",
      okText: "Có",
      okType: "primary",
      cancelText: "Hủy",
      cancelButtonProps: {
        type: "link"
      },
      onOk() {
        deleteTag({ _id: row._id });
      },
      onCancel() {}
    });
  };

  const onChangeTable = page => {
    setCurrentPage(page);
    getAllTag({ limit: pageSize, offset: page });
  };

  const columns = [
    {
      title: "Tên kĩ năng",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Ngành học",
      dataIndex: "major",
      key: "major",
      render: (_id, row) => <Tag color="cyan">{row.majorId.name}</Tag>
    },
    {
      title: "Thao tác",
      dataIndex: "action",
      key: "action",
      render: (_id, row) => (
        <span>
          <Button
            onClick={() => showModalEdit(row)}
            className="link link__edit"
          >
            Sửa
          </Button>
          <Divider type="vertical" />
          <Button
            onClick={() => showConfirm(row)}
            className="link link__delete"
          >
            Xóa
          </Button>
        </span>
      )
    }
  ];

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
                    {user.name} <span> Santa Ana, CA</span>
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
              <div className="tags">
                <Button
                  className="tags__button"
                  type="primary"
                  onClick={showModal}
                >
                  Thêm kĩ năng
                </Button>
                {data ? (
                  <Table
                    rowKey={record => record._id}
                    columns={columns}
                    dataSource={data}
                    className="tags__table"
                    loading={loadingData}
                    pagination={false}
                  />
                ) : null}
                {!loadingData ? (
                  <CustomPagination
                    current={currentPage}
                    total={length}
                    onChange={onChangeTable}
                    className="pagination-custom"
                    pageSize={pageSize}
                  />
                ) : null}
                <ModalSkill
                  showModal={showModal}
                  loading={loading}
                  visible={visible}
                  handleOk={handleOk}
                  handleCancel={handleCancel}
                  options={dataMajor}
                  title="Tạo tag kĩ năng"
                />
                <ModalSkill
                  showModal={showModalEdit}
                  loading={loadingEdit}
                  visible={visibleEdit}
                  handleOk={handleOkEdit}
                  handleCancel={handleCancelEdit}
                  options={dataMajor}
                  data={tag}
                  title="Chỉnh sửa tag kĩ năng"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagerTagSkill;
