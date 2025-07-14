import { ChevronLeft, ChevronRight, Clock, User } from "lucide-react";
import React from "react";

const BlogPost = ({
  startIndex,
  postsPerPage,
  filteredPosts,
  currentPosts,
  totalPages,
  setCurrentPage,
  currentPage,
  navigate,
  loading1,
}) => {
  if (loading1) return <div className="text-center text-2xl" >loading...</div>;

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-gray-900">Latest Articles</h3>
          <div className="text-sm text-gray-500">
            Showing {startIndex + 1}-
            {Math.min(startIndex + postsPerPage, filteredPosts.length)} of{" "}
            {filteredPosts.length} articles
          </div>
        </div>

        {currentPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime} Mins
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 hover:text-blue-900 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p
                    dangerouslySetInnerHTML={{ __html: post.blogContent }}
                    className="text-gray-600 mb-4 line-clamp-3"
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {post.author}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <button
                    onClick={() => {
                      navigate(`/blog/${post._id}`);
                    }}
                    className="w-full mt-4 bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    Read Article
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No articles found matching your search criteria.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center mt-12">
            <nav className="flex items-center gap-2">
              <button
                onClick={() => {
                  setCurrentPage((prev) => Math.max(prev - 1, 1));
                  scrollTo(0, 1200);
                }}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-3 py-2 text-gray-500 hover:text-blue-900 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      scrollTo(0, 1200);
                    }}
                    className={`px-3 py-2 rounded-lg ${
                      currentPage === page
                        ? "bg-blue-900 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={() => {
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                  scrollTo(0, 1200);
                }}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-3 py-2 text-gray-500 hover:text-blue-900 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPost;
