import { Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-blue-900 to-indigo-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8 opacity-90">
          Contact our expert team for professional chartered accountancy
          services
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex items-center justify-center">
            <Phone className="w-5 h-5 mr-2" />
            <span>+91-120-4164460</span>
          </div>
          <div className="flex items-center justify-center">
            <Mail className="w-5 h-5 mr-2" />
            <span>nexus@gmail.com</span>
          </div>
        </div>
        {/* border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300 flex items-center justify-center */}
        <div className="mt-8">
          <button
            onClick={() => {
              navigate("/contact");
            }}
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-500"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
