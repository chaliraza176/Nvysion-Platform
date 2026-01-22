import React, { useState } from 'react';
import { FiSearch, FiHeart, FiUser, FiShoppingCart, FiMenu, FiX, FiHelpCircle, FiFolderPlus } from 'react-icons/fi';
import './Header.css';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuItems = [
        'Deals',
        '2-Day Delivery',
        'Business Cards',
        'Postcards & Print',
        'Signs & Banners',
        'Labels & Stickers',
        'Marketing Materials',
        'Clothing & Bags',
        'Invites & Stationery',
        'Home & Gifts'
    ];

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
                            <a href="/">
                                <span className="logo-text">VistaPrint</span>
                            </a>
                        </div>

                        {/* Search Bar */}
                        <div className="header-search">
                            <div className="search-wrapper">
                                <FiSearch className="search-icon" />
                                <input
                                    type="text"
                                    placeholder="Search for products, designs, or inspiration..."
                                    className="search-input"
                                />
                            </div>
                        </div>

                        {/* User Actions */}
                        <div className="header-actions">
                            <button className="header-action-btn" title="Help">
                                <FiHelpCircle />
                                <span className="action-label">Help</span>
                            </button>
                            <button className="header-action-btn" title="Projects">
                                <FiFolderPlus />
                                <span className="action-label">Projects</span>
                            </button>
                            <button className="header-action-btn" title="Favorites">
                                <FiHeart />
                                <span className="action-label">Favorites</span>
                            </button>
                            <button className="header-action-btn" title="Sign in">
                                <FiUser />
                                <span className="action-label">Sign in</span>
                            </button>
                            <button className="header-action-btn cart-btn" title="Cart">
                                <FiShoppingCart />
                                <span className="action-label">Cart</span>
                                <span className="cart-badge">0</span>
                            </button>
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

            {/* Navigation Menu */}
            <nav className={`header-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                <div className="container">
                    <ul className="nav-menu">
                        {menuItems.map((item, index) => (
                            <li key={index} className="nav-item">
                                <a href="#" className="nav-link">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

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

export default Header;
