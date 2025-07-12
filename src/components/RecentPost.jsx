import { Calendar, ChevronRight } from "lucide-react";
import BlogContext from "../Context/Blogs";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const RecentPost = () => {
  const { recentPost, loading } = useContext(BlogContext);
  if (loading) return <div>loading...</div>;

  const navigate = useNavigate();
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
        <Calendar className="w-6 h-6 mr-2 text-blue-600" />
        Recent Posts
      </h3>
      <div className="space-y-6">
        {recentPost.data.map((post) => (
          <div
            onClick={() => {}}
            key={post._id}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex  items-start justify-between">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {post.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {post.description.slice(0, 160)}...
                </p>
                <span className="text-blue-600 text-sm font-medium">
                  "June 2025"
                </span>
              </div>
              <ChevronRight
                onClick={() => navigate(`/blog/${post._id + " recentpost"}`)}
                className="w-5 h-5 cursor-pointer hover:text-blue-500 text-gray-400 ml-4"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPost;
