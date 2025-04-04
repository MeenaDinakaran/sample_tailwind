import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';
import Dataanalytics  from '../components/Dataanalytics ';
const Home = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <Dataanalytics  />
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How Shodat Works</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Our comprehensive platform delivers end-to-end data solutions
            </p>
          </div>
          
          <div className="mt-16">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <span className="text-lg font-bold">1</span>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">Connect Your Data</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Easily integrate all your data sources with our pre-built connectors and flexible API.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative mt-10 lg:mt-0">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <span className="text-lg font-bold">2</span>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">Transform & Process</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Clean, enrich, and structure your data with our powerful ETL tools and data workflows.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative mt-10 lg:mt-0">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <span className="text-lg font-bold">3</span>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">Analyze & Innovate</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Leverage your data for AI model training, analytics, and intelligent applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Pricing />
      <ContactForm />
    </div>
  );
};

export default Home;