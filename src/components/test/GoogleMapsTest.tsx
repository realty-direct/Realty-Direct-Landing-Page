'use client';

import { useEffect, useState } from 'react';

export const GoogleMapsTest = () => {
  const [status, setStatus] = useState('Loading...');
  const [details, setDetails] = useState<any>({});

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyC1-DPGwZgccZMJDStZicFyXFw-TZhLurI';
    
    // Test script loading
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    
    script.onload = () => {
      setStatus('Script loaded successfully');
      
      // Test API availability
      setTimeout(() => {
        const testDetails = {
          googleExists: !!(window as any).google,
          mapsExists: !!(window as any).google?.maps,
          placesExists: !!(window as any).google?.maps?.places,
          autocompleteExists: !!(window as any).google?.maps?.places?.Autocomplete,
          domain: window.location.hostname,
          protocol: window.location.protocol,
          userAgent: navigator.userAgent.substring(0, 100)
        };
        
        setDetails(testDetails);
        
        if (testDetails.autocompleteExists) {
          setStatus('✅ Google Maps Places API fully loaded');
        } else {
          setStatus('❌ Google Maps Places API not available');
        }
      }, 1000);
    };
    
    script.onerror = (error) => {
      setStatus('❌ Failed to load Google Maps script');
      setDetails({ error: error.toString() });
    };
    
    document.head.appendChild(script);
    
    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="font-bold mb-2">Google Maps API Test</h3>
      <p className="mb-4">{status}</p>
      <pre className="text-xs bg-white p-2 rounded overflow-auto">
        {JSON.stringify(details, null, 2)}
      </pre>
    </div>
  );
};