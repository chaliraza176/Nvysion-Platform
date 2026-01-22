import React from 'react';
import { Link } from 'react-router-dom';
import './AuthLayout.css';

/**
 * Auth Layout Component
 * Used for Sign In, Sign Up, Forgot Password pages
 */
const AuthLayout = ({ children, title, subtitle }) => {
    return (
        <div className="auth-layout">
            <div className="auth-container">
                <div className="auth-header">
                    <Link to="/" className="auth-logo">
                        VistaPrint
                    </Link>
                </div>
                <div className="auth-content">
                    {title && <h1 className="auth-title">{title}</h1>}
                    {subtitle && <p className="auth-subtitle">{subtitle}</p>}
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
