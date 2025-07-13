import { Award, Globe, Star, Users } from "lucide-react";

const WhyUs = () => {
  return (
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
              Two decades of proven expertise in chartered accountancy services
              across India
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
  );
};

export default WhyUs;
