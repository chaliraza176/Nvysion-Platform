/**
 * 4over API Frontend Service
 * Handles all 4over-related API calls from the frontend
 * 
 * 4over uses UUID-based system:
 * - product_uuid: Product identifier
 * - runsize_uuid: Size/dimensions
 * - turnaroundtime_uuid: Production time
 * - colorspec_uuid: Color specifications (4/0, 4/4, etc.)
 */

import api from './api';

// ============ 4OVER STATUS ============
export const get4overStatus = async () => {
    try {
        const response = await api.get('/4over/status');
        return response.data;
    } catch (error) {
        console.error('Error checking 4over status:', error);
        return { configured: false, mode: 'error' };
    }
};

// ============ CATEGORIES & PRODUCTS ============
export const get4overCategories = async () => {
    try {
        const response = await api.get('/4over/categories');
        return response.data;
    } catch (error) {
        console.error('Error fetching 4over categories:', error);
        return [];
    }
};

export const get4overProductsByCategory = async (categoryId) => {
    try {
        const response = await api.get(`/4over/categories/${categoryId}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching 4over products:', error);
        return [];
    }
};

export const get4overProductDetails = async (productUuid) => {
    try {
        const response = await api.get(`/4over/products/${productUuid}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product details:', error);
        return null;
    }
};

/**
 * Get product options with UUIDs
 * Returns: runsizes, turnarounds, colorspecs, paperTypes, coatings, quantities
 */
export const get4overProductOptions = async (productUuid) => {
    try {
        const response = await api.get(`/4over/products/${productUuid}/options`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product options:', error);
        return null;
    }
};

// ============ PRICING ============
/**
 * Calculate price for a product configuration
 * @param {Object} config - Configuration with UUIDs
 * @param {string} config.productUuid - Product UUID
 * @param {string} config.runsizeUuid - Size UUID
 * @param {string} config.turnaroundUuid - Turnaround time UUID
 * @param {string} config.colorspecUuid - Color spec UUID
 * @param {number} config.quantity - Quantity
 * @param {string[]} config.optionUuids - Additional option UUIDs
 */
export const calculate4overPrice = async (config) => {
    try {
        const response = await api.post('/4over/pricing/calculate', config);
        return response.data;
    } catch (error) {
        console.error('Error calculating price:', error);
        throw error;
    }
};

// ============ SHIPPING ============
export const get4overShippingRates = async (config) => {
    try {
        const response = await api.post('/4over/shipping/rates', config);
        return response.data;
    } catch (error) {
        console.error('Error fetching shipping rates:', error);
        return [];
    }
};

export const get4overFacilities = async () => {
    try {
        const response = await api.get('/4over/facilities');
        return response.data;
    } catch (error) {
        console.error('Error fetching facilities:', error);
        return [];
    }
};

// ============ ORDERS ============
/**
 * Submit order to 4over for fulfillment
 * @param {Object} orderData - Order data with UUIDs
 */
export const submit4overOrder = async (orderData) => {
    try {
        const response = await api.post('/4over/orders', orderData);
        return response.data;
    } catch (error) {
        console.error('Error submitting order:', error);
        throw error;
    }
};

export const get4overOrderStatus = async (orderId) => {
    try {
        const response = await api.get(`/4over/orders/${orderId}/status`);
        return response.data;
    } catch (error) {
        console.error('Error fetching order status:', error);
        return null;
    }
};

// ============ FILE UPLOAD ============
/**
 * Upload print file and get URL for order submission
 */
export const upload4overPrintFile = async (file, onProgress) => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        
        const response = await api.post('/4over/files/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
            onUploadProgress: (progressEvent) => {
                if (onProgress) {
                    const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    onProgress(percent);
                }
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
    }
};

// ============ HELPER FUNCTIONS ============

/**
 * Format price for display
 */
export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
};

/**
 * Calculate per-unit price
 */
export const calculatePerUnit = (totalPrice, quantity) => {
    return (totalPrice / quantity).toFixed(3);
};
