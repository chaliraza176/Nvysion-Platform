import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiTrash2, FiShoppingCart } from 'react-icons/fi';
import { mainCategories } from '../data/categoriesData';
import './FavoritesPage.css';

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState([
        {
            id: 1,
            name: 'Premium Business Cards',
            category: 'Business Cards',
            categorySlug: 'business-cards',
            slug: 'premium-business-cards',
            price: 12.99,
            icon: '💼',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            id: 2,
            name: 'Custom T-Shirts',
            category: 'Clothing & Bags',
            categorySlug: 'clothing-bags',
            slug: 'custom-t-shirts',
            price: 19.99,
            icon: '👕',
            gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
        }
    ]);

    const removeFavorite = (id) => {
        setFavorites(favorites.filter(item => item.id !== id));
    };

    return (
        <div className="favorites-page fade-in">
            <div className="container">
                <div className="favorites-header">
                    <h1>My Favorites</h1>
                    <p>Products you've saved for later</p>
                </div>

                {favorites.length === 0 ? (
                    <div className="empty-favorites">
                        <FiHeart className="empty-icon" />
                        <h2>No favorites yet</h2>
                        <p>Start adding products to your favorites to save them for later</p>
                        <Link to="/" className="btn btn-primary btn-large">Browse Products</Link>
                    </div>
                ) : (
                    <div className="favorites-grid">
                        {favorites.map(item => (
                            <div key={item.id} className="favorite-card">
                                <button
                                    className="remove-favorite"
                                    onClick={() => removeFavorite(item.id)}
                                    title="Remove from favorites"
                                >
                                    <FiTrash2 />
                                </button>
                                <Link to={`/category/${item.categorySlug}/${item.slug}`}>
                                    <div className="favorite-visual" style={{ background: item.gradient }}>
                                        <span className="favorite-icon">{item.icon}</span>
                                    </div>
                                    <div className="favorite-info">
                                        <h3>{item.name}</h3>
                                        <p className="favorite-category">{item.category}</p>
                                        <p className="favorite-price">Starting at ${item.price.toFixed(2)}</p>
                                        <button className="btn btn-primary btn-small">
                                            <FiShoppingCart /> Add to Cart
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FavoritesPage;
