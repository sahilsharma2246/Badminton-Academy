import React, { useEffect, useState } from "react";
import firedb from "../../Firebase";
import "./Booking.css"

function MyBookings() {

  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({
    name: "",
    phone: "",
    date: "",
    time: ""
  });

  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

 
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // ✅ Total Price
  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

 
  const payNow = () => {

    if (!user.name || !user.phone || !user.date || !user.time) {
      alert("Fill all details");
      return;
    }

    const bookingData = {
      user,
      courts: cart,
      total,
      createdAt: new Date().toLocaleString()
    };

    firedb.child("Bookings").push(bookingData);

    alert("Booking Successful ✅");

    localStorage.removeItem("cart"); // clear cart
    setCart([]);

    setUser({
      name: "",
      phone: "",
      date: "",
      time: ""
    });
  };

  return (
    <div className="booking-page">

      <h2>My Bookings</h2>

      
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="cart-list">
          {cart.map((item, index) => (
            <div key={index} className="cart-card">
              <img src={item.img} alt="" />

              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}

     
      <h3>Total: ₹{total}</h3>

      
      <div className="booking-form">
        <input
          name="name"
          placeholder="Your Name"
          value={user.name}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={user.phone}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={user.date}
          onChange={handleChange}
        />

        <input
          type="time"
          name="time"
          value={user.time}
          onChange={handleChange}
        />

        <button onClick={payNow}>
          Pay Now
        </button>
      </div>

    </div>
  );
}

export default MyBookings;