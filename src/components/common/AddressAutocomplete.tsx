'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import Script from 'next/script';

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onPlaceSelected?: (place: any) => void;
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
  const autocompleteRef = useRef<any>(null);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const [shouldLoadMaps, setShouldLoadMaps] = useState(false);

  // Load Google Maps when component becomes active (user clicks on input)
  const handleInputFocus = () => {
    setShouldLoadMaps(true);
  };

  useEffect(() => {
    let checkInterval: NodeJS.Timeout;
    
    const tryInitialize = () => {
      if (scriptsLoaded && typeof window !== 'undefined' && (window as any).google && (window as any).google.maps && (window as any).google.maps.places) {
        if (process.env.NODE_ENV === 'development') {
          console.log('Google Maps API is loaded, initializing autocomplete');
        }
        initializeAutocomplete();
        return true;
      }
      return false;
    };

    // Only initialize after scripts are loaded and Google Maps should be loaded
    if (scriptsLoaded && shouldLoadMaps) {
      if (!tryInitialize()) {
        if (process.env.NODE_ENV === 'development') {
          console.log('Google Maps API not loaded yet, waiting...');
        }
        // If not loaded, wait for it
        checkInterval = setInterval(() => {
          if (tryInitialize() && checkInterval) {
            clearInterval(checkInterval);
          }
        }, 100);
      }
    }

    return () => {
      if (checkInterval) {
        clearInterval(checkInterval);
      }
      if (autocompleteRef.current && (window as any).google) {
        (window as any).google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, [scriptsLoaded, shouldLoadMaps]);

  const initializeAutocomplete = () => {
    if (!inputRef.current) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Input ref not available');
      }
      return;
    }

    try {
      // Create autocomplete instance
      autocompleteRef.current = new (window as any).google.maps.places.Autocomplete(inputRef.current, {
        componentRestrictions: { country: 'au' }, // Restrict to Australia
        fields: ['address_components', 'geometry', 'formatted_address', 'place_id'],
        types: ['address'] // Focus on addresses
      });

      if (process.env.NODE_ENV === 'development') {
        console.log('Autocomplete instance created successfully');
      }

      // Add place changed listener
      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current?.getPlace();
        if (process.env.NODE_ENV === 'development') {
          console.log('Place selected:', place);
        }
        if (place && place.formatted_address) {
          onChange(place.formatted_address);
          if (onPlaceSelected) {
            onPlaceSelected(place);
          }
        }
      });
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error initializing autocomplete:', error);
      }
    }
  };

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <>
      {/* Conditionally load Google Maps Scripts */}
      {shouldLoadMaps && apiKey && (
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`}
          strategy="afterInteractive"
          onLoad={() => {
            setScriptsLoaded(true);
            if (process.env.NODE_ENV === 'development') {
              console.log('Google Maps script loaded');
            }
          }}
          onError={(e) => {
            if (process.env.NODE_ENV === 'development') {
              console.error('Error loading Google Maps:', e);
            }
          }}
        />
      )}
      
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleInputFocus}
          className={`w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${className}`}
          autoComplete="off"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <MapPin className="h-5 w-5 text-gray-400" />
        </div>
      </div>
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