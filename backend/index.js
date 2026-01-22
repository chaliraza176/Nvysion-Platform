const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request Logging Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// Check if MongoDB is available
let USE_MOCK_DATA = process.env.USE_MOCK_DATA === 'true';
let dbConnected = false;

// Database Connection
const connectDB = async () => {
    if (USE_MOCK_DATA) {
        console.log('📦 Running in MOCK DATA mode (no database required)');
        return false;
    }
    
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000 // 5 second timeout
        });
        console.log('✅ Connected to MongoDB');
        dbConnected = true;
        return true;
    } catch (err) {
        console.log('⚠️ MongoDB connection failed:', err.message);
        console.log('💡 Falling back to MOCK DATA mode');
        USE_MOCK_DATA = true;
        return false;
    }
};

// Basic Route
app.get('/', (req, res) => {
    res.json({
        message: 'VistaPrint Clone API',
        version: '1.0.0',
        mode: USE_MOCK_DATA ? 'mock' : 'database',
        dbConnected,
        endpoints: {
            categories: '/api/categories',
            users: '/api/users',
            products: '/api/products',
            orders: '/api/orders',
            cart: '/api/cart',
            projects: '/api/projects',
            fourover: '/api/4over'
        }
    });
});

// Health Check
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        mode: USE_MOCK_DATA ? 'mock' : 'database',
        dbConnected,
        timestamp: new Date().toISOString()
    });
});

// Setup routes function
const setupRoutes = () => {
    if (USE_MOCK_DATA) {
        console.log('📦 Loading MOCK routes');
        const mockCategoryRoutes = require('./routes/mock/categoryRoutes');
        const mockUserRoutes = require('./routes/mock/userRoutes');
        const mockProductRoutes = require('./routes/mock/productRoutes');
        const mockCartRoutes = require('./routes/mock/cartRoutes');
        const mockOrderRoutes = require('./routes/mock/orderRoutes');
        const mockProjectRoutes = require('./routes/mock/projectRoutes');

        app.use('/api/categories', mockCategoryRoutes);
        app.use('/api/users', mockUserRoutes);
        app.use('/api/products', mockProductRoutes);
        app.use('/api/cart', mockCartRoutes);
        app.use('/api/orders', mockOrderRoutes);
        app.use('/api/projects', mockProjectRoutes);
    } else {
        console.log('🗄️ Loading DATABASE routes');
        const categoryRoutes = require('./routes/categoryRoutes');
        const userRoutes = require('./routes/userRoutes');
        const productRoutes = require('./routes/productRoutes');
        const orderRoutes = require('./routes/orderRoutes');
        const cartRoutes = require('./routes/cartRoutes');
        const projectRoutes = require('./routes/projectRoutes');

        app.use('/api/categories', categoryRoutes);
        app.use('/api/users', userRoutes);
        app.use('/api/products', productRoutes);
        app.use('/api/orders', orderRoutes);
        app.use('/api/cart', cartRoutes);
        app.use('/api/projects', projectRoutes);
    }
    
    // 4over API Routes (always available)
    try {
        console.log('🖨️ Loading 4over integration routes');
        const fourOverRoutes = require('./routes/fourOverRoutes');
        app.use('/api/4over', fourOverRoutes);
        console.log('✅ 4over routes registered at /api/4over');
    } catch (error) {
        console.error('❌ Failed to load 4over routes:', error.message);
        console.error(error.stack);
    }
    
    // Direct test route
    app.get('/api/4over-direct-test', (req, res) => {
        res.json({ message: 'Direct test works!' });
    });

    // 404 Handler - MUST be after ALL routes
    app.use((req, res) => {
        res.status(404).json({ message: 'Route not found' });
    });

    // Error Handler
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).json({ message: 'Something went wrong!', error: err.message });
    });
};

// Start server
const startServer = async () => {
    await connectDB();
    setupRoutes();
    
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
        console.log(`📡 API URL: http://localhost:${PORT}`);
        console.log(`📦 Mode: ${USE_MOCK_DATA ? 'MOCK DATA' : 'DATABASE'}`);
    });
};

startServer();
