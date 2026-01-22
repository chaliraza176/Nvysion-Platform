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
        image: 'https://images.unsplash.com/photo-1572119865084-43c285814d63?w=400&h=300&fit=crop&q=80',
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
        image: 'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?w=400',
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

// Category page data for each main category - Dynamic and Detailed
export const categoryPageData = {
    'business-cards': {
        title: 'Business Cards',
        rating: 'Over 90,000+ ★★★★★ business card reviews',
        description: 'Time-saving, budget-thinking, easy-to-customize business cards? Must be Nvysion Platform.',
        promo: 'Try 50 standard business cards for just $10.',
        heroImage: '/assets/products/matte_business_cards_1.png',
        categories: [
            {
                name: 'Standard Cards',
                items: [
                    { name: 'Matte', link: '/category/business-cards/matte' },
                    { name: 'Glossy', link: '/category/business-cards/glossy' },
                    { name: 'Uncoated', link: '/category/business-cards/uncoated' }
                ]
            },
            {
                name: 'Unique Shapes',
                items: [
                    { name: 'Rounded Corner', link: '/category/business-cards/rounded-corner' },
                    { name: 'Square', link: '/category/business-cards/square' }
                ]
            }
        ],
        mainProducts: [
            {
                id: 1,
                name: 'Standard',
                description: 'Our tried-and-true cards, available in a variety of colors, finishes and shapes.',
                price: 'Starting at $10.00',
                badge: 'Try for $10',
                image: '/assets/products/matte_business_cards_2.png',
                color: '#f8f9fa'
            },
            {
                id: 2,
                name: 'Premium',
                description: 'Thicker or textured papers with an eye-catching look and intriguing feel.',
                price: '100 starting at $18.99',
                image: '/assets/products/matte_business_cards_1.png',
                color: '#f8f9fa'
            },
            {
                id: 3,
                name: 'Specialty',
                description: 'Our most unique options, including plastic and NFC-enabled cards.',
                price: '100 starting at $27.99',
                image: '/assets/products/glossy_business_cards_1.png',
                color: '#f8f9fa'
            }
        ],
        paperFinishes: [
            { name: 'Matte', icon: '📄', rating: 4.7, reviews: 103584 },
            { name: 'Glossy', icon: '✨', rating: 4.6, reviews: 85720 },
            { name: 'Soft-Touch', icon: '🧤', rating: 4.8, reviews: 9870 },
            { name: 'Foil Accent', icon: '⚡', rating: 4.6, reviews: 11230 }
        ]
    },
    'signs-banners-posters': {
        title: 'Signs, Banners & Posters',
        rating: 'Over 50,000+ ★★★★★ reviews',
        description: 'Make a big impression with custom signs, banners and posters for your business.',
        promo: 'Up to 30% off banners and signs.',
        heroImage: '/assets/products/vinyl_banner_1.png',
        categories: [
            {
                name: 'Banners',
                items: [
                    { name: 'Vinyl Banners', link: '/category/signs-banners-posters/vinyl-banners' },
                    { name: 'Mesh Banners', link: '/category/signs-banners-posters/mesh-banners' },
                    { name: 'Fabric Banners', link: '/category/signs-banners-posters/fabric-banners' },
                    { name: 'Retractable Banners', link: '/category/signs-banners-posters/retractable-banners' },
                    { name: 'Feather Flags', link: '/category/signs-banners-posters/feather-flags' },
                    { name: 'Pop-up Displays', link: '/category/signs-banners-posters/popup-displays' }
                ]
            },
            {
                name: 'Signs',
                items: [
                    { name: 'Yard Signs', link: '/category/signs-banners-posters/yard-signs' },
                    { name: 'Car Magnets', link: '/category/signs-banners-posters/car-magnets' },
                    { name: 'A-Frame Signs', link: '/category/signs-banners-posters/a-frame-signs' },
                    { name: 'Foam Board Signs', link: '/category/signs-banners-posters/foam-board' },
                    { name: 'Metal Signs', link: '/category/signs-banners-posters/metal-signs' },
                    { name: 'PVC Signs', link: '/category/signs-banners-posters/pvc-signs' }
                ]
            },
            {
                name: 'Posters',
                items: [
                    { name: 'Standard Posters', link: '/category/signs-banners-posters/standard-posters' },
                    { name: 'Large Format Posters', link: '/category/signs-banners-posters/large-format-posters' },
                    { name: 'Photo Posters', link: '/category/signs-banners-posters/photo-posters' },
                    { name: 'Canvas Prints', link: '/category/signs-banners-posters/canvas-prints' }
                ]
            },
            {
                name: 'Window & Vehicle',
                items: [
                    { name: 'Window Decals', link: '/category/signs-banners-posters/window-decals' },
                    { name: 'Window Clings', link: '/category/signs-banners-posters/window-clings' },
                    { name: 'Vehicle Magnets', link: '/category/signs-banners-posters/vehicle-magnets' },
                    { name: 'Vehicle Wraps', link: '/category/signs-banners-posters/vehicle-wraps' }
                ]
            },
            {
                name: 'Trade Show',
                items: [
                    { name: 'Trade Show Displays', link: '/category/signs-banners-posters/trade-show' },
                    { name: 'Table Covers', link: '/category/signs-banners-posters/table-covers' },
                    { name: 'Backdrop Displays', link: '/category/signs-banners-posters/backdrops' },
                    { name: 'Pop-up Tents', link: '/category/signs-banners-posters/popup-tents' }
                ]
            }
        ],
        mainProducts: [
            {
                id: 1,
                name: 'Vinyl Banners',
                description: 'Durable, weather-resistant banners for indoor and outdoor use.',
                price: 'Starting at $29.99',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80',
                color: '#f8f9fa',
                slug: 'vinyl-banners'
            },
            {
                id: 2,
                name: 'Yard Signs',
                description: 'Turn your yard into a high-visibility marketing space.',
                price: 'Starting at $12.99',
                image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=400&h=300&fit=crop&q=80',
                color: '#f8f9fa',
                slug: 'yard-signs'
            },
            {
                id: 3,
                name: 'Retractable Banners',
                description: 'Professional pull-up banners for trade shows and events.',
                price: 'Starting at $89.99',
                image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&q=80',
                color: '#f8f9fa',
                slug: 'retractable-banners'
            },
            {
                id: 4,
                name: 'Car Magnets',
                description: 'Turn your vehicle into a moving advertisement.',
                price: 'Starting at $24.99',
                image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=300&fit=crop&q=80',
                color: '#f8f9fa',
                slug: 'car-magnets'
            },
            {
                id: 5,
                name: 'Foam Board Signs',
                description: 'Lightweight, sturdy signs perfect for indoor displays.',
                price: 'Starting at $14.99',
                image: 'https://images.unsplash.com/photo-1579623261984-41f9a81d4044?w=400&h=300&fit=crop&q=80',
                color: '#f8f9fa',
                slug: 'foam-board'
            },
            {
                id: 6,
                name: 'A-Frame Signs',
                description: 'Portable sidewalk signs to attract foot traffic.',
                price: 'Starting at $49.99',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&q=80',
                color: '#f8f9fa',
                slug: 'a-frame-signs'
            },
            {
                id: 7,
                name: 'Mesh Banners',
                description: 'Wind-resistant banners perfect for outdoor fences.',
                price: 'Starting at $34.99',
                image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop&q=80',
                color: '#f8f9fa',
                slug: 'mesh-banners'
            },
            {
                id: 8,
                name: 'Feather Flags',
                description: 'Eye-catching teardrop or feather flags for events.',
                price: 'Starting at $59.99',
                image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=400&h=300&fit=crop&q=80',
                color: '#f8f9fa',
                slug: 'feather-flags'
            },
            {
                id: 9,
                name: 'Canvas Prints',
                description: 'Gallery-quality canvas prints for professional display.',
                price: 'Starting at $39.99',
                image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=300&fit=crop&q=80',
                color: '#f8f9fa',
                slug: 'canvas-prints'
            },
            {
                id: 10,
                name: 'Window Decals',
                description: 'Custom decals for storefronts and vehicles.',
                price: 'Starting at $19.99',
                image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&q=80',
                color: '#f8f9fa',
                slug: 'window-decals'
            },
            {
                id: 11,
                name: 'Large Format Posters',
                description: 'High-resolution posters in custom sizes.',
                price: 'Starting at $15.99',
                image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop&q=80',
                color: '#f8f9fa',
                slug: 'large-format-posters'
            },
            {
                id: 12,
                name: 'Trade Show Displays',
                description: 'Complete booth solutions for exhibitions and events.',
                price: 'Starting at $199.99',
                image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=300&fit=crop&q=80',
                color: '#f8f9fa',
                slug: 'trade-show'
            }
        ],
        paperFinishes: [
            { name: '13oz Vinyl', icon: '🏁', rating: 4.8, reviews: 15420 },
            { name: '18oz Heavy Duty', icon: '🏋️', rating: 4.9, reviews: 8560 },
            { name: 'Mesh (70/30)', icon: '🌬️', rating: 4.7, reviews: 6340 },
            { name: 'Fabric Polyester', icon: '🧵', rating: 4.6, reviews: 4520 }
        ]
    },
    'clothing-bags': {
        title: 'Clothing & Bags',
        rating: 'Premium quality apparel for your brand',
        description: 'Custom apparel and bags for your team, events, and promotions.',
        promo: 'Custom t-shirts starting at $8.99 each.',
        heroImage: '/assets/products/custom_tshirt_1.png',
        categories: [
            {
                name: 'T-Shirts',
                items: [
                    { name: 'Unisex', link: '/category/clothing-bags/unisex-tshirts' },
                    { name: 'Men\'s', link: '/category/clothing-bags/mens-tshirts' },
                    { name: 'Women\'s', link: '/category/clothing-bags/womens-tshirts' }
                ]
            },
            {
                name: 'Outerwear',
                items: [
                    { name: 'Hoodies', link: '/category/clothing-bags/hoodies' },
                    { name: 'Polos', link: '/category/clothing-bags/polo-shirts' }
                ]
            }
        ],
        mainProducts: [
            {
                id: 1,
                name: 'T-Shirts',
                description: 'Soft, durable cotton shirts in a variety of styles and colors.',
                price: 'Starting at $9.99',
                image: '/assets/products/custom_tshirt_1.png',
                color: '#f8f9fa'
            },
            {
                id: 2,
                name: 'Hoodies',
                description: 'Cozy and professional hoodies for your team.',
                price: 'Starting at $24.99',
                image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&h=300&fit=crop&q=80',
                color: '#f8f9fa'
            }
        ],
        paperFinishes: [
            { name: 'Cotton', icon: '🧶', rating: 4.7, reviews: 45320 },
            { name: 'Polyester Blend', icon: '🧵', rating: 4.6, reviews: 12450 }
        ]
    },
    'stickers-labels': {
        title: 'Stickers & Labels',
        rating: 'Waterproof and UV resistant',
        description: 'Custom stickers and labels to brand your products and packaging.',
        promo: 'Die-cut stickers starting at $7.99.',
        heroImage: '/assets/products/die_cut_stickers_1.png',
        categories: [
            {
                name: 'Stickers',
                items: [
                    { name: 'Die-Cut', link: '/category/stickers-labels/die-cut-stickers' },
                    { name: 'Sheets', link: '/category/stickers-labels/sticker-sheets' }
                ]
            }
        ],
        mainProducts: [
            {
                id: 1,
                name: 'Die-Cut Stickers',
                description: 'Custom-shaped stickers cut exactly to your design.',
                price: 'Starting at $7.99',
                image: '/assets/products/die_cut_stickers_1.png',
                color: '#f8f9fa'
            },
            {
                id: 2,
                name: 'Roll Labels',
                description: 'The fastest, easiest way to label your shipments and products.',
                price: 'Starting at $11.99',
                image: 'https://images.unsplash.com/photo-1635405074683-96d6921a2a68?w=400&h=300&fit=crop&q=80',
                color: '#f8f9fa'
            }
        ],
        paperFinishes: [
            { name: 'Glossy Vinyl', icon: '✨', rating: 4.8, reviews: 25600 },
            { name: 'Matte Vinyl', icon: '📄', rating: 4.7, reviews: 18400 }
        ]
    },
    'promotional-products': {
        title: 'Promotional Products',
        rating: 'Brand your business with custom giveaways',
        description: 'From mugs to pens, find the perfect items to showcase your logo and grow your brand.',
        promo: 'Up to 25% off drinkware and writing instruments.',
        heroImage: 'https://images.unsplash.com/photo-1572119865084-43c285814d63?w=1200&q=80',
        categories: [
            {
                name: 'Drinkware',
                items: [
                    { name: 'Custom Mugs', link: '/category/promotional-products/mugs' },
                    { name: 'Water Bottles', link: '/category/promotional-products/water-bottles' },
                    { name: 'Tumblers', link: '/category/promotional-products/tumblers' }
                ]
            },
            {
                name: 'Office & Tech',
                items: [
                    { name: 'Custom Pens', link: '/category/promotional-products/pens' },
                    { name: 'Notebooks & Journals', link: '/category/promotional-products/notebooks' },
                    { name: 'USB Flash Drives', link: '/category/promotional-products/usb-drives' },
                    { name: 'Mouse Pads', link: '/category/promotional-products/mouse-pads' }
                ]
            },
            {
                name: 'Leisure & Lifestyle',
                items: [
                    { name: 'Tote Bags', link: '/category/promotional-products/tote-bags' },
                    { name: 'Keychains', link: '/category/promotional-products/keychains' },
                    { name: 'Umbrellas', link: '/category/promotional-products/umbrellas' }
                ]
            }
        ],
        mainProducts: [
            {
                id: 1,
                name: 'Custom Mugs',
                description: 'Classic ceramic mugs available in multiple colors and styles.',
                price: 'Starting at $12.99',
                image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400',
                color: '#f8f9fa',
                slug: 'mugs'
            },
            {
                id: 2,
                name: 'Stainless Water Bottles',
                description: 'Durable, eco-friendly bottles to keep your brand hydrated.',
                price: 'Starting at $19.99',
                image: '/assets/products/custom_water_bottle.png',
                color: '#f8f9fa',
                slug: 'water-bottles'
            },
            {
                id: 3,
                name: 'Premium Pens',
                description: 'Smooth-writing pens that make a lasting impression.',
                price: 'Starting at $1.49',
                image: '/assets/products/custom_pen.png',
                color: '#f8f9fa',
                slug: 'pens'
            },
            {
                id: 4,
                name: 'Custom Notebooks',
                description: 'Professional notebooks perfect for meetings and events.',
                price: 'Starting at $8.99',
                image: '/assets/products/custom_notebook.png',
                color: '#f8f9fa',
                slug: 'notebooks'
            },
            {
                id: 5,
                name: 'Tote Bags',
                description: 'Reusable cotton totes for eco-conscious branding.',
                price: 'Starting at $5.99',
                image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400',
                color: '#f8f9fa',
                slug: 'tote-bags'
            },
            {
                id: 6,
                name: 'USB Flash Drives',
                description: 'Tech essentials with your logo on high-speed memory.',
                price: 'Starting at $9.99',
                image: '/assets/products/custom_usb_drive.png',
                color: '#f8f9fa',
                slug: 'usb-drives'
            },
            {
                id: 7,
                name: 'Mouse Pads',
                description: 'Keep your brand on every desk with custom mouse pads.',
                price: 'Starting at $7.49',
                image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400',
                color: '#f8f9fa',
                slug: 'mouse-pads'
            },
            {
                id: 8,
                name: 'Custom Keychains',
                description: 'Small, portable branding that goes everywhere.',
                price: 'Starting at $2.99',
                image: 'https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?w=400',
                color: '#f8f9fa',
                slug: 'keychains'
            },
            {
                id: 9,
                name: 'Insulated Tumblers',
                description: 'Double-wall tumblers for hot and cold beverages.',
                price: 'Starting at $24.99',
                image: '/assets/products/custom_tumbler.png',
                color: '#f8f9fa',
                slug: 'tumblers'
            },
            {
                id: 10,
                name: 'Tabletop Signs',
                description: 'Mini signs for counters, tables, and reception areas.',
                price: 'Starting at $14.99',
                image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=400',
                color: '#f8f9fa',
                slug: 'tabletop-signs'
            }
        ],
        paperFinishes: [
            { name: 'Ceramic', icon: '🍷', rating: 4.8, reviews: 32000 },
            { name: 'Stainless Steel', icon: '🧊', rating: 4.9, reviews: 15000 },
            { name: 'Plastic & Eco-Friendly', icon: '♻️', rating: 4.7, reviews: 10000 },
            { name: 'Soft Touch Coating', icon: '🧤', rating: 4.8, reviews: 8500 }
        ]
    },
    'packaging': {
        title: 'Packaging',
        rating: '4.8/5 based on 25,000+ happy customers',
        description: 'Make every unboxing special with custom mailer boxes, bags, and tissue paper.',
        promo: 'Custom mailer boxes starting at $2.99 each.',
        heroImage: 'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?w=1200',
        categories: [
            {
                name: 'Boxes',
                items: [
                    { name: 'Mailer Boxes', link: '/category/packaging/mailer-boxes' },
                    { name: 'Shipping Boxes', link: '/category/packaging/shipping-boxes' },
                    { name: 'Product Boxes', link: '/category/packaging/product-boxes' },
                    { name: 'Reverse Tuck Boxes', link: '/category/packaging/reverse-tuck' },
                    { name: 'Lock Bottom Boxes', link: '/category/packaging/lock-bottom' }
                ]
            },
            {
                name: 'Bags',
                items: [
                    { name: 'Paper Bags', link: '/category/packaging/kraft-bags' },
                    { name: 'Die-Cut Handle Bags', link: '/category/packaging/die-cut-bags' },
                    { name: 'Premium Gift Bags', link: '/category/packaging/gift-bags' }
                ]
            },
            {
                name: 'Mailing & Supplies',
                items: [
                    { name: 'Poly Mailers', link: '/category/packaging/poly-mailers' },
                    { name: 'Tissue Paper', link: '/category/packaging/tissue-paper' },
                    { name: 'Wrapping Paper', link: '/category/packaging/wrapping-paper' },
                    { name: 'Hang Tags', link: '/category/packaging/hang-tags' },
                    { name: 'Ribbon', link: '/category/packaging/ribbon' }
                ]
            },
            {
                name: 'Food Packaging',
                items: [
                    { name: 'Pizza Boxes', link: '/category/packaging/pizza-boxes' },
                    { name: 'Stand-Up Pouches', link: '/category/packaging/stand-up-pouches' },
                    { name: 'Paper Cups', link: '/category/packaging/paper-cups' }
                ]
            }
        ],
        mainProducts: [
            {
                id: 1,
                name: 'Boxes',
                description: 'Sturdy, full-color printed boxes for a premium unboxing experience.',
                price: 'Starting at $2.99',
                image: 'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?w=600',
                color: '#f8f9fa',
                badge: '5 products available'
            },
            {
                id: 2,
                name: 'Bags',
                description: 'Custom-branded paper and plastic bags for retail and events.',
                price: 'Starting at $0.80',
                image: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?w=600',
                color: '#f8f9fa',
                badge: '3 products available'
            },
            {
                id: 3,
                name: 'Mailing & Supplies',
                description: 'Professional shipping mailers, tissue paper, and branding essentials.',
                price: 'Starting at $0.29',
                image: 'https://images.pexels.com/photos/4498140/pexels-photo-4498140.jpeg?w=600',
                color: '#f8f9fa',
                badge: '5 products available'
            },
            {
                id: 4,
                name: 'Food Packaging',
                description: 'Safe and stylish packaging solutions for your culinary creations.',
                price: 'Starting at $0.35',
                image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?w=600',
                color: '#f8f9fa',
                badge: '3 products available'
            }
        ],
        paperFinishes: [
            { name: 'Corrugated', icon: '📦', rating: 4.9, reviews: 12000 },
            { name: 'Kraft Paper', icon: '🛍️', rating: 4.7, reviews: 25000 },
            { name: 'Polyethylene', icon: '✉️', rating: 4.8, reviews: 8500 }
        ]
    },
    'invitations-stationery': {
        title: 'Invitations & Stationery',
        rating: 'Elegant designs for every occasion',
        description: 'Celebrate life\'s big moments with custom invitations and matching stationery.',
        promo: 'Wedding invitations starting at $0.49 each.',
        heroImage: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&q=80',
        categories: [
            {
                name: 'Invitations',
                items: [
                    { name: 'Wedding', link: '/category/invitations-stationery/wedding' },
                    { name: 'Party', link: '/category/invitations-stationery/party' }
                ]
            }
        ],
        mainProducts: [
            {
                id: 1,
                name: 'Wedding Invitations',
                description: 'Beautiful, high-quality cards for your special day.',
                price: 'Starting at $0.49',
                image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=400&h=300&fit=crop&q=80',
                color: '#f8f9fa'
            },
            {
                id: 2,
                name: 'Thank You Cards',
                description: 'Show your appreciation with personalized stationery.',
                price: 'Starting at $0.35',
                image: 'https://images.unsplash.com/photo-1594911772124-d1a1ca516548?w=400&h=300&fit=crop&q=80',
                color: '#f8f9fa'
            }
        ],
        paperFinishes: [
            { name: 'Pearl', icon: '✨', rating: 4.9, reviews: 8000 },
            { name: 'Linen', icon: '👔', rating: 4.8, reviews: 12000 }
        ]
    }
};
