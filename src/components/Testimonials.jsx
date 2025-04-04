import { useState } from "react";
import transform from "../assets/transforming-operations-opt-640.webp";

const testimonials = [
  {
    content:
      "Shodat.ai transformed our data operations completely. We've reduced our data processing time by 60% and gained valuable insights we couldn't access before.",
    author: "Sarah Johnson",
    role: "CTO, TechInnovate",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    content:
      "Implementing the Shodat platform was the best decision we made for our AI strategy. The unified approach to data has accelerated our model development significantly.",
    author: "Michael Chang",
    role: "Head of AI, DataFirst Inc.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    content:
      "As a midsize business, we needed a solution that was powerful yet manageable. Shodat delivered exactly that, with outstanding support throughout implementation.",
    author: "Lisa Rodriguez",
    role: "Director of Analytics, GrowthSmart",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  },
];

const Testimonials = () => {
  const [activeFeature, setActiveFeature] = useState("Proven");

  const handleFeatureClick = (feature) => {
    setActiveFeature((prev) => (prev === feature ? null : feature));
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Innovative Companies
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            See what our clients say about their experience with Shodat's data platform
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex-1">
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
              <div className="mt-6 flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Buttons */}
        <div className="mt-16 flex flex-wrap gap-4 justify-center">
          {["Proven", "Expertise", "Customization", "Innovation", "Security", "Compliance"].map(
            (feature) => (
              <button
                key={feature}
                onClick={() => handleFeatureClick(feature)}
                className={`px-5 py-3 text-lg font-semibold rounded-md transition-colors ${
                  activeFeature === feature
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-gray-800 hover:bg-gray-400"
                }`}
              >
                {feature}
              </button>
            )
          )}
        </div>

        {/* Feature Content Section */}
        {activeFeature && (
          <div className="mt-16 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Image Section with soft background */}
            <div className="w-full md:w-2/5 bg-blue-50 p-4 rounded-lg shadow-md">
              <img src={transform} alt="Transforming operations" className="w-full h-auto rounded-md" />
            </div>

            {/* Text Section with bold violet and extended content */}
            <div className="w-full md:w-3/5">
              <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold text-violet-900 mb-2">
                  {activeFeature} Feature
               </h3>  
                <p className="text-black-700 font-semibold leading-relaxed">
                  {activeFeature === "Proven" &&
                    "Discover the proven success stories of companies using Shodat.ai to drive data-driven decisions. Our platform has consistently delivered measurable results across various industries. With real-time analytics, enhanced data integrity, and streamlined workflows, businesses can focus more on strategy and less on complexity. These benefits translate into improved ROI, reduced operational costs, and smarter decision-making processes."}
                  {activeFeature === "Expertise" &&
                    "Our team has deep expertise in AI, machine learning, and data science. We provide cutting-edge tools to help you build intelligent systems that unlock new business opportunities. From data labeling to automated pipelines and model monitoring, our support spans the full lifecycle of AI development. This ensures you're equipped to deploy, scale, and optimize with confidence, no matter the complexity of your use case."}
                  {activeFeature === "Customization" &&
                    "Shodat's platform is highly customizable to meet the specific needs of your business. We provide flexible tools that adapt to your unique requirements, ensuring seamless integration into your workflow. Whether you're building for healthcare, finance, or retail, our platform molds to your needs with powerful APIs, intuitive dashboards, and domain-specific modules that make innovation effortless."}
                  {activeFeature === "Innovation" &&
                    "At Shodat, we believe in constant innovation. Our platform evolves with the latest advancements in AI, ensuring you always have access to cutting-edge features that keep you ahead of the curve. We regularly release performance upgrades, introduce new ML capabilities, and experiment with next-gen architecture, empowering your teams to innovate fearlessly and stay future-ready."}
                  {activeFeature === "Security" &&
                    "We take security seriously. Shodat ensures that your data is protected with robust encryption, access controls, and compliance with industry-leading standards. Our multi-layered security architecture guards against unauthorized access, while continuous audits and threat assessments help maintain data confidentiality and business trust at every level."}
                  {activeFeature === "Compliance" &&
                    "Shodat adheres to the highest compliance standards, including GDPR, CCPA, and other regulatory requirements, ensuring your data is handled in a fully compliant manner. We offer detailed audit trails, automated policy enforcement, and configurable consent settings so your organization remains legally secure and ethically responsible in all data operations."}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
