'use client';

import { useTranslations } from 'next-intl';
import { Home, DollarSign, Clock, Award } from 'lucide-react';

export const ValueStats = () => {
  const t = useTranslations('ValueStats');

  const stats = [
    {
      id: 'properties',
      icon: Home,
      label: t('properties_listed'),
      value: t('properties_listed_value'),
      color: 'bg-blue-100 text-blue-600',
    },
    {
      id: 'savings',
      icon: DollarSign,
      label: t('average_savings'),
      value: t('average_savings_value'),
      color: 'bg-green-100 text-green-600',
    },
    {
      id: 'experience',
      icon: Clock,
      label: t('years_experience'),
      value: t('years_experience_value'),
      color: 'bg-amber-100 text-amber-600',
    },
    {
      id: 'satisfaction',
      icon: Award,
      label: t('satisfaction_rate'),
      value: t('satisfaction_rate_value'),
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <section className="py-6 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center"
            >
              <div className={`rounded-full p-3 ${stat.color} mb-3`}>
                <stat.icon size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1 text-gray-900">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};