'use client';

import { Typography, Paper } from '@mui/material';
import { 
  Building2, 
  Camera, 
  Globe, 
  Handshake, 
  Shield, 
  TrendingUp 
} from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Property Sales & Acquisitions',
    description: 'Expert guidance through every step of buying or selling your property with local market knowledge and professional service.',
  },
  {
    icon: TrendingUp,
    title: 'Market Analysis',
    description: 'Comprehensive market analysis and pricing guidance to help you make informed property decisions.',
  },
  {
    icon: Camera,
    title: 'Professional Marketing',
    description: 'Professional photography and effective marketing strategies to showcase your property to potential buyers.',
  },
  {
    icon: Globe,
    title: 'Wide Network',
    description: 'Extensive network of buyers, sellers, and industry professionals to help you achieve your property goals.',
  },
  {
    icon: Shield,
    title: 'Full Service Support',
    description: 'Complete support throughout your property journey, from initial consultation to final settlement.',
  },
  {
    icon: Handshake,
    title: 'Personalized Service',
    description: 'Tailored approach to meet your specific needs and preferences in the property market.',
  },
];

export const LuxuryServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Typography variant="h2" className="text-4xl md:text-5xl font-light mb-4">
            Professional Real Estate Services
          </Typography>
          <Typography variant="h6" className="text-gray-600 font-light max-w-2xl mx-auto">
            Comprehensive property services designed to help you achieve your real estate goals
          </Typography>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Paper
                key={index}
                elevation={0}
                className="p-8 border border-gray-200 hover:border-gray-400 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-gray-50 rounded-full group-hover:bg-gray-900 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <Typography variant="h5" className="font-medium mb-3">
                  {service.title}
                </Typography>
                <Typography variant="body1" className="text-gray-600 leading-relaxed">
                  {service.description}
                </Typography>
              </Paper>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Typography variant="h6" className="text-gray-700 font-light mb-6">
            Ready to get started with your property journey? Contact us today
          </Typography>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors duration-300">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};