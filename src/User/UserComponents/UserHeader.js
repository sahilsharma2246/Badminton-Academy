import React from "react";
import { Link } from "react-router-dom";
import "./UserHeader.css";

function UserHeader() {
  return (
   <div className="header">
  <h2>Academy</h2>

  <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/courts">Courts</Link>
    <Link to="/mybookings">Bookings</Link>
    <Link to="/login"> 👤</Link>
  </div>
</div>
  );
}

export default UserHeader;