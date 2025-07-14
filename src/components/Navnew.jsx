import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isMobileServiceOpen, setIsMobileServiceOpen] = useState(false);

  const navigate = useNavigate();
  const navdata = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "SERVICES",
      subMenu: [
        { name: "Audit & Assurance", path: "/services/audit" },
        { name: "GST Services", path: "/services/gst" },
        { name: "Income Tax", path: "/services/income-tax" },
      ],
    },
    {
      name: "ABOUT",
      path: "/about",
    },
    {
      name: "BLOGS",
      path: "/blog",
    },
    {
      name: "CONTACT",
      path: "/contact",
    },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
    setIsServiceDropdownOpen(false);
    setIsMobileServiceOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-blue-900 text-white z-20">
      {/* Logo */}
      <div
        className="hover:cursor-pointer"
        onClick={() => handleNavigation("/")}
      >
        <h1 className="text-xl text-yellow-500 font-bold hover:text-white transition-colors">
          NEXUS
        </h1>
        <p className="text-xs tracking-wider">CHARTERED ACCOUNTANTS</p>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-sm font-semibold relative">
        {navdata.map((item, index) => {
          const isServices = item.name === "SERVICES";

          return (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => isServices && setIsServiceDropdownOpen(true)}
              onMouseLeave={() => isServices && setIsServiceDropdownOpen(false)}
            >
              <div
                className="cursor-pointer hover:text-yellow-400 flex items-center gap-1 transition-colors py-2"
                onClick={() => {
                  if (!item.subMenu) {
                    handleNavigation(item.path);
                  }
                }}
              >
                {item.name}
                {item.subMenu && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      isServiceDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Desktop Dropdown menu */}
              {item.subMenu && (
                <div
                  className={`absolute top-full left-0 bg-white text-black rounded-lg shadow-lg mt-1 min-w-[220px] z-50 border border-gray-200 transition-all duration-200 ${
                    isServiceDropdownOpen
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="py-2">
                    {item.subMenu.map((sub, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleNavigation(sub.path)}
                        className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100 last:border-b-0 flex items-center"
                      >
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {sub.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* Social Icons */}
      <div className="hidden md:flex gap-4 text-lg">
        <Link
          to="https://www.instagram.com/devnexussolutions/?igsh=MWFzN2Q0ZmZlc2hk#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-facebook cursor-pointer hover:text-yellow-400 transition-colors"></i>
        </Link>
        <Link
          to="https://www.instagram.com/devnexussolutions/?igsh=MWFzN2Q0ZmZlc2hk#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram cursor-pointer hover:text-yellow-400 transition-colors"></i>
        </Link>
      </div>

      {/* Hamburger Icon (Mobile Only) */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[60px] left-0 w-full bg-blue-900 text-white flex flex-col md:hidden z-10 transition-all duration-300 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {navdata.map((item, index) => (
            <div key={index}>
              {/* Main menu item */}
              <div
                className="text-sm font-semibold hover:text-yellow-400 cursor-pointer transition-colors flex items-center justify-between py-2"
                onClick={() => {
                  if (item.subMenu) {
                    setIsMobileServiceOpen(!isMobileServiceOpen);
                  } else {
                    handleNavigation(item.path);
                  }
                }}
              >
                <span>{item.name}</span>
                {item.subMenu && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      isMobileServiceOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Mobile submenu */}
              {item.subMenu && (
                <div
                  className={`pl-4 space-y-2 transition-all duration-200 ${
                    isMobileServiceOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {item.subMenu.map((sub, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleNavigation(sub.path)}
                      className="text-sm text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors py-2 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></span>
                      {sub.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Social icons in mobile */}
          <div className="flex gap-4 text-lg pt-4 border-t border-blue-800">
            <Link
              to="https://www.instagram.com/devnexussolutions/?igsh=MWFzN2Q0ZmZlc2hk#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook cursor-pointer hover:text-yellow-400 transition-colors"></i>
            </Link>
            <Link
              to="https://www.instagram.com/devnexussolutions/?igsh=MWFzN2Q0ZmZlc2hk#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram cursor-pointer hover:text-yellow-400 transition-colors"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;