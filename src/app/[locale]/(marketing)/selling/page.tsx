import { setRequestLocale } from 'next-intl/server';
import { Button, Typography, Card, CardContent, Paper } from '@mui/material';
import { Home, DollarSign, Camera, FileText, Calendar, CheckCircle, TrendingUp, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { StructuredData } from '@/components/common/StructuredData';

type ISellingProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: ISellingProps): Promise<Metadata> {
  const { locale } = await props.params;

  return {
    title: 'Sell Your Property in Queensland | Expert Real Estate Services',
    description: 'Get the best price for your Queensland property with Realty Direct. Expert property valuations, professional marketing, and transparent pricing. Free appraisal available.',
    keywords: 'sell property Queensland, real estate agents Brisbane, Gold Coast property sales, property appraisal, house selling tips, property marketing Queensland, real estate commission, sell house fast',
    alternates: {
      canonical: 'https://realtydirect.com.au/selling',
    },
    openGraph: {
      title: 'Sell Your Property in Queensland | Expert Real Estate Services',
      description: 'Get the best price for your Queensland property with Realty Direct. Expert valuations, professional marketing, and transparent pricing.',
      url: 'https://realtydirect.com.au/selling',
      siteName: 'Realty Direct Queensland',
      images: [
        {
          url: 'https://realtydirect.com.au/og-selling.jpg',
          width: 1200,
          height: 630,
          alt: 'Sell Your Property with Realty Direct Queensland',
        },
      ],
      locale: locale === 'en' ? 'en_AU' : locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Sell Your Property in Queensland | Expert Real Estate Services',
      description: 'Get the best price for your Queensland property with Realty Direct. Expert valuations and professional marketing.',
      images: ['https://realtydirect.com.au/twitter-selling.jpg'],
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

export default async function Selling(props: ISellingProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Property Selling Services Queensland',
    'description': 'Professional property selling services in Queensland including valuations, marketing, and sales management',
    'provider': {
      '@type': 'RealEstateAgent',
      'name': 'Realty Direct Queensland',
      'url': 'https://realtydirect.com.au'
    },
    'areaServed': ['Queensland', 'Brisbane', 'Gold Coast', 'Sunshine Coast'],
    'serviceType': ['Property Valuation', 'Property Marketing', 'Sales Negotiation', 'Property Management'],
    'offers': {
      '@type': 'Offer',
      'description': 'Free property appraisal and market analysis'
    }
  };

  const sellingProcess = [
    {
      step: 1,
      title: "Free Property Appraisal",
      description: "Get an accurate market valuation of your property with our comprehensive appraisal service",
      icon: <Home className="w-8 h-8" />
    },
    {
      step: 2,
      title: "Professional Photography",
      description: "Stunning photography and virtual tours to showcase your property at its best",
      icon: <Camera className="w-8 h-8" />
    },
    {
      step: 3,
      title: "Marketing Strategy",
      description: "Multi-channel marketing including online portals, social media, and print advertising",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      step: 4,
      title: "Buyer Management",
      description: "Professional handling of inspections, negotiations, and all buyer communications",
      icon: <Users className="w-8 h-8" />
    },
    {
      step: 5,
      title: "Settlement Support",
      description: "Complete support through to settlement with all legal and administrative requirements",
      icon: <FileText className="w-8 h-8" />
    }
  ];

  const faqs = [
    {
      question: "How much does it cost to sell my property with Realty Direct?",
      answer: "Our transparent fee structure offers competitive rates with no hidden costs. We provide upfront pricing so you know exactly what you'll pay. Contact us for a detailed quote based on your specific property and requirements."
    },
    {
      question: "How long does it typically take to sell a property in Queensland?",
      answer: "The average time to sell varies by location and market conditions. In Queensland's major markets like Brisbane and Gold Coast, properties typically sell within 4-8 weeks with proper pricing and marketing. We'll provide a realistic timeline based on your specific property and current market conditions."
    },
    {
      question: "Do you provide a free property appraisal?",
      answer: "Yes! We offer complimentary property appraisals including a comprehensive market analysis. Our experienced agents will assess your property's value based on recent sales, market trends, and property features."
    },
    {
      question: "What marketing is included in your selling service?",
      answer: "Our comprehensive marketing package includes professional photography, online listings on major portals (realestate.com.au, Domain), social media promotion, email marketing to our database, and print advertising where appropriate. We tailor the marketing strategy to your property and target market."
    },
    {
      question: "Can you help prepare my property for sale?",
      answer: "Absolutely! We provide guidance on property presentation, staging advice, and can recommend trusted tradespeople for any repairs or improvements that could increase your property's value and appeal to buyers."
    },
    {
      question: "What areas of Queensland do you cover?",
      answer: "We service all major Queensland markets including Brisbane, Gold Coast, Sunshine Coast, and surrounding areas. Our team has extensive local knowledge across these regions to ensure the best possible outcome for your property sale."
    }
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/images/lisa-anna-_cglx9xLFqU-unsplash.jpg"
              alt="Sell Your Queensland Property"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-black/50" />
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
                  Sell Your Queensland Property
                </Typography>

                {/* Subheading */}
                <Typography
                  variant="h6"
                  className="text-lg md:text-xl text-slate-600 mb-10 font-normal"
                >
                  Get the best price with expert marketing, transparent pricing, and professional service from Queensland's most trusted independent agents
                </Typography>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Button
                    variant="contained"
                    size="large"
                    href="/contact"
                    className="rounded-full font-semibold shadow-md px-8 py-3"
                    style={{
                      background: 'linear-gradient(90deg, var(--primary-900) 0%, var(--primary-700) 100%)',
                      color: '#fff',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                    }}
                    endIcon={<ArrowRight />}
                  >
                    Get Free Appraisal
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="/about"
                    className="rounded-full font-semibold px-8 py-3"
                    style={{
                      color: 'var(--slate-700)',
                      borderColor: 'var(--slate-400)',
                      background: 'transparent',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                    }}
                  >
                    Learn More About Us
                  </Button>
                </div>
              </Paper>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-gradient-to-br from-white via-accent-500/30 to-accent-600/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="mb-16 flex flex-col items-center">
              <Typography
                variant="h2"
                className="font-display text-4xl md:text-5xl font-semibold text-primary-900 mb-6 text-center"
              >
                Why Choose Realty Direct to Sell Your Property?
              </Typography>
              <Typography
                variant="h6"
                className="text-slate-700 font-normal max-w-3xl text-center"
                style={{ lineHeight: 1.7 }}
              >
                Our expert team combines proven marketing strategies with transparent communication to achieve the best possible price for your Queensland property.
              </Typography>
            </div>

            {/* Main Card */}
            <Card
              className="relative max-w-6xl mx-auto rounded-3xl shadow-2xl border-0 bg-white/90 backdrop-blur-lg mb-16"
              elevation={0}
            >
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <DollarSign className="w-10 h-10 text-primary-700" />,
                      title: "Maximum Sale Price",
                      description: "Our expert pricing strategies and proven marketing methods consistently achieve top dollar for our clients' properties"
                    },
                    {
                      icon: <TrendingUp className="w-10 h-10 text-primary-700" />,
                      title: "Professional Marketing",
                      description: "Comprehensive marketing campaigns across all major platforms to ensure maximum exposure for your property"
                    },
                    {
                      icon: <CheckCircle className="w-10 h-10 text-primary-700" />,
                      title: "Transparent Process",
                      description: "Clear communication, regular updates, and transparent pricing with no hidden fees or surprises"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="mb-4">
                        {benefit.icon}
                      </div>
                      <Typography variant="h6" className="font-bold text-primary-700 mb-2 tracking-wide">
                        {benefit.title}
                      </Typography>
                      <Typography variant="body2" className="text-slate-600 text-base">
                        {benefit.description}
                      </Typography>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Selling Process */}
            <Card
              className="relative max-w-6xl mx-auto rounded-3xl shadow-2xl border-0 bg-white/90 backdrop-blur-lg mb-16"
              elevation={0}
            >
              <CardContent className="p-8 md:p-12">
                <Typography
                  variant="h2"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center"
                >
                  Our 5-Step Selling Process
                </Typography>
                <div className="space-y-8">
                  {sellingProcess.map((step, index) => (
                    <div key={index} className="flex items-start gap-6 p-6 rounded-2xl bg-white/50 shadow-md">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg" style={{ background: 'linear-gradient(135deg, #102542 0%, #4b6a88 100%)' }}>
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <Typography variant="h6" className="font-bold text-primary-800 mb-2">
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

            {/* FAQ Section */}
            <Card
              className="relative max-w-6xl mx-auto rounded-3xl shadow-2xl border-0 bg-white/90 backdrop-blur-lg mb-16"
              elevation={0}
            >
              <CardContent className="p-8 md:p-12">
                <Typography
                  variant="h2"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center"
                >
                  Frequently Asked Questions About Selling
                </Typography>
                <div className="space-y-8">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-accent-200 pb-8 last:border-b-0">
                      <Typography variant="h6" className="font-semibold text-primary-800 mb-4">
                        {faq.question}
                      </Typography>
                      <Typography variant="body1" className="text-slate-700 leading-relaxed" style={{ lineHeight: 1.7 }}>
                        {faq.answer}
                      </Typography>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card
              className="relative max-w-6xl mx-auto rounded-3xl shadow-2xl border-0 mb-16"
              elevation={0}
              style={{ background: 'linear-gradient(135deg, #102542 0%, #4b6a88 100%)' }}
            >
              <CardContent className="p-8 md:p-12 text-center">
                <Typography
                  variant="h2"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                >
                  Ready to Sell Your Property?
                </Typography>
                <Typography 
                  variant="body1" 
                  className="text-slate-100 text-lg mb-8 max-w-2xl mx-auto text-center"
                  style={{ lineHeight: 1.7 }}
                >
                  Get started with a free property appraisal and discover how much your Queensland property is worth in today's market.
                </Typography>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="contained"
                    size="large"
                    href="/contact"
                    className="rounded-full font-semibold shadow-md px-8 py-3"
                    style={{
                      background: 'linear-gradient(90deg, #ffffff 0%, #f8fafc 100%)',
                      color: '#102542',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                    }}
                    endIcon={<ArrowRight />}
                  >
                    Book Free Appraisal
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="/about"
                    className="rounded-full font-semibold px-8 py-3"
                    style={{
                      color: 'white',
                      borderColor: 'white',
                      background: 'transparent',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                    }}
                  >
                    Learn More About Us
                  </Button>
                </div>
                
                {/* Motto */}
                <div className="mt-14 pt-8 border-t border-white/20">
                  <Typography
                    variant="h6"
                    className="text-white italic font-light"
                  >
                    "Direct communication, exceptional results"
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-slate-200 mt-2"
                  >
                    Experience the difference with Realty Direct
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}