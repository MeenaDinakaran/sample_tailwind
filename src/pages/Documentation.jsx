import React from 'react';

const DocumentationPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header with dark background - minimized height */}
      <div className="w-full bg-gray-900 text-white py-6 px-4 text-center">
        <h1 className="text-3xl font-bold mb-2">Documentation</h1>
        <p className="text-base">Here your description goes this is the demo documentation for the show.</p>
      </div>

      {/* Getting Started Section */}
      <div className="max-w-5xl mx-auto py-10 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Getting started is easy!</h2>
        <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded">
          Get Started
        </button>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Introduction Card */}
        <div className="relative transform rotate-y-3 rotate-x-1">
          <div className="bg-orange-500 h-2 rounded-t-lg"></div>
          <div className="bg-gray-800 text-white p-6 rounded shadow-lg transform -rotate-y-3">
            <div className="flex items-center mb-4">
              <div className="bg-gray-700 p-2 rounded">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold ml-2">Introduction</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Section overview goes here Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt recusandae asperiores ullam? Doloribus dicta nesciunt dolorum necessitatibus! Esse, maxime animi?
            </p>
          </div>
        </div>

        {/* Installation Card */}
        <div className="relative transform rotate-y-3 rotate-x-1">
          <div className="bg-pink-500 h-2 rounded-t-lg"></div>
          <div className="bg-gray-800 text-white p-6 rounded shadow-lg transform -rotate-y-3">
            <div className="flex items-center mb-4">
              <div className="bg-gray-700 p-2 rounded">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold ml-2">Installation</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Section overview goes here Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt recusandae asperiores ullam? Doloribus dicta nesciunt dolorum necessitatibus! Esse, maxime animi?
            </p>
          </div>
        </div>

        {/* Integration Card */}
        <div className="relative transform rotate-y-3 rotate-x-1">
          <div className="bg-orange-500 h-2 rounded-t-lg"></div>
          <div className="bg-gray-800 text-white p-6 rounded shadow-lg transform -rotate-y-3">
            <div className="flex items-center mb-4">
              <div className="bg-gray-700 p-2 rounded">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold ml-2">Integration</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Section overview goes here Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt recusandae asperiores ullam? Doloribus dicta nesciunt dolorum necessitatibus! Esse, maxime animi?
            </p>
          </div>
        </div>
      </div>

      {/* Gradient Bar */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="h-6 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded"></div>
      </div>
    </div>
  );
};

export default DocumentationPage;