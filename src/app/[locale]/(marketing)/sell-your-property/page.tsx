import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PropertyListing } from '@/components/property-listing';

interface IPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata(props: IPageProps): Promise<Metadata> {
  const { locale } = props.params;
  const t = await getTranslations({
    locale,
    namespace: 'PropertyListing',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
    // Add structured data for SEO
    openGraph: {
      title: t('meta_title'),
      description: t('meta_description'),
      locale: locale,
      type: 'website',
    },
    alternates: {
      canonical: `https://realtydirect.com.au/${locale}/sell-your-property`,
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