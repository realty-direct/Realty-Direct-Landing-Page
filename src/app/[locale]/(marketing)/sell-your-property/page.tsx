import type { Metadata } from 'next';

import { PropertyListing } from '@/components/property-listing';

interface IPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata(props: IPageProps): Promise<Metadata> {
  const { locale } = await props.params;

  return {
    title: 'Sell Your Property | Realty Direct Queensland',
    description: 'Sell your Queensland property with Realty Direct. Choose from DIY, assisted, hybrid, or full-service options. Free property valuation and transparent pricing.',
    keywords: 'sell property queensland, sell house brisbane, property sale gold coast, FSBO queensland, real estate listing',
    openGraph: {
      title: 'Sell Your Property | Realty Direct Queensland',
      description: 'List your Queensland property with flexible selling options. From DIY to full-service, we help you sell for less.',
      url: 'https://realtydirect.com.au/sell-your-property',
      siteName: 'Realty Direct',
      images: [
        {
          url: 'https://realtydirect.com.au/og-sell-property.jpg',
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
      title: 'Sell Your Property | Realty Direct Queensland',
      description: 'List your Queensland property with flexible selling options.',
      images: ['https://realtydirect.com.au/og-sell-property.jpg'],
    },
    alternates: {
      canonical: 'https://realtydirect.com.au/sell-your-property',
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

export default function SellYourPropertyPage() {
  return (
    <>
      <PropertyListing />
    </>
  );
}