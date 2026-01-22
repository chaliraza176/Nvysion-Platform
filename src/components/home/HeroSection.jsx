import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const features = [
    'Custom-printed products',
    'Create with more confidence',
    'Live support'
  ];

  return (
    <section className="bg-[var(--hero-bg)] py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-dark)] mb-4">
              If you need it, we print it.
            </h1>
            <p className="text-[var(--dark-gray)] text-lg mb-6 max-w-xl mx-auto lg:mx-0">
              From an unlimited selection of fully customizable products to an easy-to-use design tool, 
              you can create all your marketing materials in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-[var(--accent-orange)] hover:bg-[var(--accent-orange)]/90 text-white px-8"
              >
                Try designs for $10
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-[var(--primary-navy)] text-[var(--primary-navy)] hover:bg-[var(--primary-navy)] hover:text-white"
              >
                Browse products
              </Button>
            </div>

            {/* Trust Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-[var(--dark-gray)]">
                  <CheckCircle className="w-4 h-4 text-[var(--accent-green)]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="flex-1 grid grid-cols-2 gap-3 max-w-md lg:max-w-lg">
            <div className="bg-[var(--primary-navy)] rounded-lg aspect-square flex items-center justify-center text-white text-4xl">
              📦
            </div>
            <div className="bg-[var(--accent-teal)] rounded-lg aspect-square flex items-center justify-center text-white text-4xl">
              🎨
            </div>
            <div className="bg-[var(--accent-orange)] rounded-lg aspect-square flex items-center justify-center text-white text-4xl">
              ✉️
            </div>
            <div className="bg-[var(--accent-blue)] rounded-lg aspect-square flex items-center justify-center text-white text-4xl">
              👕
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
