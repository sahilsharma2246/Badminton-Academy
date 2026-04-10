/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import firedb from "../../Firebase";
import "./Courts.css"

function Courts() {

  const [courts, setCourts] = useState([]);

  
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

 
  const addToCart = (court) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(court);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to Cart ✅");
  };

  return (
    <div className="courts-page">

      <h2>Available Courts</h2>

      <div className="courts-grid">
        {courts.map((court) => (
          <div className="court-card" key={court.id}>
            <img src={court.img} />

            <h3>{court.name}</h3>
            <p>₹{court.price}</p>

            <button onClick={() => addToCart(court)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Courts;