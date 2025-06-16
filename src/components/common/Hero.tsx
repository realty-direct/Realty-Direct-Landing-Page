'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

export const Hero = () => {
  const t = useTranslations('Hero');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would redirect to search results
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-800 to-indigo-900 py-16 sm:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side content */}
          <div className="md:max-w-2xl lg:max-w-xl mb-12 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              Your Property, Your Way - Full Support or Total Independence
            </h1>
            <p className="mx-auto md:mx-0 max-w-3xl text-xl text-blue-100 mb-6">
              {t('slogan')}
            </p>
            <p className="mx-auto md:mx-0 max-w-3xl text-lg text-blue-100 mb-10">
              {t('subtitle')}
            </p>

            {/* Property search */}
            <div className="relative">
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Search properties by location, type, or features..."
                  className="flex-grow px-4 py-3 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
                >
                  Search
                </button>
              </form>
              <p className="mt-2 text-sm text-blue-200">
                Popular: Gold Coast, Brisbane, Residential, Commercial
              </p>
            </div>
          </div>

          {/* Right side image */}
          <div className="md:w-1/2 lg:w-2/5 flex justify-center">
            <div className="relative h-80 w-80 sm:h-96 sm:w-96">
              <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-blue-300 opacity-20 animate-ping"></div>
              <div className="relative w-full h-full">
                <Image
                  src="/assets/images/rd-hero-illustration.svg"
                  alt="Realty Direct Property Solutions"
                  width={400}
                  height={400}
                  className="drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
