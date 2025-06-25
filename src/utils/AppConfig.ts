import type { LocalePrefixMode } from 'next-intl/routing';

const localePrefix: LocalePrefixMode = 'never';

export const AppConfig = {
  name: 'Realty Direct',
  description: 'Queensland\'s Flexible Real Estate Platform',
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix,
};
