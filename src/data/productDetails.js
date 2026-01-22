// Product-specific details for each subcategory item
// Based on VistaPrint.com structure

export const productDetails = {
    // Business Cards - Standard
    'classic-business-cards': {
        name: 'Classic Business Cards',
        description: 'Our most popular business cards featuring premium quality at an affordable price. Make a lasting first impression with high-quality printing on durable card stock.',
        startingPrice: 9.99,
        materials: [
            { name: '14 pt. Glossy', price: 9.99, popular: true },
            { name: '14 pt. Matte', price: 9.99 },
            { name: '16 pt. Silk', price: 14.99 },
            { name: '18 pt. Premium', price: 19.99 }
        ],
        sizes: ['Standard (3.5" x 2")', 'Mini (3.3" x 2.1")', 'Slim (3.5" x 1.75")'],
        quantities: [
            { qty: 50, price: 9.99 },
            { qty: 100, price: 12.99 },
            { qty: 250, price: 24.99 },
            { qty: 500, price: 39.99 },
            { qty: 1000, price: 69.99 }
        ],
        features: [
            'Professional quality printing',
            'Full-color front and back',
            'Fast turnaround - 2 day shipping available',
            'Choose from thousands of templates',
            '100% satisfaction guarantee'
        ],
        specifications: {
            'Paper Weight': '14 pt. cardstock',
            'Finish': 'Glossy or Matte',
            'Print Sides': 'Single or Double-sided',
            'Corner Type': 'Square or Rounded',
            'Bleed': '0.125 inch',
            'Safe Area': '0.25 inch'
        }
    },
    'premium-business-cards': {
        name: 'Premium Business Cards',
        description: 'Elevate your brand with ultra-thick, luxurious business cards. Premium finishes and superior quality that stands out from the competition.',
        startingPrice: 19.99,
        materials: [
            { name: '18 pt. Ultra-Thick', price: 19.99, popular: true },
            { name: '22 pt. Luxury', price: 29.99 },
            { name: 'Soft Touch', price: 34.99 },
            { name: 'Suede', price: 39.99 }
        ],
        sizes: ['Standard (3.5" x 2")'],
        quantities: [
            { qty: 50, price: 19.99 },
            { qty: 100, price: 29.99 },
            { qty: 250, price: 59.99 },
            { qty: 500, price: 99.99 }
        ],
        features: [
            'Ultra-thick premium cardstock',
            'Luxurious finishes available',
            'Makes a powerful first impression',
            'Professional design assistance',
            'Premium packaging included'
        ]
    },
    'economy-business-cards': {
        name: 'Economy Business Cards',
        description: 'Budget-friendly business cards without compromising quality. Perfect for networking events, job fairs, or when you need cards in bulk.',
        startingPrice: 7.99,
        materials: [
            { name: '12 pt. Standard', price: 7.99, popular: true },
            { name: '14 pt. Standard', price: 9.99 }
        ],
        quantities: [
            { qty: 100, price: 7.99 },
            { qty: 250, price: 14.99 },
            { qty: 500, price: 24.99 },
            { qty: 1000, price: 44.99 }
        ],
        features: [
            'Affordable pricing',
            'Same quality printing',
            'Great for bulk orders',
            'Fast production'
        ]
    },

    // Specialty Cards
    'rounded-corner-cards': {
        name: 'Rounded Corner Business Cards',
        description: 'Stand out with smooth, rounded corners that add a modern touch to your business cards. Available in various finishes.',
        startingPrice: 14.99,
        features: [
            'Modern rounded corners',
            'Premium quality cardstock',
            'Multiple finish options',
            'Professional look and feel'
        ]
    },
    'square-business-cards': {
        name: 'Square Business Cards',
        description: 'Make a bold statement with unique square-shaped cards. Perfect size: 2.5" x 2.5". Stand out from traditional rectangular cards.',
        startingPrice: 16.99,
        sizes: ['2.5" x 2.5"', '2.75" x 2.75"'],
        features: [
            'Unique square shape',
            'Eye-catching design',
            'Premium printing quality',
            'Full customization'
        ]
    },
    'folded-business-cards': {
        name: 'Folded Business Cards',
        description: 'Double your space with folded business cards. Perfect for adding extra information, menus, or appointment schedules.',
        startingPrice: 24.99,
        sizes: ['3.5" x 4" (folded to 3.5" x 2")', '7" x 2" (folded to 3.5" x 2")'],
        features: [
            'Extra space for information',
            'Multiple folding options',
            'Premium cardstock',
            'Versatile design possibilities'
        ]
    },

    // Premium Finishes
    'foil-accent-cards': {
        name: 'Foil Accent Business Cards',
        description: 'Add luxury with metallic foil accents. Choose from gold, silver, rose gold, or holographic foil to make your cards shine.',
        startingPrice: 49.99,
        materials: [
            { name: 'Gold Foil', price: 49.99, popular: true },
            { name: 'Silver Foil', price: 49.99 },
            { name: 'Rose Gold Foil', price: 54.99 },
            { name: 'Holographic Foil', price: 59.99 }
        ],
        features: [
            'Metallic foil accents',
            'Multiple foil colors',
            'Premium thick cardstock',
            'Luxury presentation'
        ]
    },
    'spot-uv-cards': {
        name: 'Spot UV Business Cards',
        description: 'Create stunning contrast with raised glossy UV coating on selected areas. Adds texture and visual interest to your design.',
        startingPrice: 39.99,
        features: [
            'Raised glossy UV finish',
            'Textured feel',
            'Eye-catching contrast',
            'Premium quality'
        ]
    },
    'embossed-cards': {
        name: 'Embossed Business Cards',
        description: 'Create a tactile experience with raised embossed elements. Premium technique that adds dimension and sophistication.',
        startingPrice: 69.99,
        features: [
            'Raised embossing',
            '3D textured effect',
            'Luxury feel',
            'Memorable impression'
        ]
    },
    'letterpress-cards': {
        name: 'Letterpress Business Cards',
        description: 'Traditional printing technique creating elegant debossed impressions. Timeless, handcrafted quality for discerning professionals.',
        startingPrice: 89.99,
        features: [
            'Handcrafted letterpress',
            'Debossed impression',
            'Artisanal quality',
            'Unique texture'
        ]
    },

    // Signs & Banners
    'indoor-banners': {
        name: 'Indoor Vinyl Banners',
        description: 'High-quality vinyl banners perfect for indoor events, trade shows, and retail displays. Full-color printing with various size options.',
        startingPrice: 29.99,
        sizes: ['2\' x 4\'', '3\' x 6\'', '4\' x 8\'', 'Custom sizes available'],
        features: [
            'Durable vinyl material',
            'Full-color printing',
            'Grommets for hanging',
            'Weather-resistant ink'
        ]
    },
    'outdoor-banners': {
        name: 'Outdoor Vinyl Banners',
        description: 'Heavy-duty banners designed to withstand outdoor conditions. UV-resistant inks and reinforced edges for long-lasting display.',
        startingPrice: 39.99,
        features: [
            'Weather-resistant',
            'UV-protected inks',
            'Reinforced edges',
            'Heavy-duty vinyl'
        ]
    }
};

// Get product details by slug
export const getProductDetails = (slug) => {
    return productDetails[slug] || {
        name: 'Product',
        description: 'Professional quality printing for your business needs.',
        startingPrice: 12.99,
        features: [
            'High-quality printing',
            'Fast turnaround',
            'Professional results',
            'Satisfaction guaranteed'
        ]
    };
};
