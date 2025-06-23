'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

interface GoogleMapsLoaderProps {
  apiKey: string;
  libraries?: string[];
  children: React.ReactNode;
}

export const GoogleMapsLoader = ({ 
  apiKey, 
  libraries = ['places'], 
  children 
}: GoogleMapsLoaderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if already loaded
    if (typeof window !== 'undefined' && window.google && window.google.maps && window.google.maps.places) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=${libraries.join(',')}`}
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Google Maps script loaded');
          setIsLoaded(true);
        }}
        onError={(e) => {
          console.error('Error loading Google Maps:', e);
        }}
      />
      {children}
    </>
  );
};