import React from 'react';
import { Link } from 'react-router-dom';
import './AccountCreatedPage.css';

const AccountCreatedPage = () => {
    return (
        <div className="account-created-page fade-in">
            <div className="container">
                <div className="success-container">
                    <div className="success-animation">
                        <div className="checkmark-circle">
                            <div className="checkmark"></div>
                        </div>
                    </div>

                    <h1 className="success-title">Account Created Successfully!</h1>
                    <p className="success-message">
                        Welcome to VistaPrint! Your account has been created and you're ready to start designing.
                    </p>

                    <div className="next-steps">
                        <h2>What's Next?</h2>
                        <div className="steps-grid">
                            <div className="step-card">
                                <div className="step-icon">🎨</div>
                                <h3>Browse Products</h3>
                                <p>Explore thousands of customizable products</p>
                            </div>
                            <div className="step-card">
                                <div className="step-icon">✏️</div>
                                <h3>Start Designing</h3>
                                <p>Use our design tools or upload your own</p>
                            </div>
                            <div className="step-card">
                                <div className="step-icon">🎁</div>
                                <h3>Get Exclusive Deals</h3>
                                <p>Check your email for member-only offers</p>
                            </div>
                        </div>
                    </div>

                    <div className="action-buttons">
                        <Link to="/signin" className="btn btn-primary btn-large">
                            Sign In Now
                        </Link>
                        <Link to="/" className="btn btn-secondary btn-large">
                            Browse Products
                        </Link>
                    </div>

                    <div className="email-verification-notice">
                        <p>
                            📧 <strong>Check your email!</strong> We've sent a verification link to confirm your account.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountCreatedPage;
