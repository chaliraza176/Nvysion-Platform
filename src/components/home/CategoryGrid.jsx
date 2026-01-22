import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Business Cards', icon: '💼', slug: 'business-cards', color: 'bg-blue-100' },
  { id: 2, name: 'Postcards & Flyers', icon: '📄', slug: 'postcards-flyers', color: 'bg-green-100' },
  { id: 3, name: 'Signs, Posters & Banners', icon: '🪧', slug: 'signs-posters', color: 'bg-yellow-100' },
  { id: 4, name: 'Marketing Materials', icon: '📊', slug: 'marketing-materials', color: 'bg-purple-100' },
  { id: 5, name: 'Labels & Stickers', icon: '🏷️', slug: 'labels-stickers', color: 'bg-pink-100' },
  { id: 6, name: 'Promotional Products', icon: '🎁', slug: 'promotional', color: 'bg-orange-100' },
  { id: 7, name: 'Clothing & Bags', icon: '👕', slug: 'clothing-bags', color: 'bg-teal-100' },
  { id: 8, name: 'Invitations & Stationery', icon: '💌', slug: 'invitations', color: 'bg-rose-100' },
  { id: 9, name: 'Photo Gifts', icon: '📸', slug: 'photo-gifts', color: 'bg-indigo-100' },
  { id: 10, name: 'Packaging', icon: '📦', slug: 'packaging', color: 'bg-amber-100' },
];

const CategoryGrid = () => {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-dark)] mb-8">
          Explore all categories
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${category.color} flex items-center justify-center text-2xl md:text-3xl mb-2 transition-transform group-hover:scale-110`}>
                {category.icon}
              </div>
              <span className="text-xs md:text-sm text-[var(--text-dark)] font-medium leading-tight">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export { CategoryGrid };
