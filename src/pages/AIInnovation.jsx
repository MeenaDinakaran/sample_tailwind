import React, { useState, useEffect } from 'react';

const AIInnovation = () => {
  const [activeTab, setActiveTab] = useState('research');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Add animation when component mounts
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timeout);
  }, []);
  
  const innovationAreas = [
    {
      id: 'research',
      title: 'AI Research',
      description: 'Pioneering the next generation of machine learning algorithms and models.',
      features: [
        'Advanced deep learning architectures',
        'Reinforcement learning from human feedback',
        'Novel attention mechanisms',
        'Efficient training methodologies'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 'applications',
      title: 'Real-World Applications',
      description: 'Deploying cutting-edge AI to solve practical challenges across industries.',
      features: [
        'Healthcare diagnostics and treatment planning',
        'Climate modeling and prediction',
        'Financial risk assessment',
        'Automated content creation'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'ethics',
      title: 'Ethical AI',
      description: 'Developing responsible AI systems that prioritize human values and safety.',
      features: [
        'Bias detection and mitigation',
        'Explainable AI methodologies',
        'Privacy-preserving machine learning',
        'Safety alignment techniques'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];
  
  const publications = [
    {
      title: "Attention is All You Need: Next Generation",
      authors: "Shodat AI Research Team",
      date: "March 2025",
      link: "#"
    },
    {
      title: "Efficient Training for Large Scale Foundation Models",
      authors: "Wang, J., Smith, K., Patel, R.",
      date: "January 2025",
      link: "#"
    },
    {
      title: "Self-Supervised Learning in Limited Data Environments",
      authors: "Chen, L., Johnson, M.",
      date: "October 2024",
      link: "#"
    }
  ];
  
  return (
    <div className={`w-full bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white py-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold tracking-wide uppercase">Innovation at Shodat.ai</h2>
          <p className="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
            Redefining the Future of AI
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl">
            Pioneering research, ethical development, and real-world applications that push the boundaries of what's possible.
          </p>
        </div>
        
        {/* Innovation Areas Tabs */}
        <div className="mb-12">
          <div className="border-b border-gray-700">
            <nav className="flex justify-center -mb-px space-x-8">
              {innovationAreas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setActiveTab(area.id)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === area.id
                      ? 'border-blue-400 text-blue-400'
                      : 'border-transparent text-gray-300 hover:text-gray-200 hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="mr-2">{area.icon}</span>
                    {area.title}
                  </div>
                </button>
              ))}
            </nav>
          </div>
          
          {/* Tab Content */}
          <div className="mt-8">
            {innovationAreas.map((area) => (
              <div
                key={area.id}
                className={`transition-opacity duration-300 ${
                  activeTab === area.id ? 'block opacity-100' : 'hidden opacity-0'
                }`}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                  <div className="mt-10 lg:mt-0">
                    <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                    <p className="text-lg mb-6">{area.description}</p>
                    <ul className="space-y-4">
                      {area.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 h-6 w-6 text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="ml-3">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10 lg:mt-0 lg:ml-10">
                    <div className="bg-blue-800 bg-opacity-30 rounded-xl shadow-xl p-8">
                      <div className="relative w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="p-4">
                            <div className="w-16 h-16 mx-auto mb-4">
                              {area.icon}
                            </div>
                            <h4 className="text-xl font-medium text-center">{area.title}</h4>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6">
                        <h4 className="text-lg font-medium mb-3">Recent Publications</h4>
                        <ul className="space-y-3">
                          {publications.map((pub, index) => (
                            <li key={index} className="border-l-2 border-blue-400 pl-3 py-1">
                              <h5 className="font-medium">{pub.title}</h5>
                              <p className="text-sm opacity-80">{pub.authors}</p>
                              <p className="text-xs opacity-60">{pub.date}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-800 to-indigo-900 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 lg:px-12 lg:py-16">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-extrabold">Join Our Research Community</h2>
                  <p className="mt-4 text-lg">
                    Collaborate with leading AI researchers and contribute to breakthrough innovations that shape the future.
                  </p>
                  <div className="mt-8 flex space-x-4">
                    <a
                      href="/Learnmore"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                    >
                      Learn More
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
                    >
                      Join Now
                    </a>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 flex justify-center">
                  <div className="w-full max-w-md">
                    <svg className="w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#4F46E5" d="M43.2,-51.2C54.9,-39.8,62.5,-24.9,65.8,-8.7C69,7.5,67.9,25,59.1,38.5C50.3,52,33.8,61.4,16.2,65.2C-1.4,69,-20,67.1,-34.9,59C-49.8,50.8,-61,36.3,-67.3,19.3C-73.6,2.3,-75,-17.1,-67.4,-32.8C-59.9,-48.4,-43.3,-60.2,-26.6,-65.9C-9.9,-71.6,7,-71.1,20.8,-65.3C34.6,-59.5,45.2,-48.5,43.2,-51.2Z" transform="translate(100 100)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInnovation;