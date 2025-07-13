import { ArrowRight, BookOpen } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CtaService = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-4xl font-bold mb-6">Ready to Get Started?</h3>
        <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Partner with NEXUS for comprehensive chartered accountancy services
          that drive your business success. Contact us today for a consultation.
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
          <Link
            target="_blank"
            to="https://devnexussolutions.com/"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300 flex items-center justify-center"
          >
            <ArrowRight className="h-5 w-5 mr-2" />
            View Our Main Website
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaService;
