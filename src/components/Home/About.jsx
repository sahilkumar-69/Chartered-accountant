import { MapPin, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
const About = () => {
  const offices = [
    { city: "Gurgaon", primary: false },
    { city: "Delhi", primary: false },
    { city: "Noida", primary: false },
    { city: "Greater Noida", primary: false },
  ];
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
  return (
    <div className=" py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Nexus CA Firm
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Nexus Chartered Accountants is a full-service, experienced CA firm
              in India, led by skilled and seasoned Indian Chartered Accountants
              with over two decades of industry experience.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our team of expert professionals, including CAs, CS, and Lawyers,
              possesses the knowledge and skills required to deliver outstanding
              results to our clients, ensuring total customer satisfaction.
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
  );
};

export default About;
