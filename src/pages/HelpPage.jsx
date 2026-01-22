import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMessageCircle, FiBook, FiHelpCircle } from 'react-icons/fi';
import './HelpPage.css';

const HelpPage = () => {
    const helpTopics = [
        { icon: <FiBook />, title: 'Getting Started', description: 'Learn the basics of ordering and design' },
        { icon: <FiHelpCircle />, title: 'Order Issues', description: 'Track, modify, or cancel your order' },
        { icon: <FiMessageCircle />, title: 'Design Help', description: 'Tips for creating great designs' },
        { icon: <FiMail />, title: 'Account Help', description: 'Manage your account and preferences' }
    ];

    const faqs = [
        {
            question: 'How do I track my order?',
            answer: 'You can track your order by logging into your account and viewing your order history. A tracking number will be provided once your order ships.'
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay.'
        },
        {
            question: 'Can I cancel or modify my order?',
            answer: 'Orders can be modified or cancelled within 1 hour of placement. After that, production has begun and changes cannot be made.'
        },
        {
            question: 'What is your return policy?',
            answer: 'We offer a 100% satisfaction guarantee. If you\'re not happy with your order, contact us within 30 days for a reprint or refund.'
        }
    ];

    return (
        <div className="help-page fade-in">
            <div className="help-hero">
                <div className="container">
                    <h1>How can we help you?</h1>
                    <p>Find answers, get support, and learn how to make the most of Nvysion Platform</p>
                </div>
            </div>

            <div className="container">
                <div className="help-content">
                    {/* Contact Options */}
                    <section className="contact-section">
                        <h2>Get in Touch</h2>
                        <div className="contact-grid">
                            <div className="contact-card">
                                <FiPhone className="contact-icon" />
                                <h3>Call Us</h3>
                                <p>Mon-Fri: 8am-10pm EST</p>
                                <a href="tel:1-800-123-4567" className="contact-link">1-800-123-4567</a>
                            </div>
                            <div className="contact-card">
                                <FiMail className="contact-icon" />
                                <h3>Email Support</h3>
                                <p>We'll respond within 24 hours</p>
                                <a href="mailto:support@nvysion.com" className="contact-link">support@nvysion.com</a>
                            </div>
                            <div className="contact-card">
                                <FiMessageCircle className="contact-icon" />
                                <h3>Live Chat</h3>
                                <p>Chat with our team</p>
                                <button className="btn btn-primary">Start Chat</button>
                            </div>
                        </div>
                    </section>

                    {/* Help Topics */}
                    <section className="topics-section">
                        <h2>Browse Help Topics</h2>
                        <div className="topics-grid">
                            {helpTopics.map((topic, index) => (
                                <div key={index} className="topic-card">
                                    <div className="topic-icon">{topic.icon}</div>
                                    <h3>{topic.title}</h3>
                                    <p>{topic.description}</p>
                                    <Link to="#" className="topic-link">Learn more →</Link>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* FAQs */}
                    <section className="faq-section">
                        <h2>Frequently Asked Questions</h2>
                        <div className="faq-list">
                            {faqs.map((faq, index) => (
                                <div key={index} className="faq-item">
                                    <h3>{faq.question}</h3>
                                    <p>{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HelpPage;
