import { Features } from '@/components/common/Features';
import { Hero } from '@/components/common/Hero';
import { ValueStats } from '@/components/common/ValueStats';
import { HowItWorks } from '@/components/HowItWorks';
import { PortalLogos } from '@/components/PortalLogos';
import { Pricing } from '@/components/Pricing';
import { CallToAction } from '@/components/common/CallToAction';
import { setRequestLocale } from 'next-intl/server';
import { StructuredData } from '@/components/common/StructuredData';
import { breadcrumbSchema, faqSchema } from '@/utils/structuredData';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps) {
  const { locale } = await props.params;

  return {
    title: 'Realty Direct Queensland | Modern Real Estate Platform',
    description: 'Queensland\'s most flexible real estate platform. Sell or buy property with transparent pricing, local agents, and complete control over your property transaction.',
    keywords: 'real estate queensland, property sale queensland, sell house queensland, buy property queensland, realty direct',
    alternates: {
      canonical: 'https://realtydirect.com.au',
    },
    openGraph: {
      title: 'Realty Direct Queensland | Modern Real Estate Platform',
      description: 'Queensland\'s most flexible real estate platform. Sell or buy property with transparent pricing and local agents.',
      url: 'https://realtydirect.com.au',
      siteName: 'Realty Direct',
      images: [
        {
          url: 'https://realtydirect.com.au/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Realty Direct - Queensland Real Estate Platform',
        },
      ],
      locale: locale === 'en' ? 'en_AU' : locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Realty Direct Queensland | Modern Real Estate Platform',
      description: 'Queensland\'s most flexible real estate platform. Sell or buy property with transparent pricing and local agents.',
      images: ['https://realtydirect.com.au/og-image.jpg'],
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

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const breadcrumbs = [
    { name: 'Home', url: 'https://realtydirect.com.au' },
  ];

  const faqData = [
    {
      question: 'How does Realty Direct save me money?',
      answer: 'Realty Direct offers flexible pricing options from DIY packages starting at $495 to full-service with competitive commission rates. Our DIY and assisted options can save you thousands compared to traditional real estate agent fees.',
    },
    {
      question: 'Which selling option is right for me?',
      answer: 'It depends on your experience and available time. DIY is perfect for confident sellers, Assisted FSBO provides support with paperwork, Hybrid combines agent help with DIY savings, and Professional Agent offers full-service convenience.',
    },
    {
      question: 'Do you cover all of Queensland?',
      answer: 'Yes, Realty Direct operates throughout Queensland, with offices in Brisbane and Gold Coast. We have a network of professional agents and provide services across all major Queensland regions.',
    },
    {
      question: 'How quickly can I list my property?',
      answer: 'With our DIY package, you can have your property listed on major portals within 24-48 hours. Professional photography can be arranged within 2-3 business days of signing up.',
    },
  ];

  return (
    <>
      <StructuredData data={breadcrumbSchema(breadcrumbs)} />
      <StructuredData data={faqSchema(faqData)} />
      <Hero />
      <ValueStats />
      <HowItWorks />
      <Features />
      <PortalLogos />
      <Pricing />
      <CallToAction />
    </>
  );
};