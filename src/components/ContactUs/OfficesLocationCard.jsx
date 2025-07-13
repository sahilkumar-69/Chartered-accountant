import { Building2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactUsoffices } from "../../Store/Data.js";

const OfficesLocationCard = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center mb-6">
        <Building2 className="h-8 w-8 text-green-600 mr-3" />
        <h2 className="text-3xl font-bold text-gray-900">Our Locations</h2>
      </div>

      {ContactUsoffices.map((office, index) => (
        <div
          key={index}
          className={`bg-white rounded-xl shadow-lg p-8 border-l-4 border-${office.color}-500 hover:shadow-xl transition-shadow duration-300`}
        >
          {/* <abbr style={{font:"none"}} title="Find on google map"> */}
          <Link
            to="https://www.google.com/maps/place/Spaze+iTech+Park/@28.413267,77.0403955,17z/data=!3m1!5s0x390d2265140a62bd:0xc32a6d6f6e505078!4m12!1m5!3m4!2zMjjCsDI0JzQ3LjgiTiA3N8KwMDInMzQuNyJF!8m2!3d28.413267!4d77.0429704!3m5!1s0x390d229abb80e123:0xac9af8f5acc2e8a9!8m2!3d28.412598!4d77.0438633!16s%2Fg%2F11f3rsjxdc?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="flex hover:underline items-center mb-4"
          >
            <MapPin className={`h-6 w-6 text-${office.color}-500 mr-3`} />
            <h3 className="text-xl font-bold text-gray-900">
              {office.city} Office
            </h3>
          </Link>
          {/* </abbr> */}

          <h4 className="font-semibold   text-gray-800 mb-3">{office.name}</h4>

          <div className="space-y-1">
            {office.address.map((line, idx) => (
              <p key={idx} className="text-gray-700">
                {line}
              </p>
            ))}
          </div>
        </div>
      ))}

      {/* Additional Info */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">
          Need Professional Services?
        </h3>
        <p className="text-blue-800 mb-4">
          We provide comprehensive chartered accountancy services across Delhi
          NCR. Contact us for consultation on taxation, auditing, company
          formation, and financial planning.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            Tax Planning
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            Auditing
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            Company Formation
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            Financial Planning
          </span>
        </div>
      </div>
    </div>
  );
};

export default OfficesLocationCard;
