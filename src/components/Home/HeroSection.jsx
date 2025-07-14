import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage:
          'url("https://taxcellent.in/wp-content/uploads/2021/10/banner-three.webp")',
      }}
      className=" h-[80svh] bg-no-repeat  bg-center bg-cover from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
           Empowering <span className="bg-amber-600 text-black px-3 " >Businesses</span> Across India with Expert <span className="text-black " >C</span>hartered <span className="text-black  " >A</span>ccounting
          </h1>
          <p className="text-xl md:text-2xl text- mb-8 max-w-4xl mx-auto">
           Two decades of experience. Pan-India reach. Trusted by startups to enterprises.From tax advisory to audit, we deliver compliance and clarity across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                navigate("/contact");
              }}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Consultation
            </button>
            <button
              onClick={() => {
                navigate("/about");
              }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
