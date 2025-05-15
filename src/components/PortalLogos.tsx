'use client';

import { useTranslations } from 'next-intl';

export const PortalLogos = () => {
  const t = useTranslations('PortalLogos');

  // In a real app, you'd use actual logo images
  // For demonstration purposes, we'll use placeholder colors
  const portalLogos = [
    {
      id: 'realestate',
      name: 'realestate.com.au',
      color: '#e4002b',
      width: 200,
      height: 60,
    },
    {
      id: 'domain',
      name: 'Domain',
      color: '#0f6b51',
      width: 160,
      height: 60,
    },
    {
      id: 'allhomes',
      name: 'Allhomes',
      color: '#002b5c',
      width: 160,
      height: 60,
    },
    {
      id: 'homely',
      name: 'Homely',
      color: '#ff9e1b',
      width: 160,
      height: 60,
    },
    {
      id: 'property',
      name: 'Property.com.au',
      color: '#4a90e2',
      width: 180,
      height: 60,
    },
    {
      id: 'onthehouse',
      name: 'Onthehouse',
      color: '#2b2b2b',
      width: 160,
      height: 60,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
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

        <div className="max-w-5xl mx-auto mb-12">
          <p className="text-center text-gray-600 mb-8">
            {t('portal_description')}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center">
            {portalLogos.map((logo) => (
              <div 
                key={logo.id}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-24 w-full"
                style={{ maxWidth: logo.width }}
              >
                <div 
                  className="font-bold text-xl"
                  style={{ color: logo.color }}
                >
                  {logo.name}
                </div>
                {/* In a real app, replace with:
                <Image
                  src={`/assets/images/portals/${logo.id}.png`}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                /> */}
              </div>
            ))}
          </div>
        </div>

        {/* International Exposure Section */}
        <div className="bg-blue-50 p-8 rounded-xl">
          <h3 className="text-xl font-bold text-center mb-4">{t('international_title')}</h3>
          <p className="text-center text-gray-600 mb-6">
            {t('international_description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['UK', 'USA', 'Singapore', 'Hong Kong', 'New Zealand'].map((country) => (
              <div key={country} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">
                {country}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};