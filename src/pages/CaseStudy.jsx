import React, { useState } from 'react';

const CaseStudyPage = () => {
  const [showMore, setShowMore] = useState(false);

  const handleButtonClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="w-screen min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow w-full bg-white shadow-md rounded-none p-8">

        <h1 className="text-4xl font-extrabold text-indigo-800 mb-6">Case Study: Innovative Tech Solution</h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Discover how our innovative tech solutions transformed client operations and led to a substantial increase in efficiency and user satisfaction.
        </p>
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-indigo-700">Problem Statement</h2>
            <p className="text-gray-600">
              The client faced challenges with outdated systems that hindered performance and scalability, causing frequent downtime and high maintenance costs.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-indigo-700">Approach</h2>
            <p className="text-gray-600">
              We adopted a microservices architecture and containerization, combined with a robust CI/CD pipeline to ensure smooth deployments and reliable updates.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-indigo-700">Results</h2>
            <p className="text-gray-600">
              After implementation, system performance improved by 50%, and downtime reduced by over 90%, leading to increased client satisfaction and reduced costs.
            </p>
          </div>
        </div>
        {showMore && (
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-indigo-600">Technical Implementation</h3>
              <p className="text-gray-600">
                The project utilized Docker containers for seamless deployment and Kubernetes for container orchestration. Automated testing frameworks ensured that each deployment was reliable and free of critical issues.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-600">User Experience Enhancements</h3>
              <p className="text-gray-600">
                A focus on responsive design made the application accessible on both desktop and mobile devices. User feedback was incorporated through continuous updates, keeping the interface modern and user-friendly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-600">Performance Optimization</h3>
              <p className="text-gray-600">
                Leveraging caching mechanisms and database indexing reduced load times significantly. Stress testing revealed an improvement of up to 70% in handling high-traffic scenarios.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-600">Client Feedback and Impact</h3>
              <p className="text-gray-600">
                Post-deployment analytics showed a 40% increase in user engagement and a 30% reduction in maintenance costs. Client feedback highlighted the ease of use and improved performance as major successes.
              </p>
            </div>
          </div>
        )}
        <button
          onClick={handleButtonClick}
          className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          {showMore ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default CaseStudyPage;
