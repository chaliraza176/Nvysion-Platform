import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUser, FiFolderPlus, FiEdit, FiGlobe, FiPackage, FiUpload, FiHeart, FiMail, FiShoppingBag, FiCreditCard, FiSettings, FiRefreshCw } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import './AccountLayout.css';

const AccountLayout = ({ children, title }) => {
    const location = useLocation();
    const { user } = useAuth();

    const menuItems = [
        { icon: <FiHome />, label: 'Dashboard', path: '/account/dashboard' },
        { icon: <FiUser />, label: 'Account Profile', path: '/account/profile' },
        { icon: <FiFolderPlus />, label: 'My Projects', path: '/account/projects' },
        { icon: <FiEdit />, label: 'My Design Services', path: '/account/design-services' },
        { icon: <FiGlobe />, label: 'Websites & Digital', path: '/account/websites' },
        { icon: <FiPackage />, label: 'Brand Kit', path: '/account/brand-kit' },
        { icon: <FiUpload />, label: 'My Uploads', path: '/account/uploads' },
        { icon: <FiHeart />, label: 'My Favorites', path: '/account/favorites' },
        { icon: <FiMail />, label: 'Mailing Lists', path: '/account/mailing-lists' },
        { divider: true },
        { icon: <FiShoppingBag />, label: 'Order History & Reorder', path: '/account/orders' },
        { icon: <FiRefreshCw />, label: 'Subscriptions', path: '/account/subscriptions' },
        { icon: <FiSettings />, label: 'Account Settings', path: '/account/settings' },
        { icon: <FiCreditCard />, label: 'Payment & Delivery', path: '/account/payment' },
    ];

    const userName = user?.firstName || user?.name || 'User';
    const userEmail = user?.email || 'user@example.com';
    const userInitial = userName.charAt(0).toUpperCase();

    return (
        <div className="account-page-layout">
            <div className="container">
                <div className="account-layout-grid">
                    {/* Sidebar */}
                    <aside className="account-sidebar">
                        <div className="account-user-info">
                            <div className="user-avatar">{userInitial}</div>
                            <div className="user-details">
                                <h3>{userName}</h3>
                                <p>{userEmail}</p>
                            </div>
                        </div>

                        <nav className="account-nav">
                            {menuItems.map((item, index) => 
                                item.divider ? (
                                    <div key={index} className="nav-divider"></div>
                                ) : (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        className={`account-nav-item ${location.pathname === item.path ? 'active' : ''}`}
                                    >
                                        <span className="nav-icon">{item.icon}</span>
                                        <span className="nav-label">{item.label}</span>
                                    </Link>
                                )
                            )}
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="account-main-content">
                        <div className="account-content-header">
                            <h1>{title}</h1>
                        </div>
                        <div className="account-content-body">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AccountLayout;
