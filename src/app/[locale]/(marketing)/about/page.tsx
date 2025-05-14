import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

type IAboutProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IAboutProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function About(props: IAboutProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'About',
  });

  const teamMembers = [
    {
      name: "Sarah Thompson",
      role: "Founder & CEO",
      bio: "Former top-performing real estate agent with 15+ years experience in the Queensland property market. Founded Realty Direct to revolutionize the industry.",
      imageUrl: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Agent Relations",
      bio: "Experienced real estate broker specializing in supporting independent agents with the tools and resources they need to succeed.",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "James Wilson",
      role: "Property Marketing Director",
      bio: "Digital marketing expert with extensive experience creating standout property campaigns across realestate.com.au and Domain.",
      imageUrl: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      name: "Olivia Chen",
      role: "FSBO Specialist",
      bio: "Dedicated to helping property owners successfully sell their homes directly, with expertise in pricing strategy and negotiation.",
      imageUrl: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Company Overview Section */}
      <section className="mb-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About Realty Direct</h1>
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <p className="text-lg text-gray-700 mb-6">{t('about_paragraph')}</p>
          <p className="text-lg text-blue-700 font-medium mb-6 italic border-l-4 border-blue-500 pl-4 py-1">
            "We put you in control of your property sale — full support if you want it, full independence if you don't — all for less."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To empower property sellers with flexible solutions that put them in control of their real estate journey,
                providing the tools and support needed to maximize value with minimal costs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                A Queensland real estate market where property owners and independent agents have the freedom to 
                transact efficiently without unnecessary costs or constraints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
              <div className="h-48 overflow-hidden">
                <Image 
                  src={member.imageUrl} 
                  alt={member.name} 
                  width={300} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexibility</h3>
            <p className="text-gray-700">
              We believe in providing options to fit different needs, whether you want full support or complete independence.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
            <p className="text-gray-700">
              We maintain clear, upfront pricing with no hidden fees or commissions, so you always know what you're paying for.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Empowerment</h3>
            <p className="text-gray-700">
              We put property sellers in control of their transaction while providing the tools and support they need to succeed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};