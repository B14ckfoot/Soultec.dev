import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    'Consulting Services',
    'WebOps',
    'Managed IT Solutions',
    'Disaster Recovery Solutions',
    'Strategic Partners'
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full top-0 z-[100] bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <Zap className="h-8 w-8 text-purple-400" aria-hidden="true" />
            <span className="ml-2 text-xl font-bold text-white">Soultec</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`relative px-3 py-2 rounded-full transition-all duration-200 ${
                isActive('/') 
                  ? 'text-purple-400 bg-purple-400/10' 
                  : 'text-gray-300 hover:text-purple-400 hover:bg-purple-400/10'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`relative px-3 py-2 rounded-full transition-all duration-200 ${
                isActive('/about') 
                  ? 'text-purple-400 bg-purple-400/10' 
                  : 'text-gray-300 hover:text-purple-400 hover:bg-purple-400/10'
              }`}
            >
              About
            </Link>
            <div className="relative group">
              <Link
                to="/services"
                className={`flex items-center px-3 py-2 rounded-full transition-all duration-200 ${
                  isActive('/services') 
                    ? 'text-purple-400 bg-purple-400/10' 
                    : 'text-gray-300 hover:text-purple-400 hover:bg-purple-400/10'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
              <div
                className={`absolute left-0 mt-2 w-56 rounded-2xl shadow-lg bg-gray-800/95 backdrop-blur-sm border border-gray-700/50 transition-all duration-150 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="py-2 px-1">
                  {services.map((service) => (
                    <Link
                      key={service}
                      to={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block mx-2 px-3 py-2 text-sm text-gray-300 rounded-full hover:bg-purple-400/10 hover:text-purple-400 transition-all duration-200"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              to="/contact"
              className={`relative px-3 py-2 rounded-full transition-all duration-200 ${
                isActive('/contact') 
                  ? 'text-purple-400 bg-purple-400/10' 
                  : 'text-gray-300 hover:text-purple-400 hover:bg-purple-400/10'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className={`block px-3 py-2 rounded-full text-base font-medium transition-all duration-200 ${
              isActive('/') 
                ? 'text-purple-400 bg-purple-400/10' 
                : 'text-gray-300 hover:text-purple-400 hover:bg-purple-400/10'
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`block px-3 py-2 rounded-full text-base font-medium transition-all duration-200 ${
              isActive('/about') 
                ? 'text-purple-400 bg-purple-400/10' 
                : 'text-gray-300 hover:text-purple-400 hover:bg-purple-400/10'
            }`}
          >
            About
          </Link>
          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={`flex items-center w-full px-3 py-2 rounded-full text-base font-medium transition-all duration-200 ${
                isActive('/services') 
                  ? 'text-purple-400 bg-purple-400/10' 
                  : 'text-gray-300 hover:text-purple-400 hover:bg-purple-400/10'
              }`}
            >
              Services
              <ChevronDown
                className={`ml-1 h-4 w-4 transform transition-transform duration-150 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div className={`${isServicesOpen ? 'block' : 'hidden'} pl-4 mt-1 space-y-1`}>
              {services.map((service) => (
                <Link
                  key={service}
                  to={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block px-3 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-purple-400 hover:bg-purple-400/10 transition-all duration-200"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>
          <Link
            to="/contact"
            className={`block px-3 py-2 rounded-full text-base font-medium transition-all duration-200 ${
              isActive('/contact') 
                ? 'text-purple-400 bg-purple-400/10' 
                : 'text-gray-300 hover:text-purple-400 hover:bg-purple-400/10'
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;