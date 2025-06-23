'use client';

import { Typography, Avatar, Chip } from '@mui/material';
import { Award, MapPin, Phone, Mail } from 'lucide-react';

const agents = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    title: 'Principal & Senior Partner',
    specialization: 'Waterfront Properties',
    location: 'Gold Coast',
    experience: '15+ Years',
    sales: '$180M+',
    phone: '+61 7 5555 0123',
    email: 'sarah@realtydirect.com.au',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=300&h=300&fit=crop&crop=face',
    achievements: ['Top 1% Agent QLD', 'Luxury Property Specialist', 'International Sales Expert']
  },
  {
    id: 2,
    name: 'James Harrison',
    title: 'Executive Director',
    specialization: 'Commercial & Investment',
    location: 'Brisbane',
    experience: '12+ Years',
    sales: '$220M+',
    phone: '+61 7 3333 0123',
    email: 'james@realtydirect.com.au',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    achievements: ['Commercial Property Expert', 'Investment Advisory', 'Market Analyst']
  },
  {
    id: 3,
    name: 'Emma Richardson',
    title: 'Luxury Residential Specialist',
    specialization: 'Prestige Homes',
    location: 'Brisbane',
    experience: '10+ Years',
    sales: '$150M+',
    phone: '+61 7 3333 0124',
    email: 'emma@realtydirect.com.au',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    achievements: ['Interior Design Background', 'Architectural Expertise', 'Client Relations Expert']
  },
];

export const AgentShowcase = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Typography variant="h2" className="text-4xl md:text-5xl font-light mb-4 text-white">
            Meet Our Expert Team
          </Typography>
          <Typography variant="h6" className="text-gray-300 font-light max-w-2xl mx-auto">
            Award-winning professionals dedicated to delivering exceptional results for our clients
          </Typography>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <div key={agent.id} className="text-center group">
              {/* Agent Photo */}
              <div className="relative mb-6">
                <Avatar
                  src={agent.image}
                  alt={agent.name}
                  className="w-32 h-32 mx-auto mb-4 border-4 border-white/20 group-hover:border-amber-400 transition-colors duration-300"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-amber-500 p-2 rounded-full">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Agent Info */}
              <Typography variant="h5" className="font-medium mb-1 text-white">
                {agent.name}
              </Typography>
              <Typography variant="subtitle1" className="text-amber-400 mb-2">
                {agent.title}
              </Typography>

              {/* Location & Specialization */}
              <div className="flex items-center justify-center gap-1 mb-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <Typography variant="body2" className="text-gray-300">
                  {agent.location}
                </Typography>
              </div>
              <Typography variant="body2" className="text-gray-300 mb-4">
                Specializing in {agent.specialization}
              </Typography>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <Typography variant="h6" className="text-amber-400 font-light">
                    {agent.experience}
                  </Typography>
                  <Typography variant="caption" className="text-gray-400">
                    Experience
                  </Typography>
                </div>
                <div>
                  <Typography variant="h6" className="text-amber-400 font-light">
                    {agent.sales}
                  </Typography>
                  <Typography variant="caption" className="text-gray-400">
                    Sales Volume
                  </Typography>
                </div>
              </div>

              {/* Achievements */}
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {agent.achievements.map((achievement, index) => (
                  <Chip
                    key={index}
                    label={achievement}
                    size="small"
                    className="bg-white/10 text-white text-xs"
                  />
                ))}
              </div>

              {/* Contact */}
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <Typography variant="body2" className="text-gray-300">
                    {agent.phone}
                  </Typography>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <Typography variant="body2" className="text-gray-300">
                    {agent.email}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Typography variant="h6" className="text-gray-300 font-light mb-6">
            Ready to work with Queensland's premier real estate professionals?
          </Typography>
          <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-amber-400 text-amber-400 font-medium hover:bg-amber-400 hover:text-gray-900 transition-colors duration-300">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
};