import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Form from "./pages/Form";
import EditPost from "./pages/EditPost";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PostDetail from "./pages/PostDetail";
import { useState } from "react";

function App() {
  const data = [
    {
      id: 1,
      title: "Post 1",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat recusandae explicabo ipsa voluptas aperiam in amet nam, tenetur natus! Aliquam sequi possimus enim, libero numquam esse dignissimos dolore minus?",
    },
    {
      id: 2,
      title: "Post 2",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat recusandae explicabo ipsa voluptas aperiam in amet nam, tenetur natus! Aliquam sequi possimus enim, libero numquam esse dignissimos dolore minus?",
    },
    {
      id: 3,
      title: "Post 3",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat recusandae explicabo ipsa voluptas aperiam in amet nam, tenetur natus! Aliquam sequi possimus enim, libero numquam esse dignissimos dolore minus?",
    },
  ];

  const [posts, setPosts] = useState(data);

  const addPost = (post) => {
    const id = Math.random();
    const singlePost = { ...post, id };
    const newPosts = [singlePost, ...posts];
    setPosts(newPosts);
  };

  const deletePost = (id) => {
    const newPosts = posts.filter((post) => post.id !== id);
    console.log(id);
    console.log(newPosts);
    setPosts(newPosts);
  };

  const editPost = (editedPost) => {
    const editedPosts = posts.map((post) =>
      post.id === editedPost.id
        ? { ...post, title: editedPost.title, body: editedPost.body }
        : post
    );
    setPosts(editedPosts);
  };

  return (
    <div className="body">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/add_post" element={<Form addPost={addPost} />} />
          {
            <Route
              path="/post/:id"
              element={posts.map((post) => (
                <PostDetail post={post} key={post.id} deletePost={deletePost} />
              ))}
            />
          }
          <Route
            path="/edit/:id"
            element={posts.map((post) => (
              <EditPost post={post} key={post.id} editPost={editPost} />
            ))}
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
