import React, { useState } from "react";
import "../css/test.css";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = ({ post, editPost }) => {
  const navigate = useNavigate();
  const params = useParams();

  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSubmit = (e) => {
    e.preventDefault();
    editPost({ title, body, id: post.id });
    navigate("/");
  };
  return (
    <>
      {post.id === Number(params.id) ? (
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
          <button>EDIT POST</button>
        </form>
      ) : null}
    </>
  );
};

export default EditPost;
