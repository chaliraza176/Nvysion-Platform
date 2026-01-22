import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { mainCategories, categoryPageData } from '../data/categoriesData';
import { getCategoryBySlug } from '../services/api';
import CategoryPageLayout, {
    CategorySection,
    CategoryProductGrid,
    CategoryProductCard,
    CategoryTrustGrid,
    CategoryFAQ,
    CategoryCTA
} from '../components/layout/CategoryPageLayout';
import { categoryVisuals, specificProductData } from '../data/productData';
import './GenericCategoryPage.css';

const GenericCategoryPage = () => {
    const { slug } = useParams();
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const [apiCategory, setApiCategory] = useState(null);
    const [loading, setLoading] = useState(true);

    // Find the category data
    const mockCategory = mainCategories.find(cat => cat.slug === slug);

    useEffect(() => {
        const fetchCategory = async () => {
            setLoading(true);
            try {
                const data = await getCategoryBySlug(slug);
                if (data) setApiCategory(data);
            } catch (error) {
                console.error('Failed to fetch category from API:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCategory();
    }, [slug]);

    const category = apiCategory || mockCategory;
    const pageData = categoryPageData[slug] || {};
    const images = categoryVisuals[slug] || { hero: category?.image, products: [] };

    if (!category) {
        return (
            <div className="category-not-found">
                <div className="container">
                    <h1>Category Not Found</h1>
                    <p>The category you're looking for doesn't exist.</p>
                    <Link to="/" className="btn btn-primary">Go Home</Link>
                </div>
            </div>
        );
    }

    // Generate products with images
    const generateProducts = (items, subcatIndex) => {
        return items.map((item, index) => {
            const specificData = specificProductData[item.slug];
            return {
                id: `${slug}-${item.slug}-${index}`,
                name: item.name,
                slug: item.slug,
                rating: (4.5 + Math.random() * 0.4).toFixed(1),
                reviews: Math.floor(Math.random() * 5000) + 100,
                price: specificData ? specificData.price : (9.99 + Math.random() * 30).toFixed(2),
                image: (specificData && specificData.images) ? specificData.images[0] : (images.products[index % images.products.length] || category.image)
            };
        });
    };

    // Breadcrumb data
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: category.name, link: `/category/${slug}` }
    ];

    // Hero data
    const heroButtons = [
        { label: 'Browse templates', variant: 'primary' },
        { label: 'Upload design', variant: 'secondary' }
    ];

    // Sidebar categories from subcategories
    const sidebarCategories = category.subcategories.map(subcat => ({
        title: subcat.name,
        links: [
            ...subcat.items.map(item => ({
                name: item.name,
                link: `/category/${category.slug}/${item.slug}`
            })),
            {
                name: `Shop all ${subcat.name.toLowerCase()}`,
                link: `/category/${category.slug}`,
                isShopAll: true
            }
        ]
    }));

    // Trust features
    const trustFeatures = [
        {
            icon: '⭐',
            title: 'Premium Quality',
            description: 'Professional-grade materials and printing for exceptional results every time.'
        },
        {
            icon: '🚚',
            title: 'Fast Shipping',
            description: 'Quick turnaround with 2-day and next-day delivery options available.'
        },
        {
            icon: '💯',
            title: 'Satisfaction Guaranteed',
            description: '100% satisfaction guarantee on all products. We stand behind our work.'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: `What types of ${category.name.toLowerCase()} do you offer?`,
            answer: `We offer a wide variety of ${category.name.toLowerCase()} including ${category.subcategories.map(s => s.name.toLowerCase()).join(', ')}. Each type comes with multiple customization options to fit your specific needs.`
        },
        {
            question: 'How long does production and shipping take?',
            answer: 'Standard production takes 3-5 business days. We also offer rush options including 2-day and next-day delivery for select products. Shipping times vary based on your location and chosen shipping method.'
        },
        {
            question: 'Can I upload my own design?',
            answer: 'Yes! You can upload your own design in various formats including PDF, PNG, JPG, and AI files. Our design tool also allows you to create from scratch or customize one of our professional templates.'
        },
        {
            question: 'What is your satisfaction guarantee?',
            answer: "We stand behind every product we make. If you're not 100% satisfied with your order, contact us and we'll make it right with a reprint or refund."
        }
    ];

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <CategoryPageLayout
            breadcrumbs={breadcrumbs}
            heroTitle={category.name}
            heroReviews="Trusted by millions of businesses worldwide"
            heroDescription={pageData.description || `Professional ${category.name.toLowerCase()} to help your business stand out.`}
            heroPromo={pageData.promo}
            heroButtons={heroButtons}
            heroImage={images.hero || category.image}
            heroImageAlt={category.name}
            sidebarTitle={category.name}
            sidebarCategories={sidebarCategories}
        >
            {/* Explore Section */}
            <CategorySection
                title={`Explore all ${category.name.toLowerCase()} options`}
                subtitle={`Find the perfect ${category.name.toLowerCase()} for your business needs.`}
            >
                <CategoryProductGrid columns={4}>
                    {category.subcategories.slice(0, 4).map((subcat, idx) => (
                        <CategoryProductCard
                            key={idx}
                            image={specificProductData[subcat.items[0]?.slug]?.images?.[0] || images.products[idx % images.products.length] || category.image}
                            name={subcat.name}
                            description={`${subcat.items.length} products available`}
                            rating={4.7}
                            reviews={Math.floor(Math.random() * 5000 + 1000)}
                            price={`Starting at $${specificProductData[subcat.items[0]?.slug]?.price || '9.99'}`}
                            link={`/category/${category.slug}/${subcat.items[0]?.slug}`}
                        />
                    ))}
                </CategoryProductGrid>
            </CategorySection>

            {/* Products by Subcategory */}
            {category.subcategories.map((subcat, idx) => (
                <CategorySection
                    key={idx}
                    title={subcat.name}
                    subtitle={`Browse our selection of ${subcat.name.toLowerCase()}.`}
                >
                    <CategoryProductGrid columns={4}>
                        {generateProducts(subcat.items, idx).map(product => (
                            <CategoryProductCard
                                key={product.id}
                                image={product.image}
                                name={product.name}
                                rating={product.rating}
                                reviews={product.reviews}
                                price={`Starting at $${product.price}`}
                                link={`/category/${category.slug}/${product.slug}`}
                            />
                        ))}
                    </CategoryProductGrid>
                </CategorySection>
            ))}

            {/* Trust Features */}
            <CategorySection>
                <CategoryTrustGrid features={trustFeatures} />
            </CategorySection>

            {/* Info Section */}
            <CategorySection>
                <div className="gcp-info-section">
                    <h2>Why choose Nvysion Platform for {category.name}?</h2>
                    <p>
                        At Nvysion Platform, we're committed to helping businesses of all sizes succeed with
                        high-quality {category.name.toLowerCase()}. Whether you're a startup looking to make
                        your first impression or an established business refreshing your brand, we have
                        the options you need at prices that work for your budget.
                    </p>
                    <p>
                        With easy-to-use design tools, professional templates, and expert design services,
                        creating custom {category.name.toLowerCase()} has never been easier. Plus, with our
                        satisfaction guarantee, you can order with confidence knowing we stand behind every product.
                    </p>
                </div>
            </CategorySection>

            {/* CTA Section */}
            <CategorySection>
                <CategoryCTA
                    title={`Ready to create your ${category.name.toLowerCase()}?`}
                    subtitle={`Start designing professional ${category.name.toLowerCase()} that make an impression. Easy to customize, fast to deliver.`}
                    buttons={[
                        { label: 'Start Designing', variant: 'primary', link: `/category/${slug}` },
                        { label: 'Browse Templates', variant: 'secondary', link: `/category/${slug}` }
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

export default GenericCategoryPage;
