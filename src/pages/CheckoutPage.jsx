import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FiCheckCircle, FiCreditCard, FiTruck, FiShield, FiArrowLeft } from 'react-icons/fi';
import './CheckoutPage.css';

const CheckoutPage = () => {
    const { cartItems, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate API call
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
            clearCart();
        }, 2000);
    };

    if (isSuccess) {
        return (
            <div className="checkout-success-container fade-in">
                <div className="success-card">
                    <div className="success-icon">
                        <FiCheckCircle />
                    </div>
                    <h1>Order Placed Successfully!</h1>
                    <p>Thank you for your purchase. Your order number is <strong>#VP-{Math.floor(Math.random() * 90000) + 10000}</strong>.</p>
                    <p>We've sent a confirmation email to your account.</p>
                    <button className="btn btn-primary" onClick={() => navigate('/')}>
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="checkout-page fade-in">
            <div className="container">
                <button className="back-to-cart" onClick={() => navigate('/cart')}>
                    <FiArrowLeft /> Back to Cart
                </button>

                <h1 className="checkout-title">Checkout</h1>

                <div className="checkout-layout">
                    <form className="checkout-form" onSubmit={handlePlaceOrder}>
                        <section className="checkout-section">
                            <h2><FiTruck /> Shipping Information</h2>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" required placeholder="John" />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" required placeholder="Doe" />
                                </div>
                                <div className="form-group full-width">
                                    <label>Street Address</label>
                                    <input type="text" required placeholder="123 Printing Way" />
                                </div>
                                <div className="form-group">
                                    <label>City</label>
                                    <input type="text" required placeholder="New York" />
                                </div>
                                <div className="form-group">
                                    <label>Postal Code</label>
                                    <input type="text" required placeholder="10001" />
                                </div>
                            </div>
                        </section>

                        <section className="checkout-section">
                            <h2><FiCreditCard /> Payment Method</h2>
                            <div className="payment-options">
                                <div className="payment-option active">
                                    <input type="radio" checked readOnly />
                                    <div className="payment-info">
                                        <span className="payment-name">Credit / Debit Card</span>
                                        <div className="card-icons">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-form">
                                <div className="form-group full-width">
                                    <label>Card Number</label>
                                    <input type="text" required placeholder="xxxx xxxx xxxx xxxx" />
                                </div>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label>Expiry Date</label>
                                        <input type="text" required placeholder="MM / YY" />
                                    </div>
                                    <div className="form-group">
                                        <label>CVV</label>
                                        <input type="text" required placeholder="xxx" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <button
                            type="submit"
                            className={`place-order-btn ${isProcessing ? 'loading' : ''}`}
                            disabled={isProcessing}
                        >
                            {isProcessing ? 'Processing...' : `Pay $${cartTotal.toFixed(2)}`}
                        </button>

                        <div className="secure-badge">
                            <FiShield /> <span>Your payment is secured with 256-bit encryption</span>
                        </div>
                    </form>

                    <div className="checkout-summary">
                        <div className="summary-card">
                            <h3>Order Summary</h3>
                            <div className="summary-items">
                                {cartItems.map((item, idx) => (
                                    <div key={idx} className="summary-item">
                                        <div className="summary-item-info">
                                            <span className="item-name">{item.name}</span>
                                            <span className="item-qty">Qty: {item.quantity}</span>
                                        </div>
                                        <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="summary-divider"></div>
                            <div className="summary-totals">
                                <div className="total-row">
                                    <span>Subtotal</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="total-row">
                                    <span>Shipping</span>
                                    <span className="text-success">FREE</span>
                                </div>
                                <div className="total-row grand-total">
                                    <span>Total</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
