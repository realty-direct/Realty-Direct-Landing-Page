'use client';

import { Card, CardContent, Typography, Button } from '@mui/material';
import Image from 'next/image';

export const MarketingSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Typography variant="h2" className="text-4xl md:text-5xl font-light mb-4">
            Naturally Direct
          </Typography>
          <Typography variant="h6" className="text-gray-600 font-light max-w-3xl mx-auto">
            As Queensland's growing independent real estate company, we believe in direct relationships, transparent communication, and genuine service
          </Typography>
        </div>

        {/* Marketing Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Card */}
          <Card className="h-full" elevation={0}>
            <CardContent className="p-8">
              <Typography variant="h4" className="font-medium mb-6">
                Your Queensland Real Estate Journey Starts Here
              </Typography>
              
              <div className="space-y-4 mb-8">
                <Typography variant="body1" className="text-gray-700 leading-relaxed">
                  We live and breathe Queensland real estate. Our dedicated team of local professionals share your passion for this incredible state - from the vibrant streets of Brisbane to the golden beaches of the Gold Coast, and everywhere in between.
                </Typography>
                
                <Typography variant="body1" className="text-gray-700 leading-relaxed">
                  As an independent agency, we've built our reputation on doing things differently. We combine cutting-edge technology with old-fashioned personal service. Our agents are equipped with the best marketing tools and strategies, all backed by a support team that ensures every client receives exceptional service.
                </Typography>
                
                <Typography variant="body1" className="text-gray-700 leading-relaxed">
                  We have a simple philosophy: "Direct communication, exceptional results." We believe in being straight-forward, accessible, and focused on what matters most - helping you achieve your property goals. This approach has made choosing Realty Direct a natural decision for hundreds of Queensland families.
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
              
              {/* Company Motto */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <Typography variant="h6" className="text-gray-700 text-center italic font-light">
                  "Direct communication, exceptional results"
                </Typography>
                <Typography variant="body2" className="text-gray-500 text-center mt-2">
                  This is what makes us Naturally Direct
                </Typography>
              </div>
            </CardContent>
          </Card>

          {/* Image Section */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/images/lisa-anna-_cglx9xLFqU-unsplash.jpg"
                alt="Modern Queensland home representing independent real estate excellence"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Why We're Different */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Card className="text-center p-4" elevation={1}>
                <Typography variant="h6" className="font-bold text-blue-600 mb-2">
                  Local Expertise
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  Deep Queensland market knowledge
                </Typography>
              </Card>
              
              <Card className="text-center p-4" elevation={1}>
                <Typography variant="h6" className="font-bold text-blue-600 mb-2">
                  Strategic Reach
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  Connected across Queensland
                </Typography>
              </Card>
              
              <Card className="text-center p-4" elevation={1}>
                <Typography variant="h6" className="font-bold text-blue-600 mb-2">
                  Tech-Enabled
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  Best-in-class marketing tools
                </Typography>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};