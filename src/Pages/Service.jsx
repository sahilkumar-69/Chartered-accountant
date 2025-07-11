import React, { useEffect } from "react";
import {
  Calculator,
  FileText,
  Shield,
  Building,
  Globe,
  TrendingUp,
  Users,
  CreditCard,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  BookOpen,
} from "lucide-react";
import OfficesCard from "../components/OfficesCard";
import { Link, useNavigate } from "react-router-dom";

import CountUp from "react-countup";
import DownArrow from "../components/DownArrow";

const ServicesPage = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const services = [
    {
      icon: Shield,
      title: "Audit & Assurance",
      description:
        "Complete range of Assurance Solutions to improve financial efficiency, accuracy and stability with proper internal controls.",
      features: [
        "Statutory Audits",
        "Internal Audits",
        "Tax Audits",
        "Bank Audits",
        "Stock Audits",
        "Compliance Audits",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Calculator,
      title: "Income Tax Services",
      description:
        "Time-bound and quality Income Tax services covering all aspects of Indian Income Tax Laws to minimize tax liability.",
      features: [
        "Tax Planning",
        "IT Returns Filing",
        "Tax Representation",
        "Appeals & Litigation",
        "Search & Seizure",
        "TDS Services",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: FileText,
      title: "GST Services India",
      description:
        "Comprehensive GST services under the unified tax system to reduce compliances and improve ease of doing business.",
      features: [
        "GST Registration",
        "GST Returns",
        "GST Advisory",
        "GST Appeals",
        "Input Tax Credit",
        "GST Audit",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Users,
      title: "NGO Services",
      description:
        "Specialized legal, professional and consultative services for various NGO clients and non-profit organizations.",
      features: [
        "NGO Formation",
        "80G & 12A Registration",
        "Section 35AC Registration",
        "NGO Auditing",
        "FCRA Registration",
        "Compliance Services",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Building,
      title: "Business Registration",
      description:
        "Expert assistance in registering businesses with various authorities seamlessly and ensuring regulatory compliance.",
      features: [
        "Company Registration",
        "Trademark Registration",
        "IEC Code Registration",
        "MSME Registration",
        "NITI Aayog Registration",
        "Partnership Registration",
      ],
      color: "from-red-500 to-red-600",
    },
    {
      icon: CreditCard,
      title: "Finance Services",
      description:
        "Wide range of finance services with customized solutions for business loans, syndication, and project finance.",
      features: [
        "Business Loans",
        "Loan Syndication",
        "Project Finance",
        "Working Capital",
        "Investment Advisory",
        "Financial Planning",
      ],
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: TrendingUp,
      title: "Outsourcing Services",
      description:
        "Comprehensive accounting and payroll outsourcing services handled efficiently by skilled professionals.",
      features: [
        "Bookkeeping Outsourcing",
        "Payroll Outsourcing",
        "Accounts Management",
        "Financial Reporting",
        "Compliance Management",
        "Data Processing",
      ],
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Globe,
      title: "International Taxation",
      description:
        "Expert guidance in international taxation to navigate cross-border transactions and compliance requirements.",
      features: [
        "NRI Taxation",
        "Transfer Pricing",
        "DTAA Services",
        "Expat Taxation",
        "15CA/15CB Filing",
        "Tax Residency Certificate",
      ],
      color: "from-pink-500 to-pink-600",
    },
  ];

  const navigate = useNavigate();

  const stats = [
    { suffix: "%", end: "100", label: "Client Satisfication" },
    { suffix: "+", end: "500", label: "Positive Feedbacks" },
    { suffix: "*7", end: "24", label: "Clients Support " },
  ];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <DownArrow />

      <section
        style={{
          backgroundImage:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIimd9DTv-ljwgi589yrfVNshxl2P4w6Gog&s")',
        }}
        className="relative bg-no-repeat  bg-center bg-cover h-[80svh] py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our Professional
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              CA Services
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Full-service chartered accountancy solutions with over two decades
            of expertise across diverse industries and regulatory compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
              >
                <div className="text-3xl font-bold text-yellow-400">
                  <CountUp
                    start={0}
                    end={stat.end}
                    duration={2.5}
                    suffix={stat.suffix || ""}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive CA Services
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end chartered accountancy services to businesses
              across India, ensuring compliance, efficiency, and strategic
              financial management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${service.color} rounded-t-2xl`}
                ></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white mr-4`}
                    >
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h4>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-900 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Key Services:
                    </h5>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <ArrowRight className="h-4 w-4 text-gray-400 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <button
                    onClick={() => { navigate("/blog/1") }}
                      className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r ${service.color} text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h3>
            <p className="text-xl text-gray-600">
              Our expertise spans across diverse sectors and business verticals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-lg font-semibold text-gray-800">
                  {industry}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <OfficesCard offices={{industries}} /> */}
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="  text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose NEXUS
            </h3>
            <p className="text-xl text-gray-600">
              Your trusted partner for comprehensive chartered accountancy
              solutions
            </p>
          </div>

          <div className="grid  grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group  text-center p-8 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                20+ Years Experience
              </h4>
              <p className="text-gray-600">
                Two decades of proven expertise in chartered accountancy
                services across India
              </p>
            </div>

            <div className="group  text-center p-8 rounded-2xl bg-gradient-to-br from-green-100 to-blue-50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-600 to-green-300 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Expert Team
              </h4>
              <p className="text-gray-600">
                Skilled professionals including CAs, CS, and Lawyers delivering
                outstanding results
              </p>
            </div>

            <div className="group  text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Multi-City Presence
              </h4>
              <p className="text-gray-600">
                Offices in Delhi, Noida, Gurgaon, and Greater Noida serving
                clients across India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Get Started?</h3>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Partner with NEXUS for comprehensive chartered accountancy services
            that drive your business success. Contact us today for a
            consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                navigate("/contact");
              }}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300 flex items-center justify-center"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Get Free Consultation
            </button>
            <Link target="_blank" to='https://devnexussolutions.com/' className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300 flex items-center justify-center">
              <ArrowRight className="h-5 w-5 mr-2" />
              View Our Main Website
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default ServicesPage;
