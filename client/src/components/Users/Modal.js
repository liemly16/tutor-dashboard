import { Modal } from "antd";
import React  from 'react';

export default function UserDetail(user) {
  Modal.info({
    title: "Thông tin chi tiết",
    content: (
      <ul>
        <li>
          <span className="list-img">
            <img src="images/user/1.png" alt="" />
          </span>
        </li>
        <li>
          <span className="list-enq-name">Username: {user.username}</span>
        </li>

        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>

        <li>
          <span className="label label-success">Status: Active</span>
        </li>
      </ul>
    )
  });
}
