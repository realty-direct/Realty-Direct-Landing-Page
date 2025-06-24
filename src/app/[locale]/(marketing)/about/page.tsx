import { Button, Paper, Typography } from '@mui/material';
import { ArrowRight, Award, Heart, Mail, MapPin, Phone, Users } from 'lucide-react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

type IAboutProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IAboutProps): Promise<Metadata> {
  const { locale } = await props.params;

  return {
    title: 'About Realty Direct | Independent Real Estate Experts',
    description: 'Discover how Realty Direct is transforming real estate with direct communication, transparent pricing, and exceptional results. Meet our experienced team of local property professionals.',
    keywords: 'Queensland real estate, independent real estate agents, Brisbane property experts, Gold Coast real estate, transparent property services, Realty Direct team, local real estate knowledge',
    alternates: {
      canonical: 'https://realtydirect.com.au/about',
    },
    openGraph: {
      title: 'About Realty Direct | Independent Real Estate Experts',
      description: 'Discover how Realty Direct is transforming real estate with direct communication, transparent pricing, and exceptional results.',
      url: 'https://realtydirect.com.au/about',
      siteName: 'Realty Direct',
      images: [
        {
          url: 'https://realtydirect.com.au/og-about.jpg',
          width: 1200,
          height: 630,
          alt: 'Realty Direct Team - Independent Real Estate Experts',
        },
      ],
      locale: locale === 'en' ? 'en_AU' : locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Realty Direct | Independent Real Estate Experts',
      description: 'Discover how Realty Direct is transforming real estate with direct communication and transparent pricing.',
      images: ['https://realtydirect.com.au/twitter-about.jpg'],
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

export default async function About(props: IAboutProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    'name': 'Realty Direct',
    'description': 'Independent real estate agency providing transparent, direct communication and exceptional results across Queensland',
    'url': 'https://realtydirect.com.au',
    'logo': 'https://realtydirect.com.au/logo.png',
    'address': {
      '@type': 'PostalAddress',
      'addressRegion': 'Queensland',
      'addressCountry': 'AU',
    },
    'areaServed': ['Queensland', 'Brisbane', 'Gold Coast', 'Sunshine Coast'],
    'serviceType': ['Property Sales', 'Property Management', 'Property Consultation'],
    'foundingDate': '2023',
    'slogan': 'Direct communication, exceptional results',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Typography
                variant="h2"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
              >
                About Realty Direct
              </Typography>
              <div className="flex justify-center">
                <Typography
                  variant="h6"
                  className="text-lg md:text-xl text-slate-600 mb-10 font-normal max-w-3xl leading-relaxed text-center"
                >
                  Independent real estate professionals transforming Queensland property experiences with direct communication, transparent pricing, and exceptional results
                </Typography>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="contained"
                  size="large"
                  href="/contact"
                  className="rounded-lg font-semibold px-8 py-4"
                >
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="#story"
                  className="rounded-lg font-semibold px-8 py-4"
                >
                  Our Story
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 bg-primary-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Mission */}
              <div className="text-center">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-primary-700" />
                  </div>
                  <Typography variant="h5" className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Our Mission
                  </Typography>
                </div>
                <Typography variant="body1" className="text-base text-slate-200 leading-relaxed">
                  To revolutionize the Queensland real estate experience by providing transparent, direct communication and exceptional results. We believe property transactions should be straightforward, honest, and focused on achieving the best outcomes for our clients.
                </Typography>
              </div>

              {/* Vision */}
              <div className="text-center">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-primary-700" />
                  </div>
                  <Typography variant="h5" className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Our Vision
                  </Typography>
                </div>
                <Typography variant="body1" className="text-base text-slate-200 leading-relaxed">
                  To become Queensland's most trusted independent real estate agency, known for our integrity, expertise, and commitment to putting our clients' interests first. We envision a future where every property transaction is a positive, empowering experience.
                </Typography>
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                What Sets Us Apart
              </Typography>
              <div className="flex justify-center">
                <Typography
                  variant="h6"
                  className="text-lg md:text-xl text-slate-600 font-normal max-w-3xl leading-relaxed text-center"
                >
                  The values and expertise that make Realty Direct different from traditional real estate agencies
                </Typography>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: 'Genuine Care',
                  description: 'We genuinely care about your property goals and work tirelessly to achieve them',
                  bgColor: 'bg-gradient-to-br from-rose-50 to-rose-100',
                  iconBg: 'bg-rose-500',
                  hoverBg: 'hover:bg-gradient-to-br hover:from-rose-100 hover:to-rose-200',
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Local Expertise',
                  description: 'Deep Queensland market knowledge from Brisbane to the Gold Coast',
                  bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
                  iconBg: 'bg-blue-500',
                  hoverBg: 'hover:bg-gradient-to-br hover:from-blue-100 hover:to-blue-200',
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: 'Proven Results',
                  description: 'Track record of exceptional outcomes for Queensland families',
                  bgColor: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
                  iconBg: 'bg-emerald-500',
                  hoverBg: 'hover:bg-gradient-to-br hover:from-emerald-100 hover:to-emerald-200',
                },
                {
                  icon: <MapPin className="w-8 h-8" />,
                  title: 'Strategic Reach',
                  description: 'Connected network across Queensland\'s key property markets',
                  bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
                  iconBg: 'bg-purple-500',
                  hoverBg: 'hover:bg-gradient-to-br hover:from-purple-100 hover:to-purple-200',
                },
              ].map((feature, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  className={`p-8 border border-gray-200 transition-all duration-300 group rounded-xl ${feature.bgColor} ${feature.hoverBg} hover:shadow-lg hover:scale-105 text-center`}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 ${feature.iconBg} rounded-full shadow-md group-hover:shadow-lg transition-all duration-300`}>
                      <div className="text-white transition-colors duration-300">
                        {feature.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <Typography variant="h5" className="font-medium mb-3">
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </Typography>
                </Paper>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-primary-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-12 rounded-xl border border-slate-600 bg-primary-800">
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
                    Common questions about Realty Direct and our independent real estate services
                  </Typography>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  {
                    question: 'What makes Realty Direct different from other real estate agencies?',
                    answer: 'We\'re an independent agency focused on direct communication, transparent pricing, and putting our clients in control of their property journey. No corporate constraints, no hidden fees—just honest, results-driven service.',
                  },
                  {
                    question: 'Which areas of Queensland do you serve?',
                    answer: 'We serve all major Queensland markets including Brisbane, Gold Coast, Sunshine Coast, and surrounding regions. Our team has deep local knowledge across these key property markets.',
                  },
                  {
                    question: 'How do your fees compare to traditional agents?',
                    answer: 'Our transparent fee structure is designed to provide exceptional value. We offer competitive rates without sacrificing service quality, and we\'re always upfront about costs—no surprises.',
                  },
                  {
                    question: 'Do you help with both buying and selling?',
                    answer: 'Absolutely! We provide comprehensive services for buyers, sellers, and renters. Whether you\'re looking to purchase your first home, sell a property, or find the perfect rental, we\'re here to help.',
                  },
                ].map((faq, index) => (
                  <div key={index} className="border-b border-slate-600 pb-8 mb-8 last:border-b-0 last:mb-0">
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
              Ready to Experience the Difference?
            </Typography>
            <Typography variant="h6" className="text-lg md:text-xl text-slate-600 mb-10 font-normal max-w-2xl mx-auto">
              Join Queensland families who've chosen Realty Direct for their property journey. Experience what naturally direct really means.
            </Typography>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                variant="contained"
                size="large"
                href="/contact"
                className="rounded-lg font-semibold px-8 py-4"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="/services"
                className="rounded-lg font-semibold px-8 py-4 text-slate-900 border-slate-900 hover:bg-slate-900 hover:text-white"
              >
                Explore Our Services
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <Typography variant="body2">Call us for a consultation</Typography>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <Typography variant="body2">Get expert property advice</Typography>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
