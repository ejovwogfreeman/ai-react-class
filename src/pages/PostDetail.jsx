import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const PostDetail = ({ post, deletePost }) => {
  const params = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    deletePost(post.id);
    navigate("/");
  };

  return (
    <div className="posts">
      {post.id === Number(params.id) ? (
        <>
          <h1 style={{ marginBottom: "10px" }}>Post Detail</h1>

          <div className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div className="action">
              <button className="btn" onClick={handleDelete}>
                Delete Post
              </button>
              <Link to={`/edit/${post.id}`} className="btn">
                Edit Post
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default PostDetail;
