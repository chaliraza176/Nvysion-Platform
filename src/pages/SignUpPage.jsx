import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff, FiUser, FiPhone } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import './SignUpPage.css';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [receiveEmails, setReceiveEmails] = useState(true);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { register } = useAuth();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match!');
            return;
        }
        if (!agreeToTerms) {
            setError('Please agree to Terms & Conditions');
            return;
        }
        if (formData.password.length < 8) {
            setError('Password must be at least 8 characters');
            return;
        }

        setIsLoading(true);

        try {
            await register({
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                password: formData.password,
                agreeToTerms,
                emailPreferences: {
                    promotional: receiveEmails,
                    orderUpdates: true
                }
            });
            navigate('/account-created');
        } catch (err) {
            setError(err.message || 'Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="signup-page fade-in">
            <div className="container">
                <div className="signup-container">
                    <div className="signup-card">
                        <div className="signup-header">
                            <h1>Create Your Account</h1>
                            <p>Join Nvysion Platform and start creating amazing designs</p>
                        </div>

                        <form onSubmit={handleSubmit} className="signup-form">
                            {error && (
                                <div className="error-message">
                                    {error}
                                </div>
                            )}

                            {/* Name Fields */}
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <div className="input-wrapper">
                                        <FiUser className="input-icon" />
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            placeholder="John"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <div className="input-wrapper">
                                        <FiUser className="input-icon" />
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            placeholder="Doe"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <div className="input-wrapper">
                                    <FiMail className="input-icon" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number (Optional)</label>
                                <div className="input-wrapper">
                                    <FiPhone className="input-icon" />
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="+1 (555) 123-4567"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="form-group">
                                <label htmlFor="password">Password *</label>
                                <div className="input-wrapper">
                                    <FiLock className="input-icon" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        placeholder="Create a strong password"
                                        value={formData.password}
                                        onChange={handleChange}
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
                                <p className="field-hint">Must be at least 8 characters</p>
                            </div>

                            {/* Confirm Password */}
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password *</label>
                                <div className="input-wrapper">
                                    <FiLock className="input-icon" />
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Re-enter your password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="toggle-password"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                                    </button>
                                </div>
                            </div>

                            {/* Terms Checkbox */}
                            <div className="form-checkboxes">
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={agreeToTerms}
                                        onChange={(e) => setAgreeToTerms(e.target.checked)}
                                        required
                                    />
                                    <span>
                                        I agree to the <Link to="/terms">Terms & Conditions</Link> and{' '}
                                        <Link to="/privacy">Privacy Policy</Link>
                                    </span>
                                </label>

                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={receiveEmails}
                                        onChange={(e) => setReceiveEmails(e.target.checked)}
                                    />
                                    <span>Send me promotional emails and special offers</span>
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary btn-large signup-btn" disabled={isLoading}>
                                {isLoading ? 'Creating Account...' : 'Create Account'}
                            </button>

                            <div className="divider">
                                <span>OR</span>
                            </div>

                            <div className="social-signup">
                                <button type="button" className="btn btn-social">
                                    Sign up with Google
                                </button>
                                <button type="button" className="btn btn-social">
                                    Sign up with Facebook
                                </button>
                            </div>
                        </form>

                        <div className="signup-footer">
                            <p>Already have an account? <Link to="/signin">Sign in</Link></p>
                        </div>
                    </div>

                    <div className="signup-benefits">
                        <h2>Join thousands of businesses</h2>
                        <ul className="benefits-list">
                            <li>
                                <span className="benefit-icon">✓</span>
                                <div>
                                    <h3>Access Exclusive Deals</h3>
                                    <p>Get member-only discounts and promotions</p>
                                </div>
                            </li>
                            <li>
                                <span className="benefit-icon">✓</span>
                                <div>
                                    <h3>Save Your Designs</h3>
                                    <p>Store and access your projects anytime, anywhere</p>
                                </div>
                            </li>
                            <li>
                                <span className="benefit-icon">✓</span>
                                <div>
                                    <h3>Fast Checkout</h3>
                                    <p>Save payment methods and shipping addresses</p>
                                </div>
                            </li>
                            <li>
                                <span className="benefit-icon">✓</span>
                                <div>
                                    <h3>Track Your Orders</h3>
                                    <p>Get real-time updates on your order status</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
