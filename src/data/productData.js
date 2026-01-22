// Product specific data including images, prices and descriptions
// Updated with premium multi-image galleries

export const specificProductData = {
    // --- BUSINESS CARDS ---
    'matte': {
        type: 'bundle',
        price: 14.99,
        name: 'Matte Business Cards',
        description: 'Classic, sophisticated smooth finish.',
        images: [
            '/assets/products/matte_business_cards_1.png',
            '/assets/products/matte_business_cards_2.png'
        ],
        features: ['Premium matte finish', 'Sturdy 16pt cardstock', 'Professional look']
    },
    'glossy': {
        type: 'bundle',
        price: 15.99,
        name: 'Glossy Business Cards',
        description: 'High-shine finish with UV coating.',
        images: [
            '/assets/products/glossy_business_cards_1.png'
        ],
        features: ['High-gloss UV coating', 'Vibrant colors']
    },

    // --- SIGNS & BANNERS ---
    'vinyl-banners': {
        type: 'unit',
        price: 29.99,
        name: 'Vinyl Banners',
        description: 'Durable vinyl banners for indoor/outdoor use.',
        images: [
            '/assets/products/vinyl_banner_1.png'
        ],
        features: ['13oz or 18oz vinyl', 'UV protected ink']
    },

    // --- STICKERS ---
    'die-cut-stickers': {
        type: 'bundle',
        price: 7.99,
        name: 'Die-Cut Stickers',
        description: 'Custom shape stickers.',
        images: [
            '/assets/products/die_cut_stickers_1.png'
        ],
        features: ['Custom shape cutting', 'Weatherproof vinyl']
    },

    // --- PROMOTIONAL PRODUCTS ---
    'mugs': {
        type: 'unit',
        price: 12.99,
        name: 'Custom Ceramic Mug',
        description: 'Start your day with a custom mug.',
        images: [
            'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80'
        ],
        features: ['11oz capacity', 'Dishwasher safe']
    },
    'pens': {
        type: 'unit',
        price: 1.49,
        name: 'Custom Ballpoint Pen',
        description: 'Smooth-writing pens with your logo.',
        images: [
            '/assets/products/custom_pen.png'
        ],
        features: ['Smooth writing', 'Retractable']
    },
    'water-bottles': {
        type: 'unit',
        price: 16.99,
        name: 'Custom Water Bottle',
        description: 'Stay hydrated in style.',
        images: [
            '/assets/products/custom_water_bottle.png'
        ],
        features: ['Stainless steel', 'BPA-free']
    },
    'notebooks': {
        type: 'unit',
        price: 8.99,
        name: 'Custom Notebooks',
        description: 'Professional notebooks for your team.',
        images: [
            '/assets/products/custom_notebook.png'
        ],
        features: ['Lined pages', 'Elastic closure']
    },
    'usb-drives': {
        type: 'unit',
        price: 9.99,
        name: 'USB Flash Drives',
        description: 'Branded USB drives.',
        images: [
            '/assets/products/custom_usb_drive.png'
        ],
        features: ['USB 3.0 speed', 'Custom printing']
    },
    'tumblers': {
        type: 'unit',
        price: 24.99,
        name: 'Insulated Tumblers',
        description: 'Premium double-wall tumblers.',
        images: [
            '/assets/products/custom_tumbler.png'
        ],
        features: ['Vaccum insulated', 'Straw included']
    },

    // --- PACKAGING - ALL PRODUCTS WITH VERIFIED WORKING IMAGES ---
    'mailer-boxes': {
        type: 'unit',
        price: 2.99,
        name: 'Custom Mailer Boxes',
        description: 'Premium shipping boxes for your products.',
        images: [
            'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?w=800',
            'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?w=800'
        ],
        features: ['Custom sizes', 'Sturdy cardboard']
    },
    'shipping-boxes': {
        type: 'unit',
        price: 3.49,
        name: 'Heavy Duty Shipping Boxes',
        description: 'Robust corrugated boxes for transit.',
        images: [
            'https://images.pexels.com/photos/4498140/pexels-photo-4498140.jpeg?w=800',
            'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?w=800'
        ],
        features: ['Double-wall strength', 'Eco-friendly cardboard']
    },
    'product-boxes': {
        type: 'unit',
        price: 1.99,
        name: 'Custom Product Boxes',
        description: 'Sleek, retail-ready boxes.',
        images: [
            'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?w=800',
            'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?w=800'
        ],
        features: ['Full color printing', 'Premium feel']
    },
    'reverse-tuck': {
        type: 'unit',
        price: 2.49,
        name: 'Reverse Tuck Boxes',
        description: 'Easy-assembly boxes with tuck closures.',
        images: [
            'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?w=800'
        ],
        features: ['Easy assembly', 'Multiple sizes']
    },
    'lock-bottom': {
        type: 'unit',
        price: 2.79,
        name: 'Lock Bottom Boxes',
        description: 'Secure bottom lock design.',
        images: [
            'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?w=800'
        ],
        features: ['Secure lock bottom', 'Sturdy construction']
    },
    'kraft-bags': {
        type: 'unit',
        price: 0.89,
        name: 'Kraft Paper Bags',
        description: 'Eco-friendly paper shopping bags.',
        images: [
            'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?w=800',
            'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?w=800'
        ],
        features: ['Recycled kraft paper', 'Twisted handles']
    },
    'die-cut-bags': {
        type: 'unit',
        price: 0.95,
        name: 'Die-Cut Handle Bags',
        description: 'Durable plastic bags with die-cut handles.',
        images: [
            'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?w=800',
            'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?w=800'
        ],
        features: ['Heavy-duty plastic', 'Reinforced handles']
    },
    'gift-bags': {
        type: 'unit',
        price: 1.25,
        name: 'Premium Gift Bags',
        description: 'Elegant paper bags with rope handles.',
        images: [
            'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?w=800',
            'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?w=800'
        ],
        features: ['Luxury finish', 'Rope handles']
    },
    'poly-mailers': {
        type: 'unit',
        price: 0.49,
        name: 'Custom Poly Mailers',
        description: 'Lightweight, tear-proof shipping bags.',
        images: [
            'https://images.pexels.com/photos/4498140/pexels-photo-4498140.jpeg?w=800',
            'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?w=800'
        ],
        features: ['Tear-proof material', 'Water resistant']
    },
    'tissue-paper': {
        type: 'unit',
        price: 0.29,
        name: 'Custom Tissue Paper',
        description: 'Branded tissue paper adds a premium touch.',
        images: [
            'https://images.pexels.com/photos/6044198/pexels-photo-6044198.jpeg?w=800',
            'https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?w=800'
        ],
        features: ['Custom colors', 'Acid-free']
    },
    'wrapping-paper': {
        type: 'unit',
        price: 15.99,
        name: 'Custom Wrapping Paper',
        description: 'Personalized wrapping paper rolls.',
        images: [
            'https://images.pexels.com/photos/6044198/pexels-photo-6044198.jpeg?w=800'
        ],
        features: ['High-quality print', 'Durable paper']
    },
    'hang-tags': {
        type: 'unit',
        price: 0.45,
        name: 'Custom Hang Tags',
        description: 'Professional product tags.',
        images: [
            'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?w=800'
        ],
        features: ['Sturdy cardstock', 'Drilled holes']
    },
    'ribbon': {
        type: 'unit',
        price: 8.99,
        name: 'Custom Branded Ribbon',
        description: 'Personalized satin ribbon.',
        images: [
            'https://images.pexels.com/photos/6044198/pexels-photo-6044198.jpeg?w=800'
        ],
        features: ['Satin finish', 'High-definition printing']
    },
    'pizza-boxes': {
        type: 'unit',
        price: 0.59,
        name: 'Custom Pizza Boxes',
        description: 'Corrugated pizza boxes that keep food hot.',
        images: [
            'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?w=800',
            'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?w=800'
        ],
        features: ['Food-grade cardboard', 'Ventilation holes']
    },
    'stand-up-pouches': {
        type: 'unit',
        price: 0.75,
        name: 'Stand-Up Pouches',
        description: 'Resealable pouches for snacks and dry goods.',
        images: [
            'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?w=800',
            'https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?w=800'
        ],
        features: ['Resealable zipper', 'Moisture barrier']
    },
    'paper-cups': {
        type: 'unit',
        price: 0.35,
        name: 'Custom Paper Cups',
        description: 'Paper cups for coffee and beverages.',
        images: [
            'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?w=800'
        ],
        features: ['Insulated design', 'Vibrant printing']
    }
};

