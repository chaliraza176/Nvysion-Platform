const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const Category = require('../models/Category');
const Product = require('../models/Product');
const User = require('../models/User');

const categories = [
    {
        id: 1,
        name: 'Business Cards',
        slug: 'business-cards',
        icon: '💼',
        image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop',
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
                name: 'Premium Cards',
                items: [
                    { name: 'Soft Touch', slug: 'soft-touch' },
                    { name: 'Cotton', slug: 'cotton' },
                    { name: 'Linen', slug: 'linen' }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Signs, Banners & Posters',
        slug: 'signs-banners-posters',
        icon: '📢',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        subcategories: [
            {
                name: 'Banners',
                items: [
                    { name: 'Vinyl Banners', slug: 'vinyl-banners' },
                    { name: 'Retractable Banners', slug: 'retractable-banners' }
                ]
            },
            {
                name: 'Signs',
                items: [
                    { name: 'Yard Signs', slug: 'yard-signs' },
                    { name: 'Foam Board Signs', slug: 'foam-board' }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'Postcards & Print Advertising',
        slug: 'postcards-print',
        icon: '📮',
        image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        subcategories: [
            {
                name: 'Postcards',
                items: [
                    { name: 'Standard Postcards', slug: 'standard-postcards' },
                    { name: 'EDDM Postcards', slug: 'eddm-postcards' }
                ]
            },
            {
                name: 'Flyers',
                items: [
                    { name: 'Flyers', slug: 'flyers' },
                    { name: 'Brochures', slug: 'brochures' }
                ]
            }
        ]
    },
    {
        id: 4,
        name: 'Stickers & Labels',
        slug: 'stickers-labels',
        icon: '🏷️',
        image: 'https://images.unsplash.com/photo-1635405074683-96d6921a2a68?w=400&h=300&fit=crop',
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
        id: 5,
        name: 'Clothing & Bags',
        slug: 'clothing-bags',
        icon: '👕',
        image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=300&fit=crop',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        subcategories: [
            {
                name: 'T-Shirts',
                items: [
                    { name: 'Unisex T-Shirts', slug: 'unisex-tshirts' },
                    { name: 'Polo Shirts', slug: 'polo-shirts' }
                ]
            },
            {
                name: 'Bags',
                items: [
                    { name: 'Tote Bags', slug: 'tote-bags' },
                    { name: 'Backpacks', slug: 'backpacks' }
                ]
            }
        ]
    },
    {
        id: 6,
        name: 'Promotional Products',
        slug: 'promotional-products',
        icon: '🎁',
        image: 'https://images.unsplash.com/photo-1572119865084-43c285814d63?w=400&h=300&fit=crop',
        gradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
        subcategories: [
            {
                name: 'Drinkware',
                items: [
                    { name: 'Custom Mugs', slug: 'mugs' },
                    { name: 'Water Bottles', slug: 'water-bottles' }
                ]
            }
        ]
    },
    {
        id: 7,
        name: 'Packaging',
        slug: 'packaging',
        icon: '📦',
        image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=300&fit=crop',
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        subcategories: [
            {
                name: 'Boxes',
                items: [
                    { name: 'Mailer Boxes', slug: 'mailer-boxes' },
                    { name: 'Product Boxes', slug: 'product-boxes' }
                ]
            }
        ]
    },
    {
        id: 8,
        name: 'Calendars & Gifts',
        slug: 'calendars-gifts',
        icon: '📅',
        image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        subcategories: [
            {
                name: 'Calendars',
                items: [
                    { name: 'Wall Calendars', slug: 'wall-calendars' },
                    { name: 'Desk Calendars', slug: 'desk-calendars' }
                ]
            }
        ]
    },
    {
        id: 9,
        name: 'Invitations & Stationery',
        slug: 'invitations-stationery',
        icon: '💌',
        image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=400&h=300&fit=crop',
        gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        subcategories: [
            {
                name: 'Invitations',
                items: [
                    { name: 'Wedding Invitations', slug: 'wedding-invitations' },
                    { name: 'Birthday Invitations', slug: 'birthday-invitations' }
                ]
            }
        ]
    },
    {
        id: 10,
        name: 'Logo & Websites',
        slug: 'logo-websites',
        icon: '🌐',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        subcategories: [
            {
                name: 'Logo Design',
                items: [
                    { name: 'AI Logomaker', slug: 'ai-logomaker' },
                    { name: 'Logo Design Services', slug: 'logo-design' }
                ]
            }
        ]
    },
    {
        id: 11,
        name: 'Design Services',
        slug: 'design-services',
        icon: '🎨',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        subcategories: [
            {
                name: 'Professional Design',
                items: [
                    { name: 'Logo Design', slug: 'logo-design' },
                    { name: 'Business Card Design', slug: 'business-card-design' }
                ]
            }
        ]
    }
];

const products = [
    {
        name: 'Standard Business Cards',
        slug: 'standard-business-cards',
        category: 'business-cards',
        subcategory: 'standard-cards',
        description: 'Professional business cards with a classic matte finish. Perfect for networking and making lasting impressions.',
        startingPrice: 9.99,
        images: [
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop'
        ],
        materials: [
            { name: 'Standard Matte', price: 0, popular: true },
            { name: 'Premium Glossy', price: 2 },
            { name: 'Uncoated', price: 1 }
        ],
        quantities: [
            { qty: 50, price: 9.99 },
            { qty: 100, price: 14.99 },
            { qty: 250, price: 29.99 },
            { qty: 500, price: 49.99 }
        ],
        features: ['Full color printing', 'Double-sided available', 'Multiple paper options'],
        rating: { average: 4.5, count: 1250 },
        featured: true
    },
    {
        name: 'Premium Business Cards',
        slug: 'premium-business-cards',
        category: 'business-cards',
        subcategory: 'premium-cards',
        description: 'Luxurious business cards with soft touch finish. Make a premium impression.',
        startingPrice: 19.99,
        images: [
            'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop'
        ],
        materials: [
            { name: 'Soft Touch', price: 0, popular: true },
            { name: 'Cotton', price: 5 },
            { name: 'Linen', price: 3 }
        ],
        quantities: [
            { qty: 50, price: 19.99 },
            { qty: 100, price: 34.99 },
            { qty: 250, price: 69.99 }
        ],
        features: ['Premium paper stock', 'Soft touch coating', 'Elegant finish'],
        rating: { average: 4.8, count: 856 },
        featured: true
    },
    {
        name: 'Vinyl Banners',
        slug: 'vinyl-banners',
        category: 'signs-banners-posters',
        subcategory: 'banners',
        description: 'Durable outdoor vinyl banners for events, promotions, and advertising.',
        startingPrice: 29.99,
        images: [
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
        ],
        materials: [
            { name: '13oz Vinyl', price: 0, popular: true },
            { name: '18oz Heavy Duty', price: 10 }
        ],
        quantities: [
            { qty: 1, price: 29.99 },
            { qty: 2, price: 54.99 },
            { qty: 5, price: 124.99 }
        ],
        features: ['Weather resistant', 'UV protected', 'Grommets included'],
        rating: { average: 4.6, count: 432 }
    },
    {
        name: 'Custom T-Shirts',
        slug: 'custom-tshirts',
        category: 'clothing-bags',
        subcategory: 't-shirts',
        description: 'High-quality custom printed t-shirts for teams, events, and promotions.',
        startingPrice: 12.99,
        images: [
            'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=400&fit=crop'
        ],
        materials: [
            { name: '100% Cotton', price: 0, popular: true },
            { name: 'Cotton Blend', price: 2 },
            { name: 'Performance', price: 5 }
        ],
        quantities: [
            { qty: 10, price: 12.99 },
            { qty: 25, price: 10.99 },
            { qty: 50, price: 8.99 }
        ],
        features: ['Multiple colors', 'All sizes available', 'Screen or digital print'],
        rating: { average: 4.4, count: 678 }
    },
    {
        name: 'Custom Mugs',
        slug: 'custom-mugs',
        category: 'promotional-products',
        subcategory: 'drinkware',
        description: 'Personalized ceramic mugs perfect for gifts and promotions.',
        startingPrice: 8.99,
        images: [
            'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=400&fit=crop'
        ],
        materials: [
            { name: 'Ceramic', price: 0, popular: true },
            { name: 'Stainless Steel', price: 5 }
        ],
        quantities: [
            { qty: 1, price: 8.99 },
            { qty: 6, price: 7.99 },
            { qty: 12, price: 6.99 }
        ],
        features: ['Dishwasher safe', 'Full wrap printing', '11oz capacity'],
        rating: { average: 4.7, count: 923 }
    },
    {
        name: 'Die-Cut Stickers',
        slug: 'die-cut-stickers',
        category: 'stickers-labels',
        subcategory: 'stickers',
        description: 'Custom shaped stickers cut to your design. Perfect for branding and packaging.',
        startingPrice: 7.99,
        images: [
            'https://images.unsplash.com/photo-1635405074683-96d6921a2a68?w=600&h=400&fit=crop'
        ],
        materials: [
            { name: 'Glossy Vinyl', price: 0, popular: true },
            { name: 'Matte Vinyl', price: 0 },
            { name: 'Holographic', price: 3 }
        ],
        quantities: [
            { qty: 50, price: 7.99 },
            { qty: 100, price: 12.99 },
            { qty: 250, price: 24.99 }
        ],
        features: ['Waterproof', 'UV resistant', 'Custom shapes'],
        rating: { average: 4.6, count: 1456 }
    }
];

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // Clear existing data
        await Category.deleteMany({});
        await Product.deleteMany({});
        console.log('🗑️ Cleared existing data');

        // Insert categories
        await Category.insertMany(categories);
        console.log('✅ Categories seeded');

        // Insert products
        await Product.insertMany(products);
        console.log('✅ Products seeded');

        // Create demo user
        const existingUser = await User.findOne({ email: 'demo@example.com' });
        if (!existingUser) {
            await User.create({
                firstName: 'Demo',
                lastName: 'User',
                email: 'demo@example.com',
                password: 'demo123',
                agreeToTerms: true
            });
            console.log('✅ Demo user created (demo@example.com / demo123)');
        }

        console.log('\n🎉 Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Seeding failed:', error);
        process.exit(1);
    }
};

seedDatabase();
