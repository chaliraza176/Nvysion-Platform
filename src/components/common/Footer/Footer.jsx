import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';
import './Footer.css';

/**
 * Footer Component
 * Site-wide footer with links and social media
 */
const Footer = () => {
    const footerLinks = {
        products: [
            { label: 'Business Cards', path: '/business-cards' },
            { label: 'Marketing Materials', path: '/category/postcards-print' },
            { label: 'Signs & Banners', path: '/category/signs-banners-posters' },
            { label: 'Clothing & Bags', path: '/category/clothing-bags' },
            { label: 'Promotional Products', path: '/category/promotional-products' }
        ],
        support: [
            { label: 'Help Center', path: '/help' },
            { label: 'Contact Us', path: '/contact' },
            { label: 'Shipping Info', path: '/shipping' },
            { label: 'Returns', path: '/returns' },
            { label: 'FAQs', path: '/faq' }
        ],
        company: [
            { label: 'About Us', path: '/about' },
            { label: 'Careers', path: '/careers' },
            { label: 'Press', path: '/press' },
            { label: 'Blog', path: '/blog' },
            { label: 'Sustainability', path: '/sustainability' }
        ],
        legal: [
            { label: 'Privacy Policy', path: '/privacy' },
            { label: 'Terms of Service', path: '/terms' },
            { label: 'Cookie Policy', path: '/cookies' },
            { label: 'Accessibility', path: '/accessibility' }
        ]
    };

    const socialLinks = [
        { icon: FiFacebook, url: 'https://facebook.com', label: 'Facebook' },
        { icon: FiTwitter, url: 'https://twitter.com', label: 'Twitter' },
        { icon: FiInstagram, url: 'https://instagram.com', label: 'Instagram' },
        { icon: FiLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: FiYoutube, url: 'https://youtube.com', label: 'YouTube' }
    ];

    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <Link to="/" className="footer-logo">Nvysion Platform</Link>
            <p className="footer-tagline">
                                Your partner in professional printing and marketing solutions.
                            </p>
                            <div className="footer-social">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label={social.label}
                                    >
                                        <social.icon />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="footer-links">
                            <h4>Products</h4>
                            <ul>
                                {footerLinks.products.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.path}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-links">
                            <h4>Support</h4>
                            <ul>
                                {footerLinks.support.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.path}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-links">
                            <h4>Company</h4>
                            <ul>
                                {footerLinks.company.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.path}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-links">
                            <h4>Legal</h4>
                            <ul>
                                {footerLinks.legal.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.path}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

                <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Nvysion Platform. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
