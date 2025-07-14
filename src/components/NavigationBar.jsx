import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  // const
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const navdata = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "SERVICES",
      path: "/services",
      subMenu: [
        {
          name: "Audit & Assurance",
          path: "/service/686fa0fafe4d90d20d275150",
        },
        { name: "GST Services", path: "/service/686fa3d8fe4d90d20d275154" },
        { name: "Income Tax", path: "/service/686fa25cfe4d90d20d275152" },
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

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-blue-900 text-white z-20">
      {/* Logo */}
      <div
        className="hover:cursor-pointer"
        onClick={() => {
          navigate("/");
          scrollTo(0, 0);
        }}
      >
        <h1 className="text-xl text-yellow-500 font-bold hover:text-white">
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
              // onClick={() => {
              //   navigate(item.path);
              // }}
              onMouseEnter={() => isServices && setIsServiceDropdownOpen(true)}
              onMouseLeave={() => isServices && setIsServiceDropdownOpen(false)}
            >
              <div
                className="cursor-pointer hover:text-yellow-400 flex items-center gap-1"
                onClick={() => {
                  // if (!item.subMenu) {
                    navigate(item.path);
                  // }
                }}
              >
                {item.name}
                {item.subMenu && (
                  <ChevronDown
                    size={16}
                    className={`mt-1 transition-transform ${
                      isServiceDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Dropdown menu (on hover) */}
              {item.subMenu && isServiceDropdownOpen && (
                <div className="absolute top-[12px]   left-0 bg-white text-black rounded shadow-md mt-2 flex flex-col min-w-[200px] z-50">
                  {item.subMenu.map((sub, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        navigate(sub.path);
                        setIsServiceDropdownOpen(false); // close dropdown
                      }}
                      className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    >
                      {sub.name}
                    </div>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* Social Icons */}
      <div className="hidden md:flex gap-4 text-lg">
        <Link
          to={
            "https://www.instagram.com/devnexussolutions/?igsh=MWFzN2Q0ZmZlc2hk#"
          }
          target="_blank"
        >
          <i className="fa-brands fa-facebook cursor-pointer hover:text-yellow-400"></i>
        </Link>
        <Link
          to={
            "https://www.instagram.com/devnexussolutions/?igsh=MWFzN2Q0ZmZlc2hk#"
          }
          target="_blank"
        >
          <i className="fa-brands fa-instagram cursor-pointer hover:text-yellow-400"></i>
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
      {isMenuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-black text-white flex flex-col items-center gap-4 py-4 md:hidden z-10">
          {navdata.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(item.path);
                setIsMenuOpen(false); // close menu after click
              }}
              className="text-sm font-semibold hover:text-yellow-400 cursor-pointer"
            >
              {item.name}
            </div>
          ))}

          {/* Social icons in mobile */}
          <div className="flex gap-4 text-lg mt-2">
            <Link
              to={
                "https://www.instagram.com/devnexussolutions/?igsh=MWFzN2Q0ZmZlc2hk#"
              }
              target="_blank"
            >
              <i className="fa-brands fa-facebook cursor-pointer hover:text-yellow-400"></i>
            </Link>
            <Link
              to={
                "https://www.instagram.com/devnexussolutions/?igsh=MWFzN2Q0ZmZlc2hk#"
              }
              target="_blank"
            >
              <i className="fa-brands fa-instagram cursor-pointer hover:text-yellow-400"></i>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
