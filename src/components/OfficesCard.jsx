import { Building2, MapPin, WindArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
const OfficesCard = ({ offices }) => {
  const navigate = useNavigate();
  // used in AboutUs.jsx and Service.jsx
  return (
    <div className="bg-white rounded-xl  p-8 mb-16">
      <div className="flex items-center mb-6">
        <Building2 className="h-8 w-8 text-green-600 mr-3" />
        <h2 className="text-3xl font-bold text-gray-900">Our Offices</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {offices.map((office, index) => (
          <div
            onClick={() => {
              window.open(office.link);
            }}
            key={index}
            className={`p-4 rounded-lg border-2 hover:shadow-lg cursor-pointer hover:bg-gray-200 text-center ${
              office.primary
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 bg-gray-50"
            }`}
          >
            <MapPin
              className={`h-6 w-6 mx-auto mb-2 ${
                office.primary ? "text-blue-600" : "text-gray-600"
              }`}
            />
            <p
              className={`font-semibold ${
                office.primary ? "text-blue-900" : "text-gray-900"
              }`}
            >
              {office.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficesCard;
