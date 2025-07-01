'use client';

import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect, useState } from 'react';
import { SuspendedPostHogPageView } from './PostHogPageView';

// Lazy load PostHog to prevent render blocking
let posthogPromise: Promise<typeof import('posthog-js').default> | null = null;

const loadPostHog = () => {
  if (!posthogPromise) {
    posthogPromise = import('posthog-js').then(module => module.default);
  }
  return posthogPromise;
};

export const PostHogProvider = (props: { children: React.ReactNode }) => {
  const [posthogClient, setPosthogClient] = useState<any>(null);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      // Load PostHog asynchronously after the page has loaded
      loadPostHog().then((posthog) => {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
          api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
          capture_pageview: false, // Disable automatic pageview capture, as we capture manually
          capture_pageleave: true, // Enable pageleave capture
          loaded: (posthog) => {
            setPosthogClient(posthog);
          }
        });
      });
    }
  }, []);

  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY || !posthogClient) {
    return props.children;
  }

  return (
    <PHProvider client={posthogClient}>
      <SuspendedPostHogPageView />
      {props.children}
    </PHProvider>
  );
};