import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectsPageNew.css';

const ProjectsPage = () => {
    return (
        <div className="projects-page-real">
            <div className="projects-container">
                {/* Left Sidebar */}
                <aside className="projects-sidebar">
                    <h2 className="sidebar-title">Account</h2>
                    <nav className="sidebar-nav">
                        <Link to="/account/dashboard" className="sidebar-link">Dashboard</Link>
                        <Link to="/account/profile" className="sidebar-link">Account Profile</Link>
                    </nav>

                    <h2 className="sidebar-title">Workspace</h2>
                    <nav className="sidebar-nav">
                        <Link to="/projects" className="sidebar-link active">My Projects</Link>
                        <Link to="/account/design-services" className="sidebar-link">My Design Services</Link>
                        <Link to="/account/websites" className="sidebar-link">Websites & Digital</Link>
                        <Link to="/account/brand-kit" className="sidebar-link">Brand Kit</Link>
                        <Link to="/account/uploads" className="sidebar-link">My Uploads</Link>
                        <Link to="/account/favorites" className="sidebar-link">My Favorites</Link>
                        <Link to="/account/mailing-lists" className="sidebar-link">Mailing Lists</Link>
                    </nav>

                    <h2 className="sidebar-title">Orders</h2>
                    <nav className="sidebar-nav">
                        <Link to="/account/orders" className="sidebar-link">Order History & Reorder</Link>
                        <Link to="/account/subscriptions" className="sidebar-link">Subscriptions</Link>
                    </nav>

                    <h2 className="sidebar-title">Settings</h2>
                    <nav className="sidebar-nav">
                        <Link to="/account/settings" className="sidebar-link">Account Settings</Link>
                        <Link to="/account/payment" className="sidebar-link">Payment & Delivery</Link>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="projects-main">
                    <h1 className="projects-main-title">My Projects</h1>

                    {/* Empty State */}
                    <div className="projects-empty-state">
                        <div className="empty-illustration">
                            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                                <rect x="20" y="30" width="80" height="60" rx="4" fill="#E3F2FD" stroke="#42A5F5" strokeWidth="2"/>
                                <path d="M30 45 L50 65 L90 35" stroke="#42A5F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="85" cy="25" r="8" fill="#FFD54F" stroke="#FFA726" strokeWidth="2"/>
                                <path d="M82 22 L88 28 M88 22 L82 28" stroke="#FFA726" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <h2 className="empty-title">You don't have any projects yet.</h2>
                        <p className="empty-subtitle">Ready to create? So are we. Here are some popular starting points:</p>
                        
                        <div className="starting-points">
                            <Link to="/category/marketing/business-cards" className="starting-point-btn">
                                Business cards
                            </Link>
                            <Link to="/category/marketing/marketing-materials" className="starting-point-btn">
                                Marketing Materials
                            </Link>
                            <Link to="/category/signs-banners/invitations-stationery" className="starting-point-btn">
                                Invitations & Stationery
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProjectsPage;
