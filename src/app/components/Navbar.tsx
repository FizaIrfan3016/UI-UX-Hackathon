"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser, FaShoppingCart, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <nav className="flex flex-col items-center p-4 bg-black z-50 relative">
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
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="hover:text-yellow-500 text-white flex items-center"
              >
               <Link href='/menu'> Menu</Link> <FaChevronDown className="ml-2" />
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-40 bg-black border border-yellow-500 shadow-lg max-h-60 overflow-y-auto">
                  <ul className="flex flex-col">
                    <li className="hover:bg-yellow-500">
                      <Link href="/menu/breakfast" className="block px-4 py-2 text-white">
                        Breakfast
                      </Link>
                    </li>
                    <li className="hover:bg-yellow-500">
                      <Link href="/menu/lunch" className="block px-4 py-2 text-white">
                        Lunch
                      </Link>
                    </li>
                    <li className="hover:bg-yellow-500">
                      <Link href="/menu/dinner" className="block px-4 py-2 text-white">
                        Dinner
                      </Link>
                    </li>
                    <li className="hover:bg-yellow-500">
                      <Link href="/menu/fastfood" className="block px-4 py-2 text-white">
                        Fast Food
                      </Link>
                    </li>
                    <li className="hover:bg-yellow-500">
                      <Link href="/menu/dessert" className="block px-4 py-2 text-white">
                        Dessert
                      </Link>
                    </li>
                    <li className="hover:bg-yellow-500">
                      <Link href="/menu/juice" className="block px-4 py-2 text-white">
                        Juice
                      </Link>
                    </li>
                    <li className="hover:bg-yellow-500">
                      <Link href="/menu/snack" className="block px-4 py-2 text-white">
                        Snack
                      </Link>
                    </li>
                    <li className="hover:bg-yellow-500">
                      <Link href="/menu/soups" className="block px-4 py-2 text-white">
                        Soups
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link href="/blog" className="hover:text-yellow-500 text-white">
              Blog
            </Link>
            <Link href="/Page" className="hover:text-yellow-500 text-white">
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
                  <FaSearch />
                </div>
              </div>
              <Link href="/shop" className="hover:text-yellow-500 text-white">
                <div className="ml-4 text-white cursor-pointer hover:text-yellow-500">
                  <FaShoppingBag />
                </div>
              </Link>
              <Link href="/sign-up" className="hover:text-yellow-500 text-white">
                <div className="ml-4 text-white cursor-pointer hover:text-yellow-500">
                  <FaUser />
                </div>
              </Link>
              <Link href="/ShopingCart" className="hover:text-yellow-500 text-white">
                <div className="ml-4 text-white cursor-pointer hover:text-yellow-500">
                  <FaShoppingCart />
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



