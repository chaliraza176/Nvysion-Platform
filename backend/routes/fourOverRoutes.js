/**
 * 4over API Routes
 * 
 * These routes handle all 4over-related operations including:
 * - Product catalog (categories, products, options)
 * - Price calculations
 * - Order submission and tracking
 * - File uploads
 */

const express = require('express');
const router = express.Router();
const fourOverService = require('../services/fourOverService');
const multer = require('multer');

// Configure multer for file uploads
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 100 * 1024 * 1024 }, // 100MB limit
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/tiff'];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Allowed: PDF, JPG, PNG, TIFF'), false);
        }
    }
});

/**
 * GET /api/4over/status
 * Check if 4over API is configured and working
 */
router.get('/status', (req, res) => {
    const isConfigured = fourOverService.isConfigured();
    res.json({
        configured: isConfigured,
        mode: isConfigured ? 'live' : 'mock',
        message: isConfigured 
            ? '4over API is configured and ready' 
            : 'Running in demo mode - add API credentials to .env for live products'
    });
});

/**
 * GET /api/4over/categories
 * Get all available product categories from 4over
 */
router.get('/categories', async (req, res) => {
    try {
        const categories = await fourOverService.getCategories();
        res.json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Failed to fetch categories', error: error.message });
    }
});

/**
 * GET /api/4over/categories/:categoryId/products
 * Get products by category
 */
router.get('/categories/:categoryId/products', async (req, res) => {
    try {
        const products = await fourOverService.getProductsByCategory(req.params.categoryId);
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Failed to fetch products', error: error.message });
    }
});

/**
 * GET /api/4over/products/:productUuid
 * Get product details by UUID
 */
router.get('/products/:productUuid', async (req, res) => {
    try {
        const product = await fourOverService.getProductDetails(req.params.productUuid);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error('Error fetching product details:', error);
        res.status(500).json({ message: 'Failed to fetch product details', error: error.message });
    }
});

/**
 * GET /api/4over/products/:productUuid/options
 * Get product configuration options (sizes, paper types, coatings, etc.)
 * Returns UUIDs needed for pricing and ordering
 */
router.get('/products/:productUuid/options', async (req, res) => {
    try {
        const options = await fourOverService.getProductOptions(req.params.productUuid);
        res.json(options);
    } catch (error) {
        console.error('Error fetching product options:', error);
        res.status(500).json({ message: 'Failed to fetch product options', error: error.message });
    }
});

/**
 * POST /api/4over/pricing/calculate
 * Calculate price for a product configuration
 * 
 * Body: {
 *   productUuid: string,
 *   runsizeUuid: string,
 *   turnaroundUuid: string,
 *   colorspecUuid: string,
 *   quantity: number,
 *   optionUuids: string[] (optional)
 * }
 */
router.post('/pricing/calculate', async (req, res) => {
    try {
        const { productUuid, runsizeUuid, quantity } = req.body;
        
        if (!productUuid || !quantity) {
            return res.status(400).json({ 
                message: 'Missing required fields: productUuid and quantity are required' 
            });
        }
        
        const pricing = await fourOverService.calculatePrice(req.body);
        res.json(pricing);
    } catch (error) {
        console.error('Error calculating price:', error);
        res.status(500).json({ message: 'Failed to calculate price', error: error.message });
    }
});

/**
 * POST /api/4over/shipping/rates
 * Get shipping rates for an order
 * 
 * Body: {
 *   productUuid: string,
 *   runsizeUuid: string,
 *   quantity: number,
 *   zipCode: string
 * }
 */
router.post('/shipping/rates', async (req, res) => {
    try {
        const { zipCode } = req.body;
        
        if (!zipCode) {
            return res.status(400).json({ message: 'zipCode is required' });
        }
        
        const rates = await fourOverService.getShippingRates(req.body);
        res.json(rates);
    } catch (error) {
        console.error('Error fetching shipping rates:', error);
        res.status(500).json({ message: 'Failed to get shipping rates', error: error.message });
    }
});

/**
 * GET /api/4over/facilities
 * Get available 4over facilities/locations
 */
router.get('/facilities', async (req, res) => {
    try {
        const facilities = await fourOverService.getFacilities();
        res.json(facilities);
    } catch (error) {
        console.error('Error fetching facilities:', error);
        res.status(500).json({ message: 'Failed to fetch facilities', error: error.message });
    }
});

/**
 * POST /api/4over/orders
 * Submit order to 4over for fulfillment
 * 
 * Body: {
 *   orderNumber: string,
 *   items: [{
 *     fourOverProductUuid: string,
 *     runsizeUuid: string,
 *     turnaroundUuid: string,
 *     colorspecUuid: string,
 *     optionUuids: string[],
 *     quantity: number,
 *     printFileUrl: string
 *   }],
 *   shippingAddress: {
 *     name: string,
 *     street: string,
 *     city: string,
 *     state: string,
 *     zipCode: string,
 *     country: string,
 *     phone: string
 *   },
 *   shippingMethod: string
 * }
 */
router.post('/orders', async (req, res) => {
    try {
        const { orderNumber, items, shippingAddress } = req.body;
        
        if (!orderNumber || !items || !items.length || !shippingAddress) {
            return res.status(400).json({ 
                message: 'Missing required fields: orderNumber, items, and shippingAddress are required' 
            });
        }
        
        // Validate each item has required UUIDs
        for (const item of items) {
            if (!item.fourOverProductUuid || !item.quantity) {
                return res.status(400).json({ 
                    message: 'Each item must have fourOverProductUuid and quantity' 
                });
            }
        }
        
        const result = await fourOverService.submitOrder(req.body);
        res.json(result);
    } catch (error) {
        console.error('Error submitting order:', error);
        res.status(500).json({ message: 'Failed to submit order', error: error.message });
    }
});

/**
 * GET /api/4over/orders/:orderId/status
 * Get order status from 4over
 */
router.get('/orders/:orderId/status', async (req, res) => {
    try {
        const status = await fourOverService.getOrderStatus(req.params.orderId);
        res.json(status);
    } catch (error) {
        console.error('Error fetching order status:', error);
        res.status(500).json({ message: 'Failed to get order status', error: error.message });
    }
});

/**
 * POST /api/4over/files/upload
 * Upload print file for an order
 * Returns a URL that can be used when submitting the order
 */
router.post('/files/upload', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        
        const result = await fourOverService.uploadPrintFile(
            req.file.buffer,
            req.file.originalname,
            req.file.mimetype
        );
        
        res.json(result);
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ message: 'Failed to upload file', error: error.message });
    }
});

/**
 * Error handling middleware for multer
 */
router.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ message: 'File too large. Maximum size is 100MB' });
        }
        return res.status(400).json({ message: error.message });
    }
    next(error);
});

module.exports = router;
