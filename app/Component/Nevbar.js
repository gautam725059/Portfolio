"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["Home","About", "Skills", "Work", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900 dark:text-white">Gautam</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-800 dark:text-gray-200">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="hover:text-yellow-500 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 w-full px-6 py-4 shadow-lg">
          <ul className="flex flex-col space-y-4 font-medium text-gray-800 dark:text-gray-200">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-yellow-500 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
