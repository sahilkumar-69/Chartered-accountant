import { ArrowRight, CheckCircle } from "lucide-react";
import * as Icons from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BlogContext from "../../Context/Blogs";

const ServiceCard = () => {
  const { service: servi, loading } = useContext(BlogContext);
  const services = servi.data;
  if (loading) return <div>loading...</div>;
  const navigate = useNavigate();

  if (loading || !services) return <div>loading...</div>;

  return (
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
          {services.map((Service, index) => {
            const IconComponent = Icons[Service.icon] || Icons.Circle;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div
                  className={`h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-2xl`}
                ></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white mr-4`}
                    >
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">
                      {Service.serviceName}
                    </h4>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    ...{Service.serviceDescription.slice(50, 180)}...
                  </p>

                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-900 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Key Services:
                    </h5>
                    <div className="grid grid-cols-1 gap-2">
                      {Service.servicePoints
                        .slice(3, 10)
                        .map((feature, idx) => (
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
                      onClick={() => {
                        navigate(`/service/${Service._id}`);
                      }}
                      className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
