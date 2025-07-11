import { Award } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-blue-900 text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 grid  grid-cols-1 md:grid-cols-5 gap-8">
        {/* Column 1: Firm Info */}
        <div>
          <h2 className="font-bold mb-2">
            NEXUS Chartered Accountants in India
          </h2>
          <p className="text-gray-300 leading-6 ">
            We are a full service Chartered Accountancy Firm serving clients
            located in India and Abroad. We are located in Delhi / NCR region of
            Delhi, Noida & Gurugram
          </p>
        </div>

        {/* Column 2: Post Categories */}
        <div>
          <h3 className="font-semibold mb-2">Post Categories</h3>
          <ul className="space-y-1 text-gray-300">
            <li
              onClick={() => {
                navigate("/contact");
              }}
              className="hover:underline cursor-pointer hover:text-white"
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/contact");
              }}
              className="hover:underline cursor-pointer hover:text-white"
            >
              Service
            </li>
            <li
              onClick={() => {
                navigate("/contact");
              }}
              className="hover:underline cursor-pointer hover:text-white"
            >
              About
            </li>
            <li
              onClick={() => {
                navigate("/contact");
              }}
              className="hover:underline cursor-pointer hover:text-white"
            >
              Blog
            </li>
            <li
              onClick={() => {
                navigate("/contact");
              }}
              className="hover:underline cursor-pointer hover:text-white"
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="font-semibold mb-2">Our Services</h3>
          <ul className="space-y-1 text-gray-300">
            <li
              onClick={() => {
                navigate("/blog/1");
              }}
              className="hover:underline cursor-pointer hover:text-white "
            >
              Audit & Assurance Services
            </li>
            <li
              onClick={() => {
                navigate("/blog/1");
              }}
              className="hover:underline cursor-pointer hover:text-white "
            >
              GST Services
            </li>
            <li
              onClick={() => {
                navigate("/blog/1");
              }}
              className="hover:underline cursor-pointer hover:text-white "
            >
              Income Tax
            </li>
            <li
              onClick={() => {
                navigate("/blog/1");
              }}
              className="hover:underline cursor-pointer hover:text-white "
            >
              Business Setup Services
            </li>
            <li
              onClick={() => {
                navigate("/blog/1");
              }}
              className="hover:underline cursor-pointer hover:text-white "
            >
              Business Registrations
            </li>
            <li
              onClick={() => {
                navigate("/blog/1");
              }}
              className="hover:underline cursor-pointer hover:text-white "
            >
              International Taxation
            </li>
            <li
              onClick={() => {
                navigate("/blog/1");
              }}
              className="hover:underline cursor-pointer hover:text-white "
            >
              NGO Services
            </li>
            <li
              onClick={() => {
                navigate("/blog/1");
              }}
              className="hover:underline cursor-pointer hover:text-white "
            >
              Finance Services
            </li>
            <li
              onClick={() => {
                navigate("/blog/1");
              }}
              className="hover:underline cursor-pointer hover:text-white"
            >
              Outsourcing Services
            </li>
            <li
              onClick={() => {
                navigate("/blog/1");
              }}
              className="hover:underline cursor-pointer hover:text-white "
            >
              RBI Services
            </li>
          </ul>
        </div>

        {/* Column 4: Locations */}
        <div>
          <h3 className="font-semibold mb-2">Our Locations</h3>
          <div className="mb-4">
            <strong className="block">Gurugram</strong>
            <p className="text-gray-300">
              26 B-2, Ground Floor, Spaze itech Tower, Sector 49, Gurugram, (HR)
              - 123456
            </p>
          </div>
          {/* <div>
            <strong className="block">Gurgaon (Gurugram)</strong>
            <p className="text-gray-300">
              Corporate Edge Cyber Hub, Level 1, Building 10A, Cyber Hub, DLF
              Cyber City, Gurugram, Haryana - 122002
            </p>
          </div> */}
          <div className="mt-4">
            <h4 className="font-semibold">Working Hours</h4>
            <p className="text-gray-300">Mon - Sat 9:15AM - 6:00PM IST</p>
          </div>
        </div>

        {/* Column 5: Contact */}
        <div>
          <h3 className="font-semibold mb-2">Call</h3>
          <p className="text-gray-300">+91-120-4164460</p>
          <p className="text-gray-300">+91-9811255829</p>

          <h3 className="font-semibold mt-4 mb-2">Email</h3>
          <Link to="mailTo:sahilkumar6939@gmail.com" className="text-gray-300">
            nexus@gmail.com
          </Link>

          <h3
            onClick={() => {
              navigate("/contact");
            }}
            className="font-semibold cursor-pointer hover:underline mt-4 mb-2"
          >
            Enquiry Form
          </h3>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-50 text-center text-gray-400 py-4 px-6 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p>Copyright © 2025 Nexus CA | All Rights Reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white">
            Disclaimer
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
