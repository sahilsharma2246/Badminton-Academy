import React, { useEffect, useState } from "react";
import firedb from "../../Firebase";
import "./Dashboard.css";

function Dashboard() {

  const [courts, setCourts] = useState([]);
  const [bookings, setBookings] = useState([]);

  
  useEffect(() => {
    firedb.child("Courts").on("value", (snapshot) => {
      const data = snapshot.val();
      let list = [];

      for (let id in data) {
        list.push({ id, ...data[id] });
      }

      setCourts(list);
    });
  }, []);

  
  useEffect(() => {
    firedb.child("Bookings").on("value", (snapshot) => {
      const data = snapshot.val();
      let list = [];

      for (let id in data) {
        list.push({ id, ...data[id] });
      }

      setBookings(list);
    });
  }, []);

  
  const totalRevenue = bookings.reduce(
    (sum, item) => sum + Number(item.total || 0),
    0
  );

  return (
    <div className="dashboard">

      <h2>Admin Dashboard</h2>

     
      <div className="stats">

        <div className="card">
          <h3>Total Courts</h3>
          <p>{courts.length}</p>
        </div>

        <div className="card">
          <h3>Total Bookings</h3>
          <p>{bookings.length}</p>
        </div>

        <div className="card">
          <h3>Total Revenue</h3>
          <p>₹{totalRevenue}</p>
        </div>

      </div>

      
      <div className="card">
        <h3>Recent Bookings</h3>

        {bookings.slice(-5).reverse().map((item) => (
          <div key={item.id} className="recent-item">
            <p><b>{item.user.name}</b> - ₹{item.total}</p>
            <small>{item.user.date} | {item.user.time}</small>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Dashboard;