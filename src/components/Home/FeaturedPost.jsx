import { ArrowRight, BookOpen } from "lucide-react";
// import second from 'react'
// import { useContext } from "react-router-dom";
import BlogContext from "../..//Context/Blogs";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const FeaturedPost = () => {
  const { featuredPost, loading } = useContext(BlogContext);
  // console.log("featuredPost", featuredPost);
  const navigate = useNavigate();

  if (loading) return <div className="w-full text-2xl font-semibold text-center">
        loading...
      </div>

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
        <BookOpen className="w-6 h-6 mr-2 text-green-600" />
        Featured Posts
      </h3>
      <div className="space-y-6">
        {featuredPost.data.map((post) => (
          <div
            
            key={post._id}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h4 className="font-semibold text-gray-900 mb-2">{post.title}</h4>
            <p className="text-gray-600 text-sm mb-3">
              {post.description.slice(0, 160)}...
            </p>
            <button
            onClick={() => navigate(`/post/${post._id + " featurepost"}`)}
             className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center">
              Read More <ArrowRight className="w-4  h-4 ml-1" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPost;
