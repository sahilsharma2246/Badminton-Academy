import React from "react";
import { Outlet } from "react-router-dom";

import UserHeader from "../User/UserComponents/UserHeader";

function UserLayout() {
  return (
    <div>
      <UserHeader />
      <div className="layout-container">
        <Outlet />
      </div>
    </div>
  );
}

export default UserLayout;