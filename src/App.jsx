import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavigationBar";
import AboutUs from "./Pages/AboutUs";
import ContactPage from "./Pages/ContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomeCloude";
import BlogPage from "./Pages/Blog";
import ServicesPage from "./Pages/ServicePage";
import DedicatedPostPage from "./Pages/PostPage";
import DedicatedBlogPage from "./Pages/BlogPage";
import DedicatedServicePage from "./Pages/DedicatedServicePage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-[76px]">
        <Toaster position="top-right" className="w-auto" />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/post/:id" element={<DedicatedPostPage />} />
          <Route path="/service/:id" element={<DedicatedServicePage />} />
          <Route path="/blog/:id" element={<DedicatedBlogPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
