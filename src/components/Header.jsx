import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const Header = ({ openDemoForm }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleDemoClick = (e) => {
    e.preventDefault();
    openDemoForm();
    // Close mobile menu when demo is clicked
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="Shodat" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation & CTA */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className={`text-white ${isActive('/') ? 'underline underline-offset-4 decoration-blue-600 decoration-4 font-bold' : 'hover:underline hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-4 hover:font-bold'}`}
              >
                Home
              </Link>
              <Link 
                to="/platform" 
                className={`text-white ${isActive('/platform') ? 'underline underline-offset-4 decoration-blue-600 decoration-4 font-bold' : 'hover:underline hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-4 hover:font-bold'}`}
              >
                Platform
              </Link>
              <Link 
                to="/data-engineering" 
                className={`text-white ${isActive('/data-engineering') ? 'underline underline-offset-4 decoration-blue-600 decoration-4 font-bold' : 'hover:underline hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-4 hover:font-bold'}`}
              >
                Data Engineering
              </Link>
              <Link 
                to="/ai-innovation" 
                className={`text-white ${isActive('/ai-innovation') ? 'underline underline-offset-4 decoration-blue-600 decoration-4 font-bold' : 'hover:underline hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-4 hover:font-bold'}`}
              >
                AI Innovation
              </Link>
            </nav>
            <button 
              onClick={handleDemoClick}
              className="ml-4 px-4 py-2 rounded-md bg-violet-900 hover:bg-blue-600 text-white font-medium transition duration-300"
            >
              Request Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-white hover:bg-gray-800 rounded-md"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-white ${isActive('/') ? 'underline underline-offset-4 decoration-blue-600 decoration-4 font-bold' : 'hover:underline hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-4 hover:font-bold'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/platform" 
                className={`text-white ${isActive('/platform') ? 'underline underline-offset-4 decoration-blue-600 decoration-4 font-bold' : 'hover:underline hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-4 hover:font-bold'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Platform
              </Link>
              <Link 
                to="/data-engineering" 
                className={`text-white ${isActive('/data-engineering') ? 'underline underline-offset-4 decoration-blue-600 decoration-4 font-bold' : 'hover:underline hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-4 hover:font-bold'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Data Engineering
              </Link>
              <Link 
                to="/ai-innovation" 
                className={`text-white ${isActive('/ai-innovation') ? 'underline underline-offset-4 decoration-blue-600 decoration-4 font-bold' : 'hover:underline hover:underline-offset-4 hover:decoration-blue-600 hover:decoration-4 hover:font-bold'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                AI Innovation
              </Link>
              <button
                onClick={handleDemoClick}
                className="px-4 py-2 rounded-md bg-violet-900 hover:bg-blue-600 text-white font-medium transition duration-300 text-left"
              >
                Request Demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;