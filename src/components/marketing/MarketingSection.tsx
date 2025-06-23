'use client';

import { Card, CardContent, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { Play } from 'lucide-react';

export const MarketingSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Typography variant="h2" className="text-4xl md:text-5xl font-light mb-4">
            Your Queensland Real Estate Partner
          </Typography>
          <Typography variant="h6" className="text-gray-600 font-light max-w-3xl mx-auto">
            Professional real estate services helping you navigate the Queensland property market with confidence
          </Typography>
        </div>

        {/* Marketing Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Card */}
          <Card className="h-full" elevation={0}>
            <CardContent className="p-8">
              <Typography variant="h4" className="font-medium mb-6">
                Expert Real Estate Services
              </Typography>
              
              <div className="space-y-4 mb-8">
                <Typography variant="body1" className="text-gray-700 leading-relaxed">
                  At Realty Direct, we understand that buying, selling, or renting property is one of life's most important decisions. Our experienced team provides personalized service to help you achieve your real estate goals.
                </Typography>
                
                <Typography variant="body1" className="text-gray-700 leading-relaxed">
                  Whether you're a first-time buyer, seasoned investor, or looking to rent, we're here to guide you through every step of the process with professional expertise and local market knowledge.
                </Typography>
                
                <Typography variant="body1" className="text-gray-700 leading-relaxed">
                  From Brisbane to the Gold Coast and beyond, we're committed to delivering exceptional results and outstanding customer service across Queensland.
                </Typography>
              </div>

              <div className="space-y-3">
                <Button
                  variant="contained"
                  size="large"
                  className="w-full md:w-auto mr-0 md:mr-4 mb-3 md:mb-0"
                  href="/contact"
                >
                  Get Started Today
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  className="w-full md:w-auto"
                  href="/about"
                >
                  Learn More About Us
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Image/Video Section */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/images/lisa-anna-_cglx9xLFqU-unsplash.jpg"
                alt="Modern Queensland home showcasing professional real estate services"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Video Play Button Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group cursor-pointer hover:bg-black/30 transition-colors duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 group-hover:bg-white transition-colors duration-300">
                  <Play className="h-8 w-8 text-blue-600 ml-1" />
                </div>
              </div>
              
              {/* Video Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <Typography variant="body2" className="font-medium text-gray-800">
                    Watch: See how we help Queensland families find their perfect home
                  </Typography>
                </div>
              </div>
            </div>

            {/* Additional Stats/Features */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Card className="text-center p-4" elevation={1}>
                <Typography variant="h5" className="font-bold text-blue-600 mb-1">
                  500+
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  Happy Clients
                </Typography>
              </Card>
              
              <Card className="text-center p-4" elevation={1}>
                <Typography variant="h5" className="font-bold text-blue-600 mb-1">
                  10+
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  Years Experience
                </Typography>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};