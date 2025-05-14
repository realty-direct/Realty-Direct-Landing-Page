'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowLeft, CheckCircle, Loader } from 'lucide-react';

// Mock agent data for display
const mockAgents = {
  '1': {
    id: '1',
    name: 'Emma Thompson',
    specialty: 'Residential',
  },
  '2': {
    id: '2',
    name: 'Michael Chen',
    specialty: 'Commercial',
  },
  '3': {
    id: '3',
    name: 'Sarah Williams',
    specialty: 'Luxury Properties',
  }
};

type PropertyDetails = {
  propertyType: string;
  address: string;
  bedrooms?: number;
  bathrooms?: number;
  parking?: number;
  price: string;
  description: string;
  features?: string;
};

type ReviewSubmitProps = {
  propertyDetails: PropertyDetails;
  selectedAgentId: string | null;
  onBack: () => void;
  onSubmit: () => void;
};

export const ReviewSubmit = ({
  propertyDetails,
  selectedAgentId,
  onBack,
  onSubmit,
}: ReviewSubmitProps) => {
  const t = useTranslations('PropertyListing');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onSubmit();
    }, 1500);
  };
  
  // Get property type label based on value
  const getPropertyTypeLabel = (value: string) => {
    switch (value) {
      case 'house':
        return t('form_property_type_house');
      case 'apartment':
        return t('form_property_type_apartment');
      case 'townhouse':
        return t('form_property_type_townhouse');
      case 'land':
        return t('form_property_type_land');
      case 'commercial':
        return t('form_property_type_commercial');
      default:
        return value;
    }
  };

  // If submitted, show confirmation screen
  if (isSubmitted) {
    return (
      <div className="w-full max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
        <div className="mb-6">
          <CheckCircle className="h-16 w-16 mx-auto text-green-500" />
        </div>
        <h2 className="text-2xl font-bold mb-4">{t('confirmation_title')}</h2>
        <p className="text-gray-600 mb-8">{t('confirmation_description')}</p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-4">{t('what_happens_next')}</h3>
          <ul className="space-y-3 text-left">
            {t.raw('next_steps').map((step: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5 text-sm font-medium">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">{t('review_heading')}</h3>
          <p className="text-gray-600">{t('review_description')}</p>
        </div>
        
        {/* Property details summary */}
        <div className="border-t border-b py-4">
          <h4 className="font-semibold mb-4 text-lg">{t('step_1_title')}</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">{t('form_property_type')}</p>
              <p className="font-medium">{getPropertyTypeLabel(propertyDetails.propertyType)}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">{t('form_price')}</p>
              <p className="font-medium">{propertyDetails.price}</p>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <p className="text-sm text-gray-500">{t('form_address')}</p>
              <p className="font-medium">{propertyDetails.address}</p>
            </div>
            
            {propertyDetails.propertyType !== 'land' && propertyDetails.propertyType !== 'commercial' && (
              <>
                <div>
                  <p className="text-sm text-gray-500">{t('form_bedrooms')}</p>
                  <p className="font-medium">{propertyDetails.bedrooms}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">{t('form_bathrooms')}</p>
                  <p className="font-medium">{propertyDetails.bathrooms}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">{t('form_parking')}</p>
                  <p className="font-medium">{propertyDetails.parking}</p>
                </div>
              </>
            )}
            
            <div className="col-span-1 md:col-span-2">
              <p className="text-sm text-gray-500">{t('form_description')}</p>
              <p className="font-medium">{propertyDetails.description}</p>
            </div>
            
            {propertyDetails.features && (
              <div className="col-span-1 md:col-span-2">
                <p className="text-sm text-gray-500">{t('form_features')}</p>
                <p className="font-medium">{propertyDetails.features}</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Agent selection summary */}
        <div className="border-b py-4">
          <h4 className="font-semibold mb-4 text-lg">{t('step_2_title')}</h4>
          
          {selectedAgentId ? (
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 font-bold">
                {mockAgents[selectedAgentId as keyof typeof mockAgents].name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-medium">{mockAgents[selectedAgentId as keyof typeof mockAgents].name}</p>
                <p className="text-sm text-gray-600">{mockAgents[selectedAgentId as keyof typeof mockAgents].specialty}</p>
              </div>
            </div>
          ) : (
            <p>{t('agent_selection_no')}</p>
          )}
        </div>
        
        {/* Navigation buttons */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={onBack}
            disabled={isSubmitting}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('back_button')}
          </button>
          
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader className="animate-spin mr-2 h-4 w-4" />
                Processing...
              </>
            ) : (
              t('submit_button')
            )}
          </button>
        </div>
      </div>
    </div>
  );
};