'use client';

import { AddressAutocomplete } from '@/components/common/AddressAutocomplete';
import { Button, Paper, Typography } from '@mui/material';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const PrestigeHero = () => {
  const [address, setAddress] = useState('');
  const router = useRouter();

  const handleEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    if (address) {
      // Encode the address for URL
      const encodedAddress = encodeURIComponent(address);
      // Navigate to estimate page with address as query parameter
      router.push(`/estimate?address=${encodedAddress}`);
    }
  };

  const handlePlaceSelected = (place: google.maps.places.PlaceResult) => {
    // You can access additional place details here
    console.log('Place selected:', place);
  };

  // Debug: Check if Google Maps is loaded
  useEffect(() => {
    const checkGoogleMaps = () => {
      if (typeof window !== 'undefined') {
        console.log('Google Maps loaded:', !!(window as any).google);
        console.log('Places library loaded:', !!((window as any).google?.maps?.places));
      }
    };

    checkGoogleMaps();
    // Check again after a delay
    setTimeout(checkGoogleMaps, 2000);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/lisa-anna-_cglx9xLFqU-unsplash.jpg"
          alt="Queensland property"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
        <div className="max-w-4xl w-full text-center">
          {/* Main Content Card */}
          <Paper elevation={0} className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl">
            {/* Main Heading */}
            <Typography
              variant="h2"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
            >
              Get an Instant Property Estimate
            </Typography>

            {/* Subheading */}
            <Typography
              variant="h6"
              className="text-lg md:text-xl text-slate-600 mb-10 font-normal"
            >
              Discover your property's value with our free, instant estimate tool
            </Typography>

            {/* Address Input Form */}
            <form onSubmit={handleEstimate} className="mb-6 space-y-4">
              <AddressAutocomplete
                value={address}
                onChange={setAddress}
                onPlaceSelected={handlePlaceSelected}
                className="bg-white"
              />
              <div className="mt-2">
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  className="w-full"
                  disabled={!address}
                >
                  Get Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>

            {/* Additional CTAs */}
            <Typography variant="body2" className="text-slate-600 mt-8">
              Or explore our services:
              <Button
                variant="text"
                size="small"
                href="/buying"
                className="mx-2 text-primary-600 hover:text-primary-700"
              >
                Buying
              </Button>
              •
              <Button
                variant="text"
                size="small"
                href="/selling"
                className="mx-2 text-primary-600 hover:text-primary-700"
              >
                Selling
              </Button>
              •
              <Button
                variant="text"
                size="small"
                href="/renting"
                className="mx-2 text-primary-600 hover:text-primary-700"
              >
                Renting
              </Button>
            </Typography>
          </Paper>
        </div>
      </div>

    </section>
  );
};
