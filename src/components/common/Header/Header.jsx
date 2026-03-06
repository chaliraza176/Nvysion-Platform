import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiUser, FiShoppingCart, FiMenu, FiX, FiHelpCircle, FiFolderPlus } from 'react-icons/fi';
import { useCart } from '../../../context/CartContext';
import { useAuth } from '../../../context/AuthContext';
import SearchBar from '../SearchBar';
import MegaMenu from './MegaMenu';
import AccountDropdown from './AccountDropdown';
import { NAV_LINKS } from '../../../constants';
import { mainCategories } from '../../../constants/categories';
import './Header.css';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const { cartCount } = useCart();
    const { user, isAuthenticated } = useAuth();

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
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="header-main">
                <div className="container">
                    <div className="header-main-content">
                        <Link to="/" className="header-logo">
                            <span className="logo-text">Nvysion Platform</span>
                        </Link>

                        <div className="header-search">
                            <SearchBar />
                        </div>

                        <div className="header-actions">
                            <Link to={NAV_LINKS.HELP} className="header-action-btn">
                                <FiHelpCircle />
                                <span className="action-label">Help</span>
                            </Link>
                            <Link to={NAV_LINKS.PROJECTS} className="header-action-btn">
                                <FiFolderPlus />
                                <span className="action-label">Projects</span>
                            </Link>
                            <Link to={NAV_LINKS.FAVORITES} className="header-action-btn">
                                <FiHeart />
                                <span className="action-label">Favorites</span>
                            </Link>

                            <div className="account-dropdown-wrapper">
                                <Link to="/" className="header-action-btn">
                                    <FiUser />
                                    <span className="action-label">My Account</span>
                                </Link>
                            </div>

                            <Link to={NAV_LINKS.CART} className="header-action-btn cart-btn">
                                <FiShoppingCart />
                                <span className="action-label">Cart</span>
                                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                            </Link>
                        </div>

                        <button
                            className="mobile-menu-toggle"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className={`header-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                <div className="container">
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link to={NAV_LINKS.DEALS} className="nav-link deals-link">Deals</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={NAV_LINKS.TWO_DAY_DELIVERY} className="nav-link">2-Day Delivery</Link>
                        </li>
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
                                {activeCategory === category.id && (
                                    <MegaMenu category={category} />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Promo Banner */}
            <div className="promo-banner">
                <div className="container">
                    <p className="promo-text">
                        🎉 Up to 40% off select products • Free shipping on orders over $50
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
