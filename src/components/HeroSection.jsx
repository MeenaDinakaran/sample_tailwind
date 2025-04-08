import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import heroImage1 from '../assets/hero_image1.webp';
import heroImage2 from '../assets/hero_image2.webp';
import heroImage3 from '../assets/hero_image3.webp';
import heroImage4 from '../assets/hero_image4.webp';
import mouseIcon from '../assets/mouseIcon.svg';

const HeroSection = () => {
  const [activeDot, setActiveDot] = useState(0);
  const navigate = useNavigate();

  const backgrounds = [
    `url(${heroImage1})`,
    `url(${heroImage2})`,
    `url(${heroImage3})`,
    `url(${heroImage4})`,
  ];

  const handleDotClick = (index) => {
    setActiveDot(index);
  };

  const goToContactPage = () => {
    navigate('/contact');
  };

  return (
    <div
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: backgrounds[activeDot],
        height: '100vh',
        cursor: `url(${mouseIcon}), auto`,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          <div className="lg:col-span-6 flex flex-col justify-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="block">Accelerate Your</span>
              <span className="block gradient-text">Data-Driven AI Innovation</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-300">
              A full-stack AI data platform enabling businesses to integrate, process, and leverage data for AI-driven insights and applications.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700"
              >
                Request Demo
              </Link>
              <Link
                to="/platform"
                className="rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-blue-600 hover:bg-gray-50"
              >
                Learn More
              </Link>
              <button
                onClick={goToContactPage}
                className="rounded-md bg-purple-600 px-6 py-3 text-base font-medium text-white hover:bg-purple-700"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination and mouse icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
        <img src={mouseIcon} alt="Custom Mouse Icon" className="w-8 h-8" />
        <div className="flex space-x-4">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              className={`w-6 h-1 rounded-full transition-all duration-300 ${
                activeDot === index ? 'bg-teal-400' : 'bg-gray-600'
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
