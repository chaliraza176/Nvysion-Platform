import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mainCategories } from '../data/categoriesData';
import { useCart } from '../context/CartContext';
import { getProductBySlug } from '../services/api';
import { FiShoppingCart, FiHeart, FiShare2, FiCheck, FiTruck, FiShield, FiStar, FiChevronLeft, FiChevronRight, FiThumbsUp, FiMessageCircle } from 'react-icons/fi';
import './ProductDetailPage.css';

import { specificProductData } from '../data/productData';

// Default product images fallback
const defaultProductImages = [
    'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&q=80',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80',
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80'
];

// Generate product content based on name
const generateProductContent = (productName, categorySlug, productSlug) => {
    // Check for specific product data
    if (specificProductData[productSlug]) {
        return specificProductData[productSlug];
    }

    // Default fallback
    return {
        price: 14.99,
        description: `Our premium ${productName} are designed to make your brand stand out. Crafted with high-quality materials and precision printing technology, these products deliver exceptional results every time.`,
        features: [
            'Premium quality materials for durability',
            'Vibrant, full-color printing',
            'Multiple size and finish options',
            'Fast turnaround times available',
            'Eco-friendly printing options'
        ],
        specs: {
            'Material': 'Premium grade stock',
            'Printing': 'Full color, both sides',
            'Finish': 'Matte, Glossy, or Uncoated',
            'Turnaround': '3-5 business days standard'
        },
        images: specificProductData[productSlug]?.images || defaultProductImages
    };
};

// Mock reviews data
const generateReviews = (productName) => [
    {
        id: 1,
        author: 'Sarah M.',
        avatar: 'S',
        rating: 5,
        date: 'December 15, 2025',
        title: 'Excellent quality and fast delivery!',
        content: `I ordered these ${productName} for my small business and I'm absolutely thrilled with the results. The print quality is outstanding and the colors are vibrant. Will definitely order again!`,
        helpful: 24,
        verified: true
    },
    {
        id: 2,
        author: 'Michael R.',
        avatar: 'M',
        rating: 5,
        date: 'December 10, 2025',
        title: 'Perfect for my business needs',
        content: 'The quality exceeded my expectations. The design tool was easy to use and the final product looks very professional. Great value for the price.',
        helpful: 18,
        verified: true
    },
    {
        id: 3,
        author: 'Jennifer L.',
        avatar: 'J',
        rating: 4,
        date: 'December 5, 2025',
        title: 'Good quality, minor shipping delay',
        content: 'Product quality is excellent. There was a slight delay in shipping but customer service was helpful in tracking my order. Overall satisfied with my purchase.',
        helpful: 12,
        verified: true
    },
    {
        id: 4,
        author: 'David K.',
        avatar: 'D',
        rating: 5,
        date: 'November 28, 2025',
        title: 'Best printing service I have used',
        content: `These ${productName} are exactly what I needed. The attention to detail is impressive and the customer service team was very responsive to my questions.`,
        helpful: 31,
        verified: true
    }
];

