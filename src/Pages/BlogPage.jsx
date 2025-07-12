import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogContext from "../Context/Blogs";

export default function DedicatedBlogPage() {
  const { id: _id } = useParams();

  const [Post, setPost] = useState({});

  const { recentPost, featuredPost, service } = useContext(BlogContext);

  // console.log("line fjkdsl", _id);

  const id = _id.split(" ")[0];

  const postfix = _id.split(" ")[1];

  let selectedPost;
  useEffect(() => {
    scrollTo(0, 0);

    switch (postfix) {
      case "recentpost":
        selectedPost = recentPost.data.find((post) => post._id === id);
        // console.log("first");
        setPost(selectedPost);
        break;

      case "featurepost":
        selectedPost = featuredPost.data.find((post) => post._id === id);
        // console.log("second");
        setPost(selectedPost);

      case "caservice":
        selectedPost = service.data.find((post) => post._id === id);
        // console.log("second");
        setPost(selectedPost);

      default:
        break;
    }
  }, [recentPost, _id, featuredPost, service]);

  return (
    <div className="min-h-screen bg-gray-100 font-sans p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <BlogComponent {...Post} />
      </div>
    </div>
  );
}

// BlogPost component displays the full blog content
function BlogComponent({ title, description }) {
  return (
    <article className="p-6 sm:p-8 md:p-10 lg:p-12">
      {/* Blog Post Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          {title}
        </h1>
        <div className="text-gray-600 text-sm sm:text-base flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <p className="flex items-center">
            <svg
              className="w-4 h-4 mr-1 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
            By{" "}
            <span className="font-medium ml-1 text-blue-600">Ankit Yadav</span>
          </p>
          <span className="hidden sm:inline-block text-gray-400">•</span>
          <p className="flex items-center">
            <svg
              className="w-4 h-4 mr-1 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
            <time dateTime={"date || '23/03/2003'"}>23/03/2003</time>
          </p>
        </div>
      </header>

      {/* Blog Post Content */}
      <div
        className="prose prose-lg max-w-none leading-loose text-gray-700  "
        dangerouslySetInnerHTML={{ __html: description }}
      />

      {/* Blog Post Tags */}
      {/* {tags && tags.length > 0 && (
        <footer className="mt-10 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition-colors duration-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </footer>
      )} */}
    </article>
  );
}
