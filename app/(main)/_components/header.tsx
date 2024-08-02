"use client";
import React, { useState } from "react";
import Link from "next/link";

// TimerHive Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/logo.svg" // Replace this with the path to your SVG file
                alt="TimeHive Logo"
                className="h-8 w-auto" // Adjust size as needed
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10"></nav>

          {/* Desktop Authentication Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-base font-medium  hover:bg-indigo-700 hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-base font-medium  hover:bg-indigo-700 hover:text-white"
            >
              About
            </Link>
            <Link
              href="https://narius-newsletter.beehiiv.com/"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Newsletter
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium  hover:bg-indigo-700 hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium  hover:bg-indigo-700 hover:text-white"
              >
                About
              </Link>
              <Link
                href="https://narius-newsletter.beehiiv.com/"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Newsletter
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
