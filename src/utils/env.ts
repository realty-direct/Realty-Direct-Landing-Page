import { z } from 'zod';

// Define the schema for environment variables
const envSchema = z.object({
  // Next.js Public Variables
  NEXT_PUBLIC_API_URL: z.string().url().optional(),
  NEXT_PUBLIC_SITE_URL: z.string().url().default('https://realtydirect.com.au'),
  
  // PostHog Analytics
  NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
  NEXT_PUBLIC_POSTHOG_HOST: z.string().url().optional(),
  
  // Sentry Error Tracking
  NEXT_PUBLIC_SENTRY_DSN: z.string().optional(),
  SENTRY_ORG: z.string().optional(),
  SENTRY_PROJECT: z.string().optional(),
  SENTRY_AUTH_TOKEN: z.string().optional(),
  
  // API Keys (Server-side only)
  DATABASE_URL: z.string().optional(),
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
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().optional(),
  
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
  
  // Node Environment
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  
  // Feature Flags
  NEXT_PUBLIC_ENABLE_ANALYTICS: z.string().transform(val => val === 'true').default('false'),
  NEXT_PUBLIC_ENABLE_SENTRY: z.string().transform(val => val === 'true').default('false'),
});

// Type for validated environment variables
export type Env = z.infer<typeof envSchema>;

// Validate environment variables
function validateEnv(): Env {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('❌ Invalid environment variables:');
      console.error(error.flatten().fieldErrors);
      
      // In development, provide helpful error messages
      if (process.env.NODE_ENV === 'development') {
        const missingVars = error.errors
          .filter(err => err.code === 'invalid_type' && err.received === 'undefined')
          .map(err => err.path.join('.'));
        
        if (missingVars.length > 0) {
          console.error('\n📝 Missing environment variables:');
          missingVars.forEach(varName => {
            console.error(`  - ${varName}`);
          });
          console.error('\n💡 Create a .env.local file with these variables.');
        }
      }
      
      throw new Error('Invalid environment variables');
    }
    throw error;
  }
}

// Export validated environment variables
export const env = validateEnv();

// Helper functions for common env checks
export const isDevelopment = env.NODE_ENV === 'development';
export const isProduction = env.NODE_ENV === 'production';
export const isTest = env.NODE_ENV === 'test';

// Feature flag helpers
export const isAnalyticsEnabled = env.NEXT_PUBLIC_ENABLE_ANALYTICS && isProduction;
export const isSentryEnabled = env.NEXT_PUBLIC_ENABLE_SENTRY && isProduction;

// API URL helpers
export const getApiUrl = (path: string) => {
  const baseUrl = env.NEXT_PUBLIC_API_URL || env.NEXT_PUBLIC_SITE_URL;
  return new URL(path, baseUrl).toString();
};

// Site URL helper
export const getSiteUrl = (path: string = '') => {
  return new URL(path, env.NEXT_PUBLIC_SITE_URL).toString();
};