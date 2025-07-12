import { Award, Star, Users } from "lucide-react";
import React from "react";

const WhyUs = () => {
  return (
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
  );
};

export default WhyUs;
