'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
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
    <div className="w-full mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8">
        {steps.map((step) => (
          <div 
            key={step.id}
            className={`flex flex-1 items-center gap-4 ${
              currentStep >= step.id ? 'text-blue-600' : 'text-gray-400'
            } cursor-pointer`}
            onClick={() => currentStep > step.id && onStepChange(step.id)}
          >
            <div className={`
              flex items-center justify-center w-8 h-8 rounded-full border-2
              ${currentStep > step.id 
                ? 'bg-blue-600 border-blue-600 text-white' 
                : currentStep === step.id 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-gray-300 text-gray-400'
              }
            `}>
              {currentStep > step.id ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <span>{step.id}</span>
              )}
            </div>
            <div className="flex flex-col">
              <span className={`font-semibold ${
                currentStep >= step.id ? 'text-blue-600' : 'text-gray-400'
              }`}>
                {step.title}
              </span>
              <span className="text-sm hidden md:block">
                {step.description}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="w-full h-1 bg-gray-200 mt-4 mb-8 rounded-full">
        <motion.div 
          className="h-full bg-blue-600 rounded-full"
          initial={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};