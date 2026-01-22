import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryPageLayout.css';

/**
 * Category Page Layout Component
 * Global layout for category pages (Business Cards, Signs, etc.)
 * 
 * Props:
 * - breadcrumbs: Array of {label, link} objects
 * - heroTitle: Main heading text
 * - heroReviews: Review text (e.g. "Over 90,000 ★★★★★ reviews")
 * - heroDescription: Description paragraph
 * - heroPromo: Promotional text
 * - heroButtons: Array of {label, variant, onClick} - variants: 'primary', 'secondary', 'tertiary'
 * - heroImage: Image URL for hero section
 * - heroImageAlt: Alt text for hero image
 * - sidebarTitle: Title for sidebar
 * - sidebarCategories: Array of category groups with links
 * - children: Main content area
 */
const CategoryPageLayout = ({
    // Breadcrumb
    breadcrumbs = [],

    // Hero Section
    heroTitle = '',
    heroReviews = '',
    heroDescription = '',
    heroPromo = '',
    heroButtons = [],
    heroImage = '',
    heroImageAlt = '',

    // Sidebar
    sidebarTitle = '',
    sidebarCategories = [],

    // Main Content
    children
}) => {
    return (
        <div className="category-page">
            {/* Breadcrumb */}
            <div className="category-breadcrumb">
                <div className="category-container">
                    {breadcrumbs.map((crumb, index) => (
                        <React.Fragment key={index}>
                            {index < breadcrumbs.length - 1 ? (
                                <>
                                    <Link to={crumb.link}>{crumb.label}</Link>
                                    <span className="category-breadcrumb-separator">›</span>
                                </>
                            ) : (
                                <span>{crumb.label}</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Hero Section */}
            <section className="category-hero">
                <div className="category-container">
                    <div className="category-hero-grid">
                        <div className="category-hero-content">
                            {heroReviews && (
                                <p className="category-hero-reviews">{heroReviews}</p>
                            )}
                            <h1 className="category-hero-title">{heroTitle}</h1>
                            {heroDescription && (
                                <p className="category-hero-description">{heroDescription}</p>
                            )}
                            {heroPromo && (
                                <p className="category-hero-promo">{heroPromo}</p>
                            )}
                            {heroButtons.length > 0 && (
                                <div className="category-hero-buttons">
                                    {heroButtons.map((btn, index) => (
                                        <button
                                            key={index}
                                            className={`category-btn category-btn-${btn.variant || 'primary'}`}
                                            onClick={btn.onClick}
                                        >
                                            {btn.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        {heroImage && (
                            <div className="category-hero-image">
                                <div className="category-hero-visual">
                                    <img
                                        src={heroImage}
                                        alt={heroImageAlt || heroTitle}
                                        className="category-hero-img"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <div className="category-main">
                <div className="category-container">
                    <div className="category-layout">
                        {/* Sidebar */}
                        {sidebarCategories.length > 0 && (
                            <aside className="category-sidebar">
                                {sidebarTitle && (
                                    <h2 className="category-sidebar-title">{sidebarTitle}</h2>
                                )}
                                {sidebarCategories.map((category, idx) => (
                                    <div key={idx} className="category-sidebar-section">
                                        <h3 className="category-sidebar-heading">{category.title}</h3>
                                        <ul className="category-sidebar-links">
                                            {category.links.map((link, i) => (
                                                <li key={i}>
                                                    <Link
                                                        to={link.link}
                                                        className={`category-sidebar-link ${link.isShopAll ? 'category-shop-all' : ''}`}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </aside>
                        )}

                        {/* Main Content */}
                        <main className={`category-content ${sidebarCategories.length === 0 ? 'full-width' : ''}`}>
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Sub-components for sections
export const CategorySection = ({ title, subtitle, children, className = '' }) => (
    <section className={`category-section ${className}`}>
        {title && <h2 className="category-section-title">{title}</h2>}
        {subtitle && <p className="category-section-subtitle">{subtitle}</p>}
        {children}
    </section>
);

// Product Cards Grid
export const CategoryProductGrid = ({ columns = 4, children }) => (
    <div className={`category-product-grid columns-${columns}`}>
        {children}
    </div>
);

// Product Card Component
export const CategoryProductCard = ({
    image,
    name,
    description,
    rating,
    reviews,
    price,
    badge,
    link,
    onFavorite
}) => (
    <Link to={link} className="category-product-card">
        {badge && <span className="category-product-badge">{badge}</span>}
        <button
            className="category-favorite-btn"
            onClick={(e) => { e.preventDefault(); onFavorite && onFavorite(); }}
        >
            ♡
        </button>
        <div className="category-product-image">
            <img src={image} alt={name} loading="lazy" />
        </div>
        <div className="category-product-info">
            <h3 className="category-product-name">{name}</h3>
            {description && <p className="category-product-desc">{description}</p>}
            {rating && (
                <div className="category-product-rating">
                    <span className="category-stars">★★★★★</span>
                    <span>{rating} ({typeof reviews === 'number' ? reviews.toLocaleString() : reviews})</span>
                </div>
            )}
            {price && <p className="category-product-price">{price}</p>}
        </div>
    </Link>
);

// Tabs Component
export const CategoryTabs = ({ tabs, activeTab, onTabChange }) => (
    <div className="category-tabs">
        {tabs.map(tab => (
            <button
                key={tab.id}
                className={`category-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => onTabChange(tab.id)}
            >
                {tab.name}
            </button>
        ))}
    </div>
);

// Paper/Finish Selector
export const CategoryPaperSelector = ({ papers, selectedPaper, onSelect }) => (
    <div className="category-papers-tabs">
        {papers.map(paper => (
            <button
                key={paper.id}
                className={`category-paper-tab ${selectedPaper === paper.id ? 'active' : ''}`}
                onClick={() => onSelect(paper.id)}
            >
                <span className="category-paper-icon">
                    <img src={paper.image} alt={paper.name} />
                </span>
                <span className="category-paper-name">{paper.name}</span>
            </button>
        ))}
    </div>
);

// Banner Component
export const CategoryBanner = ({
    title,
    description,
    buttons = [],
    image,
    variant = 'dark' // 'dark' or 'light'
}) => (
    <div className={`category-banner category-banner-${variant}`}>
        <div className="category-banner-content">
            <h2>{title}</h2>
            {description && <p>{description}</p>}
            {buttons.length > 0 && (
                <div className="category-banner-buttons">
                    {buttons.map((btn, index) => (
                        <button
                            key={index}
                            className={`category-btn category-btn-${btn.variant || 'white'}`}
                            onClick={btn.onClick}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
        {image && (
            <div className="category-banner-image">
                <img src={image} alt={title} />
            </div>
        )}
    </div>
);

// FAQ Component
export const CategoryFAQ = ({ faqData, openIndex, onToggle }) => (
    <div className="category-faq-list">
        {faqData.map((faq, index) => (
            <div key={index} className="category-faq-item">
                <button
                    className="category-faq-question"
                    onClick={() => onToggle(index)}
                >
                    <span>{faq.question}</span>
                    <span className="category-faq-icon">
                        {openIndex === index ? '−' : '+'}
                    </span>
                </button>
                {openIndex === index && (
                    <div className="category-faq-answer">
                        <p style={{ whiteSpace: 'pre-line' }}>{faq.answer}</p>
                    </div>
                )}
            </div>
        ))}
    </div>
);

// Trust Features
export const CategoryTrustGrid = ({ features }) => (
    <div className="category-trust-grid">
        {features.map((feature, index) => (
            <div key={index} className="category-trust-item">
                <span className="category-trust-icon">{feature.icon}</span>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
            </div>
        ))}
    </div>
);

// CTA (Call-to-Action) Section Component
export const CategoryCTA = ({
    title,
    subtitle,
    buttons = [],
    variant = 'gradient', // 'gradient', 'dark', 'light', 'primary'
    align = 'center', // 'center', 'left'
    image,
    imagePosition = 'right' // 'right', 'left', 'background'
}) => (
    <div className={`category-cta category-cta-${variant} category-cta-align-${align} ${image && imagePosition === 'background' ? 'category-cta-bg-image' : ''}`}
        style={image && imagePosition === 'background' ? { backgroundImage: `url(${image})` } : {}}
    >
        <div className="category-cta-wrapper">
            {image && imagePosition === 'left' && (
                <div className="category-cta-image category-cta-image-left">
                    <img src={image} alt={title} />
                </div>
            )}
            <div className="category-cta-content">
                {title && <h2 className="category-cta-title">{title}</h2>}
                {subtitle && <p className="category-cta-subtitle">{subtitle}</p>}
                {buttons.length > 0 && (
                    <div className="category-cta-buttons">
                        {buttons.map((btn, index) => (
                            btn.link ? (
                                <Link
                                    key={index}
                                    to={btn.link}
                                    className={`category-btn category-btn-${btn.variant || 'white'}`}
                                >
                                    {btn.label}
                                </Link>
                            ) : (
                                <button
                                    key={index}
                                    className={`category-btn category-btn-${btn.variant || 'white'}`}
                                    onClick={btn.onClick}
                                >
                                    {btn.label}
                                </button>
                            )
                        ))}
                    </div>
                )}
            </div>
            {image && imagePosition === 'right' && (
                <div className="category-cta-image category-cta-image-right">
                    <img src={image} alt={title} />
                </div>
            )}
        </div>
    </div>
);

export default CategoryPageLayout;
