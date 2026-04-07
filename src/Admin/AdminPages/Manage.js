import React, { useEffect, useState } from "react";
import firedb from "../../Firebase";
import "./Manage.css";

function Manage() {
  const [bookings, setBookings] = useState([]);

  // ✅ Fetch bookings from Firebase
  useEffect(() => {
    const dbRef = firedb.child("Bookings");

    dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      let list = [];

      if (data) {
        for (let id in data) {
          list.push({ id, ...data[id] });
        }
      }

      setBookings(list);
    });

    // ✅ Cleanup listener
    return () => dbRef.off();
  }, []);

  // ✅ Remove booking
  const handleRemove = (id) => {
    if (window.confirm("Delete this booking?")) {
      firedb.child("Bookings").child(id).remove();
    }
  };

  return (
    <div className="manage-page">
      <h2>All Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings found</p>
      ) : (
        bookings.map((item) => (
          <div key={item.id} className="booking-card">

            {/* USER DETAILS */}
            <div className="user-info">
              <h3>{item.user?.name}</h3>
              <p>📞 {item.user?.phone}</p>
              <p>📅 {item.user?.date} | ⏰ {item.user?.time}</p>
            </div>

            {/* COURTS */}
            <div className="courts-list">
              {item.courts?.map((court, index) => (
                <div key={index} className="court-item">
                  <img src={court.img} alt="court" />
                  <p>{court.name} - ₹{court.price}</p>
                </div>
              ))}
            </div>

            {/* TOTAL */}
            <h4>Total: ₹{item.total}</h4>

            {/* REMOVE BUTTON */}
            <button
              className="remove-btn"
              onClick={() => handleRemove(item.id)}
            >
              ❌ Remove
            </button>

          </div>
        ))
      )}
    </div>
  );
}

export default Manage;