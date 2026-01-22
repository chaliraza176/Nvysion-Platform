import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { formatPrice, formatNumber } from '../../../utils/helpers';
import './ProductCard.css';

/**
 * ProductCard Component
 * Reusable product card for grids
 */
const ProductCard = ({
    id,
    name,
    slug,
    categorySlug,
    image,
    price,
    rating,
    reviewCount,
    badge,
    onFavorite
}) => {
    const productUrl = `/category/${categorySlug}/${slug}`;

    return (
        <div className="product-card">
            {badge && <span className="product-badge">{badge}</span>}
            
            <button 
                className="product-favorite-btn"
                onClick={() => onFavorite?.(id)}
                aria-label="Add to favorites"
            >
                <FiHeart />
            </button>

            <Link to={productUrl} className="product-image-link">
                <div className="product-image">
                    <img src={image} alt={name} loading="lazy" />
                </div>
            </Link>

            <div className="product-info">
                <h3 className="product-name">
                    <Link to={productUrl}>{name}</Link>
                </h3>
                
                {rating && (
                    <div className="product-rating">
                        <span className="stars">★★★★★</span>
                        <span className="rating-text">
                            {rating} ({formatNumber(reviewCount)})
                        </span>
                    </div>
                )}
                
                <p className="product-price">
                    Starting at {formatPrice(price)}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
