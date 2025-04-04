import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';
import shodatLogo from '../assets/Logo.svg';  // Adjust the path to your logo

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-20 mt-20">
      <div className="container mx-auto text-center">

        {/* Top Sentence */}
        <p className="text-2xl font-extrabold text-white mb-24">
          How can Shodat help scale your business? Let’s talk and discover the answers together.
        </p>

        {/* Middle Section (Three Columns) */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-12">
          
          {/* Left Column (Logo + Tagline) */}
          <div className="text-center md:text-left">
            <img src={shodatLogo} alt="Shodat Logo" className="mx-auto md:mx-0 h-10" />
            <p className="text-white text-sm mt-2">Innovating insights, accelerating growth</p>
          </div>

          {/* Center Column (Social Media) */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2">
              <p className="text-white text-lg font-bold">Follow us on</p>
              <a
                href="https://linkedin.com/company/shodat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-3xl transition duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Right Column (Address) */}
          <div className="text-white text-lg text-left md:text-left">
            <p className="font-bold">Shodat Inc.</p>
            <p className="font-bold">440 N. Wolfe Rd., Unit MS234</p>
            <p className="font-bold">Sunnyvale, 94085 California, U.S.A.</p>
          </div>

        </div>

        {/* Horizontal Line */}
        <hr className="border-gray-700 mb-4" />

        {/* Bottom Section (Two Columns) */}
        <div className="flex justify-between items-center text-white text-sm px-4">
          <p>&copy; {currentYear} Shodat Inc. All rights reserved.</p>
          <Link to="/privacy" className="hover:text-white ml-40">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
