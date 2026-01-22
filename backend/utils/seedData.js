const mongoose = require('mongoose');
require('dotenv').config();
const Category = require('../models/Category');

const categoriesData = [
    {
        name: 'Business Cards',
        slug: 'business-cards',
        icon: '💼',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        subcategories: [
            { name: 'Standard Business Cards', items: ['Classic Business Cards', 'Premium Business Cards', 'Economy Business Cards'] },
            { name: 'Specialty Cards', items: ['Rounded Corner Cards', 'Square Business Cards', 'Folded Business Cards'] },
            { name: 'Premium Finishes', items: ['Foil Accent Cards', 'Spot UV Cards', 'Embossed Cards'] }
        ]
    },
    {
        name: 'Signs, Banners & Posters',
        slug: 'signs-banners-posters',
        icon: '📢',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        subcategories: [
            { name: 'Vinyl Banners', items: ['Indoor Banners', 'Outdoor Banners', 'Mesh Banners'] },
            { name: 'Yard Signs', items: ['Corrugated Plastic Signs', 'Wire Frame Signs'] },
            { name: 'Posters', items: ['Standard Posters', 'Large Format Posters'] }
        ]
    },
    {
        name: 'Labels & Stickers',
        slug: 'labels-stickers',
        icon: '🏷️',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        subcategories: [
            { name: 'Custom Stickers', items: ['Round Stickers', 'Square Stickers', 'Die-Cut Stickers'] },
            { name: 'Product Labels', items: ['Circle Labels', 'Rectangle Labels'] }
        ]
    },
    {
        name: 'Clothing & Bags',
        slug: 'clothing-bags',
        icon: '👕',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        subcategories: [
            { name: 'T-Shirts', items: ['Custom T-Shirts', 'Performance Shirts', 'Polo Shirts'] },
            { name: 'Bags & Totes', items: ['Tote Bags', 'Backpacks', 'Drawstring Bags'] }
        ]
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB for seeding...');

        await Category.deleteMany({});
        console.log('🗑️ Existing categories deleted.');

        await Category.insertMany(categoriesData);
        console.log('🌱 Database seeded successfully!');

        process.exit();
    } catch (err) {
        console.error('❌ Error seeding database:', err);
        process.exit(1);
    }
};

seedDB();
