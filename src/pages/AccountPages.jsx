// Account Pages - All in one file for efficiency
import React from 'react';
import AccountLayout from '../components/AccountLayout';
import { Link } from 'react-router-dom';
import { FiPlus, FiDownload, FiEdit, FiTrash2 } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

// Dashboard Page
export const AccountDashboard = () => {
    const { user } = useAuth();
    return (
        <AccountLayout title="Dashboard">
            <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                <div className="dashboard-card" style={{ padding: '24px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '12px', color: 'white' }}>
                    <h3 style={{ fontSize: '2rem', margin: '0 0 8px 0' }}>0</h3>
                    <p style={{ margin: 0, opacity: 0.9 }}>Total Projects</p>
                </div>
                <div className="dashboard-card" style={{ padding: '24px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', borderRadius: '12px', color: 'white' }}>
                    <h3 style={{ fontSize: '2rem', margin: '0 0 8px 0' }}>0</h3>
                    <p style={{ margin: 0, opacity: 0.9 }}>Total Orders</p>
                </div>
                <div className="dashboard-card" style={{ padding: '24px', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', borderRadius: '12px', color: 'white' }}>
                    <h3 style={{ fontSize: '2rem', margin: '0 0 8px 0' }}>0</h3>
                    <p style={{ margin: 0, opacity: 0.9 }}>Saved Favorites</p>
                </div>
            </div>

            <h2 style={{ marginBottom: '16px' }}>Recent Activity</h2>
            <div style={{ background: '#f8f9fa', padding: '32px', borderRadius: '12px', textAlign: 'center' }}>
                <p style={{ color: '#6b7280' }}>No recent activity. Start creating amazing designs!</p>
                <Link to="/" className="btn btn-primary" style={{ marginTop: '16px', display: 'inline-block' }}>Browse Products</Link>
            </div>
        </AccountLayout>
    );
};

// Profile Page
export const AccountProfile = () => {
    const { user } = useAuth();
    return (
        <AccountLayout title="Account Profile">
            <form style={{ maxWidth: '600px' }}>
                <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>First Name</label>
                    <input type="text" defaultValue={user?.firstName || ''} style={{ width: '100%', padding: '12px', border: '2px solid #e5e7eb', borderRadius: '8px' }} />
                </div>
                <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Last Name</label>
                    <input type="text" defaultValue={user?.lastName || ''} style={{ width: '100%', padding: '12px', border: '2px solid #e5e7eb', borderRadius: '8px' }} />
                </div>
                <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Email</label>
                    <input type="email" defaultValue={user?.email || ''} style={{ width: '100%', padding: '12px', border: '2px solid #e5e7eb', borderRadius: '8px' }} />
                </div>
                <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Phone</label>
                    <input type="tel" defaultValue={user?.phone || ''} style={{ width: '100%', padding: '12px', border: '2px solid #e5e7eb', borderRadius: '8px' }} />
                </div>
                <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
        </AccountLayout>
    );
};

// Projects Page
export const AccountProjects = () => (
    <AccountLayout title="My Projects">
        <div style={{ marginBottom: '24px' }}>
            <button className="btn btn-primary"><FiPlus /> New Project</button>
        </div>
        <div style={{ background: '#f8f9fa', padding: '48px', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>📁</div>
            <h3 style={{ marginBottom: '8px' }}>No projects yet</h3>
            <p style={{ color: '#6b7280', marginBottom: '24px' }}>Create your first project to get started</p>
            <Link to="/" className="btn btn-primary">Start Designing</Link>
        </div>
    </AccountLayout>
);

// Design Services Page
export const AccountDesignServices = () => (
    <AccountLayout title="My Design Services">
        <p style={{ marginBottom: '24px', color: '#6b7280' }}>Professional design services for your business needs</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ padding: '24px', border: '2px solid #e5e7eb', borderRadius: '12px' }}>
                <h3 style={{ marginBottom: '12px' }}>Logo Design</h3>
                <p style={{ color: '#6b7280', marginBottom: '16px' }}>Get a custom logo designed by professionals</p>
                <button className="btn btn-secondary">Learn More</button>
            </div>
            <div style={{ padding: '24px', border: '2px solid #e5e7eb', borderRadius: '12px' }}>
                <h3 style={{ marginBottom: '12px' }}>Business Card Design</h3>
                <p style={{ color: '#6b7280', marginBottom: '16px' }}>Professional business card design services</p>
                <button className="btn btn-secondary">Learn More</button>
            </div>
        </div>
    </AccountLayout>
);

// Websites Page
export const AccountWebsites = () => (
    <AccountLayout title="Websites & Digital">
        <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '40px', borderRadius: '12px', color: 'white', marginBottom: '32px' }}>
            <h2 style={{ marginBottom: '16px' }}>Build Your Website</h2>
            <p style={{ marginBottom: '24px', opacity: 0.9 }}>Create a professional website with Nvysion Platform x Wix</p>
            <button className="btn" style={{ background: 'white', color: '#667eea' }}>Get Started</button>
        </div>
        <p style={{ color: '#6b7280' }}>No websites yet. Start building your online presence today!</p>
    </AccountLayout>
);

// Brand Kit Page
export const AccountBrandKit = () => (
    <AccountLayout title="Brand Kit">
        <p style={{ marginBottom: '24px', color: '#6b7280' }}>Manage your brand colors, logos, and fonts in one place</p>
        <div style={{ background: '#f8f9fa', padding: '48px', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>🎨</div>
            <h3 style={{ marginBottom: '8px' }}>Create Your Brand Kit</h3>
            <p style={{ color: '#6b7280', marginBottom: '24px' }}>Add your brand assets to use across all your designs</p>
            <button className="btn btn-primary">Add Brand Assets</button>
        </div>
    </AccountLayout>
);

// Uploads Page
export const AccountUploads = () => (
    <AccountLayout title="My Uploads">
        <div style={{ marginBottom: '24px' }}>
            <button className="btn btn-primary"><FiPlus /> Upload File</button>
        </div>
        <div style={{ background: '#f8f9fa', padding: '48px', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>📤</div>
            <h3 style={{ marginBottom: '8px' }}>No uploads yet</h3>
            <p style={{ color: '#6b7280' }}>Upload your design files to use in your projects</p>
        </div>
    </AccountLayout>
);

// Favorites Page
export const AccountFavorites = () => (
    <AccountLayout title="My Favorites">
        <p style={{ color: '#6b7280', marginBottom: '24px' }}>Products you've saved for later</p>
        <div style={{ background: '#f8f9fa', padding: '48px', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>❤️</div>
            <h3 style={{ marginBottom: '8px' }}>No favorites yet</h3>
            <p style={{ color: '#6b7280', marginBottom: '24px' }}>Start saving products you love</p>
            <Link to="/" className="btn btn-primary">Browse Products</Link>
        </div>
    </AccountLayout>
);

// Mailing Lists Page
export const AccountMailingLists = () => (
    <AccountLayout title="Mailing Lists">
        <p style={{ marginBottom: '24px', color: '#6b7280' }}>Manage your email marketing lists</p>
        <button className="btn btn-primary" style={{ marginBottom: '24px' }}><FiPlus /> Create New List</button>
        <div style={{ background: '#f8f9fa', padding: '32px', borderRadius: '12px', textAlign: 'center' }}>
            <p style={{ color: '#6b7280' }}>No mailing lists yet</p>
        </div>
    </AccountLayout>
);

// Orders Page
export const AccountOrders = () => (
    <AccountLayout title="Order History & Reorder">
        <div style={{ marginBottom: '24px' }}>
            <input type="search" placeholder="Search orders..." style={{ width: '100%', maxWidth: '400px', padding: '12px', border: '2px solid #e5e7eb', borderRadius: '8px' }} />
        </div>
        <div style={{ background: '#f8f9fa', padding: '48px', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>📦</div>
            <h3 style={{ marginBottom: '8px' }}>No orders yet</h3>
            <p style={{ color: '#6b7280', marginBottom: '24px' }}>Your order history will appear here</p>
            <Link to="/" className="btn btn-primary">Start Shopping</Link>
        </div>
    </AccountLayout>
);

// Subscriptions Page
export const AccountSubscriptions = () => (
    <AccountLayout title="Subscriptions">
        <p style={{ marginBottom: '24px', color: '#6b7280' }}>Manage your recurring orders and subscriptions</p>
        <div style={{ background: '#f8f9fa', padding: '48px', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>🔄</div>
            <h3 style={{ marginBottom: '8px' }}>No active subscriptions</h3>
            <p style={{ color: '#6b7280' }}>Set up recurring orders for products you order regularly</p>
        </div>
    </AccountLayout>
);

// Settings Page
export const AccountSettings = () => (
    <AccountLayout title="Account Settings">
        <div style={{ maxWidth: '600px' }}>
            <h3 style={{ marginBottom: '16px' }}>Email Preferences</h3>
            <label style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <input type="checkbox" defaultChecked />
                <span>Receive promotional emails</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                <input type="checkbox" defaultChecked />
                <span>Order updates and notifications</span>
            </label>

            <h3 style={{ marginBottom: '16px' }}>Password</h3>
            <Link to="/forgot-password" className="btn btn-secondary">Change Password</Link>

            <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '2px solid #e5e7eb' }}>
                <h3 style={{ marginBottom: '16px', color: '#dc2626' }}>Danger Zone</h3>
                <button className="btn" style={{ background: '#fee2e2', color: '#dc2626', border: '2px solid #dc2626' }}>Delete Account</button>
            </div>
        </div>
    </AccountLayout>
);

// Payment Page
export const AccountPayment = () => (
    <AccountLayout title="Payment & Delivery">
        <div style={{ maxWidth: '600px' }}>
            <h3 style={{ marginBottom: '16px' }}>Saved Payment Methods</h3>
            <button className="btn btn-primary" style={{ marginBottom: '32px' }}><FiPlus /> Add Payment Method</button>
            <div style={{ background: '#f8f9fa', padding: '24px', borderRadius: '12px', marginBottom: '32px' }}>
                <p style={{ color: '#6b7280' }}>No saved payment methods</p>
            </div>

            <h3 style={{ marginBottom: '16px' }}>Saved Addresses</h3>
            <button className="btn btn-primary" style={{ marginBottom: '24px' }}><FiPlus /> Add Address</button>
            <div style={{ background: '#f8f9fa', padding: '24px', borderRadius: '12px' }}>
                <p style={{ color: '#6b7280' }}>No saved addresses</p>
            </div>
        </div>
    </AccountLayout>
);
