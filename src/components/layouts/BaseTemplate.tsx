'use client';

import { AppConfig } from '@/utils/AppConfig';
import { getAssetPath } from '@/utils/Helpers';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getLocalizedHref } from '@/components/common/LocaleLink';

export const BaseTemplate = (props: {
  navItems?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen text-gray-800 antialiased">
      <header className="sticky top-0 z-30 bg-white shadow-md">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Main navigation bar */}
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href={`/${locale}/`} className="flex items-center gap-1 sm:gap-2">
                <Image
                  src={getAssetPath("/images/logo.svg")}
                  alt="Realty Direct Logo"
                  width={40}
                  height={40}
                  className="h-8 sm:h-10 w-auto"
                  priority
                />
                <span className="font-bold text-lg sm:text-2xl text-blue-700 tracking-tight">{AppConfig.name}</span>
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
              {props.navItems}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-1.5 sm:p-2 rounded-md text-gray-500 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100">
              <div className="px-3 pt-3 pb-4">
                {props.navItems}
              </div>
            </div>
          )}
        </div>
      </header>

      <main>
        {props.children}
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{AppConfig.name}</h3>
              <p className="text-gray-300">{AppConfig.description}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('quick_links')}</h3>
              <ul className="space-y-2">
                <li><Link href={getLocalizedHref('/buying', locale)} className="text-gray-300 hover:text-white">Buying</Link></li>
                <li><Link href={getLocalizedHref('/selling', locale)} className="text-gray-300 hover:text-white">Selling</Link></li>
                <li><Link href={getLocalizedHref('/renting', locale)} className="text-gray-300 hover:text-white">Renting</Link></li>
                <li><Link href={getLocalizedHref('/about', locale)} className="text-gray-300 hover:text-white">About</Link></li>
                <li><Link href={getLocalizedHref('/contact', locale)} className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('contact_us')}</h3>
              <p className="text-gray-300">admin@realtydirect.com.au</p>

            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            {`© ${new Date().getFullYear()} ${AppConfig.name}. All rights reserved.`}
          </div>
        </div>
      </footer>
    </div>
  );
};
