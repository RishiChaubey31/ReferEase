import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-12 left-0 w-full px-4 py-2 bg-white shadow-md z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left side: Logo and Dropdown */}
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Description" className="w-24" />
            <div className="relative hidden md:block">
              <button 
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 flex items-center space-x-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span>Courses</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isOpen && (
                <div className="absolute z-10 bg-white shadow-md mt-2 w-40 rounded">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 1</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 2</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 3</a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 hover:text-blue-500">Refer & Earn</button>
            <button className="px-4 py-2 hover:text-blue-500">Resources</button>
            <button className="px-4 py-2 hover:text-blue-500">About Us</button>
            <button className="bg-gray-200 px-4 py-2 rounded hover:text-blue-500">Login</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Try for free
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <button 
              className="w-full text-left px-4 py-2 flex items-center justify-between"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>Courses</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {isOpen && (
              <div className="bg-gray-50 py-2">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 2</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 3</a>
              </div>
            )}
            <button className="w-full text-left px-4 py-2 hover:bg-gray-50">Refer & Earn</button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-50">Resources</button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-50">About Us</button>
            <div className="px-4 pt-2 space-y-2">
              <button className="w-full bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
                Login
              </button>
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Try for free
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Add padding to prevent content from overlapping */}
      <div className="pt-[60px]"></div>
    </>
  );
}

export default Navbar;
