import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PostDetail from "./pages/PostDetail";

function App() {
  const posts = [
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
  return (
    <div className="body">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/post/:id" element={<PostDetail posts={posts} />} />
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
