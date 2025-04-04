import { CheckIcon } from '@heroicons/react/24/outline';

const tiers = [
  {
    name: 'Starter',
    price: 'Custom',
    description: 'Perfect for small teams just getting started with data-driven projects',
    features: [
      'Up to 5 data sources',
      'Basic data transformations',
      'Standard analytics dashboards',
      'Email support',
      '10GB storage',
      'Weekly data refreshes'
    ],
    cta: 'Contact Sales',
    mostPopular: false,
  },
  {
    name: 'Professional',
    price: 'Custom',
    description: 'Ideal for growing businesses with advancing data needs',
    features: [
      'Up to 20 data sources',
      'Advanced ETL capabilities',
      'Custom analytics dashboards',
      'Priority support',
      '50GB storage',
      'Daily data refreshes',
      'Basic AI model integration'
    ],
    cta: 'Contact Sales',
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Complete solution for large organizations with complex requirements',
    features: [
      'Unlimited data sources',
      'Full ETL suite',
      'Advanced AI model deployment',
      'Dedicated support team',
      'Custom storage solutions',
      'Real-time data processing',
      'Advanced security features',
      'Custom API development'
    ],
    cta: 'Contact Sales',
    mostPopular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Flexible Pricing for Every Stage
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Choose the plan that works best for your current needs and scale as you grow
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border ${
                tier.mostPopular ? 'border-blue-600 shadow-md' : 'border-gray-200'
              } p-8 bg-white`}
            >
              {tier.mostPopular ? (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 px-4 py-1 text-sm font-semibold text-white rounded-full">
                  Most Popular
                </div>
              ) : null}
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold tracking-tight text-gray-900">
                    {tier.price}
                  </span>
                </p>
                <p className="mt-2 text-gray-500">{tier.description}</p>

                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="contact"
                className={`mt-8 block w-full rounded-md px-4 py-2 text-center text-sm font-semibold ${
                  tier.mostPopular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;