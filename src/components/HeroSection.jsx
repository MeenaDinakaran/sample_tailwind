import { useState } from 'react'; 
import { Link } from 'react-router-dom';

// Importing images for better handling
import heroImage1 from '../assets/hero_image1.webp';
import heroImage2 from '../assets/hero_image2.webp';
import heroImage3 from '../assets/hero_image3.webp';
import heroImage4 from '../assets/hero_image4.webp';
import mouseIcon from '../assets/mouseIcon.svg';
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {
  const [activeDot, setActiveDot] = useState(0); // Track the active dot

  // Array of background images
  const backgrounds = [
    `url(${heroImage1})`,
    `url(${heroImage2})`,
    `url(${heroImage3})`,
    `url(${heroImage4})`,
  ];

  // Handle the dot click and change the background
  const handleDotClick = (index) => {
    setActiveDot(index);
  };

  // Function to scroll to the bottom of the page
  const navigate = useNavigate();
  const scrollToBottom = () => {
     navigate('/contact'); // Navigate to the contact page
};

  return (
    <div
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: backgrounds[activeDot],
        height: '100vh',
        cursor: 'url("/path-to-your-mouse-icon.png"), auto', // Set custom cursor icon here
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Accelerate Your</span>
                <span className="block gradient-text">Data-Driven AI Innovation</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                A full-stack AI data platform enabling businesses to integrate, process, and leverage data for AI-driven insights and applications.
              </p>
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                  <Link
                    to="Contact"
                    className="flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-8 md:text-lg"
                  >
                    Request Demo
                  </Link>
                  <Link
                    to="/platform"
                    className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-blue-600 hover:bg-gray-50 md:py-4 md:px-8 md:text-lg"
                  >
                    Learn More
                  </Link>
                </div>
                {/* Get Started Button next to Request Demo and Learn More */}
                <div className="mt-6 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                  <button
                    onClick={scrollToBottom}
                    className="flex items-center justify-center rounded-md bg-purple-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-8 md:text-lg"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-span-6 lg:mt-0">
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0">
              {/* This section could include any other content like images or animations */}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination dots and custom mouse icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
        {/* Custom mouse icon */}
        <div className="cursor-pointer">
        <img src={mouseIcon} alt="Custom Mouse Icon" className="w-8 h-8" />

        </div>
        
        {/* Pagination dots */}
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
