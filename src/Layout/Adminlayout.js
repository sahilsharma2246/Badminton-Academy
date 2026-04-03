import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../Admin/AdminComponents/AdminHeader";

function AdminLayout() {
  return (
    <div className="admin-layout">
      
      <div className="sidebar">
        <AdminHeader />
      </div>

      <div className="admin-content">
        <Outlet />
      </div>

    </div>
  );
}

export default AdminLayout;