import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import './SignInPage.css';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError(err.message || 'Invalid email or password');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="signin-page fade-in">
            <div className="container">
                <div className="signin-container">
                    <div className="signin-card">
                        <div className="signin-header">
                            <h1>Welcome Back</h1>
                            <p>Sign in to your Nvysion Platform account</p>
                        </div>

                        <form onSubmit={handleSubmit} className="signin-form">
                            {error && (
                                <div className="error-message">
                                    {error}
                                </div>
                            )}

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

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="input-wrapper">
                                    <FiLock className="input-icon" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="toggle-password"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FiEyeOff /> : <FiEye />}
                                    </button>
                                </div>
                            </div>

                            <div className="form-options">
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                    />
                                    <span>Remember me</span>
                                </label>
                                <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
                            </div>

                            <button type="submit" className="btn btn-primary btn-large signin-btn" disabled={isLoading}>
                                {isLoading ? 'Signing in...' : 'Sign In'}
                            </button>

                            <div className="divider">
                                <span>OR</span>
                            </div>

                            <div className="social-signin">
                                <button type="button" className="btn btn-social">
                                    Continue with Google
                                </button>
                                <button type="button" className="btn btn-social">
                                    Continue with Facebook
                                </button>
                            </div>
                        </form>

                        <div className="signin-footer">
                            <p>Don't have an account? <Link to="/signup">Sign up for free</Link></p>
                        </div>
                    </div>

                    <div className="signin-benefits">
                        <h2>Why sign in?</h2>
                        <ul className="benefits-list">
                            <li>
                                <span className="benefit-icon">✓</span>
                                <div>
                                    <h3>Save Your Designs</h3>
                                    <p>Access your projects from any device</p>
                                </div>
                            </li>
                            <li>
                                <span className="benefit-icon">✓</span>
                                <div>
                                    <h3>Track Orders</h3>
                                    <p>View order history and shipping status</p>
                                </div>
                            </li>
                            <li>
                                <span className="benefit-icon">✓</span>
                                <div>
                                    <h3>Exclusive Deals</h3>
                                    <p>Get special offers and discounts</p>
                                </div>
                            </li>
                            <li>
                                <span className="benefit-icon">✓</span>
                                <div>
                                    <h3>Faster Checkout</h3>
                                    <p>Save addresses and payment methods</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
