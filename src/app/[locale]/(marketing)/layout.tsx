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
            href="/buying/"
            className="block px-3 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium transition-colors md:inline-block md:py-2 md:hover:bg-transparent md:relative md:group"
          >
            Buying
            <span className="hidden md:block absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          
          <Link
            href="/selling/"
            className="block px-3 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium transition-colors md:inline-block md:py-2 md:hover:bg-transparent md:relative md:group"
          >
            Selling
            <span className="hidden md:block absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          
          <Link
            href="/renting/"
            className="block px-3 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium transition-colors md:inline-block md:py-2 md:hover:bg-transparent md:relative md:group"
          >
            Renting
            <span className="hidden md:block absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          
          <Link
            href="/about/"
            className="block px-3 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium transition-colors md:inline-block md:py-2 md:hover:bg-transparent md:relative md:group"
          >
            About
            <span className="hidden md:block absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          
          <Link
            href="/contact/"
            className="block px-3 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-blue-700 font-medium transition-colors md:inline-block md:py-2 md:hover:bg-transparent md:relative md:group"
          >
            Contact
            <span className="hidden md:block absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        </>
      )}
    >
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      {props.children}
    </BaseTemplate>
  );
}