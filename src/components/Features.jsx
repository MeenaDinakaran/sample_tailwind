import { FiDatabase, FiActivity, FiLayers, FiCpu, FiSettings, FiBarChart2 } from 'react-icons/fi';

const features = [
  {
    name: 'Unified Data Platform',
    description: 'Connect and integrate all your data sources in one powerful platform for seamless access and management.',
    icon: FiDatabase,
  },
  {
    name: 'Real-time Processing',
    description: 'Process and analyze data in real-time for immediate insights and responsive AI applications.',
    icon: FiActivity,
  },
  {
    name: 'Data Transformation',
    description: 'Transform raw data into structured, analysis-ready formats with our advanced ETL tools.',
    icon: FiLayers,
  },
  {
    name: 'AI Model Integration',
    description: 'Seamlessly integrate and deploy AI models with your processed data for intelligent applications.',
    icon: FiCpu,
  },
  {
    name: 'Automated Workflows',
    description: 'Build and automate data workflows to increase efficiency and reduce manual intervention.',
    icon: FiSettings,
  },
  {
    name: 'Advanced Analytics',
    description: 'Gain deeper insights with our comprehensive analytics and visualization capabilities.',
    icon: FiBarChart2,
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            All-in-One Data & AI Platform
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Everything you need to transform your data into actionable AI-powered insights
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-6 py-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="ml-4 text-lg font-medium text-gray-900">{feature.name}</h3>
                  </div>
                  <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;