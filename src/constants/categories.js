// Categories data based on real VistaPrint website structure
// Complete navigation menu matching vistaprint.com

export const mainCategories = [
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
                    { name: 'Circle', slug: 'circle' },
                    { name: 'Oval', slug: 'oval' },
                    { name: 'Leaf', slug: 'leaf' }
                ]
            },
            {
                name: 'Premium Cards',
                items: [
                    { name: 'Natural Textured', slug: 'natural-textured' },
                    { name: 'Soft Touch', slug: 'soft-touch' },
                    { name: 'Cotton', slug: 'cotton' },
                    { name: 'Linen', slug: 'linen' },
                    { name: 'Kraft', slug: 'kraft' },
                    { name: 'Premium Plus', slug: 'premium-plus' },
                    { name: 'Painted Edge', slug: 'painted-edge' },
                    { name: 'Ultra Thick', slug: 'ultra-thick' },
                    { name: 'Plastic', slug: 'plastic' }
                ]
            },
            {
                name: 'Special Finishes',
                items: [
                    { name: 'Foil Accent', slug: 'foil-accent' },
                    { name: 'Embossed Gloss', slug: 'embossed-gloss' },
                    { name: 'Raised Foil', slug: 'raised-foil' }
                ]
            },
            {
                name: 'Digital',
                items: [
                    { name: 'QR Code Business Cards', slug: 'qr-code' },
                    { name: 'NFC Business Cards', slug: 'nfc' }
                ]
            },
            {
                name: 'Holders & More',
                items: [
                    { name: 'Business Card Holders', slug: 'holders' },
                    { name: 'Magnetic Cards', slug: 'magnetic' },
                    { name: 'Business Card Stickers', slug: 'stickers' },
                    { name: 'Packaging Insert Cards', slug: 'packaging-insert' },
                    { name: 'Loyalty Cards', slug: 'loyalty' },
                    { name: 'Appointment Cards', slug: 'appointment' }
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
                    { name: 'Retractable Banners', slug: 'retractable-banners' },
                    { name: 'Pop-up Banners', slug: 'popup-banners' },
                    { name: 'Feather Flags', slug: 'feather-flags' }
                ]
            },
            {
                name: 'Signs',
                items: [
                    { name: 'Yard Signs', slug: 'yard-signs' },
                    { name: 'Corrugated Plastic Signs', slug: 'corrugated-plastic' },
                    { name: 'Foam Board Signs', slug: 'foam-board' },
                    { name: 'PVC Signs', slug: 'pvc-signs' },
                    { name: 'Metal Signs', slug: 'metal-signs' },
                    { name: 'A-Frame Signs', slug: 'a-frame' }
                ]
            },
            {
                name: 'Signage',
                items: [
                    { name: 'Car Magnets', slug: 'car-magnets' },
                    { name: 'Window Decals', slug: 'window-decals' },
                    { name: 'Door Decals', slug: 'door-decals' },
                    { name: 'Tabletop Signs', slug: 'tabletop-signs' },
                    { name: 'Trade Show Displays', slug: 'trade-show' }
                ]
            },
            {
                name: 'Posters',
                items: [
                    { name: 'Standard Posters', slug: 'standard-posters' },
                    { name: 'Large Format Posters', slug: 'large-format' },
                    { name: 'Photo Posters', slug: 'photo-posters' },
                    { name: 'Canvas Prints', slug: 'canvas-prints' }
                ]
            },
            {
                name: 'Fast Delivery',
                items: [
                    { name: '2-Day Yard Signs', slug: '2-day-yard-signs' },
                    { name: '2-Day Foam Boards', slug: '2-day-foam-boards' },
                    { name: '2-Day Posters', slug: '2-day-posters' }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'Postcards & Print Advertising',
        slug: 'postcards-print',
        icon: '📮',
        image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop&q=80',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        subcategories: [
            {
                name: 'Postcards',
                items: [
                    { name: 'Standard Postcards', slug: 'standard-postcards' },
                    { name: 'Rounded Corner Postcards', slug: 'rounded-postcards' },
                    { name: 'Die-Cut Postcards', slug: 'die-cut-postcards' },
                    { name: 'EDDM Postcards', slug: 'eddm-postcards' }
                ]
            },
            {
                name: 'Flyers & Materials',
                items: [
                    { name: 'Flyers', slug: 'flyers' },
                    { name: 'Brochures', slug: 'brochures' },
                    { name: 'Folders', slug: 'folders' },
                    { name: 'Rack Cards', slug: 'rack-cards' },
                    { name: 'Door Hangers', slug: 'door-hangers' },
                    { name: 'Custom Tickets', slug: 'tickets' }
                ]
            },
            {
                name: 'Booklets & Documents',
                items: [
                    { name: 'Saddle-Stitch Booklets', slug: 'saddle-stitch' },
                    { name: 'Wire-Bound Booklets', slug: 'wire-bound' },
                    { name: 'Letterhead', slug: 'letterhead' },
                    { name: 'Menus', slug: 'menus' }
                ]
            },
            {
                name: 'Office Supplies',
                items: [
                    { name: 'Custom Stamps', slug: 'stamps' },
                    { name: 'Ink Refills', slug: 'ink-refills' },
                    { name: 'Notepads', slug: 'notepads' }
                ]
            }
        ]
    },
    {
        id: 4,
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
                    { name: 'Kiss-Cut Stickers', slug: 'kiss-cut-stickers' },
                    { name: 'Sticker Sheets', slug: 'sticker-sheets' },
                    { name: 'Holographic Stickers', slug: 'holographic-stickers' },
                    { name: 'QR Code Stickers', slug: 'qr-stickers' }
                ]
            },
            {
                name: 'Labels',
                items: [
                    { name: 'Roll Labels', slug: 'roll-labels' },
                    { name: 'Sheet Labels', slug: 'sheet-labels' },
                    { name: 'Product Labels', slug: 'product-labels' },
                    { name: 'Return Address Labels', slug: 'return-address' },
                    { name: 'Packaging Labels', slug: 'packaging-labels' }
                ]
            },
            {
                name: 'Decals',
                items: [
                    { name: 'Car Door Decals', slug: 'car-decals' },
                    { name: 'Wall Decals', slug: 'wall-decals' },
                    { name: 'Window Decals', slug: 'window-decals' },
                    { name: 'Floor Decals', slug: 'floor-decals' }
                ]
            }
        ]
    },
    {
        id: 5,
        name: 'Clothing & Bags',
        slug: 'clothing-bags',
        icon: '👕',
        image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=300&fit=crop&q=80',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        subcategories: [
            {
                name: 'T-Shirts',
                items: [
                    { name: 'Unisex T-Shirts', slug: 'unisex-tshirts' },
                    { name: 'Men\'s T-Shirts', slug: 'mens-tshirts' },
                    { name: 'Women\'s T-Shirts', slug: 'womens-tshirts' },
                    { name: 'Kids T-Shirts', slug: 'kids-tshirts' },
                    { name: 'Long Sleeve Shirts', slug: 'long-sleeve' }
                ]
            },
            {
                name: 'Outerwear',
                items: [
                    { name: 'Polo Shirts', slug: 'polo-shirts' },
                    { name: 'Hoodies', slug: 'hoodies' },
                    { name: 'Sweatshirts', slug: 'sweatshirts' },
                    { name: 'Jackets', slug: 'jackets' },
                    { name: 'Aprons', slug: 'aprons' }
                ]
            },
            {
                name: 'Bags',
                items: [
                    { name: 'Tote Bags', slug: 'tote-bags' },
                    { name: 'Backpacks', slug: 'backpacks' },
                    { name: 'Drawstring Bags', slug: 'drawstring-bags' },
                    { name: 'Cooler Bags', slug: 'cooler-bags' },
                    { name: 'Travel & Gym Bags', slug: 'travel-bags' }
                ]
            },
            {
                name: 'Hats & Accessories',
                items: [
                    { name: 'Baseball Caps', slug: 'baseball-caps' },
                    { name: 'Beanies', slug: 'beanies' },
                    { name: 'Visors', slug: 'visors' },
                    { name: 'Bucket Hats', slug: 'bucket-hats' }
                ]
            }
        ]
    },
    {
        id: 6,
        name: 'Promotional Products',
        slug: 'promotional-products',
        icon: '🎁',
        image: '/assets/products/office_tech_group.png',
        gradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
        subcategories: [
            {
                name: 'Drinkware',
                items: [
                    { name: 'Custom Mugs', slug: 'mugs' },
                    { name: 'Water Bottles', slug: 'water-bottles' },
                    { name: 'Tumblers', slug: 'tumblers' },
                    { name: 'Glassware', slug: 'glassware' },
                    { name: 'Koozies', slug: 'koozies' }
                ]
            },
            {
                name: 'Office & Tech',
                items: [
                    { name: 'Pens', slug: 'pens' },
                    { name: 'Notebooks', slug: 'notebooks' },
                    { name: 'Mouse Pads', slug: 'mouse-pads' },
                    { name: 'USB Drives', slug: 'usb-drives' },
                    { name: 'Power Banks', slug: 'power-banks' },
                    { name: 'Phone Accessories', slug: 'phone-accessories' }
                ]
            },
            {
                name: 'Leisure',
                items: [
                    { name: 'Keychains', slug: 'keychains' },
                    { name: 'Travel Accessories', slug: 'travel-accessories' },
                    { name: 'Sunglasses', slug: 'sunglasses' },
                    { name: 'Blankets', slug: 'blankets' },
                    { name: 'Towels', slug: 'towels' }
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
                    { name: 'Shipping Boxes', slug: 'shipping-boxes' },
                    { name: 'Product Boxes', slug: 'product-boxes' },
                    { name: 'Reverse Tuck Boxes', slug: 'reverse-tuck' },
                    { name: 'Lock Bottom Boxes', slug: 'lock-bottom' }
                ]
            },
            {
                name: 'Bags',
                items: [
                    { name: 'Standard Kraft Bags', slug: 'kraft-bags' },
                    { name: 'Die-Cut Handle Bags', slug: 'die-cut-bags' },
                    { name: 'Premium Gift Bags', slug: 'gift-bags' }
                ]
            },
            {
                name: 'Mailing & Supplies',
                items: [
                    { name: 'Poly Mailers', slug: 'poly-mailers' },
                    { name: 'Tissue Paper', slug: 'tissue-paper' },
                    { name: 'Wrapping Paper', slug: 'wrapping-paper' },
                    { name: 'Hang Tags', slug: 'hang-tags' },
                    { name: 'Ribbon', slug: 'ribbon' }
                ]
            },
            {
                name: 'Food Packaging',
                items: [
                    { name: 'Pizza Boxes', slug: 'pizza-boxes' },
                    { name: 'Stand-Up Pouches', slug: 'stand-up-pouches' },
                    { name: 'Paper Cups', slug: 'paper-cups' }
                ]
            }
        ]
    },
    {
        id: 8,
        name: 'Calendars & Gifts',
        slug: 'calendars-gifts',
        icon: '📅',
        image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop&q=80',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        subcategories: [
            {
                name: 'Calendars',
                items: [
                    { name: 'Wall Calendars', slug: 'wall-calendars' },
                    { name: 'Desk Calendars', slug: 'desk-calendars' },
                    { name: 'Magnetic Calendars', slug: 'magnetic-calendars' },
                    { name: 'Poster Calendars', slug: 'poster-calendars' }
                ]
            },
            {
                name: 'Photo Gifts',
                items: [
                    { name: 'Canvas Prints', slug: 'canvas-prints' },
                    { name: 'Photo Books', slug: 'photo-books' },
                    { name: 'Custom Puzzles', slug: 'puzzles' },
                    { name: 'Photo Mugs', slug: 'photo-mugs' }
                ]
            },
            {
                name: 'Personalized Gifts',
                items: [
                    { name: 'Custom Pillows', slug: 'pillows' },
                    { name: 'Custom Blankets', slug: 'blankets' },
                    { name: 'Photo Magnets', slug: 'photo-magnets' },
                    { name: 'Ornaments', slug: 'ornaments' }
                ]
            }
        ]
    },
    {
        id: 9,
        name: 'Invitations & Stationery',
        slug: 'invitations-stationery',
        icon: '💌',
        image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=400&h=300&fit=crop&q=80',
        gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        subcategories: [
            {
                name: 'Invitations',
                items: [
                    { name: 'Wedding Invitations', slug: 'wedding-invitations' },
                    { name: 'Birthday Invitations', slug: 'birthday-invitations' },
                    { name: 'Graduation Invitations', slug: 'graduation-invitations' },
                    { name: 'Save the Dates', slug: 'save-the-dates' },
                    { name: 'RSVP Cards', slug: 'rsvp-cards' }
                ]
            },
            {
                name: 'Stationery',
                items: [
                    { name: 'Thank You Cards', slug: 'thank-you-cards' },
                    { name: 'Note Cards', slug: 'note-cards' },
                    { name: 'Notebooks', slug: 'notebooks' },
                    { name: 'Envelopes', slug: 'envelopes' },
                    { name: 'Letterhead', slug: 'letterhead' }
                ]
            },
            {
                name: 'Party Supplies',
                items: [
                    { name: 'Napkins', slug: 'napkins' },
                    { name: 'Stadium Cups', slug: 'stadium-cups' },
                    { name: 'Balloons', slug: 'balloons' },
                    { name: 'Guest Books', slug: 'guest-books' }
                ]
            }
        ]
    },
    {
        id: 10,
        name: 'Logo & Websites',
        slug: 'logo-websites',
        icon: '🌐',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        subcategories: [
            {
                name: 'Logo Design',
                items: [
                    { name: 'AI Logomaker', slug: 'ai-logomaker' },
                    { name: 'Logo Design Services', slug: 'logo-design' },
                    { name: 'Business Name Generator', slug: 'name-generator' }
                ]
            },
            {
                name: 'Digital Presence',
                items: [
                    { name: 'Wix Websites', slug: 'wix-websites' },
                    { name: 'Custom Domains', slug: 'domains' },
                    { name: 'Business Email', slug: 'business-email' }
                ]
            },
            {
                name: 'Social Media',
                items: [
                    { name: 'Instagram Posts', slug: 'instagram-posts' },
                    { name: 'Facebook Posts', slug: 'facebook-posts' },
                    { name: 'Instagram Stories', slug: 'instagram-stories' },
                    { name: 'YouTube Thumbnails', slug: 'youtube-thumbnails' }
                ]
            }
        ]
    },
    {
        id: 11,
        name: 'Design Services',
        slug: 'design-services',
        icon: '🎨',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop&q=80',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        subcategories: [
            {
                name: 'Professional Design',
                items: [
                    { name: 'Logo Design', slug: 'logo-design' },
                    { name: 'Business Card Design', slug: 'business-card-design' },
                    { name: 'Brochure Design', slug: 'brochure-design' },
                    { name: 'Flyer Design', slug: 'flyer-design' }
                ]
            },
            {
                name: 'Custom Design',
                items: [
                    { name: 'Let Experts Create It', slug: 'expert-design' },
                    { name: 'Design Consultation', slug: 'consultation' }
                ]
            }
        ]
    }
];

