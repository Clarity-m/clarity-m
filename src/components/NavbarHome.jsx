import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { title: "Blogs", path: "/blogs" },
  { title: "Services", path: "/services" },
  { title: "About", path: "/about" },
];

export const NavbarHome = () => {
  return (
    <div className="z-50 fixed w-full text-white">
      <div className="flex items-center justify-center p-2 max-w-[600px] mx-auto">
        <ul className="flex flex-row p-2 space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="relative transition-all duration-300 ease-in-out 
                           transform hover:text-3xl hover:skew-x-12 hover:text-white 
                           hover:[text-shadow:_0_0_20px_rgba(255,255,255,1)] text-2xl"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
