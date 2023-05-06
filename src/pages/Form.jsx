import React, { useState } from "react";
import "../css/test.css";
import { useNavigate } from "react-router-dom";

const Form = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, body, id: Math.random() });
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Title</label>
      <input
        type="text"
        placeholder="Enter Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="">body</label>
      <textarea
        name=""
        placeholder="Enter Post body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button>ADD POST</button>
    </form>
  );
};

export default Form;
