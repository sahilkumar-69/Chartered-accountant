// import React from "react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navdata = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "SERVICE",
      path: "/services",
    },
    {
      name: "ABOUT",
      path: "/about",
    },
    {
      name: "BLOG",
      path: "/blog",
    },
    ,
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
      <ul className="hidden md:flex gap-6 text-sm font-semibold">
        {navdata.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              navigate(item.path);
              setIsActive(item.name);
            }}
            className={`border-b-2 border-transparent hover:text-yellow-400 cursor-pointer`}
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="hidden md:flex gap-4 text-lg">
        <i className="fa-brands fa-facebook cursor-pointer hover:text-yellow-400"></i>
        <i className="fa-brands fa-instagram cursor-pointer hover:text-yellow-400"></i>
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
            <i className="fa-brands fa-facebook cursor-pointer hover:text-yellow-400"></i>
            <i className="fa-brands fa-instagram cursor-pointer hover:text-yellow-400"></i>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
