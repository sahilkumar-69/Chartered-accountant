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

  // const categories = [
  //   "All",
  //   "GST",
  //   "Income Tax",
  //   "Audit",
  //   "NGO Services",
  //   "International Tax",
  //   "Business Registration",
  // ];

  const blogPosts = blogs.slice(0, 1);

  // const blogPosts = [
  //   {
  //     id: 1,
  //     title:
  //       "E-Way Bill 2.0: Key Changes in GST E-Way Bill System and What Businesses Must Know",
  //     excerpt:
  //       "Understanding the latest updates in GST E-Way Bill system and how they impact your business operations.",
  //     category: "GST",
  //     author: "CA Rajesh  ",
  //     date: "June 15, 2025",
  //     readTime: "5 min read",
  //     image:
  //       "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //     featured: true,
  //   },
  //   {
  //     id: 2,
  //     title:
  //       "Supreme Court Allows GST Return Rectification Beyond Due Dates: Key Takeaways for Businesses",
  //     excerpt:
  //       "Latest Supreme Court ruling on GST return rectification and its implications for taxpayers.",
  //     category: "GST",
  //     author: "CA Priya  ",
  //     date: "June 10, 2025",
  //     readTime: "4 min read",
  //     image:
  //       "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //     featured: false,
  //   },
  //   {
  //     id: 3,
  //     title:
  //       "Delhi HC Sets Crucial Precedent: No Withholding GST ITC Refunds Without Challenging Appellate Orders",
  //     excerpt:
  //       "Analysis of Delhi High Court's landmark judgment on GST Input Tax Credit refunds.",
  //     category: "GST",
  //     author: "CA Vikram  ",
  //     date: "June 5, 2025",
  //     readTime: "6 min read",
  //     image:
  //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //     featured: false,
  //   },
  //   {
  //     id: 4,
  //     title:
  //       "TDS on Software License Purchases from Non-Residents: Supreme Court's Landmark Judgment",
  //     excerpt:
  //       "Understanding the implications of Supreme Court's decision on TDS for software license purchases.",
  //     category: "Income Tax",
  //     author: "CA Rajesh  ",
  //     date: "May 28, 2025",
  //     readTime: "7 min read",
  //     image:
  //       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //     featured: true,
  //   },
  //   {
  //     id: 5,
  //     title:
  //       "Understanding Section 54: A Guide to Capital Gains Tax Exemptions on Residential Property Sales",
  //     excerpt:
  //       "Comprehensive guide to Section 54 exemptions for capital gains on residential property transactions.",
  //     category: "Income Tax",
  //     author: "CA Priya  ",
  //     date: "May 20, 2025",
  //     readTime: "8 min read",
  //     image:
  //       "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //     featured: false,
  //   },
  //   {
  //     id: 6,
  //     title:
  //       "Buy-Back of Shares by Private Companies: Legal and Tax Implications",
  //     excerpt:
  //       "Complete analysis of share buyback procedures and tax implications for private companies.",
  //     category: "Business Registration",
  //     author: "CA Vikram  ",
  //     date: "May 15, 2025",
  //     readTime: "6 min read",
  //     image:
  //       "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //     featured: false,
  //   },
  //   {
  //     id: 7,
  //     title: "GST ASMT-10 Notice: How to Reply and Compliance Requirements",
  //     excerpt:
  //       "Step-by-step guide on responding to GST ASMT-10 notices and ensuring compliance.",
  //     category: "GST",
  //     author: "CA Rajesh  ",
  //     date: "May 8, 2025",
  //     readTime: "5 min read",
  //     image:
  //       "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //     featured: false,
  //   },
  //   {
  //     id: 8,
  //     title: "International Taxation: NRI Tax Compliance and DTAA Benefits",
  //     excerpt:
  //       "Understanding NRI taxation requirements and how to leverage Double Taxation Avoidance Agreements.",
  //     category: "International Tax",
  //     author: "CA Priya  ",
  //     date: "May 3, 2025",
  //     readTime: "9 min read",
  //     image:
  //       "https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //     featured: false,
  //   },
  //   {
  //     id: 9,
  //     title: "NGO Registration and Compliance: 80G, 12A, and FCRA Requirements",
  //     excerpt:
  //       "Complete guide to NGO registration processes and ongoing compliance requirements.",
  //     category: "NGO Services",
  //     author: "CA Vikram  ",
  //     date: "April 28, 2025",
  //     readTime: "7 min read",
  //     image:
  //       "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //     featured: false,
  //   },
  // ];

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

  if (loading1) return <div>loading...</div>;

  const BlogPostProps = {
    startIndex,
    postsPerPage,
    filteredPosts,
    currentPosts,
    totalPages,
    setCurrentPage,
    currentPage,
    navigate,
  };

  const FeaturedPostProps = {
    featuredPosts,
    navigate,
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
