'use client';

import { AppConfig } from '@/utils/AppConfig';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

export const BaseTemplate = (props: {
  navItems?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-gray-800 antialiased">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="font-bold text-xl text-blue-600">
                {AppConfig.name}
              </Link>
            </div>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-8">
              {props.navItems}
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon for menu */}
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile menu, show/hide based on menu state */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
                <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('contact_us')}</h3>
              <p className="text-gray-300">contact@rdsolutions.com</p>
              <p className="text-gray-300">123 Innovation Street</p>
              <p className="text-gray-300">Tech City, TC 12345</p>
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
