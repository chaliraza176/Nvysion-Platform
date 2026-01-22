import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PromoBanners = () => {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Banner - Giveaways */}
          <Card className="overflow-hidden border-0 bg-[var(--primary-navy)] text-white">
            <CardContent className="p-6 md:p-8 flex flex-col justify-between min-h-[280px]">
              <div>
                <p className="text-sm opacity-80 mb-2">Swag for your team</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Giveaways they'll love<br />(and actually use!)
                </h3>
                <p className="text-sm opacity-80 mb-6">
                  Get your brand seen with custom branded products, 
                  high-quality water bottles, and more.
                </p>
              </div>
              <Button 
                variant="secondary" 
                className="w-fit bg-white text-[var(--primary-navy)] hover:bg-[var(--light-gray)]"
              >
                Shop now
              </Button>
            </CardContent>
          </Card>

          {/* Right Banner - Logo Maker */}
          <Card className="overflow-hidden border-0 bg-[var(--accent-teal)] text-white">
            <CardContent className="p-6 md:p-8 flex flex-col justify-between min-h-[280px]">
              <div>
                <p className="text-sm opacity-80 mb-2">Try our logo maker</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Create it for free.<br />Print it for $10.
                </h3>
                <p className="text-sm opacity-80 mb-6">
                  Bring your ideas to life and print your 
                  business cards, stickers, and more.
                </p>
              </div>
              <Button 
                variant="secondary" 
                className="w-fit bg-white text-[var(--accent-teal)] hover:bg-[var(--light-gray)]"
              >
                Create a logo
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { PromoBanners };
