import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import UserLayout from "./Layout/Userlayout";
import AdminLayout from "./Layout/Adminlayout";

// User Pages
import Home from "./User/UserPages/Home";
import Login from "./User/UserPages/Login";
import Courts from "./User/UserPages/Courts";
import MyBookings from "./User/UserPages/MyBookings";

// Admin Pages
import Dashboard from "./Admin/AdminPages/Dashboard";
import Addcourt from "./Admin/AdminPages/Addcourt";
import Manage from "./Admin/AdminPages/Manage";
import Logout from "./Admin/AdminPages/Logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

       
         <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courts" element={<Courts />} />
          <Route path="/mybookings" element={<MyBookings />} />
        </Route>

       
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="addcourt" element={<Addcourt />} />
          <Route path="manage" element={<Manage />} />
          <Route path="logout" element={<Logout />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;