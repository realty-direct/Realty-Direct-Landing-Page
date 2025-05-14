'use client';

import { ArrowRight, Phone, Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

export const CallToAction = () => {
  const t = useTranslations('CallToAction');
  const [propertyAddress, setPropertyAddress] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // New validation to ensure address is provided
    if (!propertyAddress.trim()) {
      alert(t('empty_address_warning') || 'Please enter a property address.');
      return;
    }
    // In a real app, you would handle the valuation request here
    alert(`Valuation requested for: ${propertyAddress}`);
    setPropertyAddress('');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - CTA */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('title')}
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                {t('subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/sell-your-property/"
                  className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-md shadow-md bg-yellow-500 hover:bg-yellow-600 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition-colors duration-200"
                >
                  {t('cta_button')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <Link
                  href="tel:1300123456"
                  className="inline-flex items-center justify-center px-6 py-4 border border-white text-base font-medium rounded-md shadow-md bg-transparent hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {t('contact_number')}
                </Link>
              </div>

              <p className="text-blue-100 flex items-center gap-2">
                <span>{t('contact_text')}</span>
                <Link href="tel:1300123456" className="font-bold hover:underline">
                  {t('contact_number')}
                </Link>
              </p>
            </div>

            {/* Right Column - Free Property Valuation */}
            <div className="bg-white text-gray-900 p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-blue-800">
                {t('free_valuation')}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="property-address" className="sr-only">
                    {t('valuation_placeholder')}
                  </label>
                  <div className="relative">
                    <input
                      id="property-address"
                      type="text"
                      value={propertyAddress}
                      onChange={e => setPropertyAddress(e.target.value)}
                      placeholder={t('valuation_placeholder')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  {t('valuation_button')}
                  <Search className="ml-2 h-5 w-5" />
                </button>
              </form>

              <p className="mt-4 text-sm text-gray-500">
                Get an instant property valuation to help you determine the right asking price for your Queensland property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
