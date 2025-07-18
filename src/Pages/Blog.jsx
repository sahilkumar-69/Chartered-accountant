import { useContext, useEffect, useState } from "react";
import DownArrow from "../components/DownArrow";
import { useNavigate } from "react-router-dom";
import BlogContext from "../Context/Blogs";
import NewsLetterSub from "../components/Blog/NewsLetterSub";
import HeroBlog from "../components/Blog/HeroBlog";
import BlogPost from "../components/Blog/BlogPost";
import FeaturedPost from "../components/Blog/FeaturedPost";

const BlogPage = () => {
  const { blogs, loading: loading1 } = useContext(BlogContext);

  const navigate = useNavigate();
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;



  const blogPosts = blogs;

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.blogContent.toLowerCase().includes(searchTerm.toLowerCase());
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


  const BlogPostProps = {
    startIndex,
    postsPerPage,
    filteredPosts,
    currentPosts,
    totalPages,
    setCurrentPage,
    currentPage,
    navigate,
    loading1,
  };

  const FeaturedPostProps = {
    featuredPosts,
    navigate,
    loading1,
  };


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <DownArrow />
      <HeroBlog />

      {/* Featured Posts */}
      {featuredPosts.length > 0 && <FeaturedPost {...FeaturedPostProps} />}

      {/* Blog Posts Grid */}
      <BlogPost {...BlogPostProps} />

      {/* Newsletter Subscription */}
      <NewsLetterSub />
    </div>
  );
};

export default BlogPage;
