import { BaseTemplate } from '@/templates/BaseTemplate';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

export default async function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'RootLayout',
  });

  return (
    <BaseTemplate
      navItems={(
        <div className="md:flex md:items-center md:space-x-1 lg:space-x-4">
        
          <Link
            href="/"
            className="px-3 py-2 text-gray-700 hover:text-blue-700 font-medium transition-colors relative group"
          >
            {t('home_link')}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          
          <Link
            href="/about/"
            className="px-3 py-2 text-gray-700 hover:text-blue-700 font-medium transition-colors relative group"
          >
            {t('about_link')}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          
          <Link
            href="/services/"
            className="px-3 py-2 text-gray-700 hover:text-blue-700 font-medium transition-colors relative group"
          >
            {t('services_link')}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          
          <Link
            href="/contact/"
            className="px-3 py-2 text-gray-700 hover:text-blue-700 font-medium transition-colors relative group"
          >
            {t('contact_link')}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          
          <Link
            href="/sell-your-property/"
            className="ml-2 text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-5 py-2.5 rounded-md font-medium shadow-sm transition-all duration-300 hover:shadow"
          >
            {t('fsbo_link')}
          </Link>
        </div>
      )}
    >
      {props.children}
    </BaseTemplate>
  );
}