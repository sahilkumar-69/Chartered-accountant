import { Globe } from "lucide-react";

const IndustrySectorCard = ({sectors}) => { // used in aboutUs.jsx
  return (
    <div className="bg-white rounded-xl  p-8 mb-16">
      <div className="flex items-center mb-6">
        <Globe className="h-8 w-8 text-purple-600 mr-3" />
        <h2 className="text-3xl font-bold text-gray-900">
          Industry Sectors We Serve
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="p-4 bg-purple-50 rounded-lg border border-purple-200 text-center"
          >
            <p className="text-gray-800 font-medium">{sector}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustrySectorCard;
