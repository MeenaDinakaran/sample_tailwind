import React, { useState } from 'react';

const LearnMorePage = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="w-screen min-h-screen bg-gray-50 flex flex-col">
  <div className="flex-grow w-full bg-white shadow-md rounded-none p-8">

  
        <h1 className="text-4xl font-extrabold text-indigo-800 mb-6">Explore More About Our Services</h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Our services are designed to help businesses thrive in the digital age, offering solutions that increase efficiency and boost performance. We offer comprehensive support through every stage of the project, from initial consultation to final deployment and beyond. Our team of experts is committed to understanding your specific challenges and delivering tailored solutions that align with your business objectives.
        </p>
        {showMore && (
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold text-indigo-700">Cutting-Edge Technologies</h2>
              <p className="text-gray-600">
                We harness the power of modern technologies to deliver high-performance solutions. Our team leverages frameworks such as React, Angular, and Vue.js to build responsive web applications, while our backend expertise covers Node.js, Python, and Go to ensure seamless and scalable server architectures.
              </p>
              <p className="text-gray-600">
                Additionally, we integrate advanced data processing with tools like Apache Kafka and Hadoop, enabling real-time analytics and big data management. Our cloud solutions are designed to optimize resource allocation, reduce latency, and enhance application availability.
              </p>
              <p className="text-gray-600">
                We also focus on continuous integration and deployment (CI/CD) to streamline development processes, ensuring rapid iteration and consistent quality. Automation tools like Jenkins and GitLab CI play a vital role in maintaining our delivery pipeline.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-indigo-700">User-Centric Design</h2>
              <p className="text-gray-600">
                Our design philosophy revolves around user experience. We craft intuitive interfaces that engage users and foster productivity. With UX research and usability testing as integral parts of our process, we create applications that not only look good but also function flawlessly.
              </p>
              <p className="text-gray-600">
                Accessibility is a key aspect of our design approach, ensuring that people with varying abilities can easily use our solutions. We adhere to WCAG guidelines and regularly conduct audits to maintain compliance.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-indigo-700">Performance Optimization</h2>
              <p className="text-gray-600">
                We prioritize performance from the ground up. By implementing code splitting, lazy loading, and caching strategies, we enhance load times and minimize resource consumption. Our optimization techniques extend to database management as well, where indexing and query optimization are fundamental practices.
              </p>
              <p className="text-gray-600">
                Load testing and profiling help us identify bottlenecks, allowing us to fine-tune applications for speed and responsiveness. Additionally, we leverage content delivery networks (CDNs) and image compression techniques to further boost performance.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-indigo-700">Secure and Reliable Solutions</h2>
              <p className="text-gray-600">
                Security is an essential aspect of our services. We follow best practices such as input validation, encryption, and secure authentication mechanisms to safeguard data and protect against vulnerabilities. Regular security audits help us stay ahead of potential threats.
              </p>
              <p className="text-gray-600">
                Reliability is equally crucial. Our solutions are engineered with fault tolerance and redundancy to maintain uninterrupted service. By conducting stress tests and failover simulations, we ensure that our applications can withstand various failure scenarios.
              </p>
            </div>
          </div>
        )}
        <button
          onClick={handleToggle}
          className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          {showMore ? 'Show Less' : 'Learn More'}
        </button>
      </div>
    </div>
  );
};

export default LearnMorePage;
