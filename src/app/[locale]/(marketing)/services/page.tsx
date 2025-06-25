import { StructuredData } from '@/components/common/StructuredData';
import { breadcrumbSchema } from '@/utils/structuredData';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Our Services | Realty Direct',
  description: 'Discover Realty Direct\'s flexible real estate services. From do-it-yourself property sales to full-service support, find the perfect option for your Queensland property transaction.',
  keywords: 'real estate services queensland, property sale options, FSBO services, agent listing queensland, hybrid real estate',
  alternates: {
    canonical: 'https://realtydirect.com.au/services',
  },
  openGraph: {
    title: 'Our Services | Realty Direct',
    description: 'Flexible real estate services for Queensland property sellers. Choose from DIY, assisted, hybrid, or professional agent options.',
    url: 'https://realtydirect.com.au/services',
    siteName: 'Realty Direct',
    images: [
      {
        url: 'https://realtydirect.com.au/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Realty Direct Services - Queensland Real Estate Solutions',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | Realty Direct',
    description: 'Flexible real estate services for Queensland property sellers.',
    images: ['https://realtydirect.com.au/og-services.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

type IServicesProps = {
  params: Promise<{ locale: string }>;
};

export default async function Services(props: IServicesProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const services = [
    {
      title: 'Do It Yourself (Full FSBO)',
      subtitle: 'Complete control, maximum savings',
      price: 'From $495',
      color: 'bg-green-50 border-green-200',
      description: 'Take full control of your property sale with our DIY package. Perfect for confident sellers who want to maximize savings while handling negotiations and viewings themselves.',
      features: [
        'Professional photography package',
        'Custom property listing webpage',
        'All major portal listings (realestate.com.au, Domain)',
        'DIY sales toolkit and resources',
        'Digital contract management',
        'Basic market analysis report',
        'Email and phone support',
      ],
      ideal: 'Ideal for: Experienced sellers, investors, or those with flexible schedules',
    },
    {
      title: 'Assisted For Sale By Owner',
      subtitle: 'Support where you need it',
      price: 'From $1,495',
      color: 'bg-blue-50 border-blue-200',
      description: 'Get professional support while maintaining control of your sale. We handle the complex paperwork and guide you through the process while you manage viewings and negotiations.',
      features: [
        'Everything in DIY package',
        'Professional market valuation',
        'Contract preparation and review',
        'Negotiation guidance and support',
        'Open home management tools',
        'Buyer qualification assistance',
        'Extended marketing campaign (3 months)',
        'Priority phone and email support',
      ],
      ideal: 'Ideal for: First-time FSBO sellers or those wanting backup support',
    },
    {
      title: 'Hybrid Solution',
      subtitle: 'Best of both worlds',
      price: 'From $3,995',
      color: 'bg-purple-50 border-purple-200',
      description: 'Combine the benefits of agent expertise with DIY savings. Your dedicated agent handles viewings and negotiations while you stay in control of the process and pricing.',
      features: [
        'Everything in Assisted package',
        'Dedicated agent for viewings',
        'Professional negotiation services',
        'Buyer screening and qualification',
        'Two open homes per week',
        'Enhanced marketing materials',
        'Virtual tour creation',
        'Live auction bidding platform',
        'Post-sale settlement assistance',
      ],
      ideal: 'Ideal for: Busy professionals or those wanting agent expertise without full commission',
    },
    {
      title: 'Professional Agent Listing',
      subtitle: 'Full-service convenience',
      price: 'From 1.9% + GST',
      color: 'bg-orange-50 border-orange-200',
      description: 'Let our carefully selected local agents handle everything. Full-service real estate with competitive commission rates and transparent pricing.',
      features: [
        'Full agent representation',
        'Complete marketing campaign',
        'All viewings and open homes managed',
        'Expert price negotiation',
        'Comprehensive market analysis',
        'Professional staging consultation',
        'Drone photography/videography',
        'Social media marketing campaign',
        'Weekly progress reports',
        'Full settlement coordination',
      ],
      ideal: 'Ideal for: Those wanting traditional full-service or lacking time to self-manage',
    },
  ];

  const breadcrumbs = [
    { name: 'Home', url: 'https://realtydirect.com.au' },
    { name: 'Services', url: 'https://realtydirect.com.au/services' },
  ];

  const servicesListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Realty Direct Services',
    'description': 'Our range of real estate services for Queensland property sellers',
    'itemListElement': services.map((service, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Service',
        'name': service.title,
        'description': service.description,
        'offers': {
          '@type': 'Offer',
          'price': service.price.replace(/[^0-9.]/g, ''),
          'priceCurrency': 'AUD',
        },
      },
    })),
  };

  return (
    <div className="max-w-7xl mx-auto">
      <StructuredData data={breadcrumbSchema(breadcrumbs)} />
      <StructuredData data={servicesListSchema} />
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Choose the perfect level of support for your Queensland property sale. From complete DIY freedom to full-service agent representation, we have a solution that fits your needs and budget.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
        {services.map((service, index) => (
          <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden border-t-4 ${service.color} hover:shadow-xl transition-shadow`}>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h2>
              <p className="text-gray-600 text-sm mb-3">{service.subtitle}</p>
              <p className="text-2xl font-bold text-blue-600 mb-4">{service.price}</p>
              <p className="text-gray-700 mb-6 text-sm">{service.description}</p>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Includes:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-sm">
                      <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-gray-600 italic border-t pt-4">{service.ideal}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why Choose Realty Direct?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-3">Flexible Options</h3>
            <p className="text-gray-700">
              Whether you want complete control or full-service support, we have a solution that fits your needs. Upgrade or modify your package anytime.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-3">Local Expertise</h3>
            <p className="text-gray-700">
              Our network of Queensland agents knows the local market inside out. Get the insights and connections you need for a successful sale.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-3">Transparent Pricing</h3>
            <p className="text-gray-700">
              No hidden fees or surprise charges. Know exactly what you're paying upfront, with clear pricing for every service level.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Ready to sell your property?</h2>
        <p className="text-gray-700 mb-6">
          Get started with a free property valuation and discover which service option is right for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`/${locale}/sell-your-property`}
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 focus:ring-4 focus:ring-blue-200 transition-all duration-200"
          >
            Get Started
          </a>
          <a
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-blue-600 bg-white border-2 border-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 focus:ring-4 focus:ring-blue-200 transition-all duration-200"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
