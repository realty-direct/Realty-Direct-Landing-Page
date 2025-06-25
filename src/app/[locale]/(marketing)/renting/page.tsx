import { Button, Paper, Typography } from '@mui/material';
import { ArrowRight, Calendar, CheckCircle, FileText, Home, Mail, MapPin, Phone, Search, Shield, Users } from 'lucide-react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { getAssetPath } from '@/utils/Helpers';

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
      siteName: 'Realty Direct',
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
        'index': true,
        'follow': true,
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

  // Icon mapping function
  const getIcon = (iconName: string, className: string = "w-8 h-8") => {
    const iconProps = { className };
    switch (iconName) {
      case 'Home': return <Home {...iconProps} />;
      case 'Shield': return <Shield {...iconProps} />;
      case 'FileText': return <FileText {...iconProps} />;
      case 'Search': return <Search {...iconProps} />;
      case 'Users': return <Users {...iconProps} />;
      case 'CheckCircle': return <CheckCircle {...iconProps} />;
      case 'Calendar': return <Calendar {...iconProps} />;
      case 'MapPin': return <MapPin {...iconProps} />;
      default: return <Home {...iconProps} />;
    }
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Property Rental and Management Services Queensland',
    'description': 'Professional property rental and management services in Queensland including tenant placement, property maintenance, and rental management',
    'provider': {
      '@type': 'RealEstateAgent',
      'name': 'Realty Direct',
      'url': 'https://realtydirect.com.au',
    },
    'areaServed': ['Queensland', 'Brisbane', 'Gold Coast', 'Sunshine Coast'],
    'serviceType': ['Property Management', 'Tenant Placement', 'Property Maintenance', 'Rental Services'],
    'offers': {
      '@type': 'Offer',
      'description': 'Professional property management and tenant services',
    },
  };

  const services = [
    {
      title: 'For Tenants',
      description: 'Find your perfect rental home in Queensland with our comprehensive tenant services',
      iconName: 'Home',
      features: [
        'Extensive property search',
        'Application assistance',
        'Lease negotiation support',
        'Ongoing tenant support',
        'Maintenance request handling',
        'Bond and inspection guidance',
      ],
    },
    {
      title: 'For Property Owners',
      description: 'Professional property management services to maximize your rental investment returns',
      iconName: 'Shield',
      features: [
        'Tenant screening and placement',
        'Rent collection and management',
        'Property maintenance coordination',
        'Regular property inspections',
        'Financial reporting',
        'Legal compliance management',
      ],
    },
  ];

  const managementProcess = [
    {
      step: 1,
      title: 'Property Assessment',
      description: 'Comprehensive evaluation of your property to determine optimal rental price and condition',
      iconName: 'FileText',
    },
    {
      step: 2,
      title: 'Marketing & Advertising',
      description: 'Professional photography and listing across all major rental platforms',
      iconName: 'Search',
    },
    {
      step: 3,
      title: 'Tenant Screening',
      description: 'Thorough background checks, references, and financial verification of potential tenants',
      iconName: 'Users',
    },
    {
      step: 4,
      title: 'Lease Management',
      description: 'Professional lease agreements, condition reports, and bond handling',
      iconName: 'CheckCircle',
    },
    {
      step: 5,
      title: 'Ongoing Management',
      description: 'Regular inspections, maintenance coordination, and rent collection',
      iconName: 'Calendar',
    },
  ];

  const faqs = [
    {
      question: 'How do I apply for a rental property?',
      answer: 'We make the application process simple and transparent. You\'ll need to provide identification, proof of income, employment verification, and references. We\'ll guide you through each step and keep you informed about your application status.',
    },
    {
      question: 'What areas of Queensland do you manage properties in?',
      answer: 'We manage rental properties across all major Queensland markets including Brisbane, Gold Coast, Sunshine Coast, and surrounding areas. Our local knowledge helps us provide the best service to both tenants and property owners.',
    },
    {
      question: 'How much does property management cost?',
      answer: 'Our property management fees are competitive and transparent. We offer different service packages to suit various needs and budgets. Contact us for a detailed discussion about our pricing structure and services.',
    },
    {
      question: 'What\'s included in your property management service?',
      answer: 'Our comprehensive service includes tenant placement, rent collection, property inspections, maintenance coordination, financial reporting, and legal compliance. We handle all aspects of property management so you don\'t have to.',
    },
    {
      question: 'How do you screen potential tenants?',
      answer: 'We conduct thorough tenant screening including credit checks, employment verification, rental history, and personal references. This comprehensive process helps ensure we place reliable, trustworthy tenants in your property.',
    },
    {
      question: 'What happens if there are maintenance issues?',
      answer: 'We have a network of trusted contractors and handle all maintenance requests promptly. For routine maintenance, we coordinate and oversee the work. For emergency repairs, we have 24/7 support to ensure tenant safety and property protection.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src={getAssetPath("/assets/images/lisa-anna-_cglx9xLFqU-unsplash.jpg")}
              alt="Queensland rental properties"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
            <div className="max-w-4xl w-full text-center">
              {/* Main Content Card */}
              <Paper elevation={0} className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl">
                {/* Main Heading */}
                <Typography
                  variant="h2"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
                >
                  Queensland Rental Properties & Management
                </Typography>

                {/* Subheading */}
                <Typography
                  variant="h6"
                  className="text-lg md:text-xl text-slate-600 mb-10 font-normal"
                >
                  Professional property management and rental services across Brisbane, Gold Coast, and beyond. Find your perfect rental or maximize your investment returns.
                </Typography>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Button
                    variant="contained"
                    size="large"
                    href={`/${locale}/contact`}
                    className="rounded-lg font-semibold px-8 py-4"
                  >
                    Find Rental Properties
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="#management"
                    className="rounded-lg font-semibold px-8 py-4"
                  >
                    Property Management
                  </Button>
                </div>

                {/* Quick Links */}
                <Typography variant="body2" className="text-slate-600">
                  Or explore our other services:
                  <Button
                    variant="text"
                    size="small"
                    href={`/${locale}/buying`}
                    className="mx-2 text-primary-600 hover:text-primary-700"
                  >
                    Buying
                  </Button>
                  •
                  <Button
                    variant="text"
                    size="small"
                    href={`/${locale}/selling`}
                    className="mx-2 text-primary-600 hover:text-primary-700"
                  >
                    Selling
                  </Button>
                </Typography>
              </Paper>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-16">
              <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center">
                Complete Rental Solutions
              </Typography>
              <div className="flex justify-center">
                <Typography
                  variant="h6"
                  className="text-lg md:text-xl text-slate-600 mb-10 font-normal max-w-2xl mx-auto text-center"
                >
                  Professional rental and property management services for tenants and property owners
                </Typography>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const bgColors = [
                  { bg: 'bg-gradient-to-br from-blue-50 to-blue-100', hover: 'hover:bg-gradient-to-br hover:from-blue-100 hover:to-blue-200', iconBg: 'bg-blue-500' },
                  { bg: 'bg-gradient-to-br from-emerald-50 to-emerald-100', hover: 'hover:bg-gradient-to-br hover:from-emerald-100 hover:to-emerald-200', iconBg: 'bg-emerald-500' },
                ];
                const colorScheme = bgColors[index % bgColors.length]!;

                return (
                  <Paper
                    key={index}
                    elevation={0}
                    className={`p-8 border border-gray-200 transition-all duration-300 group rounded-xl ${colorScheme.bg} ${colorScheme.hover} hover:shadow-lg hover:scale-105 h-full`}
                  >
                    {/* Icon */}
                    <div className="mb-6 text-center">
                      <div className={`inline-flex p-4 ${colorScheme.iconBg} rounded-full shadow-md group-hover:shadow-lg transition-all duration-300`}>
                        <div className="text-white transition-colors duration-300">
                          {getIcon(service.iconName, "w-12 h-12")}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <Typography variant="h5" className="font-medium mb-3 text-center">
                      {service.title}
                    </Typography>
                    <Typography variant="body1" className="text-gray-600 leading-relaxed mb-6 text-center">
                      {service.description}
                    </Typography>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-gray-500 flex-shrink-0" />
                          <Typography variant="body2" className="text-gray-600">
                            {feature}
                          </Typography>
                        </div>
                      ))}
                    </div>
                  </Paper>
                );
              })}
            </div>
          </div>
        </section>

        {/* Property Management Process */}
        <section id="management" className="py-24 bg-primary-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-12 rounded-xl bg-primary-800">
              <div className="mb-16">
                <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
                  Our Property Management Process
                </Typography>
                <div className="flex justify-center">
                  <Typography
                    variant="h6"
                    className="text-slate-200 font-light max-w-2xl"
                    style={{ textAlign: 'center' }}
                  >
                    A comprehensive approach to maximize your investment returns and tenant satisfaction
                  </Typography>
                </div>
              </div>

              <div className="space-y-8">
                {managementProcess.map((step, index) => (
                  <div key={index} className="flex items-start gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-white text-primary-900 rounded-full flex items-center justify-center text-xl font-bold group-hover:bg-slate-100 transition-colors duration-300">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <Typography variant="h6" className="font-medium mb-2 text-white">
                        {step.title}
                      </Typography>
                      <Typography variant="body1" className="text-slate-200 leading-relaxed">
                        {step.description}
                      </Typography>
                    </div>
                    <div className="flex-shrink-0 text-slate-300 group-hover:text-white transition-colors duration-300">
                      {getIcon(step.iconName)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center">
                Why Choose Realty Direct for Rentals?
              </Typography>
              <div className="flex justify-center">
                <Typography
                  variant="h6"
                  className="text-lg md:text-xl text-slate-600 mb-10 font-normal max-w-2xl mx-auto text-center"
                >
                  Professional rental services with unmatched local expertise and tenant focus
                </Typography>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  iconName: 'MapPin',
                  title: 'Local Expertise',
                  description: 'Deep knowledge of Queensland rental markets, regulations, and best practices across all major regions',
                  bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
                  iconBg: 'bg-blue-500',
                  hoverBg: 'hover:bg-gradient-to-br hover:from-blue-100 hover:to-blue-200',
                },
                {
                  iconName: 'Shield',
                  title: 'Professional Service',
                  description: 'Comprehensive property management with transparent communication and reliable support for all parties',
                  bgColor: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
                  iconBg: 'bg-emerald-500',
                  hoverBg: 'hover:bg-gradient-to-br hover:from-emerald-100 hover:to-emerald-200',
                },
                {
                  iconName: 'Users',
                  title: 'Tenant & Owner Focus',
                  description: 'Balanced approach that protects property owners\' investments while providing excellent tenant experiences',
                  bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
                  iconBg: 'bg-purple-500',
                  hoverBg: 'hover:bg-gradient-to-br hover:from-purple-100 hover:to-purple-200',
                },
              ].map((benefit, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  className={`p-8 border border-gray-200 transition-all duration-300 group rounded-xl ${benefit.bgColor} ${benefit.hoverBg} hover:shadow-lg hover:scale-105 text-center`}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 ${benefit.iconBg} rounded-full shadow-md group-hover:shadow-lg transition-all duration-300`}>
                      <div className="text-white transition-colors duration-300">
                        {getIcon(benefit.iconName)}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <Typography variant="h5" className="font-medium mb-3">
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1" className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </Typography>
                </Paper>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-primary-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-12 rounded-xl bg-primary-800">
              <div className="mb-16">
                <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
                  Frequently Asked Questions
                </Typography>
                <div className="flex justify-center">
                  <Typography
                    variant="h6"
                    className="text-slate-200 font-light max-w-2xl"
                    style={{ textAlign: 'center' }}
                  >
                    Common questions about our rental and property management services
                  </Typography>
                </div>
              </div>

              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-slate-600 pb-8 last:border-b-0">
                    <Typography variant="h6" className="font-medium text-white mb-4">
                      {faq.question}
                    </Typography>
                    <Typography variant="body1" className="text-slate-200 leading-relaxed">
                      {faq.answer}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Ready to Get Started with Rentals?
            </Typography>
            <div className="flex justify-center w-full">
              <Typography
                variant="h6"
                className="text-lg md:text-xl text-slate-600 mb-10 font-normal max-w-2xl text-center"
              >
                Whether you're looking for a rental property or need professional property management services, we're here to help
              </Typography>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                variant="contained"
                size="large"
                href={`/${locale}/contact`}
                className="rounded-lg font-semibold px-8 py-4"
              >
                Find Rental Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outlined"
                size="large"
                href={`/${locale}/about`}
                className="rounded-lg font-semibold px-8 py-4 text-slate-700 border-slate-300 hover:bg-slate-100 hover:text-slate-900"
              >
                Learn More About Us
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <Typography variant="body2">Call us for property management</Typography>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <Typography variant="body2">Get expert rental advice</Typography>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
