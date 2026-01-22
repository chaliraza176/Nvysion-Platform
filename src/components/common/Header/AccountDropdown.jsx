import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

/**
 * Account Dropdown Component
 * Shows user account menu options
 */
const AccountDropdown = ({ user }) => {
    const { logout } = useAuth();

    const menuItems = [
        { label: 'Dashboard', path: '/account/dashboard' },
        { label: 'Account Profile', path: '/account/profile' },
        { label: 'My Projects', path: '/account/projects' },
        { label: 'My Design Services', path: '/account/design-services' },
        { label: 'Brand Kit', path: '/account/brand-kit' },
        { label: 'My Uploads', path: '/account/uploads' },
        { label: 'My Favorites', path: '/account/favorites' },
        { divider: true },
        { label: 'Order History', path: '/account/orders' },
        { label: 'Subscriptions', path: '/account/subscriptions' },
        { label: 'Account Settings', path: '/account/settings' },
        { label: 'Payment & Delivery', path: '/account/payment' }
    ];

    const userName = user?.firstName || user?.name || 'User';

    return (
        <div className="account-dropdown">
            <div className="account-dropdown-header">
                <p className="greeting">Hello, {userName}</p>
                <p className="account-label">Account</p>
            </div>
            <div className="account-dropdown-menu">
                {menuItems.map((item, index) => (
                    item.divider ? (
                        <div key={index} className="dropdown-divider" />
                    ) : (
                        <Link key={index} to={item.path} className="dropdown-item">
                            {item.label}
                        </Link>
                    )
                ))}
                <div className="dropdown-divider" />
                <button onClick={logout} className="dropdown-item signout">
                    Sign out
                </button>
            </div>
        </div>
    );
};

export default AccountDropdown;
