import React from "react";
import { useParams } from "react-router-dom";

const PostDetail = ({ posts }) => {
  const params = useParams();
  return (
    <div className="posts">
      <h1 style={{ marginBottom: "10px" }}>Post Detail</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            {post.id === Number(params.id) ? (
              <div className="post">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PostDetail;
