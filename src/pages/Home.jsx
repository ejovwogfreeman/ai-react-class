import React from "react";
import { Link } from "react-router-dom";

const Home = ({ posts }) => {
  return (
    <div className="posts">
      <h1 style={{ marginBottom: "10px" }}>Home Page</h1>
      {posts.map((post) => {
        return (
          <Link to={`/post/${post.id}`} className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
