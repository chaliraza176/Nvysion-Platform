import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryPageLayout, {
    CategorySection,
    CategoryProductGrid,
    CategoryProductCard,
    CategoryTabs,
    CategoryBanner,
    CategoryTrustGrid,
    CategoryFAQ,
    CategoryCTA
} from '../components/layout/CategoryPageLayout';
import './TwoDayDeliveryPage.css';

const TwoDayDeliveryPage = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [openFaq, setOpenFaq] = useState(null);

    // Navigation tabs
    const tabs = [
        { id: 'all', name: 'All 2-day products' },
        { id: 'business', name: 'Business essentials' },
        { id: 'signs', name: 'Signs & banners' },
        { id: 'marketing', name: 'Marketing materials' },
        { id: 'stationery', name: 'Stationery' }
    ];

    // 2-day business cards & marketing materials
    const businessCards = [
        { id: 1, name: 'Standard Business Cards', image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&h=150&fit=crop&q=80', slug: 'standard-business-cards' },
        { id: 2, name: 'Rounded Corner Cards', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=200&h=150&fit=crop&q=80', slug: 'rounded-corner-cards' },
        { id: 3, name: 'Square Business Cards', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&h=150&fit=crop&q=80', slug: 'square-business-cards' },
        { id: 4, name: 'Postcards', image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&h=150&fit=crop&q=80', slug: 'postcards' },
        { id: 5, name: 'Flyers', image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=150&fit=crop&q=80', slug: 'flyers' },
        { id: 6, name: 'Brochures', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=150&fit=crop&q=80', slug: 'brochures' }
    ];

    // 2-day signs
    const signs = [
        { id: 1, name: 'Yard Signs', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=250&h=180&fit=crop&q=80', slug: 'yard-signs' },
        { id: 2, name: 'Foam Board Signs', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=250&h=180&fit=crop&q=80', slug: 'foam-board-signs' },
        { id: 3, name: 'Posters', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=250&h=180&fit=crop&q=80', slug: 'posters' },
        { id: 4, name: 'Vinyl Banners', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=250&h=180&fit=crop&q=80', slug: 'vinyl-banners' },
        { id: 5, name: 'Retractable Banners', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=250&h=180&fit=crop&q=80', slug: 'retractable-banners' },
        { id: 6, name: 'A-Frame Signs', image: 'https://images.unsplash.com/photo-1572119865084-43c285814d63?w=250&h=180&fit=crop&q=80', slug: 'a-frame-signs' }
    ];

    // 2-day personalized products
    const personalizedProducts = [
        { id: 1, name: 'Photo Books', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=180&h=180&fit=crop&q=80', slug: 'photo-books' },
        { id: 2, name: 'Canvas Prints', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=180&h=180&fit=crop&q=80', slug: 'canvas-prints' },
        { id: 3, name: 'Photo Calendars', image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=180&h=180&fit=crop&q=80', slug: 'photo-calendars' },
        { id: 4, name: 'Photo Mugs', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=180&h=180&fit=crop&q=80', slug: 'photo-mugs' }
    ];

    // 2-day marketing supplies
    const marketingSupplies = [
        { id: 1, name: 'Pens & Pencils', image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=280&h=200&fit=crop&q=80', slug: 'pens-pencils' },
        { id: 2, name: 'Drinkware', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=280&h=200&fit=crop&q=80', slug: 'drinkware' },
        { id: 3, name: 'Notebooks', image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=280&h=200&fit=crop&q=80', slug: 'notebooks' },
        { id: 4, name: 'Tote Bags', image: 'https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?w=280&h=200&fit=crop&q=80', slug: 'tote-bags' }
    ];

    // Breadcrumb data
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: '2-Day Delivery', link: '/2-day-delivery' }
    ];

    // Sidebar categories
    const sidebarCategories = [
        {
            title: 'Business Essentials',
            links: [
                { name: 'Business Cards', link: '/category/business-cards' },
                { name: 'Postcards', link: '/category/marketing' },
                { name: 'Flyers', link: '/category/marketing' },
                { name: 'Brochures', link: '/category/marketing' }
            ]
        },
        {
            title: 'Signs & Banners',
            links: [
                { name: 'Yard Signs', link: '/category/signs' },
                { name: 'Vinyl Banners', link: '/category/signs' },
                { name: 'Posters', link: '/category/signs' },
                { name: 'Shop all signs', link: '/category/signs', isShopAll: true }
            ]
        },
        {
            title: 'Promotional',
            links: [
                { name: 'Pens & Pencils', link: '/category/promotional' },
                { name: 'Drinkware', link: '/category/promotional' },
                { name: 'Tote Bags', link: '/category/promotional' }
            ]
        }
    ];

    // Trust features
    const trustFeatures = [
        {
            icon: '🚀',
            title: '2-Day Turnaround',
            description: 'Order before 6 PM ET and receive in 2 business days'
        },
        {
            icon: '⭐',
            title: 'Premium Quality',
            description: 'Professional-grade materials and printing'
        },
        {
            icon: '💯',
            title: '100% Satisfaction',
            description: 'We stand behind every product we make'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'What does 2-day delivery mean?',
            answer: 'When you select 2-day delivery, your order will be printed and shipped to arrive within 2 business days after production is complete. Orders must be placed before 6 PM ET on business days to qualify.'
        },
        {
            question: 'Which products are eligible for 2-day delivery?',
            answer: 'Many of our popular products are eligible including business cards, postcards, flyers, banners, yard signs, posters, and select promotional items. Look for the "2-Day Delivery" badge on product pages.'
        },
        {
            question: 'What is the cutoff time for 2-day orders?',
            answer: 'Orders must be placed and approved by 6 PM ET Monday through Friday. Orders placed after 6 PM ET or on weekends will begin production the next business day.'
        },
        {
            question: 'Is 2-day delivery available in my area?',
            answer: 'Availability depends on your location and carrier coverage. Enter your ZIP code during checkout to see available shipping options and estimated delivery dates.'
        }
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <CategoryPageLayout
            breadcrumbs={breadcrumbs}
            heroTitle="2-Day Delivery on Top Printing Products"
            heroReviews="Fast turnaround for when you need it most"
            heroDescription="Get what you need fast with our selection of products available for 2-day delivery. Order before 6 PM ET for the fastest turnaround."
            heroPromo="🚀 Order now for delivery in 2 business days"
            heroButtons={[
                { label: 'Shop All 2-Day Products', variant: 'primary' },
                { label: 'Learn More', variant: 'secondary' }
            ]}
            heroImage="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop&q=80"
            heroImageAlt="2-Day Delivery Products"
            sidebarTitle="2-Day Products"
            sidebarCategories={sidebarCategories}
        >
            {/* Tabs Navigation */}
            <CategorySection>
                <CategoryTabs
                    tabs={tabs}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />
            </CategorySection>

            {/* Business Cards & Marketing Materials */}
            <CategorySection
                title="2-day business cards & marketing materials"
                subtitle="Get the essentials you need to make a great impression."
            >
                <CategoryProductGrid columns={3}>
                    {businessCards.map(item => (
                        <CategoryProductCard
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            rating={4.8}
                            reviews={Math.floor(Math.random() * 3000 + 500)}
                            price="Starting at $14.99"
                            badge="2-Day"
                            link={`/category/business-cards/${item.slug}`}
                        />
                    ))}
                </CategoryProductGrid>
            </CategorySection>

            {/* Signs */}
            <CategorySection
                title="2-day signs"
                subtitle="Let people know what's happening with fast-turnaround signage for any occasion."
            >
                <CategoryProductGrid columns={3}>
                    {signs.map(item => (
                        <CategoryProductCard
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            rating={4.7}
                            reviews={Math.floor(Math.random() * 2000 + 300)}
                            price="Starting at $19.99"
                            badge="2-Day"
                            link={`/category/signs/${item.slug}`}
                        />
                    ))}
                </CategoryProductGrid>
            </CategorySection>

            {/* Personalized Products */}
            <CategorySection
                title="2-day personalized products"
                subtitle="Add a personal touch to gifts and keepsakes with custom photo products."
            >
                <CategoryProductGrid columns={4}>
                    {personalizedProducts.map(item => (
                        <CategoryProductCard
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            rating={4.9}
                            reviews={Math.floor(Math.random() * 1500 + 200)}
                            price="Starting at $24.99"
                            badge="2-Day"
                            link={`/category/gifts/${item.slug}`}
                        />
                    ))}
                </CategoryProductGrid>
            </CategorySection>

            {/* Marketing Supplies */}
            <CategorySection
                title="2-day marketing supplies"
                subtitle="Spread the word about your business with branded promotional items."
            >
                <CategoryProductGrid columns={4}>
                    {marketingSupplies.map(item => (
                        <CategoryProductCard
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            rating={4.6}
                            reviews={Math.floor(Math.random() * 1000 + 100)}
                            price="Starting at $9.99"
                            badge="2-Day"
                            link={`/category/promotional/${item.slug}`}
                        />
                    ))}
                </CategoryProductGrid>
            </CategorySection>

            {/* Support Banner */}
            <CategorySection>
                <CategoryBanner
                    title="Have questions? Our team has you covered."
                    description="Get help with your order, design, or anything else you need."
                    buttons={[
                        { label: 'Chat with us', variant: 'white', link: '/help' }
                    ]}
                    image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=200&fit=crop&q=80"
                    variant="dark"
                />
            </CategorySection>

            {/* Trust Features */}
            <CategorySection>
                <CategoryTrustGrid features={trustFeatures} />
            </CategorySection>

            {/* Why Nvysion Platform Section */}
            <CategorySection>
                <div className="td-why-section">
                    <div className="td-why-content">
                        <h2>Why Nvysion Platform?</h2>
                        <h3>You want it, we've got it. Need it fast? We do that too.</h3>
                        <p>
                            Nvysion Platform has been helping small businesses and individuals create custom printed
                            products for over 20 years. From business cards to banners, we offer a wide range
                            of products with fast turnaround times and quality you can count on.
                        </p>
                        <ul className="td-why-list">
                            <li>✓ Quality printing with attention to detail</li>
                            <li>✓ Fast turnaround with 2-day delivery options</li>
                            <li>✓ Easy-to-use design tools</li>
                            <li>✓ 100% satisfaction guarantee</li>
                        </ul>
                    </div>
                    <div className="td-why-image">
                        <img src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=350&fit=crop&q=80" alt="Nvysion Platform products" />
                    </div>
                </div>
            </CategorySection>

            {/* CTA Section */}
            <CategorySection>
                <CategoryCTA
                    title="Need it fast? We've got you covered."
                    subtitle="Order before 6 PM ET and get your products in just 2 business days. Fast, reliable, and high-quality."
                    buttons={[
                        { label: 'Shop 2-Day Products', variant: 'primary', link: '/2-day-delivery' },
                        { label: 'View All Products', variant: 'secondary', link: '/' }
                    ]}
                    variant="primary"
                    align="center"
                />
            </CategorySection>

            {/* FAQ Section */}
            <CategorySection title="Frequently asked questions">
                <CategoryFAQ
                    faqData={faqData}
                    openIndex={openFaq}
                    onToggle={toggleFaq}
                />
            </CategorySection>
        </CategoryPageLayout>
    );
};

export default TwoDayDeliveryPage;
