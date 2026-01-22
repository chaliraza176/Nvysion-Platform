import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const CollectionCarousel = ({ title, items, showBadge = false }) => {
  return (
    <section className="py-10 md:py-14 bg-[var(--section-bg)]">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-dark)] mb-8">
          {title}
        </h2>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {items.map((item, index) => (
              <CarouselItem 
                key={index} 
                className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <Link to={item.link || '#'}>
                  <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden">
                    <CardContent className="p-0">
                      <div 
                        className="aspect-square flex items-center justify-center text-5xl relative"
                        style={{ backgroundColor: item.bgColor || 'var(--light-gray)' }}
                      >
                        {item.icon}
                        {showBadge && item.badge && (
                          <Badge 
                            className="absolute top-2 left-2 bg-[var(--accent-orange)] text-white text-xs"
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium text-sm text-[var(--text-dark)] truncate">
                          {item.name}
                        </h3>
                        {item.price && (
                          <p className="text-xs text-[var(--dark-gray)] mt-1">
                            Starting at {item.price}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export { CollectionCarousel };
