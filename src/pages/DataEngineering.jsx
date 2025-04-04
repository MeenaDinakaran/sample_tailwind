import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Engineering from "../assets/DataEngineering.webp"
import Visual  from "../assets/Visual Pipeline Designer.jfif"
import { Link } from 'react-router-dom';
import { 
  FaDatabase, 
  FaCloudUploadAlt, 
  FaExchangeAlt, 
  FaClock, 
  FaTools,
  FaCode
} from 'react-icons/fa';

const DataEngineering = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <FaCloudUploadAlt />,
      title: "Data Ingestion",
      description: "Connect to any data source with our 200+ pre-built connectors or build custom connectors using our SDK."
    },
    {
      icon: <FaExchangeAlt />,
      title: "Data Transformation",
      description: "Clean, normalize, and transform your data with our visual ETL designer or SQL-based transformation tools."
    },
    {
      icon: <FaDatabase />,
      title: "Data Storage",
      description: "Store and manage your data in our high-performance data warehouse or connect to your existing storage solutions."
    },
    {
      icon: <FaClock />,
      title: "Automated Scheduling",
      description: "Schedule and automate your data pipelines with our flexible scheduling engine and event-based triggers."
    },
    {
      icon: <FaTools />,
      title: "Data Quality",
      description: "Ensure data quality with built-in validation rules, anomaly detection, and automated data profiling."
    },
    {
      icon: <FaCode />,
      title: "Extensibility",
      description: "Extend functionality with custom Python, SQL, or JavaScript code to handle complex transformation needs."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        ref={headerRef}
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={headerInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Data Engineering <span className="gradient-text">Made Simple</span>
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={headerInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-700 mb-8"
              >
                Build reliable, scalable data pipelines without the complexity. Our intuitive platform empowers both technical and business users to connect, transform, and deliver data across your organization.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={headerInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact" className="btn-primary text-center">
                  Start Free Trial
                </Link>
                <Link to="/platform/documentation" className="btn-secondary text-center">
                  View Documentation
                </Link>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={headerInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                src={Engineering}
                alt="Data Engineering Interface"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Data Engineering Features
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Everything you need to build, manage, and optimize your data pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="card h-full flex flex-col"
              >
                <div className="p-4 bg-blue-50 rounded-full inline-block mb-4">
                  <span className="text-blue-500 text-xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 flex-grow">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Pipeline Designer */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={Visual}
                alt="Visual Pipeline Designer"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Visual Pipeline Designer
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Our intuitive drag-and-drop interface makes it easy to design complex data workflows without writing code. Connect sources, transformations, and destinations in a visual canvas.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Drag-and-drop interface for building data pipelines</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">200+ pre-built components for common data operations</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Real-time data preview at every step</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Built-in version control and collaboration features</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code vs. No-Code Approach */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Approach
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Work the way you want with our flexible platform that supports both no-code and code-first approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card">
              <div className="mb-4">
                <div className="text-center p-6 bg-blue-50 rounded-xl mb-6">
                  <svg className="w-16 h-16 text-blue-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-center">No-Code</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Visual tools for business analysts and data practitioners to build pipelines without coding.
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Drag-and-drop interface for building pipelines</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Pre-built transformation components</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Visual data mapping and transformation</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Template gallery for common use cases</p>
                </li>
              </ul>
            </div>
            
            <div className="card">
              <div className="mb-4">
                <div className="text-center p-6 bg-indigo-50 rounded-xl mb-6">
                  <svg className="w-16 h-16 text-indigo-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-center">Code-First</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Powerful tools for data engineers and developers who prefer to work with code.
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-500 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Python, SQL, and JavaScript support</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-500 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Integrated development environment</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-500 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">Git integration for version control</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-500 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">CI/CD pipeline integration</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Building Better Data Pipelines Today
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Try our platform free for 14 days. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Free Trial
            </Link>
            <Link
              to="/CaseStudy"
              className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataEngineering;