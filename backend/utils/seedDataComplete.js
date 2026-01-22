const mongoose = require('mongoose');
require('dotenv').config();

const Category = require('../models/Category');
const Product = require('../models/Product');
const User = require('../models/User');

const categories = [
    {
        id: 1,
        name: 'Business Cards',
        slug: 'business-cards',
        icon: '💼',
        image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop&q=80',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        subcategories: [
            {
                name: 'Standard Cards',
                items: [
                    { name: 'Matte', slug: 'matte' },
                    { name: 'Glossy', slug: 'glossy' },
                    { name: 'Uncoated', slug: 'uncoated' }
                ]
            },
            {
                name: 'Unique Shapes',
                items: [
                    { name: 'Rounded Corner', slug: 'rounded-corner' },
                    { name: 'Square', slug: 'square' },
                    { name: 'Circle', slug: 'circle' }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Signs, Banners & Posters',
        slug: 'signs-banners-posters',
        icon: '📢',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        subcategories: [
            {
                name: 'Banners',
                items: [
                    { name: 'Vinyl Banners', slug: 'vinyl-banners' },
                    { name: 'Mesh Banners', slug: 'mesh-banners' },
                    { name: 'Fabric Banners', slug: 'fabric-banners' },
                    { name: 'Retractable Banners', slug: 'retractable-banners' }
                ]
            },
            {
                name: 'Signs',
                items: [
                    { name: 'Yard Signs', slug: 'yard-signs' },
                    { name: 'Car Magnets', slug: 'car-magnets' },
                    { name: 'A-Frame Signs', slug: 'a-frame-signs' },
                    { name: 'Foam Board Signs', slug: 'foam-board' }
                ]
            },
            {
                name: 'Posters',
                items: [
                    { name: 'Standard Posters', slug: 'standard-posters' },
                    { name: 'Large Format Posters', slug: 'large-format-posters' },
                    { name: 'Canvas Prints', slug: 'canvas-prints' }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'Stickers & Labels',
        slug: 'stickers-labels',
        icon: '🏷️',
        image: 'https://images.unsplash.com/photo-1635405074683-96d6921a2a68?w=400&h=300&fit=crop&q=80',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        subcategories: [
            {
                name: 'Stickers',
                items: [
                    { name: 'Die-Cut Stickers', slug: 'die-cut-stickers' },
                    { name: 'Sticker Sheets', slug: 'sticker-sheets' }
                ]
            }
        ]
    },
    {
        id: 4,
        name: 'Promotional Products',
        slug: 'promotional-products',
        icon: '🎁',
        image: '/assets/products/office_tech_group.png',
        gradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
        subcategories: [
            {
                name: 'Drinkware',
                items: [
                    { name: 'Mugs', slug: 'mugs' },
                    { name: 'Water Bottles', slug: 'water-bottles' },
                    { name: 'Tumblers', slug: 'tumblers' }
                ]
            },
            {
                name: 'Office & Tech',
                items: [
                    { name: 'Pens', slug: 'pens' },
                    { name: 'Notebooks', slug: 'notebooks' },
                    { name: 'USB Drives', slug: 'usb-drives' },
                    { name: 'Mouse Pads', slug: 'mouse-pads' }
                ]
            }
        ]
    },
    {
        id: 7,
        name: 'Packaging',
        slug: 'packaging',
        icon: '📦',
        image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4ea20f8?auto=format&fit=crop&w=400&q=80',
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        subcategories: [
            {
                name: 'Boxes',
                items: [
                    { name: 'Mailer Boxes', slug: 'mailer-boxes' },
                    { name: 'Shipping Boxes', slug: 'shipping-boxes' },
                    { name: 'Product Boxes', slug: 'product-boxes' }
                ]
            },
            {
                name: 'Bags',
                items: [
                    { name: 'Paper Bags', slug: 'kraft-bags' },
                    { name: 'Die-Cut Handle Bags', slug: 'die-cut-bags' }
                ]
            },
            {
                name: 'Mailing & Supplies',
                items: [
                    { name: 'Poly Mailers', slug: 'poly-mailers' },
                    { name: 'Tissue Paper', slug: 'tissue-paper' }
                ]
            },
            {
                name: 'Food Packaging',
                items: [
                    { name: 'Pizza Boxes', slug: 'pizza-boxes' },
                    { name: 'Stand-Up Pouches', slug: 'stand-up-pouches' }
                ]
            }
        ]
    }
];

const products = [
    {
        name: 'Matte Business Cards',
        slug: 'matte',
        category: 'business-cards',
        subcategory: 'Standard Cards',
        description: 'Classic, sophisticated smooth finish that reduces glare and gives your cards a professional, understated elegance.',
        startingPrice: 14.99,
        type: 'bundle',
        images: [
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
            'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&q=80'
        ],
        features: ['Premium matte finish', 'Sturdy 16pt cardstock', 'Professional look', 'Reduced glare'],
        inStock: true,
        featured: true
    },
    {
        name: 'Vinyl Banners',
        slug: 'vinyl-banners',
        category: 'signs-banners-posters',
        subcategory: 'Banners',
        description: 'Durable, weather-resistant banners for indoor and outdoor use.',
        startingPrice: 29.99,
        type: 'unit',
        images: [
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
            'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80'
        ],
        features: ['13oz or 18oz vinyl', 'UV protected ink', 'Grommets included'],
        inStock: true,
        featured: true
    },
    {
        name: 'Custom Ceramic Mugs',
        slug: 'mugs',
        category: 'promotional-products',
        subcategory: 'Drinkware',
        description: 'Start every morning with your brand in hand. High-quality ceramic mugs.',
        startingPrice: 12.99,
        type: 'unit',
        images: [
            'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800',
            'https://images.unsplash.com/photo-1563203178-0cb9fdba7327?w=800'
        ],
        features: ['11oz capacity', 'Dishwasher safe', 'Full wrap printing'],
        inStock: true,
        featured: true
    },
    {
        name: 'Stainless Water Bottles',
        slug: 'water-bottles',
        category: 'promotional-products',
        subcategory: 'Drinkware',
        description: 'Eco-friendly stainless steel water bottles to keep your brand visible.',
        startingPrice: 19.99,
        type: 'unit',
        images: [
            '/assets/products/custom_water_bottle.png',
            'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=800'
        ],
        features: ['BPA free', 'Double-wall insulation', 'Leak-proof lid'],
        inStock: true
    },
    {
        name: 'Premium Pens',
        slug: 'pens',
        category: 'promotional-products',
        subcategory: 'Office & Tech',
        description: 'Practical, high-quality pens that make a lasting impression.',
        startingPrice: 1.49,
        type: 'unit',
        images: [
            '/assets/products/custom_pen.png',
            'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800'
        ],
        features: ['Smooth ink flow', 'Multiple colors', 'Bulk discounts'],
        inStock: true
    },
    {
        name: 'Custom Notebooks',
        slug: 'notebooks',
        category: 'promotional-products',
        subcategory: 'Office & Tech',
        description: 'Professional notebooks perfect for meetings and events.',
        startingPrice: 8.99,
        type: 'unit',
        images: [
            '/assets/products/custom_notebook.png',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800'
        ],
        features: ['Lined pages', 'Elastic closure', 'Durable cover'],
        inStock: true
    },
    {
        name: 'USB Flash Drives',
        slug: 'usb-drives',
        category: 'promotional-products',
        subcategory: 'Office & Tech',
        description: 'Tech essentials with your logo on high-speed memory.',
        startingPrice: 9.99,
        type: 'unit',
        images: [
            '/assets/products/custom_usb_drive.png',
            'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800'
        ],
        features: ['USB 3.0 speed', 'Various capacities', 'Custom printing'],
        inStock: true
    },
    {
        name: 'Mouse Pads',
        slug: 'mouse-pads',
        category: 'promotional-products',
        subcategory: 'Office & Tech',
        description: 'Keep your brand on every desk with custom mouse pads.',
        startingPrice: 7.49,
        type: 'unit',
        images: [
            'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800',
            'https://images.unsplash.com/photo-1599380315354-44fd7c20c4cb?w=800'
        ],
        features: ['Non-slip base', 'Smooth surface', 'Full color printing'],
        inStock: true
    },
    {
        name: 'Insulated Tumblers',
        slug: 'tumblers',
        category: 'promotional-products',
        subcategory: 'Drinkware',
        description: 'Premium double-wall tumblers for travel and home use.',
        startingPrice: 24.99,
        type: 'unit',
        images: [
            '/assets/products/custom_tumbler.png',
            'https://images.unsplash.com/photo-1517036780075-801fc0952097?w=800'
        ],
        features: ['Vaccum insulated', 'Coffee & cold drinks', 'Straw included', 'Multiple colors'],
        inStock: true
    }
];

const users = [
    {
        firstName: 'Ali',
        lastName: 'Ahmed',
        email: 'ali@example.com',
        password: 'password123',
        role: 'user',
        agreeToTerms: true
    }
];

async function seedDatabase() {
    try {
        console.log('🔄 Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        console.log('🗑️  Clearing existing data...');
        await Category.deleteMany({});
        await Product.deleteMany({});
        await User.deleteMany({});
        console.log('✅ Data cleared');

        console.log('📦 Inserting categories...');
        await Category.insertMany(categories);
        console.log(`✅ Inserted ${categories.length} categories`);

        console.log('📦 Inserting products...');
        await Product.insertMany(products);
        console.log(`✅ Inserted ${products.length} products`);

        console.log('📦 Inserting users...');
        await User.insertMany(users);
        console.log(`✅ Inserted ${users.length} users`);

        console.log('\n🎉 Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
}

seedDatabase();
