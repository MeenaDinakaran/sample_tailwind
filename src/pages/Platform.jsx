import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import platform from "../assets/platform.jfif"
import { Link } from 'react-router-dom';
import { 
  FaDatabase, 
  FaRobot, 
  FaChartLine, 
  FaCogs, 
  FaLock, 
  FaCloudUploadAlt 
} from 'react-icons/fa';

const Platform = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <FaDatabase />,
      title: "Data Engineering",
      description: "Build and automate data pipelines with our intuitive visual interface. Connect to hundreds of data sources and destinations without writing complex code.",
      link: "/platform/data-engineering"
    },
    {
      icon: <FaRobot />,
      title: "AI Innovation",
      description: "Leverage machine learning algorithms to extract meaningful insights, predict trends, and automate decision-making with our no-code AI solutions.",
      link: "/platform/ai-innovation"
    },
    {
      icon: <FaChartLine />,
      title: "Analytics & Visualization",
      description: "Transform raw data into actionable insights with interactive dashboards and advanced analytics tools designed for business users.",
      link: "/platform/analytics"
    },
    {
      icon: <FaCogs />,
      title: "Integration Hub",
      description: "Seamlessly connect with your existing tech stack through our extensive library of pre-built connectors and open APIs.",
      link: "/platform/integrations"
    },
    {
      icon: <FaLock />,
      title: "Security & Governance",
      description: "Enterprise-grade security controls, data lineage tracking, and compliance tools to maintain data integrity and regulatory compliance.",
      link: "/platform/security"
    },
    {
      icon: <FaCloudUploadAlt />,
      title: "Flexible Deployment",
      description: "Deploy in the cloud, on-premises, or in a hybrid environment to meet your organization's specific requirements and constraints.",
      link: "/platform/deployment"
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
        className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 to-purple-50"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            The Shodat.ai <span className="gradient-text">Platform</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto mb-10"
          >
            A comprehensive end-to-end solution for all your data needs, from ingestion and processing to analysis and action.
          </motion.p>
        </div>
      </motion.section>

      {/* Platform Overview Image */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img 
              src={platform}
              alt="Platform Overview" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A Complete Data Platform
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Everything you need to build a robust data strategy in one unified platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link to={feature.link} key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="card h-full flex flex-col cursor-pointer"
                >
                  <div className="p-4 bg-indigo-50 rounded-full inline-block mb-4">
                    <span className="text-indigo-500 text-xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 flex-grow">{feature.description}</p>
                  <Link to="/contact" className="mt-4 text-indigo-600 font-medium flex items-center">
                     Learn more
                     <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                      <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19 12H4.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </Link>

                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From raw data to actionable insights in four simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Connect",
                description: "Connect to your data sources with our pre-built connectors or custom APIs."
              },
              {
                number: "02",
                title: "Transform",
                description: "Clean, enrich, and transform your data with our visual data preparation tools."
              },
              {
                number: "03",
                title: "Analyze",
                description: "Apply advanced analytics and AI models to extract meaningful insights."
              },
              {
                number: "04",
                title: "Act",
                description: "Trigger actions, automate processes, and share insights across your organization."
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-indigo-100 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 transform translate-x-1/2">
                    <svg width="64" height="16" viewBox="0 0 64 16" fill="none">
                      <path d="M0 8H62.5M62.5 8L55.5 1M62.5 8L55.5 15" stroke="#D1D5DB" strokeWidth="2"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Technical Specifications
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Our platform is built with enterprise-grade performance, security, and scalability in mind.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-xl mb-2">Performance</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>High-throughput data processing (up to 10TB/hour)</li>
                    <li>Sub-second query response times</li>
                    <li>Real-time data streaming capabilities</li>
                    <li>Distributed computing architecture</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-2">Security</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>SOC 2 Type II, HIPAA, GDPR compliant</li>
                    <li>End-to-end encryption (AES-256)</li>
                    <li>Role-based access controls</li>
                    <li>Audit logging and activity monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Scalability</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Auto-scaling infrastructure</li>
                      <li>Multi-region deployment options</li>
                      <li>Support for billions of data points</li>
                      <li>Horizontal and vertical scaling capabilities</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Integration</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>200+ pre-built connectors</li>
                      <li>RESTful and GraphQL APIs</li>
                      <li>Webhook support</li>
                      <li>Open-source SDKs (Python, JavaScript, Java)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Deployment</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>SaaS (cloud-hosted)</li>
                      <li>On-premises</li>
                      <li>Hybrid cloud</li>
                      <li>Kubernetes/Docker support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data Strategy?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
            Schedule a personalized demo to see how Shodat.ai can help you unlock the full potential of your data.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Request a Demo
            </Link>
            <Link
              to="/Documentation"
              className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-indigo-700 transition-all duration-300"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platform;