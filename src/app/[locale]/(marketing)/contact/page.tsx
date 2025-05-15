import { Metadata } from 'next';

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

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Ready to sell your Queensland property? Get in touch with our team for a free valuation or to discuss which selling option is right for you.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Brisbane Office */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Brisbane Office</h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <svg className="h-5 w-5 mr-3 mt-0.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-gray-700">123 Eagle Street</p>
                <p className="text-gray-700">Brisbane QLD 4000</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <svg className="h-5 w-5 mr-3 mt-0.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="text-gray-700">(07) 3123 4567</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <svg className="h-5 w-5 mr-3 mt-0.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-gray-700">brisbane@realtydirect.com.au</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
            <p className="text-sm text-gray-600">Monday - Friday: 8:30 AM - 5:30 PM</p>
            <p className="text-sm text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
            <p className="text-sm text-gray-600">Sunday: By appointment</p>
          </div>
        </div>

        {/* Gold Coast Office */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Gold Coast Office</h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <svg className="h-5 w-5 mr-3 mt-0.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-gray-700">2 Corporate Court</p>
                <p className="text-gray-700">Bundall QLD 4217</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <svg className="h-5 w-5 mr-3 mt-0.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="text-gray-700">(07) 5555 6789</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <svg className="h-5 w-5 mr-3 mt-0.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-gray-700">goldcoast@realtydirect.com.au</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
            <p className="text-sm text-gray-600">Monday - Friday: 8:30 AM - 5:30 PM</p>
            <p className="text-sm text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
            <p className="text-sm text-gray-600">Sunday: By appointment</p>
          </div>
        </div>

        {/* Support */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <svg className="h-5 w-5 mr-3 mt-0.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="text-gray-700">1300 REALTY</p>
                <p className="text-sm text-gray-600">(1300 732 589)</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <svg className="h-5 w-5 mr-3 mt-0.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-gray-700">support@realtydirect.com.au</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <svg className="h-5 w-5 mr-3 mt-0.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <div>
                <p className="text-gray-700">Live Chat Available</p>
                <p className="text-sm text-gray-600">Mon-Fri 8AM-8PM</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Emergency Support</h3>
            <p className="text-sm text-gray-600">For urgent matters after hours, please call our 24/7 helpline.</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Send Us a Message</h2>
        <form className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-700 mb-2">
              Property Address (if applicable)
            </label>
            <input
              type="text"
              id="propertyAddress"
              name="propertyAddress"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="123 Main St, Brisbane QLD 4000"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Interested In
            </label>
            <select
              id="service"
              name="service"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select a service</option>
              <option value="diy">Do It Yourself (FSBO)</option>
              <option value="assisted">Assisted For Sale By Owner</option>
              <option value="hybrid">Hybrid Solution</option>
              <option value="agent">Professional Agent Listing</option>
              <option value="valuation">Property Valuation</option>
              <option value="other">Other Inquiry</option>
            </select>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            ></textarea>
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-150"
            >
              Send Message
            </button>
          </div>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            By submitting this form, you agree to our privacy policy and consent to being contacted
            regarding your inquiry. We respect your privacy and will never share your information.
          </p>
        </form>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Prefer to Talk?</h2>
        <p className="text-gray-700 mb-6">
          Our real estate experts are available to discuss your property needs and answer any questions.
        </p>
        <a
          href="tel:1300732589"
          className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-150"
        >
          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call 1300 REALTY
        </a>
      </div>
    </div>
  );
}