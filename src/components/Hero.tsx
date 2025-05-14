'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const Hero = () => {
  const t = useTranslations('Hero');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send this to an API endpoint
    alert(`Thank you! We'll keep you updated at ${email}`);
    setEmail('');
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-800 to-indigo-900 py-16 sm:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
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
              {t('title')}
            </h1>
            <p className="mx-auto md:mx-0 max-w-3xl text-xl text-blue-100 mb-10">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50 transition duration-150"
              >
                {t('contact_us')}
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150"
              >
                {t('explore_services')}
              </Link>
            </div>
            
            {/* Newsletter signup */}
            <div className="mt-12">
              <p className="text-base text-blue-100 mb-4">{t('newsletter_prompt')}</p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder={t('email_placeholder')}
                  className="px-4 py-3 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
                >
                  {t('subscribe')}
                </button>
              </form>
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
                  alt="R&D Innovation"
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