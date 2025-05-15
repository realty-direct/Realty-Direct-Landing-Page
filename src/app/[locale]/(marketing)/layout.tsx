import { BaseTemplate } from '@/components/layouts/BaseTemplate';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { StructuredData } from '@/components/common/StructuredData';
import { organizationSchema, websiteSchema } from '@/utils/structuredData';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'RootLayout',
  });

  return (
    <BaseTemplate
      navItems={(
        <>
          <Link
            href="/"
            className="block px-3 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium transition-colors md:inline-block md:py-2 md:hover:bg-transparent md:relative md:group"
          >
            {t('home_link')}
            <span className="hidden md:block absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          
          <Link
            href="/about/"
            className="block px-3 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium transition-colors md:inline-block md:py-2 md:hover:bg-transparent md:relative md:group"
          >
            {t('about_link')}
            <span className="hidden md:block absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          
          <Link
            href="/services/"
            className="block px-3 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium transition-colors md:inline-block md:py-2 md:hover:bg-transparent md:relative md:group"
          >
            {t('services_link')}
            <span className="hidden md:block absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          
          <Link
            href="/contact/"
            className="block px-3 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium transition-colors md:inline-block md:py-2 md:hover:bg-transparent md:relative md:group"
          >
            {t('contact_link')}
            <span className="hidden md:block absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          
          <div className="mt-6 px-3 md:mt-0 md:px-0">
            <Link
              href="/sell-your-property/"
              className="block w-full text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-5 py-2.5 rounded-md font-medium shadow-sm transition-all duration-300 hover:shadow text-center md:inline-block md:w-auto md:ml-2"
            >
              {t('fsbo_link')}
            </Link>
          </div>
        </>
      )}
    >
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      {props.children}
    </BaseTemplate>
  );
}