// Category level configuration for default visuals
export const categoryVisuals = {
    'business-cards': {
        hero: '/assets/products/matte_business_cards_1.png',
        products: [
            '/assets/products/matte_business_cards_1.png',
            '/assets/products/matte_business_cards_2.png',
            '/assets/products/glossy_business_cards_1.png'
        ]
    },
    'signs-banners-posters': {
        hero: '/assets/products/vinyl_banner_1.png',
        products: [
            '/assets/products/vinyl_banner_1.png'
        ]
    },
    'stickers-labels': {
        hero: '/assets/products/die_cut_stickers_1.png',
        products: [
            '/assets/products/die_cut_stickers_1.png'
        ]
    },
    'clothing-bags': {
        hero: '/assets/products/custom_tshirt_1.png',
        products: [
            '/assets/products/custom_tshirt_1.png'
        ]
    },
    'promotional-products': {
        hero: '/assets/products/office_tech_group.png',
        products: [
            '/assets/products/custom_pen.png',
            '/assets/products/custom_notebook.png',
            '/assets/products/custom_water_bottle.png',
            '/assets/products/custom_usb_drive.png',
            '/assets/products/custom_tumbler.png'
        ]
    },
    'packaging': {
        hero: 'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?w=1200',
        products: [
            'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?w=600',
            'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?w=600',
            'https://images.pexels.com/photos/4498140/pexels-photo-4498140.jpeg?w=600',
            'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?w=600',
            'https://images.pexels.com/photos/6044198/pexels-photo-6044198.jpeg?w=600'
        ]
    }
};
