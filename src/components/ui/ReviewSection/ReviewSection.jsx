import React, { useState } from 'react';
import { FiStar, FiThumbsUp, FiMessageCircle } from 'react-icons/fi';
import './ReviewSection.css';

/**
 * ReviewSection Component
 * Displays product reviews with add review form
 */
const ReviewSection = ({ reviews = [], productName, onSubmitReview }) => {
    const [newReview, setNewReview] = useState({ rating: 0, content: '' });
    const [hoveredStar, setHoveredStar] = useState(0);

    const avgRating = reviews.length > 0
        ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
        : 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newReview.rating > 0 && newReview.content.trim()) {
            onSubmitReview?.(newReview);
            setNewReview({ rating: 0, content: '' });
        }
    };

    return (
        <section className="review-section">
            <div className="review-header">
                <h2>Customer Reviews</h2>
                <div className="review-summary">
                    <span className="avg-rating">{avgRating}</span>
                    <div className="avg-stars">
                        {[1, 2, 3, 4, 5].map(i => (
                            <FiStar
                                key={i}
                                className={i <= Math.round(avgRating) ? 'filled' : ''}
                            />
                        ))}
                    </div>
                    <span className="review-count">Based on {reviews.length} reviews</span>
                </div>
            </div>

            {/* Reviews List */}
            <div className="reviews-list">
                {reviews.map(review => (
                    <div key={review.id} className="review-item">
                        <div className="review-item-header">
                            <div className="review-avatar">{review.author?.charAt(0)}</div>
                            <div className="review-meta">
                                <span className="review-author">{review.author}</span>
                                {review.verified && (
                                    <span className="verified-badge">✓ Verified</span>
                                )}
                                <span className="review-date">{review.date}</span>
                            </div>
                            <div className="review-stars">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <FiStar
                                        key={i}
                                        className={i <= review.rating ? 'filled' : ''}
                                    />
                                ))}
                            </div>
                        </div>
                        {review.title && <h4 className="review-title">{review.title}</h4>}
                        <p className="review-content">{review.content}</p>
                        <div className="review-actions">
                            <button className="helpful-btn">
                                <FiThumbsUp /> Helpful ({review.helpful || 0})
                            </button>
                            <button className="reply-btn">
                                <FiMessageCircle /> Reply
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Review Form */}
            <div className="add-review">
                <h3>Share Your Experience</h3>
                <form onSubmit={handleSubmit} className="review-form">
                    <div className="rating-input">
                        <label>Your Rating:</label>
                        <div className="star-select">
                            {[1, 2, 3, 4, 5].map(i => (
                                <button
                                    key={i}
                                    type="button"
                                    className="star-btn"
                                    onMouseEnter={() => setHoveredStar(i)}
                                    onMouseLeave={() => setHoveredStar(0)}
                                    onClick={() => setNewReview({ ...newReview, rating: i })}
                                >
                                    <FiStar
                                        className={
                                            i <= (hoveredStar || newReview.rating) ? 'filled' : ''
                                        }
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                    <textarea
                        placeholder="Write your review here..."
                        value={newReview.content}
                        onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                        rows={4}
                        required
                    />
                    <button type="submit" className="submit-review-btn">
                        Submit Review
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ReviewSection;
