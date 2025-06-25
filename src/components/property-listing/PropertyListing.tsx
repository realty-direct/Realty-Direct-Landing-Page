'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { StepByStep } from './StepByStep';
import { PropertyDetailsForm } from './PropertyDetailsForm';
import { AgentSelection } from './AgentSelection';
import { ReviewSubmit } from './ReviewSubmit';

type PropertyDetailsValues = {
  propertyType: string;
  address: string;
  bedrooms?: number;
  bathrooms?: number;
  parking?: number;
  price: string;
  description: string;
  features?: string;
};

export const PropertyListing = () => {
  const t = useTranslations('PropertyListing');
  
  const [currentStep, setCurrentStep] = useState(1);
  const [propertyDetails, setPropertyDetails] = useState<PropertyDetailsValues>({
    propertyType: '',
    address: '',
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    price: '',
    description: '',
    features: '',
  });
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);
  
  // Steps definition
  const steps = [
    {
      id: 1,
      title: t('step_1_title'),
      description: t('step_1_description'),
    },
    {
      id: 2,
      title: t('step_2_title'),
      description: t('step_2_description'),
    },
    {
      id: 3,
      title: t('step_3_title'),
      description: t('step_3_description'),
    },
  ];
  
  // Handle property details form submission
  const handlePropertyDetailsSubmit = (data: PropertyDetailsValues) => {
    setPropertyDetails(data);
    setCurrentStep(2);
  };
  
  // Handle agent selection
  const handleAgentSelect = (agentId: string | null) => {
    setSelectedAgentId(agentId);
  };
  
  // Handle final form submission
  const handleSubmit = () => {
    // In a real application, you would submit the data to the server here
    if (process.env.NODE_ENV === 'development') {
      console.log('Submitting property listing:', {
        propertyDetails,
        selectedAgentId,
      });
    }
  };
  
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-3">
            {t('caption')}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            {t('title')}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Step indicator */}
          <StepByStep
            currentStep={currentStep}
            steps={steps}
            onStepChange={(step) => {
              // Only allow going back or to completed steps
              if (step < currentStep) {
                setCurrentStep(step);
              }
            }}
          />
          
          {/* Step content */}
          <div
            className="shadow-xl rounded-xl overflow-hidden"
          >
            {currentStep === 1 && (
              <PropertyDetailsForm
                initialValues={propertyDetails}
                onSubmit={handlePropertyDetailsSubmit}
              />
            )}
            
            {currentStep === 2 && (
              <AgentSelection
                selectedAgentId={selectedAgentId}
                onSelect={handleAgentSelect}
                onBack={() => setCurrentStep(1)}
                onNext={() => setCurrentStep(3)}
              />
            )}
            
            {currentStep === 3 && (
              <ReviewSubmit
                propertyDetails={propertyDetails}
                selectedAgentId={selectedAgentId}
                onBack={() => setCurrentStep(2)}
                onSubmit={handleSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};