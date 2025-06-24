import { routing } from '@/libs/i18nRouting';

export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  // GitHub Pages
  if (process.env.GITHUB_ACTIONS) {
    return 'https://realty-direct.github.io/Realty-Direct-Landing-Page';
  }

  if (
    process.env.VERCEL_ENV === 'production'
    && process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://localhost:3000';
};

export const getI18nPath = (url: string, locale: string) => {
  if (locale === routing.defaultLocale) {
    return url;
  }

  return `/${locale}${url}`;
};

export const getAssetPath = (path: string) => {
  // Add base path for GitHub Pages
  const basePath = process.env.NODE_ENV === 'production' ? '/Realty-Direct-Landing-Page' : '';
  return `${basePath}${path}`;
};
