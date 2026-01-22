import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FaPinterest } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Email Subscription */}
            <div className="footer-newsletter">
                <div className="container">
                    <div className="newsletter-content">
                        <div className="newsletter-text">
                            <h3 className="newsletter-title">Join our email list</h3>
                            <p className="newsletter-subtitle">Get 15% off your first order!</p>
                        </div>
                        <div className="newsletter-form">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="newsletter-input"
                            />
                            <button className="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Let Us Help */}
                        <div className="footer-column">
                            <h4 className="footer-column-title">Let Us Help</h4>
                            <ul className="footer-links">
                                <li><a href="#">Customer Service</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Track Your Order</a></li>
                                <li><a href="#">Returns & Exchanges</a></li>
                                <li><a href="#">Shipping Info</a></li>
                                <li><a href="#">Design Services</a></li>
                            </ul>
                        </div>

                        {/* Our Company */}
                        <div className="footer-column">
                            <h4 className="footer-column-title">Our Company</h4>
                            <ul className="footer-links">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Press</a></li>
                                <li><a href="#">Investor Relations</a></li>
                                <li><a href="#">Sustainability</a></li>
                                <li><a href="#">Affiliate Program</a></li>
                            </ul>
                        </div>

                        {/* Popular Products */}
                        <div className="footer-column">
                            <h4 className="footer-column-title">Popular Products</h4>
                            <ul className="footer-links">
                                <li><a href="#">Business Cards</a></li>
                                <li><a href="#">Postcards</a></li>
                                <li><a href="#">Banners</a></li>
                                <li><a href="#">Labels & Stickers</a></li>
                                <li><a href="#">T-Shirts</a></li>
                                <li><a href="#">Wedding Invitations</a></li>
                            </ul>
                        </div>

                        {/* Trustpilot */}
                        <div className="footer-column">
                            <h4 className="footer-column-title">Customer Reviews</h4>
                            <div className="trustpilot-widget">
                                <div className="trust-rating">
                                    <div className="trust-stars">★★★★★</div>
                                    <p className="trust-text">Excellent</p>
                                    <p className="trust-reviews">Based on 50,000+ reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <div className="footer-info">
                            <p className="copyright">© 2026 VistaPrint Clone. All rights reserved.</p>
                            <div className="footer-legal">
                                <a href="#">Privacy Policy</a>
                                <span className="separator">•</span>
                                <a href="#">Terms of Service</a>
                                <span className="separator">•</span>
                                <a href="#">Cookie Settings</a>
                            </div>
                        </div>

                        <div className="footer-social">
                            <a href="#" className="social-link" aria-label="Facebook">
                                <FiFacebook />
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <FiTwitter />
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <FiInstagram />
                            </a>
                            <a href="#" className="social-link" aria-label="Pinterest">
                                <FaPinterest />
                            </a>
                        </div>

                        <div className="footer-payment">
                            <span className="payment-text">We accept:</span>
                            <div className="payment-icons">
                                <span className="payment-icon">💳</span>
                                <span className="payment-icon">💵</span>
                                <span className="payment-icon">🏦</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
