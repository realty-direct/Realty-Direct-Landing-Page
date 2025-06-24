import { ContactSection } from '@/components/prestige/ContactSection';
import { Typography } from '@mui/material';
import { Clock, Mail, Phone } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Realty Direct',
  description: 'Get in touch with Realty Direct for all your Queensland property needs. Contact our real estate experts for property valuations, sales support, and agent services.',
  keywords: 'contact realty direct, queensland real estate contact, property sale support, real estate help brisbane',
  alternates: {
    canonical: 'https://realtydirect.com.au/contact',
  },
  openGraph: {
    title: 'Contact Us | Realty Direct',
    description: 'Contact Realty Direct for property valuations, sales support, and expert real estate advice in Queensland.',
    url: 'https://realtydirect.com.au/contact',
    siteName: 'Realty Direct',
    images: [
      {
        url: 'https://realtydirect.com.au/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Realty Direct',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Realty Direct',
    description: 'Contact Realty Direct for property valuations and real estate support in Queensland.',
    images: ['https://realtydirect.com.au/og-contact.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const contactInfo = {
  email: 'admin@realtydirect.com.au',
  phone: '+61 7 3333 0123',
  hours: 'Mon-Fri 9AM-6PM, Sat 9AM-4PM',
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Typography
              variant="h2"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
            >
              Contact Us
            </Typography>
            <div className="flex justify-center">
              <Typography
                variant="body1"
                className="text-base md:text-lg text-slate-600 max-w-2xl mb-8 font-normal leading-relaxed text-center"
              >
                Ready to experience Queensland's premier real estate service? Get in touch with our expert team today.
              </Typography>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <Phone className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-slate-600 hover:text-green-500 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <Mail className="w-8 h-8 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-slate-600 hover:text-purple-500 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <Clock className="w-8 h-8 text-amber-500 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Business Hours</h3>
                <p className="text-slate-600">
                  {contactInfo.hours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-primary-900">
        <ContactSection />
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            'name': 'Contact Realty Direct',
            'description': 'Contact Realty Direct for property valuations, sales support, and expert real estate advice in Queensland.',
            'url': 'https://realtydirect.com.au/contact',
            'mainEntity': {
              '@type': 'RealEstateAgent',
              'name': 'Realty Direct',
              'telephone': contactInfo.phone,
              'email': contactInfo.email,
              'address': {
                '@type': 'PostalAddress',
                'addressCountry': 'AU',
                'addressRegion': 'Queensland',
              },
              'openingHours': 'Mo-Fr 09:00-18:00,Sa 09:00-16:00',
            },
          }),
        }}
      />
    </div>
  );
}
