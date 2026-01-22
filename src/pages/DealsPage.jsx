import React from 'react';
import { Link } from 'react-router-dom';
import { mainCategories } from '../data/categoriesData';
import CategoryPageLayout, {
    CategorySection,
    CategoryProductGrid,
    CategoryProductCard,
    CategoryTrustGrid,
    CategoryCTA
} from '../components/layout/CategoryPageLayout';
import './DealsPage.css';

const DealsPage = () => {
    // Generate deals from main categories
    const dealsProducts = mainCategories.map((category, index) => ({
        ...category,
        originalPrice: 29.99 + (index * 10),
        dealPrice: 17.99 + (index * 5),
        discount: 40,
        endDate: 'January 15, 2026'
    }));

    // Breadcrumb data
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Deals & Discounts', link: '/deals' }
    ];

    // Hero buttons
    const heroButtons = [
        { label: 'Shop All Deals', variant: 'primary' },
        { label: 'View Categories', variant: 'secondary' }
    ];

    // Trust features for deals
    const dealFeatures = [
        {
            icon: '✓',
            title: 'No Code Needed',
            description: 'Discounts automatically applied at checkout'
        },
        {
            icon: '🚀',
            title: 'Fast Shipping',
            description: 'Free shipping on orders over $50'
        },
        {
            icon: '💯',
            title: 'Quality Guarantee',
            description: '100% satisfaction or your money back'
        }
    ];

    return (
        <CategoryPageLayout
            breadcrumbs={breadcrumbs}
            heroTitle="🎉 Amazing Deals & Discounts"
            heroReviews="Limited time offer - Ends soon!"
            heroDescription="Save up to 40% on select products. Don't miss out on these incredible savings!"
            heroPromo="⏰ Shop now before these deals expire"
            heroButtons={heroButtons}
            heroImage="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=600&h=400&fit=crop&q=80"
            heroImageAlt="Special Deals"
            sidebarTitle="Deal Categories"
            sidebarCategories={[
                {
                    title: 'By Category',
                    links: mainCategories.slice(0, 6).map(cat => ({
                        name: cat.name,
                        link: `/category/${cat.slug}`
                    }))
                },
                {
                    title: 'By Discount',
                    links: [
                        { name: 'Up to 25% Off', link: '/deals' },
                        { name: '25-40% Off', link: '/deals' },
                        { name: '40%+ Off', link: '/deals', isShopAll: true }
                    ]
                }
            ]}
        >
            {/* Hot Deals Section */}
            <CategorySection
                title="Hot Deals"
                subtitle="Don't miss out on these incredible savings"
            >
                <CategoryProductGrid columns={4}>
                    {dealsProducts.map(product => (
                        <CategoryProductCard
                            key={product.id}
                            image={product.image || 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=300&h=200&fit=crop&q=80'}
                            name={product.name}
                            description={`Save $${(product.originalPrice - product.dealPrice).toFixed(2)}`}
                            rating={4.8}
                            reviews={Math.floor(Math.random() * 5000 + 500)}
                            price={`$${product.dealPrice.toFixed(2)} (was $${product.originalPrice.toFixed(2)})`}
                            badge={`-${product.discount}%`}
                            link={`/category/${product.slug}`}
                        />
                    ))}
                </CategoryProductGrid>
            </CategorySection>

            {/* Deal Features */}
            <CategorySection>
                <CategoryTrustGrid features={dealFeatures} />
            </CategorySection>

            {/* CTA Section */}
            <CategorySection>
                <CategoryCTA
                    title="Don't Miss These Limited-Time Offers!"
                    subtitle="Shop now and save up to 40% on your favorite products. Free shipping on orders over $50."
                    buttons={[
                        { label: 'Shop All Deals', variant: 'primary', link: '/deals' },
                        { label: 'View Categories', variant: 'secondary', link: '/' }
                    ]}
                    variant="primary"
                    align="center"
                />
            </CategorySection>
        </CategoryPageLayout>
    );
};

export default DealsPage;
