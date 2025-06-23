import { Metadata } from 'next';
import { ContactSection } from '@/components/prestige/ContactSection';
import { Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Realty Direct Queensland',
  description: 'Get in touch with Realty Direct for all your Queensland property needs. Contact our real estate experts for property valuations, sales support, and agent services.',
  keywords: 'contact realty direct, queensland real estate contact, property sale support, real estate help brisbane',
  alternates: {
    canonical: 'https://realtydirect.com.au/contact',
  },
  openGraph: {
    title: 'Contact Us | Realty Direct Queensland',
    description: 'Contact Realty Direct for property valuations, sales support, and expert real estate advice in Queensland.',
    url: 'https://realtydirect.com.au/contact',
    siteName: 'Realty Direct',
    images: [
      {
        url: 'https://realtydirect.com.au/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Realty Direct Queensland',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Realty Direct Queensland',
    description: 'Contact Realty Direct for property valuations and real estate support in Queensland.',
    images: ['https://realtydirect.com.au/og-contact.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const contactInfo = {
  email: 'admin@realtydirect.com.au',
  phone: '+61 7 3333 0123',
  hours: 'Mon-Fri 9AM-6PM, Sat 9AM-4PM'
};

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
          Ready to experience Queensland's premier real estate service? Get in touch with our expert team today.
        </p>

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

      {/* Contact Form Section */}
      <ContactSection />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            'name': 'Contact Realty Direct Queensland',
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
                'addressRegion': 'Queensland'
              },
              'openingHours': 'Mo-Fr 09:00-18:00,Sa 09:00-16:00'
            }
          })
        }}
      />
    </div>
  );
}