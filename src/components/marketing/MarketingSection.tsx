'use client';

import { ArrowRight, MapPin, MonitorSmartphone, Users } from 'lucide-react';
import Image from 'next/image';
import { getAssetPath } from '@/utils/Helpers';
import { useLocale } from 'next-intl';
import { getLocalizedHref } from '@/components/common/LocaleLink';

export const MarketingSection = () => {
  const locale = useLocale();
  
  return (
    <section className="pt-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center">
            A Fresh Approach to Queensland Real Estate
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-10 font-normal max-w-3xl text-center leading-relaxed">
            Realty Direct is an independent agency built on direct relationships, transparent communication, and genuine service. Experience a new standard of professionalism and results—without the legacy hype.
          </p>
        </div>

        {/* Main Card */}
        <div className="relative max-w-6xl mx-auto rounded-3xl shadow-2xl border-0 bg-white/90 backdrop-blur-lg">
          <div className="p-8 md:p-14 lg:p-20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-16">
              {/* Left: Value Proposition */}
              <div className="flex-1 min-w-0 md:pr-8">
                <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-800 mb-6">
                  Your Queensland Real Estate Journey Starts Here
                </h3>
                <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                  Our dedicated team of local professionals combines deep market knowledge with a tailored, client-first approach. From Brisbane's vibrant city life to the Gold Coast's iconic beaches, we deliver results with integrity and innovation.
                </p>
                <ul className="mb-10 space-y-2 text-base text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-700" />
                    Personalised, transparent service
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-700" />
                    Advanced marketing & technology
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-700" />
                    Results-focused for Queensland families
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={getLocalizedHref('/contact', locale)}
                    className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-full text-white bg-gradient-to-r from-primary-900 to-primary-700 hover:from-primary-800 hover:to-primary-600 shadow-lg hover:shadow-xl transition-all duration-200 focus:ring-4 focus:ring-primary-200 transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Book an Appraisal
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href={getLocalizedHref('/about', locale)}
                    className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-full text-primary-700 bg-transparent border-2 border-primary-700 hover:bg-primary-50 shadow-lg hover:shadow-xl transition-all duration-200 focus:ring-4 focus:ring-primary-200 transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              {/* Right: Visual */}
              <div className="flex-1 flex items-center justify-center min-w-0 md:pl-8">
                <div className="relative w-full max-w-lg aspect-[3/2] rounded-2xl overflow-hidden shadow-xl border border-accent-600 bg-accent-500/10">
                  <Image
                    src={getAssetPath("/images/home.jpg")}
                    alt="Luxury Queensland Property"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
            {/* Motto */}
            <div className="mt-14 pt-8 border-t border-accent-200 text-center">
              <p className="text-lg md:text-xl text-slate-600 mb-10 font-normal italic">
                "Direct communication, exceptional results"
              </p>
              <p className="text-slate-600 mt-2 text-sm">
                This is what makes us Naturally Direct
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center p-8 shadow-md rounded-2xl border-0 bg-white/95">
            <div className="mb-4">
              <MapPin className="w-10 h-10 text-primary-700" />
            </div>
            <h3 className="text-lg md:text-xl text-slate-600 mb-10 font-normal tracking-wide">
              Local Expertise
            </h3>
            <p className="text-slate-600 text-base">
              Deep Queensland market knowledge and insight
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-8 shadow-md rounded-2xl border-0 bg-white/95">
            <div className="mb-4">
              <Users className="w-10 h-10 text-primary-700" />
            </div>
            <h3 className="text-lg md:text-xl text-slate-600 mb-10 font-normal tracking-wide">
              Strategic Reach
            </h3>
            <p className="text-slate-600 text-base">
              Connected across Brisbane, Gold Coast, and beyond
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-8 shadow-md rounded-2xl border-0 bg-white/95">
            <div className="mb-4">
              <MonitorSmartphone className="w-10 h-10 text-primary-700" />
            </div>
            <h3 className="text-lg md:text-xl text-slate-600 mb-10 font-normal tracking-wide">
              Tech-Enabled
            </h3>
            <p className="text-slate-600 text-base">
              Best-in-class marketing and digital tools
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};