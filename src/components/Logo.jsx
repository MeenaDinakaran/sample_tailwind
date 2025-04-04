import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <path
          d="M18 4L32 12V24L18 32L4 24V12L18 4Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M18 12L24 16V24L18 28L12 24V16L18 12Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="4"
            y1="18"
            x2="32"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4F46E5" />
            <stop offset="1" stopColor="#9333EA" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-bold text-xl text-gray-900">Shodat<span className="text-indigo-600">.ai</span></span>
    </div>
  );
};

export default Logo;