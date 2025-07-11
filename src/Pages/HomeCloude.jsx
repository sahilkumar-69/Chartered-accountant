import { useContext, useEffect, useState } from "react";
import {
  Shield,
  Calculator,
  FileText,
  Building2,
  Globe,
  TrendingUp,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Star,
  BookOpen,
  Calendar,
  ChevronRight,
} from "lucide-react";
import CountUp from "react-countup";
import DownArrow from "../components/DownArrow";
import { Link, useNavigate } from "react-router-dom";
import BlogContext from "../Context/Blogs";
import { services } from "../Store/Data";

const Homepage = () => {
  const [blogData, setblogData] = useState([]);

  const { blogs, loading } = useContext(BlogContext);

  useEffect(() => {
    setblogData(blogs);
    scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const industries = [
    "IT/ITES",
    "BPO/KPO",
    "Manufacturing",
    "Trading",
    "Services",
    "Telecom",
    "Startups",
    "NGOs",
    "NBFC",
    "Sports",
  ];

  const offices = [
    { city: "Gurgaon", primary: false },
    { city: "Delhi", primary: false },
    { city: "Noida", primary: false },
    { city: "Greater Noida", primary: false },
  ];

  const stats = [
    { suffix: "+", end: "20", label: "Years Experience" },
    { suffix: "+", end: "1000", label: "Happy Clients" },
    { suffix: "", end: "4", label: "Office Locations" },
    { suffix: "+", end: "50", label: "Cities Served" },
  ];

  const recentPosts = [
    {
      title: "E-Way Bill 2.0: Key Changes in GST E-Way Bill System",
      excerpt: "Understanding the new changes and what businesses must know",
      date: "June 2025",
    },
    {
      title: "Supreme Court Allows GST Return Rectification Beyond Due Dates",
      excerpt:
        "Key takeaways for businesses from the recent Supreme Court ruling",
      date: "June 2025",
    },
    {
      title: "Understanding New GST Section 74A: A Complete Analysis",
      excerpt: "Comprehensive analysis of the impact of new GST provisions",
      date: "May 2025",
    },
  ];

  const featuredPosts = [
    {
      title: "TDS on Software License Purchases from Non-Residents",
      excerpt: "Supreme Court's landmark judgment on software license taxation",
    },
    {
      title: "Understanding Section 54: Capital Gains Tax Exemptions",
      excerpt:
        "Guide to capital gains tax exemptions on residential property sales",
    },
    {
      title: "Buy-Back of Shares by Private Companies",
      excerpt:
        "Complete guide to share buyback procedures for private companies",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <DownArrow />

      <div
        style={{
          backgroundImage:
            'url("https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/65444139fa2fe84fa29c749e_What%20is%20Proptech%20(Real%20Estate%20Tech)%20Ultimate%20Guide.webp")',
        }}
        className=" h-[80svh] bg-no-repeat  bg-center bg-cover from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Chartered Accountants in Delhi
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Full-service CA firm with over two decades of experience,
              providing high-quality professional services across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  navigate("/contact");
                }}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Consultation
              </button>
              <button
                onClick={() => {
                  navigate("/about");
                }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  <CountUp
                    start={0}
                    end={stat.end}
                    duration={2.5}
                    suffix={stat.suffix || ""}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className=" py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Nexus CA Firm
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nexus Chartered Accountants is a full-service, experienced CA
                firm in India, led by skilled and seasoned Indian Chartered
                Accountants with over two decades of industry experience.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our team of expert professionals, including CAs, CS, and
                Lawyers, possesses the knowledge and skills required to deliver
                outstanding results to our clients, ensuring total customer
                satisfaction.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {industries.map((industry, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {industry}
                  </span>
                ))}
              </div>
              <button
                onClick={() => {
                  navigate("/about");
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center"
              >
                Learn More <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg text-center ${
                    office.primary ? "bg-blue-600 text-white" : "bg-gray-100"
                  }`}
                >
                  <MapPin
                    className={`w-8 h-8 mx-auto mb-2 ${
                      office.primary ? "text-white" : "text-blue-600"
                    }`}
                  />
                  <h3 className="font-semibold">{office.city}</h3>
                  <p
                    className={`text-sm ${
                      office.primary ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    {office.primary ? "Head Office" : "Branch Office"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Chartered Accountancy Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial and business solutions to meet all your
              professional needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Link
                  to="/blog/1"
                  target="_blank"
                  // onClick={() => {
                  //   navigate("/blog/1");
                  // }}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Nexus?
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses across India for professional excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                20+ Years Experience
              </h3>
              <p className="text-gray-600">
                Over two decades of industry experience with proven track record
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Expert Team
              </h3>
              <p className="text-gray-600">
                Skilled professionals including CAs, CS, and Lawyers
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Total Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                Committed to delivering quality services in professional manner
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* News & Updates Section */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest News & Updates
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with latest tax and regulatory changes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Recent Posts */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-blue-600" />
                Recent Posts
              </h3>
              <div className="space-y-6">
                {recentPosts.map((post, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex  items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {post.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3">
                          {post.excerpt}
                        </p>
                        <span className="text-blue-600 text-sm font-medium">
                          {post.date}
                        </span>
                      </div>
                      <ChevronRight
                        onClick={() => navigate("/blog/1")}
                        className="w-5 h-5 cursor-pointer hover:text-blue-500 text-gray-400 ml-4"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Posts */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-green-600" />
                Featured Posts
              </h3>
              <div className="space-y-6">
                {featuredPosts.map((post, index) => (
                  <div
                    onClick={() => navigate("/blog/1")}
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center">
                      Read More <ArrowRight className="w-4  h-4 ml-1" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-b from-blue-900 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact our expert team for professional chartered accountancy
            services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>+91-120-4164460</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>nexus@gmail.com</span>
            </div>
          </div>
          {/* border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300 flex items-center justify-center */}
          <div className="mt-8">
            <button
              onClick={() => {
                navigate("/contact");
              }}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-500"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
