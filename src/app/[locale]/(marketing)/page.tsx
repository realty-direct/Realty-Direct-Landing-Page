import { Features } from '@/components/Features';
import { Hero } from '@/components/Hero';
import { ValueStats } from '@/components/ValueStats';
import { HowItWorks } from '@/components/HowItWorks';
import { PortalLogos } from '@/components/PortalLogos';
import { Pricing } from '@/components/Pricing';
import { CallToAction } from '@/components/CallToAction';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type IIndexProps = {
  params: { locale: string };
};

export async function generateMetadata(props: IIndexProps) {
  const { locale } = props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = props.params;
  setRequestLocale(locale);

  return (
    <>
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