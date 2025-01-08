"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaSearch, FaShoppingBag, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="flex flex-col items-center p-4 bg-black">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="text-yellow-500 font-bold text-2xl flex-grow text-center">
            <span className="text-yellow-500 font-bold text-2xl flex-grow text-center">
              Food<span className="text-white">tuck</span>
            </span>
          </Link>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              className="text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Navigation Bar */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex flex-col md:flex-row items-center justify-around w-full p-2 md:p-0 transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-base font-normal">
            <Link href="/" className="hover:text-yellow-500 text-white">
              Home
            </Link>
            <Link href="/menu" className="hover:text-yellow-500 text-white">
              Menu
            </Link>
            <Link href="/blog" className="hover:text-yellow-500 text-white">
              Blog
            </Link>
            <Link href="/" className="hover:text-yellow-500 text-white">
              Pages
            </Link>
            <Link href="/about" className="hover:text-yellow-500 text-white">
              About
            </Link>
            <Link href="/shop" className="hover:text-yellow-500 text-white">
              Shop
            </Link>
            <Link href="/contact" className="hover:text-yellow-500 text-white">
              Contact
            </Link>

            {/* Search and Cart */}
            <div className="flex items-center mt-4 md:mt-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search.."
                  className="pl-4 pr-10 py-2 rounded-full bg-black border border-yellow-500 text-white focus:outline-none"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500">
                <FaSearch  />
                </div>
              </div>
              <Link href="/ShopingCart" className="hover:text-yellow-500 text-white">
              <div className="ml-4 text-white cursor-pointer hover:text-yellow-500">
                <FaShoppingBag  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


