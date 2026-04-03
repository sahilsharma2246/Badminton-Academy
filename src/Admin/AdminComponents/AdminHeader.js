import React from "react";
import { Link } from "react-router-dom";
import "./AdminHeader.css";

function AdminHeader() {
  return (
    <>
  <h3>Admin Panel</h3>

  <Link to="/admin">Dashboard</Link>
  <Link to="/admin/addcourt">Add Court</Link>
  <Link to="/admin/manage">Manage</Link>
  <Link to="/admin/logout">Logout</Link>
</>
  );
}

export default AdminHeader;