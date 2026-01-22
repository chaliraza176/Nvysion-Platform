const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'mockData.json');

// Initial default data
const defaultData = {
    users: [
        {
            _id: 'user_1',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
            password: 'password123',
            phone: '+1234567890',
            role: 'user',
            agreeToTerms: true,
            emailPreferences: { promotional: true, orderUpdates: true },
            savedAddresses: [],
            createdAt: new Date().toISOString()
        },
        {
            _id: 'admin_1',
            firstName: 'Admin',
            lastName: 'User',
            email: 'admin@vistaprint.com',
            password: 'admin123',
            phone: '',
            role: 'admin',
            agreeToTerms: true,
            emailPreferences: { promotional: false, orderUpdates: true },
            savedAddresses: [],
            createdAt: new Date().toISOString()
        }
    ],
    categories: [
        {
            _id: 'cat_1',
            name: 'Business Cards',
            slug: 'business-cards',
            icon: '💼',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            subcategories: [
                { name: 'Standard Cards', items: [{ name: 'Matte', slug: 'matte' }, { name: 'Glossy', slug: 'glossy' }] },
                { name: 'Unique Shapes', items: [{ name: 'Rounded Corner', slug: 'rounded-corner' }, { name: 'Square', slug: 'square' }] }
            ]
        },
        {
            _id: 'cat_3',
            name: 'Stickers & Labels',
            slug: 'stickers-labels',
            icon: '🏷️',
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            subcategories: [
                { name: 'Stickers', items: [{ name: 'Die-Cut Stickers', slug: 'die-cut-stickers' }, { name: 'Sticker Sheets', slug: 'sticker-sheets' }] }
            ]
        },
        {
            _id: 'cat_4',
            name: 'Clothing & Bags',
            slug: 'clothing-bags',
            icon: '👕',
            gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            subcategories: [
                { name: 'T-Shirts', items: [{ name: 'Unisex T-Shirts', slug: 'unisex-tshirts' }] }
            ]
        }
    ],
    products: [
        {
            _id: 'prod_1',
            name: 'Matte Business Cards',
            slug: 'matte',
            category: 'business-cards',
            subcategory: 'Standard Cards',
            description: 'Classic, sophisticated smooth finish.',
            startingPrice: 14.99,
            type: 'bundle',
            images: ['https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800'],
            features: ['Premium matte finish', 'Sturdy cardstock'],
            inStock: true,
            featured: true
        }
    ],
    carts: {},
    orders: [],
    projects: []
};

// Load data from file or use defaults
let mockData = {};
try {
    if (fs.existsSync(DATA_FILE)) {
        mockData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    } else {
        mockData = defaultData;
        fs.writeFileSync(DATA_FILE, JSON.stringify(mockData, null, 2));
    }
} catch (err) {
    console.error('Error loading mock data:', err);
    mockData = defaultData;
}

// Function to save data to file
const saveMockData = () => {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(mockData, null, 2));
    } catch (err) {
        console.error('Error saving mock data:', err);
    }
};

// Helper to generate IDs
const generateId = (prefix) => `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

module.exports = { mockData, generateId, saveMockData };
