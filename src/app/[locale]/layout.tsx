import type { Metadata } from 'next';
import { PostHogProvider } from '@/components/analytics/PostHogProvider';
import { routing } from '@/libs/i18nRouting';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: 'Realty Direct | Queensland Real Estate Platform',
  description: 'Realty Direct provides flexible real estate services for property transactions in Queensland, Australia.',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        {/* Preload critical hero images */}
        <link 
          rel="preload" 
          as="image" 
          type="image/webp"
          href="/images/lisa-anna-hero-800.webp"
          media="(max-width: 768px)"
        />
        <link 
          rel="preload" 
          as="image" 
          type="image/webp"
          href="/images/lisa-anna-hero-1200.webp"
          media="(max-width: 1200px)"
        />
        <link 
          rel="preload" 
          as="image" 
          type="image/webp"
          href="/images/lisa-anna-hero-1920.webp"
          media="(min-width: 1201px)"
        />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      </head>
      <body>
        <NextIntlClientProvider>
          <PostHogProvider>
            {props.children}
          </PostHogProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}