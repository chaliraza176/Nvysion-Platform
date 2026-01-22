import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Mega Menu Component
 * Displays category subcategories in dropdown
 */
const MegaMenu = ({ category }) => {
    const getItemLink = (categorySlug, itemSlug) => {
        return `/category/${categorySlug}/${itemSlug}`;
    };

    return (
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
                                <Link
                                    to={`/category/${category.slug}`}
                                    className="mega-menu-shop-all"
                                >
                                    Shop all {subcat.name.toLowerCase()}
                                </Link>
                            </div>
                        ))}
                    </div>
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
    );
};

export default MegaMenu;
