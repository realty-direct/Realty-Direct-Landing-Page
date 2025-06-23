'use client';

import { Card, CardContent, Typography, Chip, IconButton } from '@mui/material';
import Image from 'next/image';
import { ArrowRight, Bath, Bed, Car, Heart, MapPin, Maximize } from 'lucide-react';
import { useState } from 'react';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  beds: number;
  baths: number;
  parking: number;
  area: string;
  image: string;
  featured: boolean;
}

const properties: Property[] = [
  {
    id: 1,
    title: 'Waterfront Penthouse',
    location: 'Main Beach, Gold Coast',
    price: '$5,750,000',
    type: 'Penthouse',
    beds: 4,
    baths: 3,
    parking: 3,
    area: '485m²',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    id: 2,
    title: 'Riverfront Estate',
    location: 'New Farm, Brisbane',
    price: '$8,900,000',
    type: 'House',
    beds: 6,
    baths: 5,
    parking: 4,
    area: '890m²',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    id: 3,
    title: 'Contemporary Mansion',
    location: 'Ascot, Brisbane',
    price: '$4,200,000',
    type: 'House',
    beds: 5,
    baths: 4,
    parking: 3,
    area: '650m²',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop',
    featured: false,
  },
  {
    id: 4,
    title: 'Beachfront Villa',
    location: 'Broadbeach, Gold Coast',
    price: '$6,500,000',
    type: 'Villa',
    beds: 5,
    baths: 4,
    parking: 2,
    area: '420m²',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    featured: true,
  },
];

export const FeaturedProperties = () => {
  const [savedProperties, setSavedProperties] = useState<number[]>([]);

  const toggleSave = (id: number) => {
    setSavedProperties(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Typography variant="h2" className="text-4xl md:text-5xl font-light mb-4">
            Featured Properties
          </Typography>
          <Typography variant="h6" className="text-gray-600 font-light max-w-2xl mx-auto">
            Discover our carefully curated selection of Queensland's most exceptional properties
          </Typography>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300"
              elevation={0}
            >
              {/* Image Container */}
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Featured Badge */}
                {property.featured && (
                  <Chip
                    label="Featured"
                    className="absolute top-4 left-4 bg-amber-500 text-white"
                  />
                )}
                
                {/* Save Button */}
                <IconButton
                  onClick={() => toggleSave(property.id)}
                  className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm hover:bg-white"
                  size="small"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      savedProperties.includes(property.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-700'
                    }`}
                  />
                </IconButton>

                {/* Price Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Typography variant="h3" className="text-white font-light text-3xl">
                    {property.price}
                  </Typography>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6">
                <div className="mb-4">
                  <Typography variant="h5" className="font-medium mb-2">
                    {property.title}
                  </Typography>
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <Typography variant="body2">{property.location}</Typography>
                  </div>
                </div>

                {/* Features */}
                <div className="flex items-center gap-6 text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span className="text-sm">{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    <span className="text-sm">{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Car className="h-4 w-4" />
                    <span className="text-sm">{property.parking}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize className="h-4 w-4" />
                    <span className="text-sm">{property.area}</span>
                  </div>
                </div>

                {/* Property Type */}
                <Chip
                  label={property.type}
                  variant="outlined"
                  size="small"
                  className="border-gray-300"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-none hover:bg-gray-900 hover:text-white transition-colors duration-300">
            View All Properties
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};