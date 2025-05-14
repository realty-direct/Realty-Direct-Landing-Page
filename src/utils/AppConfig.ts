import type { LocalePrefixMode } from 'next-intl/routing';

const localePrefix: LocalePrefixMode = 'as-needed';

export const AppConfig = {
  name: 'R&D Solutions',
  description: 'Innovative Research & Development Solutions',
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix,
};