export const dealsAndFeatures = [
    {
        title: '2-Day Delivery',
        description: 'Get your products fast',
        icon: '🚀',
        link: '/2-day-delivery'
    },
    {
        title: 'Deals',
        description: 'Up to 40% off select products',
        icon: '🎉',
        link: '/deals'
    }
];

// Category page data for each main category
export const categoryPageData = {
    'business-cards': {
        title: 'Business Cards',
        description: 'Time-saving, budget-thinking, easy-to-customize business cards? Must be VistaPrint.',
        heroImage: 'https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:best/legacy_dam/en-us/S001468652/MXP3-98-Standard-BC-hero-702',
        promo: 'Try 50 standard business cards for just $10.'
    },
    'signs-banners-posters': {
        title: 'Signs, Banners & Posters',
        description: 'Make a big impression with custom signs, banners and posters for your business.',
        heroImage: null,
        promo: 'Up to 30% off banners and signs.'
    },
    'postcards-print': {
        title: 'Postcards & Print Advertising',
        description: 'Reach more customers with professional postcards and marketing materials.',
        heroImage: null,
        promo: 'EDDM postcards starting at $0.20 each.'
    },
    'stickers-labels': {
        title: 'Stickers & Labels',
        description: 'Custom stickers and labels to brand your products and packaging.',
        heroImage: null,
        promo: 'Die-cut stickers starting at $7.99.'
    },
    'clothing-bags': {
        title: 'Clothing & Bags',
        description: 'Custom apparel and bags for your team, events, and promotions.',
        heroImage: null,
        promo: 'Custom t-shirts starting at $8.99 each.'
    },
    'promotional-products': {
        title: 'Promotional Products',
        description: 'Branded giveaways and promotional items to spread the word.',
        heroImage: null,
        promo: 'Bulk discounts available on all promo products.'
    },
    'packaging': {
        title: 'Packaging',
        description: 'Custom packaging solutions to make your products stand out.',
        heroImage: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=800&q=80',
        promo: 'Free shipping on orders over $75.'
    },
    'calendars-gifts': {
        title: 'Calendars & Gifts',
        description: 'Photo gifts and calendars for personal and business use.',
        heroImage: null,
        promo: 'Photo calendars starting at $14.99.'
    },
    'invitations-stationery': {
        title: 'Invitations & Stationery',
        description: 'Beautiful invitations and stationery for every occasion.',
        heroImage: null,
        promo: 'Wedding invitations starting at $0.49 each.'
    },
    'logo-websites': {
        title: 'Logo & Websites',
        description: 'Build your brand online with custom logos and websites.',
        heroImage: null,
        promo: 'Free AI logo design tool available.'
    },
    'design-services': {
        title: 'Design Services',
        description: 'Let our expert designers bring your vision to life.',
        heroImage: null,
        promo: 'Professional designs starting at $49.'
    }
};
