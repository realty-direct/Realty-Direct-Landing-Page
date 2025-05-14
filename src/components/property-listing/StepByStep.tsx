'use client';

import { useTranslations } from 'next-intl';
import { CheckCircle } from 'lucide-react';

type Step = {
  id: number;
  title: string;
  description: string;
};

type StepByStepProps = {
  currentStep: number;
  steps: Step[];
  onStepChange: (step: number) => void;
};

export const StepByStep = ({
  currentStep,
  steps,
  onStepChange,
}: StepByStepProps) => {
  const t = useTranslations('PropertyListing');
  
  return (
    <div className="w-full mb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
        {steps.map((step) => (
          <div 
            key={step.id}
            className={`flex flex-1 items-center gap-4 ${
              currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'
            } cursor-pointer transition-colors duration-200 ease-in-out`}
            onClick={() => currentStep > step.id && onStepChange(step.id)}
            role="button"
            tabIndex={currentStep > step.id ? 0 : -1}
            aria-label={`Go to step ${step.id}: ${step.title}`}
          >
            <div className={`
              flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200
              ${currentStep > step.id 
                ? 'bg-blue-600 border-blue-600 text-white shadow-md' 
                : currentStep === step.id 
                  ? 'border-blue-600 text-blue-600 shadow-sm' 
                  : 'border-gray-300 text-gray-500'
              }
            `}>
              {currentStep > step.id ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <span className="text-lg font-semibold">{step.id}</span>
              )}
            </div>
            <div className="flex flex-col">
              <span className={`font-semibold text-base md:text-lg ${
                currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'
              }`}>
                {step.title}
              </span>
              <span className="text-sm hidden md:block text-gray-500">
                {step.description}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="w-full h-2 bg-gray-200 mt-6 mb-10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
};