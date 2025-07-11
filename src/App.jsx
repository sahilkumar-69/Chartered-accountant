import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavigationBar";
import AboutUs from "./Pages/AboutUs";
import ContactPage from "./Pages/ContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomeCloude";
import BlogPage from "./Pages/Blog";
import ServicesPage from "./Pages/Service";
import BlogPage1 from "./Pages/BlogDes";
import BlogList from "./components/BlogCard";
import { useContext } from "react";
import BlogContext from "./Context/Blogs";

function App() {
  const { blogs, loading } = useContext(BlogContext);
  console.log(blogs, loading);

  return (
    <Router>
      <Navbar />
      <div className="pt-[76px]">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog/:id" element={<BlogPage1 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
