import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import BlogContext from "../Context/Blogs";

export default function BlogList() {
  // const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   fetch("http://13.203.216.121:3002/api/blogs")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setBlogs(data);
  //     });
  // }, []);

   const { blogs, loading } = useContext(BlogContext);

  if (loading) return <p>Loading blogs...</p>;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "10px",
        padding: "20px",
      }}
      className="p-4 bg-red-300 grid md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {blogs.map((blog) => (
        // console.log(blog)

        <Link to={`/blogs/${blog._id}`} key={blog._id}>
          <div
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              height: "200px",
              padding: "20px",
              textAlign: "center",
              overflow: "hidden",
              borderRadius: "4px",
            }}
            className="border p-4 shadow hover:shadow-lg transition"
          >
            <div dangerouslySetInnerHTML={{ __html: blog.blogContent }} />
            <p style={{ fontSize: "0.8rem", color: "#666" }}>
              Posted: {new Date(blog.createdAt).toLocaleString()}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
