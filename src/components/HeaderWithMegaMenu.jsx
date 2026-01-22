import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mainCategories, dealsAndFeatures } from '../data/categoriesData';
import { FiHeart, FiUser, FiShoppingCart, FiMenu, FiX, FiHelpCircle, FiFolderPlus } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import SearchBar from './SearchBar';
import './HeaderWithMegaMenu.css';

const HeaderWithMegaMenu = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const { cartCount } = useCart();
    const location = useLocation();

    // Check if on Auth pages
    const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup';

    const { user, isAuthenticated, logout } = useAuth();

    // Helper to generate item link
    const getItemLink = (categorySlug, itemSlug) => {
        return `/category/${categorySlug}/${itemSlug}`;
    };

    return (
        <header className="header">
            {/* Top Utility Bar */}
            <div className="header-top">
                <div className="container">
                    <div className="header-top-content">
                        <div className="header-top-links">
                            <a href="#" className="header-top-link">Websites by Vista x Wix</a>
                            <a href="#" className="header-top-link">Corporate Pricing</a>
                            <a href="#" className="header-top-link">Reseller Program</a>
                            <a href="#" className="header-top-link">VistaCreate</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="header-main">
                <div className="container">
                    <div className="header-main-content">
                        {/* Logo */}
                        <div className="header-logo">
                            <Link to="/">
                                <span className="logo-text">VistaPrint</span>
                            </Link>
                        </div>

                        {/* Search Bar */}
                        <div className="header-search">
                            <SearchBar />
                        </div>

                        {/* User Actions */}
                        <div className="header-actions">
                            <Link to="/help" className="header-action-btn" title="Help">
                                <FiHelpCircle />
                                <span className="action-label">Help</span>
                            </Link>
                            <Link to="/projects" className="header-action-btn" title="Projects">
                                <FiFolderPlus />
                                <span className="action-label">Projects</span>
                            </Link>
                            <Link to="/favorites" className="header-action-btn" title="Favorites">
                                <FiHeart />
                                <span className="action-label">Favorites</span>
                            </Link>

                            {/* My Account Dropdown */}
                            <div
                                className="account-dropdown-wrapper"
                                onMouseEnter={() => setShowAccountMenu(true)}
                                onMouseLeave={() => setShowAccountMenu(false)}
                            >
                                {isAuthenticated ? (
                                    <button className="header-action-btn account-btn">
                                        <FiUser />
                                        <span className="action-label">My Account</span>
                                    </button>
                                ) : (
                                    <Link to="/signin" className="header-action-btn">
                                        <FiUser />
                                        <span className="action-label">Sign in</span>
                                    </Link>
                                )}

                                {/* Account Dropdown Menu */}
                                {isAuthenticated && showAccountMenu && (
                                    <div className="account-dropdown">
                                        <div className="account-dropdown-header">
                                            <p className="greeting">Hello {user?.firstName || 'User'}</p>
                                            <p className="account-label">Account</p>
                                        </div>
                                        <div className="account-dropdown-menu">
                                            <Link to="/account/dashboard" className="dropdown-item">
                                                Dashboard
                                            </Link>
                                            <Link to="/account/profile" className="dropdown-item">
                                                Account Profile
                                            </Link>
                                            <Link to="/account/projects" className="dropdown-item">
                                                My Projects
                                            </Link>
                                            <Link to="/account/design-services" className="dropdown-item">
                                                My Design Services
                                            </Link>
                                            <Link to="/account/websites" className="dropdown-item">
                                                Websites & Digital
                                            </Link>
                                            <Link to="/account/brand-kit" className="dropdown-item">
                                                Brand Kit
                                            </Link>
                                            <Link to="/account/uploads" className="dropdown-item">
                                                My Uploads
                                            </Link>
                                            <Link to="/account/favorites" className="dropdown-item">
                                                My Favorites
                                            </Link>
                                            <Link to="/account/mailing-lists" className="dropdown-item">
                                                Mailing Lists
                                            </Link>
                                            <div className="dropdown-divider"></div>
                                            <Link to="/account/orders" className="dropdown-item">
                                                Order History & Reorder
                                            </Link>
                                            <Link to="/account/subscriptions" className="dropdown-item">
                                                Subscriptions
                                            </Link>
                                            <Link to="/account/settings" className="dropdown-item">
                                                Account Settings
                                            </Link>
                                            <Link to="/account/payment" className="dropdown-item">
                                                Payment & Delivery
                                            </Link>
                                            <div className="dropdown-divider"></div>
                                            <button onClick={logout} className="dropdown-item signout">
                                                Sign out
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link to="/cart" className="header-action-btn cart-btn" title="Cart">
                                <FiShoppingCart />
                                <span className="action-label">Cart</span>
                                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="mobile-menu-toggle"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation Menu - Hidden on Auth Pages */}
            {!isAuthPage && (
                <nav className={`header-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                    <div className="container">
                        <ul className="nav-menu">
                            {/* Deals Link */}
                            <li className="nav-item">
                                <Link to="/deals" className="nav-link deals-link">
                                    Deals
                                </Link>
                            </li>

                            {/* 2-Day Delivery Link */}
                            <li className="nav-item">
                                <Link to="/2-day-delivery" className="nav-link fast-delivery-link">
                                    2-Day Delivery
                                </Link>
                            </li>

                            {/* Category Links with Mega Menus */}
                            {mainCategories.map((category) => (
                                <li
                                    key={category.id}
                                    className="nav-item has-mega-menu"
                                    onMouseEnter={() => setActiveCategory(category.id)}
                                    onMouseLeave={() => setActiveCategory(null)}
                                >
                                    <Link
                                        to={category.slug === 'business-cards' ? '/business-cards' : `/category/${category.slug}`}
                                        className="nav-link"
                                    >
                                        {category.name}
                                    </Link>

                                    {/* Mega Menu Dropdown */}
                                    {activeCategory === category.id && (
                                        <div className="mega-menu">
                                            <div className="container">
                                                <div className="mega-menu-content">
                                                    <div className="mega-menu-grid">
                                                        {category.subcategories.map((subcat, index) => (
                                                            <div key={index} className="mega-menu-column">
                                                                <h3 className="mega-menu-title">{subcat.name}</h3>
                                                                <ul className="mega-menu-list">
                                                                    {subcat.items.map((item, itemIndex) => (
                                                                        <li key={itemIndex}>
                                                                            <Link
                                                                                to={getItemLink(category.slug, item.slug)}
                                                                                className="mega-menu-link"
                                                                            >
                                                                                {item.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                                {/* Shop All Link */}
                                                                <Link
                                                                    to={`/category/${category.slug}`}
                                                                    className="mega-menu-shop-all"
                                                                >
                                                                    Shop all {subcat.name.toLowerCase()}
                                                                </Link>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    {/* Featured Product Section */}
                                                    <div className="mega-menu-featured">
                                                        <div className="featured-product">
                                                            <div
                                                                className="featured-image"
                                                                style={{ background: category.gradient }}
                                                            >
                                                                <span className="featured-icon">{category.icon}</span>
                                                            </div>
                                                            <h4 className="featured-title">Featured: {category.name}</h4>
                                                            <p className="featured-description">
                                                                Professional quality {category.name.toLowerCase()} starting at $12.99
                                                            </p>
                                                            <Link
                                                                to={category.slug === 'business-cards' ? '/business-cards' : `/category/${category.slug}`}
                                                                className="btn btn-primary btn-small"
                                                            >
                                                                Shop Now
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            )}

            {/* Promo Banner */}
            <div className="promo-banner">
                <div className="container">
                    <div className="promo-content">
                        <p className="promo-text">
                            🎉 Up to 40% off select products • Free shipping on orders over $50
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderWithMegaMenu;
