// BlogProvider.js
import { useState, useEffect } from "react";
import BlogContext from "../Context/Blogs";

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [service, setService] = useState([]);
  const [featuredPost, setFeaturedPost] = useState([]);
  const [recentPost, setRecentPost] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const blogResp = await fetch(
        "https://cawebsite-gg5g.onrender.com/api/blogs"
      );
      const blogData = await blogResp.json();

      setBlogs(blogData);

      const citiesResp = await fetch(
        "https://cawebsite-gg5g.onrender.com/api/get-city"
      );
      const citiesData = await citiesResp.json();

      setCities(citiesData);

      const serviceResp = await fetch(
        "https://cawebsite-gg5g.onrender.com/api/get-caservice"
      );
      const serviceData = await serviceResp.json();

      setService(serviceData);

      const recentPostResp = await fetch(
        "https://cawebsite-gg5g.onrender.com/api/get-allrecentpost"
      );
      const recentPostData = await recentPostResp.json();

      setRecentPost(recentPostData);

      const featuredPostResp = await fetch(
        "https://cawebsite-gg5g.onrender.com/api/getfeature-post"
      );
      const featuredPostData = await featuredPostResp.json();

      setFeaturedPost(featuredPostData);
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
    <BlogContext.Provider
      value={{ recentPost, cities, service, featuredPost, blogs, loading }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
