import React from 'react';
import { CheckCircle, Smile, Headphones } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: CheckCircle,
      title: 'Custom-printed products',
      description: 'Professional quality, delivered fast'
    },
    {
      icon: Smile,
      title: 'Create with more confidence',
      description: '100% satisfaction guaranteed'
    },
    {
      icon: Headphones,
      title: 'Live support',
      description: 'Expert help when you need it'
    }
  ];

  return (
    <section className="border-y border-[var(--medium-gray)] bg-white py-6">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 justify-center md:justify-start"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--light-gray)] flex items-center justify-center">
                <badge.icon className="w-5 h-5 text-[var(--primary-navy)]" />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text-dark)] text-sm">
                  {badge.title}
                </h3>
                <p className="text-[var(--dark-gray)] text-xs">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { TrustBadges };
