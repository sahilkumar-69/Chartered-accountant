import { Clock, Shield, Target, Users } from "lucide-react";
import React from "react";

const CoreValue = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Precision",
      description: "Meticulous attention to detail in every financial matter",
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Integrity",
      description:
        "Unwavering commitment to ethical practices and transparency",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Client-Centric",
      description: "Tailored solutions focused on your unique needs and goals",
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Reliability",
      description: "Consistent, timely service you can depend on",
    },
  ];

  return (
    <div className="bg-gradient-to-br rounded-2xl from-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-blue-100">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValue;
