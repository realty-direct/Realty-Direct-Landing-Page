import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Button, Typography, Card, CardContent } from '@mui/material';
import { Users, MapPin, Award, Heart } from 'lucide-react';
import type { Metadata } from 'next';

type IAboutProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IAboutProps): Promise<Metadata> {
  const { locale } = await props.params;

  return {
    title: 'About Realty Direct Queensland | Independent Real Estate Experts',
    description: 'Discover how Realty Direct Queensland is transforming real estate with direct communication, transparent pricing, and exceptional results. Meet our experienced team of local property professionals.',
    keywords: 'Queensland real estate, independent real estate agents, Brisbane property experts, Gold Coast real estate, transparent property services, Realty Direct team, local real estate knowledge',
    alternates: {
      canonical: 'https://realtydirect.com.au/about',
    },
    openGraph: {
      title: 'About Realty Direct Queensland | Independent Real Estate Experts',
      description: 'Discover how Realty Direct Queensland is transforming real estate with direct communication, transparent pricing, and exceptional results.',
      url: 'https://realtydirect.com.au/about',
      siteName: 'Realty Direct Queensland',
      images: [
        {
          url: 'https://realtydirect.com.au/og-about.jpg',
          width: 1200,
          height: 630,
          alt: 'Realty Direct Queensland Team - Independent Real Estate Experts',
        },
      ],
      locale: locale === 'en' ? 'en_AU' : locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Realty Direct Queensland | Independent Real Estate Experts',
      description: 'Discover how Realty Direct Queensland is transforming real estate with direct communication and transparent pricing.',
      images: ['https://realtydirect.com.au/twitter-about.jpg'],
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

export default async function About(props: IAboutProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    'name': 'Realty Direct Queensland',
    'description': 'Independent real estate agency providing transparent, direct communication and exceptional results across Queensland',
    'url': 'https://realtydirect.com.au',
    'logo': 'https://realtydirect.com.au/logo.png',
    'address': {
      '@type': 'PostalAddress',
      'addressRegion': 'Queensland',
      'addressCountry': 'AU'
    },
    'areaServed': ['Queensland', 'Brisbane', 'Gold Coast', 'Sunshine Coast'],
    'serviceType': ['Property Sales', 'Property Management', 'Property Consultation'],
    'foundingDate': '2023',
    'slogan': 'Direct communication, exceptional results'
  };

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
            <div className="text-center">
              <Typography
                variant="h2"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                About Realty Direct Queensland
              </Typography>
              <Typography
                variant="h6"
                className="text-lg md:text-xl text-slate-100 mb-10 font-normal max-w-3xl mx-auto"
              >
                Independent real estate professionals transforming Queensland property experiences with direct communication and transparent results
              </Typography>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-gradient-to-b from-slate-100 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Story Section */}
            <Card className="mb-20 rounded-3xl shadow-2xl border-0">
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <Typography
                    variant="h2"
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8"
                  >
                    Our Story: Naturally Direct
                  </Typography>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="text-center lg:text-left">
                    <Typography variant="body1" className="text-lg text-slate-700 mb-8" style={{ lineHeight: 1.8 }}>
                      Founded on the belief that real estate should be straightforward, honest, and results-driven, Realty Direct Queensland emerged from a simple question: "What if property transactions didn't have to be complicated?"
                    </Typography>
                    <Typography variant="body1" className="text-lg text-slate-700 mb-10" style={{ lineHeight: 1.8 }}>
                      As Queensland's growing independent real estate company, we've built our reputation on doing things differently. We combine cutting-edge technology with genuine personal service, ensuring every client receives the attention and expertise they deserve.
                    </Typography>
                    <div className="bg-primary-50 border-l-4 border-primary-700 p-8 rounded-lg">
                      <Typography variant="h6" className="text-xl md:text-2xl text-primary-800 mb-4 font-semibold italic text-center">
                        "Direct communication, exceptional results"
                      </Typography>
                      <Typography variant="body1" className="text-slate-700 text-center" style={{ lineHeight: 1.6 }}>
                        This isn't just our motto—it's our promise to every Queensland family we serve.
                      </Typography>
                    </div>
                  </div>
                  <div className="relative flex justify-center">
                    <Image
                      src="/assets/images/rd-hero-illustration.svg"
                      alt="Realty Direct Queensland Team"
                      width={500}
                      height={400}
                      className="w-full h-auto rounded-2xl max-w-md"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What Sets Us Apart */}
            <div className="mb-20">
              <Typography
                variant="h2"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-16 text-center"
              >
                What Sets Us Apart
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Heart className="w-8 h-8" />,
                    title: "Genuine Care",
                    description: "We genuinely care about your property goals and work tirelessly to achieve them"
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: "Local Expertise",
                    description: "Deep Queensland market knowledge from Brisbane to the Gold Coast"
                  },
                  {
                    icon: <Award className="w-8 h-8" />,
                    title: "Proven Results",
                    description: "Track record of exceptional outcomes for Queensland families"
                  },
                  {
                    icon: <MapPin className="w-8 h-8" />,
                    title: "Strategic Reach",
                    description: "Connected network across Queensland's key property markets"
                  }
                ].map((feature, index) => (
                  <Card key={index} className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="mb-4 flex justify-center text-primary-700">
                      {feature.icon}
                    </div>
                    <Typography variant="h6" className="text-xl font-semibold text-slate-900 mb-3">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" className="text-slate-700 leading-relaxed">
                      {feature.description}
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
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-16 text-center"
                >
                  Frequently Asked Questions
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {[
                    {
                      question: "What makes Realty Direct different from other real estate agencies?",
                      answer: "We're an independent agency focused on direct communication, transparent pricing, and putting our clients in control of their property journey. No corporate constraints, no hidden fees—just honest, results-driven service."
                    },
                    {
                      question: "Which areas of Queensland do you serve?",
                      answer: "We serve all major Queensland markets including Brisbane, Gold Coast, Sunshine Coast, and surrounding regions. Our team has deep local knowledge across these key property markets."
                    },
                    {
                      question: "How do your fees compare to traditional agents?",
                      answer: "Our transparent fee structure is designed to provide exceptional value. We offer competitive rates without sacrificing service quality, and we're always upfront about costs—no surprises."
                    },
                    {
                      question: "Do you help with both buying and selling?",
                      answer: "Absolutely! We provide comprehensive services for buyers, sellers, and renters. Whether you're looking to purchase your first home, sell a property, or find the perfect rental, we're here to help."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-slate-200 pb-8 mb-8 last:border-b-0 last:mb-0">
                      <Typography variant="h6" className="text-lg md:text-xl text-slate-900 mb-6 font-semibold">
                        {faq.question}
                      </Typography>
                      <Typography variant="body1" className="text-slate-700 leading-relaxed text-base">
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
                  Ready to Experience the Difference?
                </Typography>
                <Typography variant="body1" className="text-slate-100 text-lg mb-8 max-w-2xl mx-auto">
                  Join hundreds of Queensland families who've chosen Realty Direct for their property journey. Experience what naturally direct really means.
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
                    Get Started Today
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="/services"
                    className="rounded-full font-semibold px-8 py-3 text-white border-white hover:bg-white hover:text-primary-900"
                    style={{
                      borderColor: 'white',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                    }}
                  >
                    Explore Our Services
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};