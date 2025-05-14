import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

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
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            {t('home_link')}
          </Link>
          
          <Link
            href="/about/"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            {t('about_link')}
          </Link>
          
          <Link
            href="/services/"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            {t('services_link')}
          </Link>
          
          <Link
            href="/contact/"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            {t('contact_link')}
          </Link>
          
          <LocaleSwitcher />
        </>
      )}
    >
      {props.children}
    </BaseTemplate>
  );
}