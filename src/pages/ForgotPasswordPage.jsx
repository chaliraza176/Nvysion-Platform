import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiArrowLeft } from 'react-icons/fi';
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle forgot password logic here
        console.log('Reset password for:', email);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="forgot-password-page fade-in">
                <div className="container">
                    <div className="forgot-password-card success-card">
                        <div className="success-icon">✓</div>
                        <h1>Check Your Email</h1>
                        <p>
                            We've sent password reset instructions to <strong>{email}</strong>
                        </p>
                        <p className="info-text">
                            Didn't receive the email? Check your spam folder or{' '}
                            <button onClick={() => setIsSubmitted(false)} className="link-btn">
                                try again
                            </button>
                        </p>
                        <Link to="/signin" className="btn btn-primary btn-large">
                            Back to Sign In
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="forgot-password-page fade-in">
            <div className="container">
                <div className="forgot-password-card">
                    <Link to="/signin" className="back-link">
                        <FiArrowLeft /> Back to Sign In
                    </Link>

                    <div className="forgot-password-header">
                        <div className="lock-icon">🔒</div>
                        <h1>Forgot Your Password?</h1>
                        <p>
                            No worries! Enter your email address and we'll send you instructions
                            to reset your password.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="forgot-password-form">
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <div className="input-wrapper">
                                <FiMail className="input-icon" />
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-large">
                            Send Reset Instructions
                        </button>
                    </form>

                    <div className="help-text">
                        <p>
                            Remember your password?{' '}
                            <Link to="/signin">Sign in here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
