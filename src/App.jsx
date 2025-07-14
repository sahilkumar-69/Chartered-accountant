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
import WhatsappIcon from "./components/WhatsappIcon";
import PopupForm from "./components/PopUp";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="fixed bottom-5 right-5 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600">
        <a
          href="https://wa.me/919211815556"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsappIcon size={28} color="white" />
        </a>
      </div>

      <div className="pt-[76px]">
        <Toaster position="top-right" className="w-auto" />
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/nav" element={} /> */}
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
      <PopupForm />
    </Router>
  );
}

export default App;
