import type { FC } from 'react';
import { memo } from 'react';
import Image from 'next/image';
import { Card, CardContent, Typography, Button, Chip, IconButton } from '@mui/material';
import { Bed, Bath, Car, Heart, Share2, MapPin } from 'lucide-react';
import clsx from 'clsx';

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    address: string;
    suburb: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
    parking: number;
    propertyType: string;
    imageUrl: string;
    agentName?: string;
    agentImage?: string;
  };
  className?: string;
  onSelect?: (property: any) => void;
  variant?: 'list' | 'grid';
}

export const PropertyCard: FC<PropertyCardProps> = memo(({
  property,
  className,
  onSelect,
  variant = 'grid'
}) => {
  return (
    <Card 
      className={clsx(
        'hover:shadow-lg transition-shadow duration-300 cursor-pointer',
        variant === 'list' ? 'flex flex-col sm:flex-row' : '',
        className
      )}
      onClick={() => onSelect?.(property)}
    >
      {/* Image Section - Mobile First */}
      <div className={clsx(
        'relative overflow-hidden',
        variant === 'list' ? 'w-full sm:w-48 md:w-64' : 'w-full',
        variant === 'list' ? 'h-56 sm:h-full' : 'h-64'
      )}>
        <Image
          src={property.imageUrl}
          alt={property.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          loading="lazy"
          quality={85}
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <IconButton
            size="small"
            className="bg-white/90 hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              // Handle favorite
            }}
          >
            <Heart className="h-5 w-5" />
          </IconButton>
          <IconButton
            size="small"
            className="bg-white/90 hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              // Handle share
            }}
          >
            <Share2 className="h-5 w-5" />
          </IconButton>
        </div>
        <Chip
          label={property.propertyType}
          size="small"
          className="absolute top-2 left-2 bg-blue-600 text-white"
        />
      </div>

      {/* Content Section - Mobile First */}
      <CardContent className={clsx(
        'p-4',
        variant === 'list' ? 'flex-1' : ''
      )}>
        <div className="mb-3">
          <Typography 
            variant="h6" 
            component="h3" 
            className="font-bold text-gray-900 mb-1 line-clamp-1"
          >
            {property.title}
          </Typography>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{property.suburb}</span>
          </div>
        </div>

        <Typography variant="h5" className="font-bold text-blue-600 mb-4">
          {property.price}
        </Typography>

        {/* Property Features - Mobile First Grid */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex items-center justify-center sm:justify-start text-gray-700">
            <Bed className="h-4 w-4 mr-1 text-gray-500" />
            <span className="text-sm">{property.bedrooms}</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start text-gray-700">
            <Bath className="h-4 w-4 mr-1 text-gray-500" />
            <span className="text-sm">{property.bathrooms}</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start text-gray-700">
            <Car className="h-4 w-4 mr-1 text-gray-500" />
            <span className="text-sm">{property.parking}</span>
          </div>
        </div>

        {/* Agent Info - Optional */}
        {property.agentName && (
          <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
            {property.agentImage && (
              <Image
                src={property.agentImage}
                alt={property.agentName}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <div>
              <Typography variant="caption" className="text-gray-600">
                Listed by
              </Typography>
              <Typography variant="body2" className="font-medium">
                {property.agentName}
              </Typography>
            </div>
          </div>
        )}

        {/* Action Buttons - Mobile First */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="contained"
            fullWidth
            onClick={(e) => {
              e.stopPropagation();
              onSelect?.(property);
            }}
            className="bg-blue-600 hover:bg-blue-700"
          >
            View Details
          </Button>
          <Button
            variant="outlined"
            fullWidth
            onClick={(e) => {
              e.stopPropagation();
              // Handle contact
            }}
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Contact Agent
          </Button>
        </div>
      </CardContent>
    </Card>
  );
});

PropertyCard.displayName = 'PropertyCard';