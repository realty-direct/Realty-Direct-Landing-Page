'use client';

import Image from 'next/image';
import { Button, Typography, TextField, InputAdornment, Paper } from '@mui/material';
import { ArrowRight, MapPin, Search } from 'lucide-react';
import { useState } from 'react';

export const PrestigeHero = () => {
  const [address, setAddress] = useState('');

  const handleEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle property estimate logic here
    console.log('Getting estimate for:', address);
  };

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
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Get an Instant Property Estimate
            </Typography>

            {/* Subheading */}
            <Typography
              variant="h6"
              className="text-lg md:text-xl text-gray-600 mb-8 font-normal"
            >
              Discover your property's value with our free, instant estimate tool
            </Typography>

            {/* Address Input Form */}
            <form onSubmit={handleEstimate} className="mb-6">
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter your property address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="bg-white"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        className="rounded-r-md rounded-l-none"
                        disabled={!address}
                      >
                        Get Estimate
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </InputAdornment>
                  ),
                  className: "pr-0",
                  style: { paddingRight: 0 }
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    paddingRight: 0,
                    '& fieldset': {
                      borderColor: 'rgba(0, 0, 0, 0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(0, 0, 0, 0.87)',
                    },
                  },
                }}
              />
            </form>

            {/* Additional CTAs */}
            <Typography variant="body2" className="text-gray-600">
              Or explore our services:
              <Button
                variant="text"
                size="small"
                href="/buying"
                className="mx-2 text-blue-600 hover:text-blue-700"
              >
                Buying
              </Button>
              •
              <Button
                variant="text"
                size="small"
                href="/selling"
                className="mx-2 text-blue-600 hover:text-blue-700"
              >
                Selling
              </Button>
              •
              <Button
                variant="text"
                size="small"
                href="/renting"
                className="mx-2 text-blue-600 hover:text-blue-700"
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