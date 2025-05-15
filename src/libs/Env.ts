import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const Env = createEnv({
  server: {
    // Logging
    LOGTAIL_SOURCE_TOKEN: z.string().optional(),
    
    // Database
    DATABASE_URL: z.string().optional(),
    
    // Security
    ARCJET_KEY: z.string().optional(),
    
    // Email Service
    EMAIL_SERVER_HOST: z.string().optional(),
    EMAIL_SERVER_PORT: z.string().optional(),
    EMAIL_SERVER_USER: z.string().optional(),
    EMAIL_SERVER_PASSWORD: z.string().optional(),
    EMAIL_FROM: z.string().email().optional(),
    
    // Payment Processing
    STRIPE_SECRET_KEY: z.string().optional(),
    STRIPE_WEBHOOK_SECRET: z.string().optional(),
    
    // Property Portal APIs
    REALESTATE_API_KEY: z.string().optional(),
    DOMAIN_API_KEY: z.string().optional(),
    
    // SMS Service
    TWILIO_ACCOUNT_SID: z.string().optional(),
    TWILIO_AUTH_TOKEN: z.string().optional(),
    TWILIO_PHONE_NUMBER: z.string().optional(),
    
    // Image Storage
    CLOUDINARY_CLOUD_NAME: z.string().optional(),
    CLOUDINARY_API_KEY: z.string().optional(),
    CLOUDINARY_API_SECRET: z.string().optional(),
    
    // Sentry
    SENTRY_ORG: z.string().optional(),
    SENTRY_PROJECT: z.string().optional(),
    SENTRY_AUTH_TOKEN: z.string().optional(),
  },
  client: {
    // App URLs
    NEXT_PUBLIC_APP_URL: z.string().optional(),
    NEXT_PUBLIC_API_URL: z.string().url().optional(),
    NEXT_PUBLIC_SITE_URL: z.string().url().default('https://realtydirect.com.au'),
    
    // Analytics
    NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
    NEXT_PUBLIC_POSTHOG_HOST: z.string().optional(),
    
    // Error Tracking
    NEXT_PUBLIC_SENTRY_DSN: z.string().optional(),
    
    // Payment
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().optional(),
    
    // Feature Flags
    NEXT_PUBLIC_ENABLE_ANALYTICS: z.string().transform(val => val === 'true').default('false'),
    NEXT_PUBLIC_ENABLE_SENTRY: z.string().transform(val => val === 'true').default('false'),
  },
  shared: {
    NODE_ENV: z.enum(['test', 'development', 'production']).optional(),
  },
  // Runtime environment variables
  runtimeEnv: {
    // Server
    LOGTAIL_SOURCE_TOKEN: process.env.LOGTAIL_SOURCE_TOKEN,
    DATABASE_URL: process.env.DATABASE_URL,
    ARCJET_KEY: process.env.ARCJET_KEY,
    EMAIL_SERVER_HOST: process.env.EMAIL_SERVER_HOST,
    EMAIL_SERVER_PORT: process.env.EMAIL_SERVER_PORT,
    EMAIL_SERVER_USER: process.env.EMAIL_SERVER_USER,
    EMAIL_SERVER_PASSWORD: process.env.EMAIL_SERVER_PASSWORD,
    EMAIL_FROM: process.env.EMAIL_FROM,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    REALESTATE_API_KEY: process.env.REALESTATE_API_KEY,
    DOMAIN_API_KEY: process.env.DOMAIN_API_KEY,
    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
    TWILIO_PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    SENTRY_ORG: process.env.SENTRY_ORG,
    SENTRY_PROJECT: process.env.SENTRY_PROJECT,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    
    // Client
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    NEXT_PUBLIC_ENABLE_ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS,
    NEXT_PUBLIC_ENABLE_SENTRY: process.env.NEXT_PUBLIC_ENABLE_SENTRY,
    
    // Shared
    NODE_ENV: process.env.NODE_ENV,
  },
});

// Export helper functions
export const isDevelopment = Env.NODE_ENV === 'development';
export const isProduction = Env.NODE_ENV === 'production';
export const isTest = Env.NODE_ENV === 'test';

// Feature flag helpers
export const isAnalyticsEnabled = Env.NEXT_PUBLIC_ENABLE_ANALYTICS && isProduction;
export const isSentryEnabled = Env.NEXT_PUBLIC_ENABLE_SENTRY && isProduction;

// API URL helpers
export const getApiUrl = (path: string) => {
  const baseUrl = Env.NEXT_PUBLIC_API_URL || Env.NEXT_PUBLIC_SITE_URL;
  return new URL(path, baseUrl).toString();
};

// Site URL helper
export const getSiteUrl = (path: string = '') => {
  return new URL(path, Env.NEXT_PUBLIC_SITE_URL).toString();
};