import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogContext from "../Context/Blogs";
import { PostComponent } from "../components/Home/PostComponent";

export default function DedicatedPostPage() {
  const { id: _id } = useParams();

  const [Post, setPost] = useState({});

  const { recentPost, featuredPost } = useContext(BlogContext);

  const id = _id.split(" ")[0];

  const postfix = _id.split(" ")[1];

  let selectedPost;
  useEffect(() => {
    scrollTo(0, 0);

    if (postfix == "recentpost") {
      selectedPost = recentPost.data.find((post) => post._id === id);
      setPost(selectedPost);
    } else if (postfix == "featurepost") {
      selectedPost = featuredPost.data.find((post) => post._id === id);
      setPost(selectedPost);
    }
  }, [recentPost, _id, featuredPost]);

  return (
    <div className="min-h-screen bg-gray-100 font-sans p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <PostComponent {...Post} />
      </div>
    </div>
  );
}


