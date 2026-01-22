// Application Constants
export const APP_NAME = 'Nvysion Platform';
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Navigation Links
export const NAV_LINKS = {
    DEALS: '/deals',
    TWO_DAY_DELIVERY: '/2-day-delivery',
    BUSINESS_CARDS: '/business-cards',
    CART: '/cart',
    SIGNIN: '/signin',
    SIGNUP: '/signup',
    HELP: '/help',
    PROJECTS: '/projects',
    FAVORITES: '/favorites'
};

// Quantity Options
export const QUANTITY_OPTIONS = [
    { qty: 50, price: 9.99 },
    { qty: 100, price: 14.99 },
    { qty: 250, price: 29.99 },
    { qty: 500, price: 49.99 },
    { qty: 1000, price: 89.99 }
];

// Material Options
export const MATERIAL_OPTIONS = [
    { id: 'standard', name: 'Standard', price: 0 },
    { id: 'premium-matte', name: 'Premium Matte', price: 2 },
    { id: 'glossy', name: 'Glossy', price: 1.5 },
    { id: 'uncoated', name: 'Uncoated', price: 1 }
];

// Size Options
export const SIZE_OPTIONS = [
    { id: 'small', name: '3.5" x 2"', dimensions: '3.5x2' },
    { id: 'medium', name: '4" x 3"', dimensions: '4x3' },
    { id: 'large', name: '5" x 4"', dimensions: '5x4' },
    { id: 'custom', name: 'Custom Size', dimensions: 'custom' }
];

// Order Status
export const ORDER_STATUS = {
    PENDING: 'pending',
    PROCESSING: 'processing',
    PRINTING: 'printing',
    SHIPPED: 'shipped',
    DELIVERED: 'delivered',
    CANCELLED: 'cancelled'
};

// Local Storage Keys
export const STORAGE_KEYS = {
    USER: 'nvysion_user',
    CART: 'nvysion_cart',
    TOKEN: 'nvysion_token'
};
