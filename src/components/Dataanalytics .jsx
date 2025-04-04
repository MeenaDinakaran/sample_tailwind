import React from 'react';
import dataEngineeringImg from '../assets/data-engineering-opt-384.webp';
import advancedAnalyticsImg from '../assets/advancedAnalytics-opt-384.webp';
import aiInnovationImg from '../assets/ai-innovation-img1-opt-384.webp';
import securityImg from '../assets/security-opt-384.webp';

const features = [
  {
    title: 'Data Engineering',
    description: 'Building a robust data infrastructure for seamless integration and analysis.',
    image: dataEngineeringImg,
  },
  {
    title: 'Advanced Analytics & BI',
    description: 'In-depth custom analytics, dashboarding and reporting frameworks to enable data-driven decision making.',
    image: advancedAnalyticsImg,
  },
  {
    title: 'AI Innovation',
    description: 'Transforming data into actionable insights and predictive intelligence.',
    image: aiInnovationImg,
  },
  {
    title: 'Security & Compliance',
    description: 'Ensure data protection & navigate compliance with precision and speed.',
    image: securityImg,
  },
];

const ShodatClone = () => {
  return (
    <div className="bg-grey-900 text-white min-h-screen">
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-purple-800 max-w-4xl mx-auto">
          Discover how Shodat can elevate your business with our bespoke data analytics solutions
        </h1>
        <div className="w-64 h-0.5 bg-purple-800 mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-grey bg-opacity-60 p-6 flex flex-col justify-center items-center transition-opacity duration-300 group-hover:bg-opacity-70">
              <h2 className="text-2xl font-bold mb-2 group-hover:underline">{feature.title}</h2>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
            {/* Gradient Line Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-600
               transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShodatClone;
   