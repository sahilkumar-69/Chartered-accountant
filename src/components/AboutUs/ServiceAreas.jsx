import { MapPin } from "lucide-react";
// import { AboutPageServiceAreaCities } from "../../Store/Data.js";
import { useContext } from "react";
import BlogContext from "../../Context/Blogs.js";
import { Link } from "react-router-dom";

const ServiceAreas = () => {
  const { cities, loading } = useContext(BlogContext);

  if (loading) return <div className="text-center text-2xl">loading...</div>;

  return (
    <div className="bg-white rounded-xl p-8">
      <div className="flex items-center mb-6">
        <MapPin className="h-8 w-8 text-orange-600 mr-3" />
        <h2 className="text-3xl font-bold text-gray-900">Cities We Serve</h2>
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed">
        We are providing services to clients across major cities in India,
        ensuring comprehensive coverage and accessibility:
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        { cities.data && cities.data.length>0 && cities.data.map((city, index) => (
          <Link
          to={`https://www.google.com/maps?q=${city.latitude},${city.longitude}`}
          target="_blank"
            key={index}
            className="p-3 bg-orange-50 rounded-lg border hover:bg-gray-500  border-orange-200 text-center"
          >
            <p className=" text-black hover:text-white font-medium text-sm">{city.name}</p>
          </Link>
        ))}
      </div>
      <p className="text-gray-600 mt-6 text-center italic">
        ...and many more cities across India
      </p>
    </div>
  );
};

export default ServiceAreas;
