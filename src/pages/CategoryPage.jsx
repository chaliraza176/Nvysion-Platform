import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiStar, FiHeart, FiShoppingBag, FiTruck, FiShield } from 'react-icons/fi';
import './CategoryPageBusinessCards.css';
import { categoryPageData } from '../data/categoriesData';

const CategoryPage = () => {
    const { slug } = useParams();
    // Default to business-cards if slug doesn't match or is missing
    const data = categoryPageData[slug] || categoryPageData['business-cards'];
    const [selectedType, setSelectedType] = useState('all');

    return (
        <div className="category-dynamic-page fade-in">
            {/* Breadcrumb */}
            <div className="breadcrumb-bar">
                <div className="container-full">
                    <nav className="breadcrumb-nav">
                        <Link to="/">Home</Link>
                        <span className="separator">›</span>
                        <span className="current-page">{data.title}</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <div className="hero-section-bc" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.7)), url(${data.heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="container-full">
                    <div className="hero-grid">
                        <div className="hero-content">
                            <div className="hero-badge">
                                <span className="stars">★★★★★</span>
                                <span className="rating-text">{data.rating}</span>
                            </div>
                            <h1 className="hero-title">{data.title}</h1>
                            <p className="hero-description">{data.description}</p>
                            <div className="hero-promo-card">
                                <p className="promo-text">{data.promo}</p>
                            </div>
                            <div className="hero-actions">
                                <button className="btn btn-primary btn-large">Browse Templates</button>
                                <button className="btn btn-secondary btn-large">Upload Design</button>
                            </div>
                        </div>
                        <div className="hero-image-container">
                            <div className="hero-main-preview shadow-hover">
                                <img src={data.heroImage} alt={data.title} className="hero-featured-img" />
                                <div className="img-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content with Sidebar */}
            <div className="main-content-bc">
                <div className="container-full">
                    <div className="content-layout">
                        {/* Sidebar Navigation */}
                        <aside className="sidebar-nav-sticky">
                            <div className="sidebar-inner">
                                <h2 className="sidebar-heading">{data.title}</h2>
                                {data.categories.map((category, idx) => (
                                    <div key={idx} className="sidebar-group">
                                        <h3 className="group-title">{category.name}</h3>
                                        <ul className="group-links">
                                            {category.items.map((subcat, i) => (
                                                <li key={i}>
                                                    <Link to={subcat.link} className="nav-link-item">{subcat.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}

                                <div className="sidebar-support">
                                    <h4>Need Help?</h4>
                                    <p>Our design experts are here to help you create the perfect {data.title.toLowerCase()}.</p>
                                    <button className="btn-text">Contact Support →</button>
                                </div>
                            </div>
                        </aside>

                        {/* Main Products Grid Area */}
                        <main className="products-grid-area">
                            {/* Explore Section */}
                            <section className="explore-section">
                                <div className="section-header">
                                    <h2 className="section-title">Explore all your {data.title.toLowerCase()} options</h2>
                                    <p className="section-subtitle">
                                        From traditional designs to modern favorites, find the perfect fit for your brand.
                                    </p>
                                </div>

                                <div className="featured-products-grid">
                                    {data.mainProducts.map(product => (
                                        <div key={product.id} className="premium-product-card">
                                            {product.badge && (
                                                <div className="special-badge">{product.badge}</div>
                                            )}
                                            <div className="card-visual">
                                                <img src={product.image} alt={product.name} className="product-thumb" />
                                                <div className="card-hover-actions">
                                                    <button className="btn btn-white btn-sm">Quick View</button>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <h3 className="product-title">{product.name}</h3>
                                                <p className="product-desc">{product.description}</p>
                                                <div className="card-footer">
                                                    <p className="starting-price">{product.price}</p>
                                                    <button className="btn btn-outline btn-sm">Shop Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Trust Signals Section */}
                            <section className="trust-signals-bar">
                                <div className="signal">
                                    <FiTruck />
                                    <span>Fast 2-Day Delivery</span>
                                </div>
                                <div className="signal">
                                    <FiShield />
                                    <span>Satisfaction Guaranteed</span>
                                </div>
                                <div className="signal">
                                    <FiShoppingBag />
                                    <span>Secure Checkout</span>
                                </div>
                            </section>

                            {/* Options & Finishes Section */}
                            {data.paperFinishes && (
                                <section className="options-section">
                                    <div className="section-header">
                                        <h2 className="section-title">Popular finishes & textures</h2>
                                        <p className="section-subtitle">Choose a finish that speaks to your brand's personality.</p>
                                    </div>

                                    <div className="finishes-scroll-box">
                                        {data.paperFinishes.map((paper, idx) => (
                                            <div key={idx} className="finish-card shadow-hover">
                                                <div className="finish-icon-box">{paper.icon}</div>
                                                <div className="finish-info">
                                                    <p className="finish-name">{paper.name}</p>
                                                    <div className="finish-rating">
                                                        <span className="stars">★★★★★</span>
                                                        <span className="count">({(paper.reviews / 1000).toFixed(0)}k)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
