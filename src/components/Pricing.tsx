'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { CheckCircle, XCircle, HelpCircle, ArrowRight, Info } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Pricing = () => {
  const t = useTranslations('Pricing');
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [propertyPrice, setPropertyPrice] = useState(600000);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedFeature) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedFeature]);

  // Define features for each plan with full descriptions
  const features = [
    {
      id: 'realestate_premier',
      shortName: 'Realestate.com.au Premium Top Listing',
      fullDescription: 'The best listing available on realestate.com.au. Your property appears at the very top of search results and stays listed until it sells. Properties with this premium listing get 2.6x more buyer enquiries, 2.9x more views, and sell 12 days faster. Your listing automatically returns to the top every 15 days, ensuring continuous visibility to buyers.',
      marketing: true,
      fullService: true,
    },
    {
      id: 'domain_unlimited',
      shortName: 'Domain.com.au Unlimited Listing',
      fullDescription: 'Get your property listed on Domain.com.au with unlimited duration. Your property receives premium placement with #1 ranking in search results and weekly rotation to maintain top visibility. This ensures maximum exposure to Domain\'s extensive audience of property seekers.',
      marketing: true,
      fullService: true,
    },
    {
      id: 'coming_soon',
      shortName: 'Pre-Market "Coming Soon" Campaign',
      fullDescription: 'Build buyer interest before your property officially hits the market with our comprehensive 14-day pre-market campaign. Includes Coming Soon Buyer Notifications, Coming Soon Premiere Listing on realestate.com.au to realestate.com.au\'s most engaged consumers, and exposure on property.com.au. This creates anticipation and can lead to better offers when your property goes live.',
      marketing: true,
      fullService: true,
    },
    {
      id: 'property_com',
      shortName: 'Property.com.au Listing',
      fullDescription: 'Get your property listed on property.com.au, Australia\'s 3rd largest real estate platform. This additional exposure increases your chances of finding the right buyer by reaching a different audience segment.',
      marketing: true,
      fullService: true,
    },
    {
      id: 'targeted_buyer_email',
      shortName: 'Targeted Buyer Email Campaign',
      fullDescription: 'Target buyers in their inbox as soon as they show intent. An automated email featuring your property is sent directly to interested buyers on day 7 of your campaign. This strategic timing captures buyer attention when they\'re most likely to take action, increasing enquiry rates.',
      marketing: true,
      fullService: true,
    },
    {
      id: 'listing_optimization',
      shortName: 'Listing Optimization & Refresh',
      fullDescription: 'Your listing receives a strategic "bump" 7 days into your campaign to refresh its position. Combined with automatic rotation to the top of search results every 15 days on realestate.com.au, this ensures consistent visibility throughout your selling period.',
      marketing: true,
      fullService: true,
    },
    {
      id: 'social_media',
      shortName: '5-Day Social Media Campaign',
      fullDescription: 'Professional social media marketing campaign across Instagram and Facebook for 5 days. Your property is promoted to targeted audiences based on demographics and interests, expanding reach beyond traditional property portals.',
      marketing: true,
      fullService: true,
    },
    {
      id: 'audience_maximiser',
      shortName: 'Extended Audience Targeting',
      fullDescription: 'Optional add-on that targets Australia\'s largest, most engaged property audience beyond their search on realestate.com.au. Uses sophisticated retargeting to show your property to potential buyers across the web, increasing your chances of finding the right buyer sooner.',
      marketing: 'optional',
      fullService: 'optional',
    },
    {
      id: 'visual_marketing',
      shortName: 'Professional Visual Marketing',
      fullDescription: 'Engage potential buyers with comprehensive visual content including professional photography, detailed floor plans, and immersive property walkthrough videos. High-quality visuals are proven to increase enquiries and help buyers make faster decisions.',
      marketing: true,
      fullService: true,
    },
    {
      id: 'licensed_agent',
      shortName: 'Dedicated Online Agent',
      fullDescription: 'Get full support from a dedicated online real estate agent who handles all the normal functions of a traditional agent - negotiations, contracts, and paperwork - but works remotely. They do not attend physical inspections, keeping costs down while providing expert guidance throughout the sales process.',
      marketing: false,
      fullService: true,
    },
  ];

  // Helper function to render feature availability
  const renderFeatureAvailability = (available: boolean | string) => {
    if (available === true) {
      return <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />;
    } else if (available === false) {
      return <XCircle className="h-5 w-5 text-gray-300 flex-shrink-0" />;
    } else if (available === 'optional') {
      return <HelpCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />;
    }
    return null;
  };

  // Feature modal component
  const FeatureModal = () => {
    if (!selectedFeature) return null;
    
    const feature = features.find(f => f.id === selectedFeature);
    if (!feature) return null;

    return (
      <>
        {/* Subtle overlay */}
        <div 
          className="fixed inset-0 bg-black/5 z-40" 
          onClick={() => setSelectedFeature(null)}
        />
        
        {/* Modal container */}
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            <div>
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  {feature.shortName}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {feature.fullDescription}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                onClick={() => setSelectedFeature(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
    );
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
          {/* Key Benefits Section */}
          <div className="mb-12 bg-blue-50 rounded-xl p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6">What Makes Our Listings Premium?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2.6x</span>
                </div>
                <h4 className="font-semibold mb-2">More Email Enquiries</h4>
                <p className="text-sm text-gray-600">Compared to standard listings on realestate.com.au</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2.9x</span>
                </div>
                <h4 className="font-semibold mb-2">More Views</h4>
                <p className="text-sm text-gray-600">Your property gets seen by more potential buyers</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">12</span>
                </div>
                <h4 className="font-semibold mb-2">Days Faster Sale</h4>
                <p className="text-sm text-gray-600">Sells 12 days faster than the next best listing tier</p>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {/* Complete Marketing Package */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col transition-transform duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl">
              <div className="p-6 border-b border-gray-100 bg-blue-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Marketing Package</h3>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-3xl font-bold text-gray-900">$2,495</span>
                  <span className="text-gray-500 text-sm mb-1">GST Inclusive</span>
                </div>
                <p className="text-gray-600">Premium exposure on all major portals with professional marketing</p>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h4 className="font-medium text-gray-900 mb-4">All Premium Features Included:</h4>
                <ul className="space-y-3 mb-6 flex-grow">
                  {features.map(feature => (
                    <li key={feature.id} className="flex items-start gap-2">
                      {renderFeatureAvailability(feature.marketing)}
                      <button
                        onClick={() => setSelectedFeature(feature.id)}
                        className="text-sm text-gray-700 hover:text-blue-600 text-left flex items-center gap-1 group"
                      >
                        <span>{feature.shortName}</span>
                        <Info className="h-3 w-3 text-gray-400 group-hover:text-blue-600" />
                      </button>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/sell-your-property"
                  className="mt-auto w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  Get Started Today
                </Link>
              </div>
            </div>

            {/* Full Service Package */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col transition-transform duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl relative">
              <div className="absolute top-4 right-4">
                <span className="bg-green-600 text-xs text-white font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
              <div className="p-6 border-b border-gray-100 bg-green-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Full Service Package</h3>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-3xl font-bold text-gray-900">0.7%</span>
                  <span className="text-gray-500 text-sm mb-1">+ Marketing Package</span>
                </div>
                <p className="text-gray-600">Commission on sale price + $2,495 marketing (GST inclusive)</p>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h4 className="font-medium text-gray-900 mb-4">Includes:</h4>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Everything in Complete Marketing Package</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <button
                      onClick={() => setSelectedFeature('licensed_agent')}
                      className="text-sm font-semibold text-green-700 hover:text-green-800 text-left flex items-center gap-1 group"
                    >
                      <span>Dedicated Online Agent</span>
                      <Info className="h-3 w-3 text-gray-400 group-hover:text-green-700" />
                    </button>
                  </li>
                </ul>
                <Link
                  href="/sell-your-property"
                  className="mt-auto w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                >
                  Choose Full Service
                </Link>
              </div>
            </div>
          </div>

          {/* Savings Calculator */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-6xl mx-auto mt-12">
            <h3 className="text-2xl font-bold text-center mb-6">Calculate Your Savings</h3>
            
            {/* Property Price Slider */}
            <div className="mb-8 max-w-2xl mx-auto">
              <label htmlFor="property-price" className="block text-sm font-medium text-gray-700 mb-2">
                Your Property Value: <span className="text-2xl font-bold text-blue-600">${propertyPrice.toLocaleString()}</span>
              </label>
              <input
                type="range"
                id="property-price"
                min="200000"
                max="3000000"
                step="50000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((propertyPrice - 200000) / (3000000 - 200000)) * 100}%, #e5e7eb ${((propertyPrice - 200000) / (3000000 - 200000)) * 100}%, #e5e7eb 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>$200k</span>
                <span>$3M</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Complete Marketing Package */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-lg font-semibold mb-1">Complete Marketing Package</h4>
                <p className="text-sm text-gray-600 mb-4">Self-managed with full marketing</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Marketing Package:</span>
                    <span className="font-medium">$2,495</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Professional Photos:</span>
                    <span className="font-medium text-green-600">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">All Portal Listings:</span>
                    <span className="font-medium text-green-600">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Social Media Campaign:</span>
                    <span className="font-medium text-green-600">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Agent Support:</span>
                    <span className="font-medium text-gray-500">Not included</span>
                  </div>
                  <div className="border-t border-blue-200 my-3 pt-3">
                    <div className="flex justify-between items-end">
                      <span className="font-semibold">Total Cost:</span>
                      <span className="text-2xl font-bold text-blue-600">$2,495</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Full Service Package */}
              <div className="bg-green-50 p-6 rounded-lg border border-green-200 relative">
                <div className="absolute -top-3 -right-3">
                  <span className="bg-green-600 text-xs text-white font-bold px-3 py-1 rounded-full">RECOMMENDED</span>
                </div>
                <h4 className="text-lg font-semibold mb-1">Full Service Package</h4>
                <p className="text-sm text-gray-600 mb-4">Complete agent support</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Commission (0.7%):</span>
                    <span className="font-medium">${(propertyPrice * 0.007).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Marketing Package:</span>
                    <span className="font-medium">$2,495</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Online Agent Support:</span>
                    <span className="font-medium text-green-600">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Professional Photos:</span>
                    <span className="font-medium text-green-600">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">All Portal Listings:</span>
                    <span className="font-medium text-green-600">Included</span>
                  </div>
                  <div className="border-t border-green-200 my-3 pt-3">
                    <div className="flex justify-between items-end">
                      <span className="font-semibold">Total Cost:</span>
                      <span className="text-2xl font-bold text-green-600">${((propertyPrice * 0.007) + 2495).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Traditional Agent */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold mb-1">Traditional Agent</h4>
                <p className="text-sm text-gray-600 mb-4">Standard commission model</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Commission (2.5%):</span>
                    <span className="font-medium">${(propertyPrice * 0.025).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Marketing Costs:</span>
                    <span className="font-medium">$2,000-3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Professional Photos:</span>
                    <span className="font-medium text-amber-600">Often extra</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Portal Listings:</span>
                    <span className="font-medium text-green-600">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Social Media:</span>
                    <span className="font-medium text-amber-600">Varies</span>
                  </div>
                  <div className="border-t border-gray-200 my-3 pt-3">
                    <div className="flex justify-between items-end">
                      <span className="font-semibold">Total Cost:</span>
                      <span className="text-2xl font-bold text-gray-700">${((propertyPrice * 0.025) + 2500).toLocaleString()}+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Savings Summary */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h5 className="font-semibold mb-3">Complete Marketing Package Savings</h5>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Traditional agent cost:</span>
                    <span className="font-medium">${((propertyPrice * 0.025) + 2500).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Marketing package cost:</span>
                    <span className="font-medium">$2,495</span>
                  </div>
                  <div className="border-t border-blue-200 my-2 pt-2 flex justify-between">
                    <span className="font-semibold">You save:</span>
                    <span className="text-xl font-bold text-blue-600">${((propertyPrice * 0.025) + 2500 - 2495).toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h5 className="font-semibold mb-3">Full Service Package Savings</h5>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Traditional agent cost:</span>
                    <span className="font-medium">${((propertyPrice * 0.025) + 2500).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Full service cost:</span>
                    <span className="font-medium">${((propertyPrice * 0.007) + 2495).toLocaleString()}</span>
                  </div>
                  <div className="border-t border-green-200 my-2 pt-2 flex justify-between">
                    <span className="font-semibold">You save:</span>
                    <span className="text-xl font-bold text-green-600">${((propertyPrice * 0.025) + 2500 - ((propertyPrice * 0.007) + 2495)).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link 
                href="/sell-your-property"
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
              >
                Start Saving Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Important Note */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 max-w-4xl mx-auto mt-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Important:</strong> While we offer a more cost-effective solution, we never compromise on marketing quality. 
                  Both packages include premium listings on all major portals to ensure your property gets maximum exposure. 
                  Your property's marketing shouldn't be compromised just to save money.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8 bg-gray-50 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Not Sure Which Package?</h3>
            <p className="text-gray-600 mb-6">
              Speak with our property experts to discuss the best option for your property sale.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Schedule a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Feature Details Modal */}
      <FeatureModal />
    </section>
  );
};