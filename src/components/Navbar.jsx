import React, { useState, useEffect } from 'react';
import logoImage from '../assets/nsdt-logo-120x87.png';

const Navbar = () => {
  // Menu items stored in a variable
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' },
    { name: 'Referral', path: '/referral' },
    { name: 'Contact Us', path: '/contact-us' }
  ];

  // State to track current path
  const [currentPath, setCurrentPath] = useState('/');

  // Update current path when component mounts
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <nav className="bg-white shadow-lg w-full fixed top-0 left-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
            <img src={logoImage}  alt="NSDT Logo" className="h-14 w-auto" />
            </a>
          </div>
          
          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.path} 
                  className={`px-3 py-2 rounded-md text-xl font-extrabold font-georgia hover:text-[#f4941e] ${
                    currentPath === item.path ? 'text-[#f4941e]' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - can be used for additional elements */}
          <div className="hidden md:block">
            {/* You can add search, login, etc. here */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-[#f4941e]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;