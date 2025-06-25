import type { LocalePrefixMode } from 'next-intl/routing';

const localePrefix: LocalePrefixMode = 'always';

export const AppConfig = {
  name: 'Realty Direct',
  description: 'Queensland\'s Flexible Real Estate Platform',
  locales: ['en'],
  defaultLocale: 'en',
  localePrefix,
};
