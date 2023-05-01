import React, { useState } from "react";
import "../css/test.css";
import img from "../images/profile.PNG";
import { FaTelegramPlane } from "react-icons/fa";

const Form = () => {
  // const [state, setState] = useState(initialState)
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      setMessage("Please add all fields");
      setColor("red");
      setTimeout(() => {
        setColor("");
        setMessage("");
      }, 2000);
    } else {
      setMessage("Added sucessfully");
      setColor("green");
      setTimeout(() => {
        setColor("");
        setMessage("");
      }, 2000);
      console.log(name);
      console.log(email);
      setName("");
      setEmail("");
    }
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <img src={img} />
        <div className="message" style={{ background: color }}>
          {message}
        </div>
        <label>Name</label>
        <input
          // required
          placeholder="Enter your name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          // required
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>
          <FaTelegramPlane /> &nbsp; Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
