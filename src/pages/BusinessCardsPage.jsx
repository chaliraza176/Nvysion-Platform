import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import CategoryPageLayout, {
    CategorySection,
    CategoryProductGrid,
    CategoryProductCard,
    CategoryTabs,
    CategoryPaperSelector,
    CategoryBanner,
    CategoryFAQ,
    CategoryTrustGrid,
    CategoryCTA
} from '../components/layout/CategoryPageLayout';
import './BusinessCardsPage.css';

const BusinessCardsPage = () => {
    const [selectedPaper, setSelectedPaper] = useState('matte');
    const [selectedTemplateTab, setSelectedTemplateTab] = useState('most-popular');
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    // Breadcrumb data
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Business Cards', link: '/business-cards' }
    ];

    // Hero section data
    const heroData = {
        title: 'Business Cards',
        reviews: 'Over 90,000 ★★★★★ business card reviews',
        description: 'Time-saving, budget-thinking, easy-to-customize business cards? Must be Nvysion Platform.',
        promo: 'Try 50 standard business cards for just $10.',
        buttons: [
            { label: 'Browse templates', variant: 'primary' },
            { label: 'Upload design', variant: 'secondary' },
            { label: 'Reorder', variant: 'tertiary' }
        ],
        image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop&q=80',
        imageAlt: 'Professional Business Cards'
    };

    // Categories for sidebar
    const sidebarCategories = [
        {
            title: 'Standard Cards',
            links: [
                { name: 'Matte', link: '/business-cards/standard' },
                { name: 'Glossy', link: '/business-cards/standard' },
                { name: 'Uncoated', link: '/business-cards/standard' },
                { name: 'Shop all standard cards', link: '/business-cards/standard', isShopAll: true }
            ]
        },
        {
            title: 'Unique Shapes',
            links: [
                { name: 'Rounded Corner', link: '/business-cards/unique-shapes' },
                { name: 'Square', link: '/business-cards/unique-shapes' },
                { name: 'Circle', link: '/business-cards/unique-shapes' },
                { name: 'Oval', link: '/business-cards/unique-shapes' },
                { name: 'Leaf', link: '/business-cards/unique-shapes' },
                { name: 'Shop all unique shapes', link: '/business-cards/unique-shapes', isShopAll: true }
            ]
        },
        {
            title: 'Fast-Delivery Cards',
            links: [
                { name: 'Next-Day', link: '/business-cards/fast-delivery' },
                { name: '2-Day', link: '/business-cards/fast-delivery' },
                { name: 'Shop all fast-delivery cards', link: '/business-cards/fast-delivery', isShopAll: true }
            ]
        },
        {
            title: 'Premium Cards',
            links: [
                { name: 'Soft Touch', link: '/business-cards/premium' },
                { name: 'Linen', link: '/business-cards/premium' },
                { name: 'Pearl', link: '/business-cards/premium' },
                { name: 'Premium Plus', link: '/business-cards/premium' },
                { name: 'Painted Edge', link: '/business-cards/premium' },
                { name: 'Ultra Thick', link: '/business-cards/premium' },
                { name: 'Plastic', link: '/business-cards/premium' },
                { name: 'Shop all premium cards', link: '/business-cards/premium', isShopAll: true }
            ]
        },
        {
            title: 'Special Finishes',
            links: [
                { name: 'Foil Accent', link: '/business-cards/special-finishes' },
                { name: 'Embossed Gloss', link: '/business-cards/special-finishes' },
                { name: 'Raised Foil', link: '/business-cards/special-finishes' },
                { name: 'Shop all special finishes', link: '/business-cards/special-finishes', isShopAll: true }
            ]
        },
        {
            title: 'Digital Business Cards',
            links: [
                { name: 'QR Code', link: '/business-cards/digital' },
                { name: 'NFC', link: '/business-cards/digital' }
            ]
        },
        {
            title: 'Holders & More',
            links: [
                { name: 'Business Card Holders', link: '/business-cards/holders-more' },
                { name: 'Magnetic Business Cards', link: '/business-cards/holders-more' },
                { name: 'Business Card Stickers', link: '/business-cards/holders-more' },
                { name: 'Loyalty Cards', link: '/business-cards/holders-more' },
                { name: 'Appointment Cards', link: '/business-cards/holders-more' },
                { name: 'Free Business Card Sample Kit', link: '/business-cards/holders-more' }
            ]
        }
    ];

    // Main card options
    const cardOptions = [
        {
            id: 'standard',
            slug: 'matte',
            name: 'Standard',
            badge: 'Try 50 for $10',
            description: 'Tried-and-true cards available in various papers, finishes and shapes.',
            rating: 4.7,
            reviews: 129233,
            price: '100 starting at $14.99',
            image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300&h=200&fit=crop&q=80',
            bgColor: '#1a365d'
        },
        {
            id: 'premium',
            slug: 'soft-touch',
            name: 'Premium',
            description: 'Refined cards crafted from premium materials, including plastic.',
            rating: 4.8,
            reviews: 1500,
            price: '100 starting at $18.99',
            image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=300&h=200&fit=crop&q=80',
            bgColor: '#c4a000'
        },
        {
            id: 'unique-shapes',
            slug: 'rounded-corner',
            name: 'Unique Shapes',
            description: 'Standout cards cut to unique shapes like leafs, squares and circles.',
            rating: 4.8,
            reviews: 13431,
            price: '100 starting at $21.99',
            image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop&q=80',
            bgColor: '#48bb78'
        },
        {
            id: 'special-finishes',
            slug: 'embossed-gloss',
            name: 'Special Finishes',
            description: 'Striking foil or gloss finishes for unmissable shimmer and shine.',
            rating: 4.3,
            reviews: 2642,
            price: '100 starting at $28.99',
            image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=300&h=200&fit=crop&q=80',
            bgColor: '#805ad5'
        }
    ];

    // Paper finishes
    const paperFinishes = [
        { id: 'matte', slug: 'matte', name: 'Matte', image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=80&h=80&fit=crop&q=80' },
        { id: 'glossy', slug: 'glossy', name: 'Glossy', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=80&h=80&fit=crop&q=80' },
        { id: 'embossed', slug: 'embossed-gloss', name: 'Embossed Gloss', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=80&h=80&fit=crop&q=80' },
        { id: 'uncoated', slug: 'uncoated', name: 'Uncoated', image: 'https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=80&h=80&fit=crop&q=80' },
        { id: 'plastic', slug: 'plastic', name: 'White Plastic', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=80&h=80&fit=crop&q=80' },
        { id: 'premium-plus', slug: 'premium-plus', name: 'Premium Plus', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=80&h=80&fit=crop&q=80' },
        { id: 'soft-touch', slug: 'soft-touch', name: 'Soft Touch', image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=80&h=80&fit=crop&q=80' },
        { id: 'foil', slug: 'foil-accent', name: 'Foil Accent', image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=80&h=80&fit=crop&q=80' },
        { id: 'painted-edge', slug: 'painted-edge', name: 'Painted Edge', image: 'https://images.unsplash.com/photo-1572119865084-43c285814d63?w=80&h=80&fit=crop&q=80' }
    ];

    const paperDetails = {
        matte: {
            name: 'Matte',
            rating: 4.7,
            reviews: 12716,
            description: 'Coated and classic, with a smooth shine-free finish.',
            highlights: [
                'Subtle & sophisticated',
                'Minimizes glare & reflections',
                'Best for displaying text & finer details in your design'
            ],
            options: {
                thickness: '14pt standard, 16pt premium, 18pt premium plus',
                shapes: 'Standard, square',
                corners: 'Standard, rounded',
                finishes: 'Metallic foil, raised finishes'
            },
            price: '100 starting at $14.99'
        },
        glossy: {
            name: 'Glossy',
            rating: 4.6,
            reviews: 8572,
            description: 'Shiny and vibrant, with a reflective finish that makes colors pop.',
            highlights: [
                'Vibrant & eye-catching',
                'Enhances color saturation',
                'Great for photo-heavy designs'
            ],
            options: {
                thickness: '14pt standard, 16pt premium',
                shapes: 'Standard, rounded corner',
                corners: 'Standard, rounded',
                finishes: 'Available with spot UV'
            },
            price: '100 starting at $14.99'
        },
        embossed: {
            name: 'Embossed Gloss',
            rating: 4.8,
            reviews: 2450,
            description: 'Raised gloss accents that add texture and dimension.',
            highlights: [
                'Textured & tactile',
                'Premium look and feel',
                'Stand out from the crowd'
            ],
            options: {
                thickness: '14pt with raised elements',
                shapes: 'Standard',
                corners: 'Standard, rounded',
                finishes: 'Raised gloss areas'
            },
            price: '100 starting at $24.99'
        }
    };

    // Template tabs
    const templateTabs = [
        { id: 'most-popular', name: 'Most Popular' },
        { id: 'agriculture', name: 'Agriculture & Farming' },
        { id: 'animals', name: 'Animals & Pet Care' },
        { id: 'appointment', name: 'Appointment Cards' },
        { id: 'arts', name: 'Arts, Crafts, & Design' }
    ];

    // Templates
    const templates = [
        { id: 1, slug: 'matte', name: 'Modern Minimal', image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300&h=180&fit=crop&q=80' },
        { id: 2, slug: 'glossy', name: 'Corporate Dark', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=300&h=180&fit=crop&q=80' },
        { id: 3, slug: 'embossed-gloss', name: 'Creative Design', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=180&fit=crop&q=80' },
        { id: 4, slug: 'matte', name: 'Upload Your Design', isUpload: true },
        { id: 5, slug: 'uncoated', name: 'Classic Elegant', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=180&fit=crop&q=80' },
        { id: 6, slug: 'soft-touch', name: 'Professional', image: 'https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=300&h=180&fit=crop&q=80' },
        { id: 7, slug: 'natural-textured', name: 'Photo Card', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=300&h=180&fit=crop&q=80' },
        { id: 8, slug: 'foil-accent', name: 'Gold Accent', image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=300&h=180&fit=crop&q=80' }
    ];

    // Shapes
    const shapes = [
        {
            id: 'rounded',
            slug: 'rounded-corner',
            name: 'Rounded Corners',
            description: 'Quarter-inch rounded corners for a clean and modern feel.',
            rating: 4.8,
            reviews: 13431,
            price: '$21.99',
            image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&h=120&fit=crop&q=80'
        },
        {
            id: 'square',
            slug: 'square',
            name: 'Square',
            badge: 'New options',
            description: 'A boxy style that gets noticed, with a rounded corners option.',
            rating: 4.6,
            reviews: 5476,
            price: '$25.99',
            image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=200&h=120&fit=crop&q=80'
        },
        {
            id: 'circle',
            slug: 'circle',
            name: 'Circle',
            description: 'A 2.5" diameter circle that puts your details front and center.',
            rating: 4.6,
            reviews: 242,
            price: '$39.99',
            image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=180&fit=crop&q=80'
        },
        {
            id: 'oval',
            slug: 'oval',
            name: 'Oval',
            description: 'An understated, eye-catching shape to showcase your style.',
            rating: 4.7,
            reviews: 56,
            price: '$39.99',
            image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=200&h=120&fit=crop&q=80'
        },
        {
            id: 'leaf',
            slug: 'leaf',
            name: 'Leaf',
            description: 'Alternating smooth and pointed corners for a bold, alternative look.',
            rating: 4.7,
            reviews: 119,
            price: '$29.99',
            image: 'https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=200&h=120&fit=crop&q=80'
        }
    ];

    // Business use cards
    const businessUseCards = [
        {
            id: 'nfc',
            slug: 'nfc',
            name: 'NFC Business Cards with VistaConnect',
            description: 'Custom cards that link online.',
            rating: 4.7,
            reviews: 22,
            price: '1 starting at $32.99',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&h=120&fit=crop&q=80'
        },
        {
            id: 'loyalty',
            slug: 'loyalty',
            name: 'Loyalty Business Cards',
            description: 'Punch and stamp templates, with space for logo and text.',
            rating: 4.8,
            reviews: 911,
            price: '100 starting at $14.99',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=120&fit=crop&q=80'
        },
        {
            id: 'qr',
            slug: 'qr-code',
            name: 'QR Code Business Cards',
            description: 'Scannable codes to help people connect with you online.',
            rating: 4.8,
            reviews: 2037,
            price: '100 starting at $14.99',
            image: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=200&h=120&fit=crop&q=80'
        },
        {
            id: 'appointment',
            slug: 'appointment',
            name: 'Appointment Cards',
            description: 'Pen-friendly templates for a handy scheduling tool.',
            rating: 4.8,
            reviews: 216,
            price: '100 starting at $18.99',
            image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=200&h=120&fit=crop&q=80'
        }
    ];

    // Card Holders
    const cardHolders = [
        {
            id: 'black-acrylic',
            slug: 'holders',
            name: 'Black Acrylic Business Card Holders',
            description: 'Smooth black acrylic with custom front printing. Holds up to 40 cards.',
            rating: 4.9,
            reviews: 1166,
            image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=120&fit=crop&q=80'
        },
        {
            id: 'clear-acrylic',
            slug: 'holders',
            name: 'Clear Acrylic Business Card Holders',
            description: 'Budget-friendly acrylic with optional front printing. Holds up to 40 cards.',
            rating: 4.9,
            reviews: 1166,
            image: 'https://images.unsplash.com/photo-1572119865084-43c285814d63?w=200&h=120&fit=crop&q=80'
        },
        {
            id: 'steel-desk',
            slug: 'holders',
            name: 'Steel Desk Business Card Holders',
            description: 'Solid black base for tabletop use. Hold up to 60 standard cards.',
            rating: 4.9,
            reviews: 1409,
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=120&fit=crop&q=80'
        },
        {
            id: 'leather',
            slug: 'holders',
            name: 'Black Leather Vertical Business Card Holders',
            description: 'Leather with metal and fabric details. Hold up to 25 standard cards.',
            rating: 4.7,
            reviews: 1298,
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=120&fit=crop&q=80'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'What size are business cards?',
            answer: `That depends on the shape you choose. Here's a rundown of our business card sizes by shape:
• Standard: 3.5" x 2"
• Rounded Corners: 3.5" x 2"
• Square: 2.5" x 2.5"
• Circle: 2.5" diameter
• Oval: 3.5" x 2"
• Leaf: 3.5" x 2"

Note: Square and circle business cards exceed the height of a standard wallet. Consider one of our other options if you're looking for wallet-sized business cards.`
        },
        {
            question: 'How thick is a business card?',
            answer: `Business card thickness is usually measured in "points," abbreviated as "pt." The higher the number, the thicker the card. Standard business card thickness is 14pt, but weights can vary by paper type. For instance, our ultra thick business cards are actually 32pt, and our premium plus cards come in at 18pt.`
        },
        {
            question: 'How do I design a custom business card online?',
            answer: `It can be hard to know where to start when you're creating a new card online. But with Nvysion Platform, you can quickly browse ready-to-use templates in a range of styles. When you find something that fits your needs (and personality), you can add your own custom text, logo and even images. Then, you can fine tune the font, layout and even colors until you're satisfied. And you can always check out your card in a 3D preview to make sure everything's just right.`
        },
        {
            question: 'What are the most important elements to include on a business card?',
            answer: `Every business is different, but there are a few things anyone should have on their card. You'll want to include your name, the name of your business, your contact info and your logo. Then, you can also add optional elements like photos, artwork, customer testimonials, a brand motto and more – whatever you think will connect with potential customers and business partners.`
        },
        {
            question: 'Should I put anything on the back of my business card?',
            answer: `You don't need to, but you certainly can. Some people put their logo or slogan on the backside of their card. Others will list their company website or hours of operation for quick reference at a glance. And there are lots of other options, too – coupons, photos, artwork and more.`
        },
        {
            question: 'How quickly can I receive my order?',
            answer: `We have a variety of delivery options, including economy, standard and express. Check out our shipping guide for more details.`
        },
        {
            question: 'Can I order sample business cards?',
            answer: `Yes. Our free business card sample kit includes examples of unique paper stocks, finishes shapes and more.`
        },
        {
            question: 'What material and finish should I use for my custom business card?',
            answer: `You want to find something that matches up well with both your industry and your personality. Thicker, heavier stocks can work well for businesses trying to project strength and reliability. More textured, unique finishes are a great choice for craftspeople and artists. And if you go for a standard or rounded corner business card, finishes like embossed gloss and foil accents can help almost any design be extra eye-catching.`
        }
    ];

    // Trust features
    const trustFeatures = [
        {
            icon: '⭐',
            title: '5-star quality for $15 (or less)',
            description: "Business cards are kinda our thing. There's nowhere else you can expect results this good for a price this low."
        },
        {
            icon: '👥',
            title: '75 million+ customers',
            description: 'In fact, more people come to us for business cards than any other company. Why go anywhere else?'
        },
        {
            icon: '🚀',
            title: 'Fast, express shipping options',
            description: 'Pair that with user-friendly design tools (and help on standby), and getting your new cards is a breeze.'
        }
    ];

    const currentPaperDetail = paperDetails[selectedPaper] || paperDetails.matte;

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <CategoryPageLayout
            breadcrumbs={breadcrumbs}
            heroTitle={heroData.title}
            heroReviews={heroData.reviews}
            heroDescription={heroData.description}
            heroPromo={heroData.promo}
            heroButtons={heroData.buttons}
            heroImage={heroData.image}
            heroImageAlt={heroData.imageAlt}
            sidebarTitle="Business Cards"
            sidebarCategories={sidebarCategories}
        >
            {/* Explore Section */}
            <CategorySection
                title="Explore all your business card options"
                subtitle="From standard to standout shapes, get a look that pairs perfectly with your design."
            >
                <CategoryProductGrid columns={4}>
                    {cardOptions.map(option => (
                        <CategoryProductCard
                            key={option.id}
                            image={option.image}
                            name={option.name}
                            description={option.description}
                            rating={option.rating}
                            reviews={option.reviews}
                            price={option.price}
                            badge={option.badge}
                            link={`/category/business-cards/${option.slug}`}
                        />
                    ))}
                </CategoryProductGrid>
            </CategorySection>

            {/* Compare Papers Section */}
            <CategorySection
                title="Compare papers & finishes"
                subtitle="Find your business's unique style in just a few clicks."
            >
                <CategoryPaperSelector
                    papers={paperFinishes}
                    selectedPaper={selectedPaper}
                    onSelect={setSelectedPaper}
                />

                <div className="bc-paper-detail">
                    <div className="bc-paper-preview">
                        <div className="bc-paper-card">
                            <span className="bc-preview-name">KATE MULLEN</span>
                            <span className="bc-preview-url">www.mullendesign.web</span>
                        </div>
                    </div>
                    <div className="bc-paper-info">
                        <h3 className="bc-paper-title">
                            {currentPaperDetail.name}
                            <span className="bc-rating-inline">
                                <span className="bc-stars">★★★★★</span>
                                {currentPaperDetail.rating} ({currentPaperDetail.reviews.toLocaleString()})
                            </span>
                        </h3>
                        <p className="bc-paper-desc">{currentPaperDetail.description}</p>

                        <div className="bc-paper-details-grid">
                            <div className="bc-detail-block">
                                <h4>Highlights</h4>
                                <ul>
                                    {currentPaperDetail.highlights.map((h, i) => (
                                        <li key={i}>{h}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bc-detail-block">
                                <h4>Options</h4>
                                <ul>
                                    <li><strong>Thickness:</strong> {currentPaperDetail.options.thickness}</li>
                                    <li><strong>Shapes:</strong> {currentPaperDetail.options.shapes}</li>
                                    <li><strong>Corners:</strong> {currentPaperDetail.options.corners}</li>
                                    <li><strong>Special finishes:</strong> {currentPaperDetail.options.finishes}</li>
                                </ul>
                            </div>
                        </div>

                        <Link to="#" className="bc-view-details">View full details</Link>
                        <p className="bc-paper-price">{currentPaperDetail.price}</p>

                        <div className="bc-paper-buttons">
                            <Link
                                to={`/category/business-cards/${currentPaperDetail.slug || selectedPaper}`}
                                className="bc-btn bc-btn-blue"
                                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                Browse designs
                            </Link>
                            <Link
                                to={`/category/business-cards/${currentPaperDetail.slug || selectedPaper}`}
                                className="bc-btn bc-btn-outline"
                                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                Upload your design
                            </Link>
                        </div>
                    </div>
                </div>
            </CategorySection>

            {/* Popular Templates Section */}
            <CategorySection
                title="Popular templates"
                subtitle="Check out best-selling design templates for your type of business. Simply plug in your info to use them as a starting point for creating your card."
            >
                <CategoryTabs
                    tabs={templateTabs}
                    activeTab={selectedTemplateTab}
                    onTabChange={setSelectedTemplateTab}
                />

                <div className="bc-templates-grid">
                    {templates.map(template => (
                        <Link
                            key={template.id}
                            to={`/category/business-cards/${template.slug}`}
                            className="bc-template-card"
                        >
                            <div className="bc-template-preview">
                                {template.isUpload ? (
                                    <div className="bc-upload-content">
                                        <span className="bc-upload-icon">📤</span>
                                        <span>Upload Your Design</span>
                                    </div>
                                ) : (
                                    <img src={template.image} alt={template.name} loading="lazy" />
                                )}
                            </div>
                            <span className="bc-template-name">{template.name}</span>
                        </Link>
                    ))}
                </div>

                <div className="bc-browse-all">
                    <Link to="#" className="bc-browse-link">Browse all templates →</Link>
                </div>
            </CategorySection>

            {/* Shop by Shape Section */}
            <CategorySection
                title="Shop by shape"
                subtitle="Go for standard cards or try an interesting, unexpected shape."
            >
                <CategoryProductGrid columns={5}>
                    {shapes.map(shape => (
                        <CategoryProductCard
                            key={shape.id}
                            image={shape.image}
                            name={shape.name}
                            description={shape.description}
                            rating={shape.rating}
                            reviews={shape.reviews}
                            price={`100 starting at ${shape.price}`}
                            badge={shape.badge}
                            link={`/category/business-cards/${shape.slug}`}
                        />
                    ))}
                </CategoryProductGrid>
            </CategorySection>

            {/* Next-Day & 2-Day Delivery Banner */}
            <CategorySection>
                <CategoryBanner
                    title="Next-Day & 2-Day Business Cards"
                    description="No time? No problem. Get high-quality business cards on the fly."
                    buttons={[
                        { label: 'Shop next-day delivery', variant: 'white' },
                        { label: 'Shop 2-day delivery', variant: 'white' },
                        { label: 'Shop all', variant: 'white-outline' }
                    ]}
                    image="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=300&h=200&fit=crop&q=80"
                    variant="dark"
                />
            </CategorySection>

            {/* Shop by Business Use Section */}
            <CategorySection title="Shop by business use">
                <CategoryProductGrid columns={4}>
                    {businessUseCards.map(card => (
                        <CategoryProductCard
                            key={card.id}
                            image={card.image}
                            name={card.name}
                            description={card.description}
                            rating={card.rating}
                            reviews={card.reviews}
                            price={card.price}
                            link={`/category/business-cards/${card.slug}`}
                        />
                    ))}
                </CategoryProductGrid>
            </CategorySection>

            {/* Card Holders Section */}
            <CategorySection
                title="Shop card holders"
                subtitle="Keep cards handy with pocket-sized holders and displays."
            >
                <CategoryProductGrid columns={4}>
                    {cardHolders.map(holder => (
                        <CategoryProductCard
                            key={holder.id}
                            image={holder.image}
                            name={holder.name}
                            description={holder.description}
                            rating={holder.rating}
                            reviews={holder.reviews}
                            link={`/category/business-cards/${holder.slug}`}
                        />
                    ))}
                </CategoryProductGrid>
            </CategorySection>

            {/* Sample Kit Section */}
            <CategorySection>
                <div className="bc-sample-section">
                    <div className="bc-sample-content">
                        <h3>Free Business Card Sample Kit</h3>
                        <p className="bc-sample-quote">
                            "These cards are such a great way to physically feel and see what each card will be like."
                        </p>
                        <button className="bc-btn bc-btn-outline">Shop free sample kit</button>
                    </div>
                </div>
            </CategorySection>

            {/* Trust Features */}
            <CategorySection>
                <CategoryTrustGrid features={trustFeatures} />
            </CategorySection>

            {/* Cut Through Noise Section */}
            <CategorySection>
                <div className="bc-noise-section">
                    <h2>Cut through the noise with a one-of-a-kind Nvysion Platform business card.</h2>
                    <p>
                        Wherever you are (and whatever you do) as a business, Nvysion Platform has the options you need to create a custom business card you love. Browse designs, styles, papers and finishes that fit your brand's vibe to a tee. Add personal touches and custom content with our user-friendly design tools. And stock up on high-quality cards at low, budget-saving prices.
                    </p>
                    <p>
                        Custom business card printing doesn't need to be difficult or expensive. And creating a one-of-a-kind card that gets customers' attention? We've helped millions of businesses around the world do just that. So whether you want a simple, striking design, a fun and flamboyant look or a linkable QR code, you're in exactly the right place. It's time to get creative and take your marketing to the next level.
                    </p>
                </div>
            </CategorySection>

            {/* Final CTA Section */}
            <CategorySection>
                <CategoryCTA
                    title="Ready to make your mark?"
                    subtitle="Create professional business cards that leave a lasting impression. Start designing today and get 50 cards for just $10."
                    buttons={[
                        { label: 'Start Designing', variant: 'primary', link: '/category/business-cards/matte' },
                        { label: 'View All Options', variant: 'secondary', link: '/business-cards' }
                    ]}
                    variant="gradient"
                    align="center"
                />
            </CategorySection>

            {/* FAQ Section */}
            <CategorySection title="Frequently asked questions">
                <CategoryFAQ
                    faqData={faqData}
                    openIndex={openFaqIndex}
                    onToggle={toggleFaq}
                />
            </CategorySection>
        </CategoryPageLayout>
    );
};

export default BusinessCardsPage;
