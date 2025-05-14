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
      name: "Dr. Sarah Chen",
      role: "Chief Research Officer",
      bio: "Ph.D. in Computer Science with 15+ years of experience leading R&D teams in tech innovation.",
      imageUrl: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Engineering",
      bio: "Expert in translating research into scalable solutions with a background in systems architecture.",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Dr. James Wilson",
      role: "Principal Scientist",
      bio: "Specializes in applied machine learning with publications in top academic journals.",
      imageUrl: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      name: "Olivia Martinez",
      role: "Innovation Strategist",
      bio: "Helps clients identify opportunities and create roadmaps for R&D initiatives.",
      imageUrl: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Company Overview Section */}
      <section className="mb-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About R&D Solutions</h1>
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <p className="text-lg text-gray-700 mb-6">{t('about_paragraph')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To accelerate innovation by providing organizations with the expert guidance, 
                technical capabilities, and strategic insights needed to transform ideas into reality.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                A world where technology barriers don't limit great ideas, and where research
                and development drive sustainable growth and positive change.
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
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-700">
              We push boundaries and explore new frontiers to create groundbreaking solutions.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
            <p className="text-gray-700">
              We maintain the highest standards in our research, development, and client service.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
            <p className="text-gray-700">
              We believe the best results come from working closely with our clients and partners.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};