const ProductDetailPage = () => {
    const { categorySlug, productSlug } = useParams();
    const { addToCart } = useCart();

    // Find the category data
    const category = mainCategories.find(cat => cat.slug === categorySlug);
    let productName = productSlug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Product';

    if (category) {
        category.subcategories.forEach(sub => {
            sub.items.forEach(item => {
                if (item.slug === productSlug || item.name?.toLowerCase().replace(/ /g, '-') === productSlug) {
                    productName = item.name || item;
                }
            });
        });
    }

    // Determine product type (default to unit if not specified)
    const productType = specificProductData[productSlug]?.type || 'unit';

    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(productType === 'bundle' ? '100' : '1');
    const [selectedMaterial, setSelectedMaterial] = useState('Standard');
    const [selectedSize, setSelectedSize] = useState('3.5" x 2"');
    const [isAdded, setIsAdded] = useState(false);
    const [newComment, setNewComment] = useState('');

    const [apiProduct, setApiProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const data = await getProductBySlug(productSlug);
                if (data) setApiProduct(data);
            } catch (error) {
                console.error('Failed to fetch product from API:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [productSlug]);

    const productContent = apiProduct || generateProductContent(productName, categorySlug, productSlug);
    const images = productContent.images || defaultProductImages;

    // Override product name if specific data exists
    if (specificProductData[productSlug]?.name) {
        productName = specificProductData[productSlug].name;
    }
    const reviews = generateReviews(productName);

    // Calculate average rating
    const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

    const handleAddToCart = () => {
        // If bundle, we treat the whole set as 1 item in the cart
        const cartQuantity = productType === 'bundle' ? 1 : parseInt(quantity);
        const cartOption = productType === 'bundle'
            ? `${selectedMaterial} (${quantity} units)`
            : selectedMaterial;

        // Use MongoDB _id from API product if available, otherwise fall back to slug-based ID
        const productId = apiProduct?._id || `${categorySlug}-${productSlug}`;

        const itemToAdd = {
            id: productId,
            _id: productId,
            name: productName,
            slug: productSlug,
            categorySlug: categorySlug,
            price: productContent.price || apiProduct?.startingPrice,
            quantity: cartQuantity,
            selectedOption: cartOption,
            image: images[0]
        };
        addToCart(itemToAdd);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 3000);
    };

    // Dynamic Related products
    const relatedProducts = (category?.subcategories?.[0]?.items || [])
        .filter(item => item.slug !== productSlug)
        .slice(0, 8)
        .map(item => ({
            name: item.name,
            slug: item.slug,
            price: specificProductData[item.slug]?.price || (9.99 + Math.random() * 20).toFixed(2),
            image: specificProductData[item.slug]?.images?.[0] || 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=150&h=150&fit=crop&q=80'
        }));

    const frequentlyBought = [
        { name: 'Holographic Stickers', price: '$15.99', image: 'https://images.unsplash.com/photo-1635405074683-96d6921a2a68?w=120&h=120&fit=crop&q=80' },
        { name: 'Leather Tags', price: '$18.99', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=120&h=120&fit=crop&q=80' },
        { name: 'Sticker Sheets', price: '$12.99', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=120&fit=crop&q=80' },
        { name: 'Vinyl Stickers', price: '$9.99', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=120&h=120&fit=crop&q=80' },
        { name: 'Waterproof Labels', price: '$14.99', image: 'https://images.unsplash.com/photo-1589359864394-e98d8424dfb5?w=120&h=120&fit=crop&q=80' },
        { name: 'Kraft Labels', price: '$8.99', image: 'https://images.unsplash.com/photo-1600408299096-6f5b30eabc8d?w=120&h=120&fit=crop&q=80' }
    ];

    if (!category) {
        return (
            <div className="pdp-not-found">
                <div className="pdp-container">
                    <h1>Product Not Found</h1>
                    <p>Sorry, the product you're looking for doesn't exist.</p>
                    <Link to="/" className="pdp-btn pdp-btn-primary">Go back home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pdp-page">
            {/* Breadcrumb */}
            <div className="pdp-breadcrumb">
                <div className="pdp-container">
                    <Link to="/">Home</Link>
                    <span>›</span>
                    <Link to={`/category/${categorySlug}`}>{category.name}</Link>
                    <span>›</span>
                    <span>{productName}</span>
                </div>
            </div>

            {/* Main Product Section */}
            <section className="pdp-main">
                <div className="pdp-container">
                    <div className="pdp-grid">
                        {/* Product Images */}
                        <div className="pdp-images">
                            <div className="pdp-main-image">
                                <img src={images[selectedImage]} alt={productName} />
                                <button className="pdp-favorite-btn"><FiHeart /></button>
                            </div>
                            <div className="pdp-thumbnails">
                                {images.slice(0, 4).map((img, idx) => (
                                    <button
                                        key={idx}
                                        className={`pdp-thumb ${selectedImage === idx ? 'active' : ''}`}
                                        onClick={() => setSelectedImage(idx)}
                                    >
                                        <img src={img} alt={`View ${idx + 1}`} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="pdp-info">
                            <h1 className="pdp-title">{productName}</h1>

                            <div className="pdp-rating">
                                <div className="pdp-stars">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <FiStar key={i} className={i <= Math.round(avgRating) ? 'filled' : ''} />
                                    ))}
                                </div>
                                <span className="pdp-rating-text">{avgRating} ({reviews.length} reviews)</span>
                            </div>

                            <div className="pdp-price">
                                <span className="pdp-price-label">Starting at</span>
                                <span className="pdp-price-value">${productContent.price}</span>
                            </div>

                            <p className="pdp-description">{productContent.description}</p>

                            {/* Options */}
                            <div className="pdp-options">
                                <div className="pdp-option-group">
                                    <label>Size</label>
                                    <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                                        <option>3.5" x 2"</option>
                                        <option>4" x 3"</option>
                                        <option>5" x 4"</option>
                                        <option>Custom Size</option>
                                    </select>
                                </div>

                                <div className="pdp-option-group">
                                    <label>Material</label>
                                    <select value={selectedMaterial} onChange={(e) => setSelectedMaterial(e.target.value)}>
                                        <option>Standard</option>
                                        <option>Premium Matte</option>
                                        <option>Glossy</option>
                                        <option>Uncoated</option>
                                    </select>
                                </div>

                                {productType === 'bundle' ? (
                                    <div className="pdp-option-group">
                                        <label>Quantity</label>
                                        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                                            <option value="50">50 - $9.99</option>
                                            <option value="100">100 - $14.99</option>
                                            <option value="250">250 - $29.99</option>
                                            <option value="500">500 - $49.99</option>
                                            <option value="1000">1000 - $89.99</option>
                                        </select>
                                    </div>
                                ) : (
                                    <div className="pdp-option-group">
                                        <label>Quantity</label>
                                        <div className="pdp-qty-stepper">
                                            <button onClick={() => setQuantity(Math.max(1, parseInt(quantity) - 1).toString())}>-</button>
                                            <input type="number" value={quantity} readOnly />
                                            <button onClick={() => setQuantity((parseInt(quantity) + 1).toString())}>+</button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Add to Cart */}
                            <button
                                className={`pdp-add-to-cart ${isAdded ? 'success' : ''}`}
                                onClick={handleAddToCart}
                                disabled={isAdded}
                            >
                                {isAdded ? (
                                    <><FiCheck /> Added to Cart</>
                                ) : (
                                    <><FiShoppingCart /> Add to Cart</>
                                )}
                            </button>

                            {/* Trust Badges */}
                            <div className="pdp-trust">
                                <div className="pdp-trust-item">
                                    <FiTruck />
                                    <span>Free shipping on orders $50+</span>
                                </div>
                                <div className="pdp-trust-item">
                                    <FiShield />
                                    <span>100% satisfaction guarantee</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Description */}
            <section className="pdp-description-section">
                <div className="pdp-container">
                    <div className="pdp-desc-grid">
                        <div className="pdp-desc-content">
                            <h2>About {productName}</h2>
                            <p>{productContent.description}</p>
                            <p>Whether you're a small business owner looking to brand your products, or planning a special event, our {productName.toLowerCase()} offer the perfect solution. Each piece is carefully crafted using state-of-the-art printing technology to ensure crisp, vibrant results.</p>

                            <h3>Quality Materials</h3>
                            <p>We use only premium materials that are built to last. Our products are designed to withstand everyday handling while maintaining their professional appearance.</p>

                            <h3>Easy Customization</h3>
                            <p>Use our intuitive design tool to create your perfect {productName.toLowerCase()}. Upload your own artwork or choose from thousands of professional templates. Our design experts are also available to help bring your vision to life.</p>
                        </div>
                        <div className="pdp-desc-image">
                            <img src={images[1]} alt={productName} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="pdp-related">
                <div className="pdp-container">
                    <h2 className="pdp-section-title">Related products</h2>
                    <div className="pdp-related-grid">
                        {relatedProducts.map((product, idx) => (
                            <Link key={idx} to={`/category/${categorySlug}/${product.slug}`} className="pdp-related-card">
                                <div className="pdp-related-image">
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <h3>{product.name}</h3>
                                <p>${product.price}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Frequently Bought Together */}
            <section className="pdp-frequent">
                <div className="pdp-container">
                    <h2 className="pdp-section-title">Frequently bought together with this product</h2>
                    <div className="pdp-frequent-grid">
                        {frequentlyBought.map((product, idx) => (
                            <Link key={idx} to="#" className="pdp-frequent-card">
                                <div className="pdp-frequent-image">
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* You Recently Viewed */}
            <section className="pdp-recent">
                <div className="pdp-container">
                    <h2 className="pdp-section-title">You recently viewed items</h2>
                    <div className="pdp-recent-grid">
                        <Link to="#" className="pdp-recent-card">
                            <div className="pdp-recent-image">
                                <img src={images[0]} alt="Recent" />
                            </div>
                            <h3>Custom Stickers & Labels</h3>
                            <p>$7.99</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="pdp-reviews">
                <div className="pdp-container">
                    <div className="pdp-reviews-header">
                        <h2>Reviews</h2>
                        <div className="pdp-reviews-summary">
                            <div className="pdp-reviews-avg">
                                <span className="pdp-avg-number">{avgRating}</span>
                                <div className="pdp-avg-stars">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <FiStar key={i} className={i <= Math.round(avgRating) ? 'filled' : ''} />
                                    ))}
                                </div>
                                <span className="pdp-avg-count">Based on {reviews.length} reviews</span>
                            </div>
                        </div>
                    </div>

                    {/* Review Images */}
                    <div className="pdp-review-images">
                        <h3>See more with images</h3>
                        <div className="pdp-review-images-grid">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="pdp-review-img">
                                    <img src={images[i % images.length]} alt={`Review ${i}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Reviews List */}
                    <div className="pdp-reviews-list">
                        <h3>Reviewed by Nvysion Platform customers</h3>
                        {reviews.map(review => (
                            <div key={review.id} className="pdp-review-item">
                                <div className="pdp-review-header">
                                    <div className="pdp-review-avatar">{review.avatar}</div>
                                    <div className="pdp-review-meta">
                                        <span className="pdp-review-author">{review.author}</span>
                                        {review.verified && <span className="pdp-verified">✓ Verified Purchase</span>}
                                        <span className="pdp-review-date">{review.date}</span>
                                    </div>
                                    <div className="pdp-review-stars">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <FiStar key={i} className={i <= review.rating ? 'filled' : ''} />
                                        ))}
                                    </div>
                                </div>
                                <h4 className="pdp-review-title">{review.title}</h4>
                                <p className="pdp-review-content">{review.content}</p>
                                <div className="pdp-review-actions">
                                    <button className="pdp-helpful-btn">
                                        <FiThumbsUp /> Helpful ({review.helpful})
                                    </button>
                                    <button className="pdp-reply-btn">
                                        <FiMessageCircle /> Reply
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add Comment */}
                    <div className="pdp-add-review">
                        <h3>Share your experience</h3>
                        <div className="pdp-review-form">
                            <div className="pdp-form-rating">
                                <label>Your Rating:</label>
                                <div className="pdp-rating-select">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <button key={i} className="pdp-star-btn"><FiStar /></button>
                                    ))}
                                </div>
                            </div>
                            <textarea
                                placeholder="Write your review here..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                rows={4}
                            />
                            <button className="pdp-submit-review">Submit Review</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="pdp-faq">
                <div className="pdp-container">
                    <h2>Frequently asked questions</h2>
                    <div className="pdp-faq-list">
                        <div className="pdp-faq-item">
                            <h4>How soon can I get my order?</h4>
                            <p>Standard orders ship within 3-5 business days. Rush options are available for faster delivery.</p>
                        </div>
                        <div className="pdp-faq-item">
                            <h4>What file formats do you accept?</h4>
                            <p>We accept PDF, PNG, JPG, AI, and PSD files. For best results, use high-resolution images (300 DPI).</p>
                        </div>
                        <div className="pdp-faq-item">
                            <h4>Can I see a proof before printing?</h4>
                            <p>Yes! You'll receive a digital proof to approve before we begin printing your order.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetailPage;
