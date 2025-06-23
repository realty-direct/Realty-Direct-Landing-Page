import { setRequestLocale } from 'next-intl/server';
import { Button, Typography, Card, CardContent } from '@mui/material';
import { Home, Shield, Users, Search, Calendar, CheckCircle, FileText, MapPin } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

type IRentingProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IRentingProps): Promise<Metadata> {
  const { locale } = await props.params;

  return {
    title: 'Rental Properties Queensland | Property Management & Tenant Services',
    description: 'Find rental properties and professional property management in Queensland. Expert tenant services, property maintenance, and rental management in Brisbane, Gold Coast & more.',
    keywords: 'rental properties Queensland, property management Brisbane, tenant services, rental homes Gold Coast, property maintenance, lease agreements, rental applications Queensland',
    alternates: {
      canonical: 'https://realtydirect.com.au/renting',
    },
    openGraph: {
      title: 'Rental Properties Queensland | Property Management & Tenant Services',
      description: 'Find rental properties and professional property management in Queensland. Expert tenant services and rental management.',
      url: 'https://realtydirect.com.au/renting',
      siteName: 'Realty Direct Queensland',
      images: [
        {
          url: 'https://realtydirect.com.au/og-renting.jpg',
          width: 1200,
          height: 630,
          alt: 'Rental Properties Queensland with Realty Direct',
        },
      ],
      locale: locale === 'en' ? 'en_AU' : locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Rental Properties Queensland | Property Management & Tenant Services',
      description: 'Find rental properties and professional property management in Queensland with Realty Direct.',
      images: ['https://realtydirect.com.au/twitter-renting.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function Renting(props: IRentingProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Property Rental and Management Services Queensland',
    'description': 'Professional property rental and management services in Queensland including tenant placement, property maintenance, and rental management',
    'provider': {
      '@type': 'RealEstateAgent',
      'name': 'Realty Direct Queensland',
      'url': 'https://realtydirect.com.au'
    },
    'areaServed': ['Queensland', 'Brisbane', 'Gold Coast', 'Sunshine Coast'],
    'serviceType': ['Property Management', 'Tenant Placement', 'Property Maintenance', 'Rental Services'],
    'offers': {
      '@type': 'Offer',
      'description': 'Professional property management and tenant services'
    }
  };

  const services = [
    {
      title: "For Tenants",
      description: "Find your perfect rental home in Queensland with our comprehensive tenant services",
      icon: <Home className="w-12 h-12" />,
      features: [
        "Extensive property search",
        "Application assistance",
        "Lease negotiation support",
        "Ongoing tenant support",
        "Maintenance request handling",
        "Bond and inspection guidance"
      ]
    },
    {
      title: "For Property Owners",
      description: "Professional property management services to maximize your rental investment returns",
      icon: <Shield className="w-12 h-12" />,
      features: [
        "Tenant screening and placement",
        "Rent collection and management",
        "Property maintenance coordination",
        "Regular property inspections",
        "Financial reporting",
        "Legal compliance management"
      ]
    }
  ];

  const managementProcess = [
    {
      step: 1,
      title: "Property Assessment",
      description: "Comprehensive evaluation of your property to determine optimal rental price and condition",
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: 2,
      title: "Marketing & Advertising",
      description: "Professional photography and listing across all major rental platforms",
      icon: <Search className="w-8 h-8" />
    },
    {
      step: 3,
      title: "Tenant Screening",
      description: "Thorough background checks, references, and financial verification of potential tenants",
      icon: <Users className="w-8 h-8" />
    },
    {
      step: 4,
      title: "Lease Management",
      description: "Professional lease agreements, condition reports, and bond handling",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      step: 5,
      title: "Ongoing Management",
      description: "Regular inspections, maintenance coordination, and rent collection",
      icon: <Calendar className="w-8 h-8" />
    }
  ];

  const faqs = [
    {
      question: "How do I apply for a rental property?",
      answer: "We make the application process simple and transparent. You'll need to provide identification, proof of income, employment verification, and references. We'll guide you through each step and keep you informed about your application status."
    },
    {
      question: "What areas of Queensland do you manage properties in?",
      answer: "We manage rental properties across all major Queensland markets including Brisbane, Gold Coast, Sunshine Coast, and surrounding areas. Our local knowledge helps us provide the best service to both tenants and property owners."
    },
    {
      question: "How much does property management cost?",
      answer: "Our property management fees are competitive and transparent. We offer different service packages to suit various needs and budgets. Contact us for a detailed discussion about our pricing structure and services."
    },
    {
      question: "What's included in your property management service?",
      answer: "Our comprehensive service includes tenant placement, rent collection, property inspections, maintenance coordination, financial reporting, and legal compliance. We handle all aspects of property management so you don't have to."
    },
    {
      question: "How do you screen potential tenants?",
      answer: "We conduct thorough tenant screening including credit checks, employment verification, rental history, and personal references. This comprehensive process helps ensure we place reliable, trustworthy tenants in your property."
    },
    {
      question: "What happens if there are maintenance issues?",
      answer: "We have a network of trusted contractors and handle all maintenance requests promptly. For routine maintenance, we coordinate and oversee the work. For emergency repairs, we have 24/7 support to ensure tenant safety and property protection."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Typography
                  variant="h2"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                >
                  Queensland Rental Properties & Management
                </Typography>
                <Typography
                  variant="h6"
                  className="text-lg md:text-xl text-slate-100 mb-10 font-normal"
                >
                  Professional property management and rental services across Brisbane, Gold Coast, and beyond. Find your perfect rental or maximize your investment returns.
                </Typography>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="contained"
                    size="large"
                    href="/contact"
                    className="rounded-full font-semibold px-8 py-3"
                    style={{
                      background: 'linear-gradient(90deg, var(--gold-500) 0%, var(--gold-400) 100%)',
                      color: 'var(--primary-900)',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                    }}
                  >
                    Find Rental Properties
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="/contact"
                    className="rounded-full font-semibold px-8 py-3"
                    style={{
                      color: 'white',
                      borderColor: 'white',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                    }}
                  >
                    Property Management
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/assets/images/rd-hero-illustration.svg"
                  alt="Queensland Rental Properties"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-gradient-to-b from-slate-100 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Services Overview */}
            <div className="mb-20">
              <Typography
                variant="h2"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center"
              >
                Complete Rental Solutions
              </Typography>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow h-full">
                    <div className="text-center mb-6">
                      <div className="mb-4 flex justify-center text-primary-700">
                        {service.icon}
                      </div>
                      <Typography variant="h5" className="font-bold text-primary-800 mb-4">
                        {service.title}
                      </Typography>
                      <Typography variant="body1" className="text-slate-700 leading-relaxed mb-6">
                        {service.description}
                      </Typography>
                    </div>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                          <Typography variant="body2" className="text-slate-600">
                            {feature}
                          </Typography>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Property Management Process */}
            <Card className="mb-20 rounded-3xl shadow-2xl border-0">
              <CardContent className="p-12">
                <Typography
                  variant="h2"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center"
                >
                  Our Property Management Process
                </Typography>
                <div className="space-y-8">
                  {managementProcess.map((step, index) => (
                    <div key={index} className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <Typography variant="h6" className="text-lg md:text-xl text-slate-600 mb-10 font-normal">
                          {step.title}
                        </Typography>
                        <Typography variant="body1" className="text-slate-700 leading-relaxed">
                          {step.description}
                        </Typography>
                      </div>
                      <div className="flex-shrink-0 text-primary-600">
                        {step.icon}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <div className="mb-20">
              <Typography
                variant="h2"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center"
              >
                Why Choose Realty Direct for Rentals?
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <MapPin className="w-10 h-10" />,
                    title: "Local Expertise",
                    description: "Deep knowledge of Queensland rental markets, regulations, and best practices across all major regions"
                  },
                  {
                    icon: <Shield className="w-10 h-10" />,
                    title: "Professional Service",
                    description: "Comprehensive property management with transparent communication and reliable support for all parties"
                  },
                  {
                    icon: <Users className="w-10 h-10" />,
                    title: "Tenant & Owner Focus",
                    description: "Balanced approach that protects property owners' investments while providing excellent tenant experiences"
                  }
                ].map((benefit, index) => (
                  <Card key={index} className="text-center p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                    <div className="mb-6 flex justify-center text-primary-700">
                      {benefit.icon}
                    </div>
                    <Typography variant="h6" className="text-lg md:text-xl text-slate-600 mb-10 font-normal">
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </Typography>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <Card className="mb-20 rounded-3xl shadow-2xl border-0">
              <CardContent className="p-12">
                <Typography
                  variant="h2"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center"
                >
                  Frequently Asked Questions About Rentals
                </Typography>
                <div className="space-y-8">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-accent-600 pb-8 last:border-b-0">
                      <Typography variant="h6" className="text-lg md:text-xl text-slate-600 mb-10 font-normal">
                        {faq.question}
                      </Typography>
                      <Typography variant="body1" className="text-slate-700 leading-relaxed">
                        {faq.answer}
                      </Typography>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="rounded-3xl shadow-2xl border-0 bg-gradient-to-br from-primary-900 to-primary-700">
              <CardContent className="p-12 text-center">
                <Typography
                  variant="h2"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                >
                  Ready to Get Started?
                </Typography>
                <Typography variant="body1" className="text-slate-100 text-lg mb-8 max-w-2xl mx-auto">
                  Whether you're looking for a rental property or need professional property management services, we're here to help.
                </Typography>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="contained"
                    size="large"
                    href="/contact"
                    className="rounded-full font-semibold px-8 py-3"
                    style={{
                      background: 'linear-gradient(90deg, var(--gold-500) 0%, var(--gold-400) 100%)',
                      color: 'var(--primary-900)',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                    }}
                  >
                    Contact Us Today
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="/about"
                    className="rounded-full font-semibold px-8 py-3"
                    style={{
                      color: 'white',
                      borderColor: 'white',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                    }}
                  >
                    Learn More About Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}