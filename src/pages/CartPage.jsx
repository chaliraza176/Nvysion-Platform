import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FiTrash2, FiMinus, FiPlus, FiArrowLeft, FiShoppingBag, FiTruck, FiShield } from 'react-icons/fi';
import './CartPage.css';

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
    const navigate = useNavigate();

    if (cartItems.length === 0) {
        return (
            <div className="cart-page-empty">
                <div className="container">
                    <div className="empty-cart-content">
                        <div className="empty-icon-circle">
                            <FiShoppingBag />
                        </div>
                        <h1>Your cart is empty</h1>
                        <p>It looks like you haven't added anything to your cart yet.</p>
                        <Link to="/" className="btn btn-primary btn-large">
                            Start Shopping
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page fade-in">
            <div className="container">
                <h1 className="cart-title">Your Cart ({cartCount} {cartCount === 1 ? 'item' : 'items'})</h1>

                <div className="cart-layout">
                    {/* Cart Items List */}
                    <div className="cart-main">
                        <div className="cart-header-labels">
                            <span>Product</span>
                            <span>Details</span>
                            <span>Quantity</span>
                            <span>Price</span>
                        </div>

                        <div className="cart-items-list">
                            {cartItems.map((item, index) => (
                                <div key={`${item.id}-${item.selectedOption}-${index}`} className="cart-item">
                                    <div className="item-visual">
                                        {item.image ? (
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="item-thumb-img"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                        ) : null}
                                        <div
                                            className="item-thumb"
                                            style={{
                                                background: item.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                display: item.image ? 'none' : 'flex'
                                            }}
                                        >
                                            <span>{item.icon || '📦'}</span>
                                        </div>
                                    </div>

                                    <div className="item-details">
                                        <h3>{item.name}</h3>
                                        <p className="item-option text-light">Option: {item.selectedOption}</p>
                                        <button
                                            className="remove-btn"
                                            onClick={() => removeFromCart(item.id, item.selectedOption)}
                                        >
                                            <FiTrash2 /> Remove
                                        </button>
                                    </div>

                                    <div className="item-quantity">
                                        <div className="qty-controls">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.selectedOption, Math.max(1, item.quantity - 1))}
                                                disabled={item.quantity <= 1}
                                            >
                                                <FiMinus />
                                            </button>
                                            <span className="qty-value">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.selectedOption, item.quantity + 1)}
                                            >
                                                <FiPlus />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="item-price">
                                        <span className="price-value">${(item.price * item.quantity).toFixed(2)}</span>
                                        <span className="unit-price text-light">${item.price.toFixed(2)} each</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link to="/" className="continue-shopping">
                            <FiArrowLeft /> Continue Shopping
                        </Link>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="cart-sidebar">
                        <div className="summary-card">
                            <h2>Order Summary</h2>
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Estimated Shipping</span>
                                <span className="text-success">FREE</span>
                            </div>
                            <div className="summary-row">
                                <span>Estimated Tax</span>
                                <span>$0.00</span>
                            </div>
                            <div className="summary-divider"></div>
                            <div className="summary-row total">
                                <span>Total</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>

                            <button
                                className="btn btn-primary btn-large checkout-btn"
                                onClick={() => navigate('/checkout')}
                            >
                                Proceed to Checkout
                            </button>

                            <div className="trust-signals">
                                <div className="trust-item">
                                    <FiTruck />
                                    <span>Fast 2-Day Delivery</span>
                                </div>
                                <div className="trust-item">
                                    <FiShield />
                                    <span>Secure Checkout</span>
                                </div>
                            </div>
                        </div>

                        <div className="promo-box">
                            <p>Have a promo code?</p>
                            <div className="promo-input">
                                <input type="text" placeholder="Enter code" />
                                <button>Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
