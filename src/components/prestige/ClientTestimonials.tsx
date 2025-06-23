'use client';

import { Typography, Avatar, Paper } from '@mui/material';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Michael & Jennifer Chen',
    location: 'Broadbeach Penthouse',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'The team at Realty Direct exceeded every expectation. Their market knowledge and attention to detail made selling our waterfront penthouse a seamless experience. We achieved 15% above our asking price.',
    salePrice: '$4.2M',
    timeframe: '3 weeks'
  },
  {
    id: 2,
    name: 'David Thompson',
    location: 'New Farm Estate',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'Professional, discreet, and incredibly effective. Sarah and her team understood exactly what I was looking for and found me the perfect investment property off-market. Their network is unmatched.',
    salePrice: '$6.8M',
    timeframe: '2 weeks'
  },
  {
    id: 3,
    name: 'Alexandra & Robert Hayes',
    location: 'Gold Coast Waterfront',
    image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'Moving from Sydney, we needed agents who understood luxury property markets. Realty Direct provided exceptional guidance and helped us secure our dream home. Their service is truly world-class.',
    salePrice: '$5.5M',
    timeframe: '4 weeks'
  }
];

export const ClientTestimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Typography variant="h2" className="text-4xl md:text-5xl font-light mb-4">
            Client Success Stories
          </Typography>
          <Typography variant="h6" className="text-gray-600 font-light max-w-2xl mx-auto">
            Hear from our clients about their exceptional real estate experiences
          </Typography>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Paper
              key={testimonial.id}
              elevation={0}
              className="p-8 border border-gray-200 hover:border-gray-400 transition-colors duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-12 w-12 text-gray-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <Typography variant="body1" className="text-gray-700 leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </Typography>

              {/* Client Info */}
              <div className="flex items-center gap-4 mb-6">
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12"
                />
                <div>
                  <Typography variant="subtitle1" className="font-medium">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    {testimonial.location}
                  </Typography>
                </div>
              </div>

              {/* Sale Details */}
              <div className="border-t border-gray-200 pt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Typography variant="caption" className="text-gray-500 uppercase tracking-wide">
                      Sale Price
                    </Typography>
                    <Typography variant="h6" className="text-gray-900 font-medium">
                      {testimonial.salePrice}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="caption" className="text-gray-500 uppercase tracking-wide">
                      Time to Sale
                    </Typography>
                    <Typography variant="h6" className="text-gray-900 font-medium">
                      {testimonial.timeframe}
                    </Typography>
                  </div>
                </div>
              </div>
            </Paper>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <Typography variant="h4" className="text-3xl font-light mb-2">
              500+
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Happy Clients
            </Typography>
          </div>
          <div>
            <Typography variant="h4" className="text-3xl font-light mb-2">
              $2.8B+
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Properties Sold
            </Typography>
          </div>
          <div>
            <Typography variant="h4" className="text-3xl font-light mb-2">
              98%
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Client Satisfaction
            </Typography>
          </div>
          <div>
            <Typography variant="h4" className="text-3xl font-light mb-2">
              15+
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Years Excellence
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};