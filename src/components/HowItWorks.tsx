'use client';

import { useTranslations } from 'next-intl';
import { ClipboardList, Users, Globe, BarChart4, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const HowItWorks = () => {
  const t = useTranslations('HowItWorks');

  const steps = [
    {
      id: 1,
      title: t('step_1_title'),
      description: t('step_1_description'),
      icon: ClipboardList,
    },
    {
      id: 2,
      title: t('step_2_title'),
      description: t('step_2_description'),
      icon: Users,
    },
    {
      id: 3,
      title: t('step_3_title'),
      description: t('step_3_description'),
      icon: Globe,
    },
    {
      id: 4,
      title: t('step_4_title'),
      description: t('step_4_description'),
      icon: BarChart4,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-3">
            {t('caption')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            {t('title')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Step Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100 top-0 z-0"></div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              {steps.map((step, index) => (
                <div 
                  key={step.id} 
                  className={`relative z-10 flex ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-md relative">
                    {/* Number Circle - Visible on Mobile Only */}
                    <div className="md:hidden absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                      {step.id}
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex flex-col md:flex-row items-start gap-4">
                      {/* Icon Circle */}
                      <div className="hidden md:flex w-16 h-16 bg-blue-50 rounded-full items-center justify-center text-blue-600 flex-shrink-0">
                        <step.icon size={32} />
                      </div>
                      
                      <div>
                        <div className="flex items-center">
                          {/* Number for Desktop */}
                          <div className="hidden md:inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold mr-2">
                            {step.id}
                          </div>
                          <h3 className="font-bold text-xl text-gray-900">{step.title}</h3>
                        </div>
                        <p className="mt-2 text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Arrow Connector (Desktop Only) */}
                    <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-8 h-8 ${
                      index % 2 === 0 
                        ? 'right-0 translate-x-1/2 rotate-45' 
                        : 'left-0 -translate-x-1/2 rotate-45'
                    } bg-white border-t border-r border-gray-100 ${
                      index % 2 === 0 ? 'border-t border-r' : 'border-b border-l'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-16">
            <Link
              href="/sell-your-property"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              {t('cta_button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              <Link href="/services" className="text-blue-600 hover:text-blue-800 hover:underline">
                {t('learn_more')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};