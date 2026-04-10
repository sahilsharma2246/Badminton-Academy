import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import  firedb  from "../../Firebase";
import "./AddCourt.css"

function Addcourt() {
  const [data, setData] = useState({
    name: "",
    price: "",
    img: "",
    
  });

  const [Courts, setCourts] = useState([]);
  const [editId, setEditId] = useState(null);

  const navigate = useNavigate();


  useEffect(() => {
    const key = localStorage.getItem("userKey");

    if (!key) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    firedb.child("Academy").child(key).once("value", (snapshot) => {
      const user = snapshot.val();

      if (!user || user.status !== 1) {
        alert("Session expired. Please login again");
        navigate("/login");
      }
    });
  }, [navigate]);


  useEffect(() => {
    firedb.child("Courts").on("value", (snapshot) => {
      const data = snapshot.val();
      const list = [];

      for (let id in data) {
        list.push({ id, ...data[id] });
      }

      setCourts(list);
    });
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  
  const upload = () => {
    if (!data.name || !data.price) {
      alert("Fill required fields");
      return;
    }

    if (editId) {
      firedb.child("Courts").child(editId).update(data);
      alert("Updated ✅");
      setEditId(null);
    } else {
      firedb.child("Courts").push(data);
      alert("Court Added ✅");
    }

    setData({ name: "", price: "", img: "" });
  };

 
  const del = (id) => {
    firedb.child("Courts").child(id).remove();
    alert("Deleted ❌");
  };

 
  const edit = (item) => {
    setData(item);
    setEditId(item.id);
  };

  return (
    <div className="upload-container">

      <div className="upload-box">
        <h2>Upload Racquet</h2>

        <input
          name="name"
          placeholder="Court Name"
          value={data.name}
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="Price"
          value={data.price}
          onChange={handleChange}
        />

        <input
          name="img"
          placeholder="Image URL"
          value={data.img}
          onChange={handleChange}
        />

        

        <button onClick={upload}>
          {editId ? "Update" : "Upload"}
        </button>
      </div>


      <div className="table-container">
        <h2>Racquets List</h2>

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {Courts.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <img src={item.img} alt="" width="100" />
                </td>
                
                <td>
                  <button onClick={() => edit(item)}>Edit</button>
                  <button onClick={() => del(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
    );
}

export default Addcourt