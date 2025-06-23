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
            Independent Real Estate Excellence
          </Typography>
          <Typography variant="h6" className="text-gray-600 font-light max-w-3xl mx-auto">
            As Queensland's trusted independent real estate agency, we provide personalized service without the corporate constraints
          </Typography>
        </div>

        {/* Marketing Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Card */}
          <Card className="h-full" elevation={0}>
            <CardContent className="p-8">
              <Typography variant="h4" className="font-medium mb-6">
                Why Choose Independent?
              </Typography>
              
              <div className="space-y-4 mb-8">
                <Typography variant="body1" className="text-gray-700 leading-relaxed">
                  As an independent real estate agency, Realty Direct offers something the big franchises can't - genuine flexibility and personalized attention. We're not bound by corporate policies that prioritize shareholders over clients.
                </Typography>
                
                <Typography variant="body1" className="text-gray-700 leading-relaxed">
                  Our independence means we can tailor our approach to each client's unique needs, negotiate better outcomes, and provide transparent advice without pressure to meet franchise quotas or upsell unnecessary services.
                </Typography>
                
                <Typography variant="body1" className="text-gray-700 leading-relaxed">
                  When you work with Realty Direct, you're working directly with decision-makers who have the authority to act quickly and in your best interests. This is the advantage of choosing independent.
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

            {/* Independent Agency Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Card className="text-center p-4" elevation={1}>
                <Typography variant="h6" className="font-bold text-blue-600 mb-2">
                  No Franchise Fees
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  Lower costs passed to you
                </Typography>
              </Card>
              
              <Card className="text-center p-4" elevation={1}>
                <Typography variant="h6" className="font-bold text-blue-600 mb-2">
                  Direct Access
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  Work with decision makers
                </Typography>
              </Card>
              
              <Card className="text-center p-4" elevation={1}>
                <Typography variant="h6" className="font-bold text-blue-600 mb-2">
                  Flexible Service
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  Tailored to your needs
                </Typography>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};