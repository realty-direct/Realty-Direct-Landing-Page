'use client';

import { useEffect, useRef, useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { MapPin } from 'lucide-react';

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onPlaceSelected?: (place: google.maps.places.PlaceResult) => void;
  placeholder?: string;
  className?: string;
}

export const AddressAutocomplete = ({
  value,
  onChange,
  onPlaceSelected,
  placeholder = "Enter your property address",
  className = ""
}: AddressAutocompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    let checkInterval: NodeJS.Timeout;
    
    const tryInitialize = () => {
      if (typeof window !== 'undefined' && window.google && window.google.maps && window.google.maps.places) {
        console.log('Google Maps API is loaded, initializing autocomplete');
        initializeAutocomplete();
        setIsLoaded(true);
        return true;
      }
      return false;
    };

    // Try immediately
    if (!tryInitialize()) {
      console.log('Google Maps API not loaded yet, waiting...');
      // If not loaded, wait for it
      checkInterval = setInterval(() => {
        if (tryInitialize() && checkInterval) {
          clearInterval(checkInterval);
        }
      }, 100);
    }

    return () => {
      if (checkInterval) {
        clearInterval(checkInterval);
      }
      if (autocompleteRef.current && window.google) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, []);

  const initializeAutocomplete = () => {
    if (!inputRef.current) {
      console.error('Input ref not available');
      return;
    }

    try {
      // Create autocomplete instance
      autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
        componentRestrictions: { country: 'au' }, // Restrict to Australia
        fields: ['address_components', 'geometry', 'formatted_address', 'place_id'],
        types: ['address'] // Focus on addresses
      });

      console.log('Autocomplete instance created successfully');

      // Add place changed listener
      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current?.getPlace();
        console.log('Place selected:', place);
        if (place && place.formatted_address) {
          onChange(place.formatted_address);
          if (onPlaceSelected) {
            onPlaceSelected(place);
          }
        }
      });
    } catch (error) {
      console.error('Error initializing autocomplete:', error);
    }
  };

  return (
    <>
      <TextField
        inputRef={inputRef}
        fullWidth
        variant="outlined"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={className}
        autoComplete="off"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MapPin className="h-5 w-5 text-gray-400" />
            </InputAdornment>
          )
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.23)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.87)',
            },
          },
        }}
      />
      {/* Add global styles for Google Autocomplete */}
      <style jsx global>{`
        .pac-container {
          z-index: 10000 !important;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .pac-item {
          padding: 12px 16px;
          cursor: pointer;
          font-size: 14px;
        }
        .pac-item:hover {
          background-color: #f3f4f6;
        }
        .pac-item-query {
          font-weight: 600;
        }
      `}</style>
    </>
  );
};