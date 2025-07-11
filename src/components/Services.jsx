import { CheckCircle } from "lucide-react";
import React from "react";

const Services = ({ services }) => { // used in aboutUs.jsx
  return (
    <div className="bg-white rounded-xl  p-8 mb-16">
      <div className="flex items-center mb-6">
        <CheckCircle className="h-8 w-8 text-emerald-600 mr-3" />
        <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-start p-4 bg-emerald-50 rounded-lg border border-emerald-200"
          >
            <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-gray-800 font-medium">{service}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
