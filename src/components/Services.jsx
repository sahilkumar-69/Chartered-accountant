import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Shield } from "lucide-react";
import BlogContext from "../Context/Blogs";

const Services = () => {
  const { service: servi, loading } = useContext(BlogContext);
  const services = servi.data;
  if (loading) return <div>loading...</div>;
  // used in aboutUs.jsx
  return (
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
          {services.map((Service) => (
            <div
              key={Service._id}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col"
            >
              <div className="mb-3">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <Service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {Service.serviceName}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {Service.serviceDescription.slice(0, 130)}...
                </p>

                <div className="space-y-2">
                  {Service.servicePoints.slice(0, 7).map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sticky button at the bottom */}
              <Link
                to={`/blog/${Service._id + " caservice"}`}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300  flex items-center justify-center mt-auto"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
