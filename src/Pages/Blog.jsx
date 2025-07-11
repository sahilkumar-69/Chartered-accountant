import { useEffect, useState } from "react";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  Tag,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import DownArrow from "../components/DownArrow";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [mail, setMail] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = [
    "All",
    "GST",
    "Income Tax",
    "Audit",
    "NGO Services",
    "International Tax",
    "Business Registration",
  ];

  const blogPosts = [
    {
      id: 1,
      title:
        "E-Way Bill 2.0: Key Changes in GST E-Way Bill System and What Businesses Must Know",
      excerpt:
        "Understanding the latest updates in GST E-Way Bill system and how they impact your business operations.",
      category: "GST",
      author: "CA Rajesh  ",
      date: "June 15, 2025",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: true,
    },
    {
      id: 2,
      title:
        "Supreme Court Allows GST Return Rectification Beyond Due Dates: Key Takeaways for Businesses",
      excerpt:
        "Latest Supreme Court ruling on GST return rectification and its implications for taxpayers.",
      category: "GST",
      author: "CA Priya  ",
      date: "June 10, 2025",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
    },
    {
      id: 3,
      title:
        "Delhi HC Sets Crucial Precedent: No Withholding GST ITC Refunds Without Challenging Appellate Orders",
      excerpt:
        "Analysis of Delhi High Court's landmark judgment on GST Input Tax Credit refunds.",
      category: "GST",
      author: "CA Vikram  ",
      date: "June 5, 2025",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
    },
    {
      id: 4,
      title:
        "TDS on Software License Purchases from Non-Residents: Supreme Court's Landmark Judgment",
      excerpt:
        "Understanding the implications of Supreme Court's decision on TDS for software license purchases.",
      category: "Income Tax",
      author: "CA Rajesh  ",
      date: "May 28, 2025",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: true,
    },
    {
      id: 5,
      title:
        "Understanding Section 54: A Guide to Capital Gains Tax Exemptions on Residential Property Sales",
      excerpt:
        "Comprehensive guide to Section 54 exemptions for capital gains on residential property transactions.",
      category: "Income Tax",
      author: "CA Priya  ",
      date: "May 20, 2025",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
    },
    {
      id: 6,
      title:
        "Buy-Back of Shares by Private Companies: Legal and Tax Implications",
      excerpt:
        "Complete analysis of share buyback procedures and tax implications for private companies.",
      category: "Business Registration",
      author: "CA Vikram  ",
      date: "May 15, 2025",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
    },
    {
      id: 7,
      title: "GST ASMT-10 Notice: How to Reply and Compliance Requirements",
      excerpt:
        "Step-by-step guide on responding to GST ASMT-10 notices and ensuring compliance.",
      category: "GST",
      author: "CA Rajesh  ",
      date: "May 8, 2025",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
    },
    {
      id: 8,
      title: "International Taxation: NRI Tax Compliance and DTAA Benefits",
      excerpt:
        "Understanding NRI taxation requirements and how to leverage Double Taxation Avoidance Agreements.",
      category: "International Tax",
      author: "CA Priya  ",
      date: "May 3, 2025",
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
    },
    {
      id: 9,
      title: "NGO Registration and Compliance: 80G, 12A, and FCRA Requirements",
      excerpt:
        "Complete guide to NGO registration processes and ongoing compliance requirements.",
      category: "NGO Services",
      author: "CA Vikram  ",
      date: "April 28, 2025",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  const featuredPosts = blogPosts.filter((post) => post.featured);

  const handleSubmit = async () => {};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <DownArrow />

      <section
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1661407772941-c5a2a5c9595b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D')",
        }}
        className="bg-no-repeat bg-cover   h-[80svh] from-blue-900 to-blue-800 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Expert Insights & <span className="text-yellow-500">Updates</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest developments in taxation, GST,
              auditing, and financial compliance from our team of experienced
              Chartered Accountants.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-blue-200">
              <span>GST Updates</span>
              <span>•</span>
              <span>Tax Planning</span>
              <span>•</span>
              <span>Audit Insights</span>
              <span>•</span>
              <span>Compliance Guide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Featured Articles
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={post.image}
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
                        {post.readTime}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-900 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {post.author}
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          navigate("/blog/1");
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
      )}

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Latest Articles
            </h3>
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
                    src={post.image}
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
                        {post.readTime}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 hover:text-blue-900 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
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
                        navigate("/blog/1");
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

      {/* Newsletter Subscription */}
      <section className="bg-gradient-to-b from-blue-900 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates on tax laws, GST
            regulations, and financial compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={mail}
              onChange={(e) => {
                setMail(e.target.value);
              }}
              required
              className="flex-1 px-4 py-3 border-[1px] border-white hover:border-2 text-white rounded-lg focus:outline-none focus:ring-2 "
            />
            <button
              onClick={handleSubmit}
              className="text-white hover:text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-white border-2 border-white transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
