import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const FeaturedPost = ({ navigate, loading1, featuredPosts }) => {
  if (loading1)
    return <div className="text-center h-screen text-2xl">loading...</div>;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">
          Featured Articles
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime} Mins
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-900 transition-colors">
                  {post.title}
                </h4>
                <p
                  dangerouslySetInnerHTML={{ __html: post.blogContent }}
                  className="text-gray-600 mb-4 line-clamp-3"
                />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>

                  <button
                    onClick={() => {
                      navigate(`/blog/${post._id}`);
                    }}
                    className="flex items-center gap-1 text-blue-900 hover:text-blue-700 font-medium"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
