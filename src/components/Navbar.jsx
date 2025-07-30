import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white body-font bg-black shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo and Hamburger (mobile inline) */}
        <div className="w-full flex justify-between md:w-auto md:justify-start items-center">
          <a href="/" className="flex title-font font-medium items-center text-purple-800">
            <img className='w-15 h-15 rounded-full' src="companylogo.jpg" alt="" />
            <span className="ml-3 text-xl">AUM~TECH</span>
          </a>

          {/* Hamburger icon (mobile only) */}
          <button
            className="md:hidden text-purple-400 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav
          className={`md:ml-4 md:pl-4 md:border-l md:border-gray-400 flex-col md:flex-row md:flex md:items-center text-base justify-center w-full md:w-auto ${
            isOpen ? 'flex' : 'hidden'
          }`}
        >
          <a href="/" className="mr-5 hover:text-purple-700 transition-colors duration-300 py-2 md:py-0">
            Home
          </a>
          <a href="/team" className="mr-5 hover:text-purple-700 transition-colors duration-300 py-2 md:py-0">
            Team
          </a>
          <a href="/career" className="mr-5 hover:text-purple-700 transition-colors duration-300 py-2 md:py-0">
            Career
          </a>
          <a href="/services" className="mr-5 hover:text-purple-700 transition-colors duration-300 py-2 md:py-0">
            Services
          </a>
          <a href="/contact" className="mr-5 hover:text-purple-700 transition-colors duration-300 py-2 md:py-0">
            Contact Us
          </a>
        </nav>

        {/* LinkedIn Button */}
        <button className="hidden  text-purple-900 md:inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded mt-4 md:mt-0 md:ml-auto transition-colors duration-300">
          LinkedIn
        </button>
      </div>
    </header>
  );
}

export default Navbar;
