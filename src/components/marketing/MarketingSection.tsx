'use client';

import { Button, Card, CardContent, Typography } from '@mui/material';
import { ArrowRight, MapPin, MonitorSmartphone, Users } from 'lucide-react';
import Image from 'next/image';

export const MarketingSection = () => {
  return (
    <section className="pt-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center">
          <Typography
            variant="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center"
          >
            A Fresh Approach to Queensland Real Estate
          </Typography>
          <Typography
            variant="h6"
            className="text-lg md:text-xl text-slate-600 mb-10 font-normal max-w-3xl text-center"
            style={{ lineHeight: 1.7 }}
          >
            Realty Direct is an independent agency built on direct relationships, transparent communication, and genuine service. Experience a new standard of professionalism and results—without the legacy hype.
          </Typography>
        </div>

        {/* Main Card */}
        <Card
          className="relative max-w-6xl mx-auto rounded-3xl shadow-2xl border-0 bg-white/90 backdrop-blur-lg"
          elevation={0}
        >
          <CardContent className="p-8 md:p-14 lg:p-20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-16">
              {/* Left: Value Proposition */}
              <div className="flex-1 min-w-0 md:pr-8">
                <Typography
                  variant="h4"
                  className="font-display text-3xl md:text-4xl font-bold text-primary-800 mb-6"
                >
                  Your Queensland Real Estate Journey Starts Here
                </Typography>
                <Typography
                  variant="body1"
                  className="text-slate-700 text-lg mb-8"
                  style={{ lineHeight: 1.7 }}
                >
                  Our dedicated team of local professionals combines deep market knowledge with a tailored, client-first approach. From Brisbane’s vibrant city life to the Gold Coast’s iconic beaches, we deliver results with integrity and innovation.
                </Typography>
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
                  <Button
                    variant="contained"
                    size="large"
                    href="/contact"
                    className="rounded-full font-semibold shadow-md px-8 py-3"
                    style={{
                      background: 'linear-gradient(90deg, var(--primary-900) 0%, var(--primary-700) 100%)',
                      color: '#fff',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                    }}
                    endIcon={<ArrowRight />}
                  >
                    Book an Appraisal
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="/about"
                    className="rounded-full font-semibold border border-primary-700 px-8 py-3"
                    style={{
                      color: 'var(--primary-700)',
                      borderColor: 'var(--primary-700)',
                      background: 'transparent',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              {/* Right: Visual */}
              <div className="flex-1 flex items-center justify-center min-w-0 md:pl-8">
                <div className="relative w-full max-w-lg aspect-[3/2] rounded-2xl overflow-hidden shadow-xl border border-accent-600 bg-accent-500/10">
                  <Image
                    src="/assets/images/home.jpg"
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
              <Typography
                variant="h6"
                className="text-lg md:text-xl text-slate-600 mb-10 font-normal italic"
              >
                "Direct communication, exceptional results"
              </Typography>
              <Typography
                variant="body2"
                className="text-slate-600 mt-2"
              >
                This is what makes us Naturally Direct
              </Typography>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
          <Card className="flex flex-col items-center text-center p-8 shadow-md rounded-2xl border-0 bg-white/95" elevation={0}>
            <div className="mb-4">
              <MapPin className="w-10 h-10 text-primary-700" />
            </div>
            <Typography variant="h6" className="text-lg md:text-xl text-slate-600 mb-10 font-normal tracking-wide">
              Local Expertise
            </Typography>
            <Typography variant="body2" className="text-slate-600 text-base">
              Deep Queensland market knowledge and insight
            </Typography>
          </Card>
          <Card className="flex flex-col items-center text-center p-8 shadow-md rounded-2xl border-0 bg-white/95" elevation={0}>
            <div className="mb-4">
              <Users className="w-10 h-10 text-primary-700" />
            </div>
            <Typography variant="h6" className="text-lg md:text-xl text-slate-600 mb-10 font-normal tracking-wide">
              Strategic Reach
            </Typography>
            <Typography variant="body2" className="text-slate-600 text-base">
              Connected across Brisbane, Gold Coast, and beyond
            </Typography>
          </Card>
          <Card className="flex flex-col items-center text-center p-8 shadow-md rounded-2xl border-0 bg-white/95" elevation={0}>
            <div className="mb-4">
              <MonitorSmartphone className="w-10 h-10 text-primary-700" />
            </div>
            <Typography variant="h6" className="text-lg md:text-xl text-slate-600 mb-10 font-normal tracking-wide">
              Tech-Enabled
            </Typography>
            <Typography variant="body2" className="text-slate-600 text-base">
              Best-in-class marketing and digital tools
            </Typography>
          </Card>
        </div>
      </div>
    </section>
  );
};
