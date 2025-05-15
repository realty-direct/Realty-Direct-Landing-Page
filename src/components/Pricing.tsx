'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { CheckCircle, XCircle, HelpCircle, ArrowRight } from 'lucide-react';

export const Pricing = () => {
  const t = useTranslations('Pricing');

  // Define features for each plan
  const features = [
    {
      id: 'portal_listing',
      name: t('feature_portal_listing'),
      fsbo: true,
      standard: true,
      premium: true,
      traditional: true,
    },
    {
      id: 'photos',
      name: t('feature_photos'),
      fsbo: 'optional',
      standard: true,
      premium: true,
      traditional: true,
    },
    {
      id: 'marketing',
      name: t('feature_marketing'),
      fsbo: false,
      standard: true,
      premium: true,
      traditional: true,
    },
    {
      id: 'support',
      name: t('feature_support'),
      fsbo: true,
      standard: true,
      premium: true,
      traditional: true,
    },
    {
      id: 'dashboard',
      name: t('feature_dashboard'),
      fsbo: true,
      standard: true,
      premium: true,
      traditional: false,
    },
    {
      id: 'agent',
      name: t('feature_agent'),
      fsbo: false,
      standard: true,
      premium: true,
      traditional: true,
    },
    {
      id: 'premium',
      name: t('feature_premium'),
      fsbo: false,
      standard: false,
      premium: true,
      traditional: true,
    },
    {
      id: 'social',
      name: t('feature_social'),
      fsbo: false,
      standard: false,
      premium: true,
      traditional: 'optional',
    },
    {
      id: 'virtual',
      name: t('feature_virtual'),
      fsbo: false,
      standard: 'optional',
      premium: true,
      traditional: 'optional',
    },
  ];

  // Helper function to render feature availability
  const renderFeatureAvailability = (available: boolean | string) => {
    if (available === true) {
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    } else if (available === false) {
      return <XCircle className="h-5 w-5 text-gray-300" />;
    } else if (available === 'optional') {
      return <HelpCircle className="h-5 w-5 text-amber-400" />;
    }
    return null;
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
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
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-4 gap-6 md:gap-4 mb-16">
            {/* FSBO Plan */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-lg">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('fsbo_title')}</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-3xl font-bold text-gray-900">{t('fsbo_price')}</span>
                  <span className="text-gray-500 text-sm mb-1">one-time fee</span>
                </div>
                <p className="text-gray-600 text-sm">{t('fsbo_description')}</p>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h4 className="font-medium text-gray-900 mb-4">{t('features_heading')}</h4>
                <ul className="space-y-3 mb-6 flex-grow">
                  {features.map(feature => (
                    <li key={feature.id} className="flex items-center gap-2">
                      {renderFeatureAvailability(feature.fsbo)}
                      <span className="text-sm text-gray-600">{feature.name}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/sell-your-property"
                  className="mt-auto w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  {t('cta_button')}
                </Link>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-lg relative">
              <div className="absolute top-4 right-4">
                <span className="bg-blue-600 text-xs text-white font-bold px-2 py-1 rounded-full">
                  {t('popular_badge')}
                </span>
              </div>
              <div className="p-6 border-b border-gray-100 bg-blue-50">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('standard_title')}</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-3xl font-bold text-gray-900">{t('standard_price')}</span>
                  <span className="text-gray-500 text-sm mb-1">one-time fee</span>
                </div>
                <p className="text-gray-600 text-sm">{t('standard_description')}</p>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h4 className="font-medium text-gray-900 mb-4">{t('features_heading')}</h4>
                <ul className="space-y-3 mb-6 flex-grow">
                  {features.map(feature => (
                    <li key={feature.id} className="flex items-center gap-2">
                      {renderFeatureAvailability(feature.standard)}
                      <span className="text-sm text-gray-600">{feature.name}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/sell-your-property"
                  className="mt-auto w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  {t('cta_button')}
                </Link>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-lg">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('premium_title')}</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-3xl font-bold text-gray-900">{t('premium_price')}</span>
                  <span className="text-gray-500 text-sm mb-1">one-time fee</span>
                </div>
                <p className="text-gray-600 text-sm">{t('premium_description')}</p>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h4 className="font-medium text-gray-900 mb-4">{t('features_heading')}</h4>
                <ul className="space-y-3 mb-6 flex-grow">
                  {features.map(feature => (
                    <li key={feature.id} className="flex items-center gap-2">
                      {renderFeatureAvailability(feature.premium)}
                      <span className="text-sm text-gray-600">{feature.name}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/sell-your-property"
                  className="mt-auto w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  {t('cta_button')}
                </Link>
              </div>
            </div>

            {/* Traditional Agent */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-lg">
              <div className="p-6 border-b border-gray-100 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('traditional_title')}</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-3xl font-bold text-gray-900">{t('traditional_price')}</span>
                  <span className="text-gray-500 text-sm mb-1">commission</span>
                </div>
                <p className="text-gray-600 text-sm">{t('traditional_description')}</p>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h4 className="font-medium text-gray-900 mb-4">{t('features_heading')}</h4>
                <ul className="space-y-3 mb-6 flex-grow">
                  {features.map(feature => (
                    <li key={feature.id} className="flex items-center gap-2">
                      {renderFeatureAvailability(feature.traditional)}
                      <span className="text-sm text-gray-600">{feature.name}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto text-center text-sm text-gray-500 italic">
                  Not available through our platform
                </div>
              </div>
            </div>
          </div>

          {/* Savings Calculator */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-4xl mx-auto mt-12">
            <h3 className="text-2xl font-bold text-center mb-6">Calculate Your Savings</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">With Realty Direct</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Standard Package:</span>
                    <span className="font-medium">{t('standard_price')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Professional Photos:</span>
                    <span className="font-medium">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Portal Listings:</span>
                    <span className="font-medium">Included</span>
                  </div>
                  <div className="border-t border-blue-200 my-2 pt-2 flex justify-between font-bold">
                    <span>Total Cost:</span>
                    <span>{t('standard_price')}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">With Traditional Agent</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Commission (2.5% on $600,000):</span>
                    <span className="font-medium">{t('traditional_price')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Professional Photos:</span>
                    <span className="font-medium">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Portal Listings:</span>
                    <span className="font-medium">Included</span>
                  </div>
                  <div className="border-t border-gray-200 my-2 pt-2 flex justify-between font-bold">
                    <span>Total Cost:</span>
                    <span>{t('traditional_price')}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-green-50 rounded-lg flex justify-between items-center">
              <div>
                <span className="font-medium">Your Potential Savings:</span>
                <span className="text-2xl font-bold ml-2 text-green-600">$13,000+</span>
              </div>
              <Link 
                href="/sell-your-property"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
              >
                Start Saving Now
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/pricing" className="text-blue-600 hover:text-blue-800 text-sm hover:underline">
              {t('compare_link')} <ArrowRight className="inline h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};