// BlogProvider.js
import React, { useState, useEffect } from "react";
import BlogContext from "../Context/Blogs";

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("http://13.203.216.121:3002/api/blogs"); // Replace with your real API
      const data = await res.json();

      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, loading }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
