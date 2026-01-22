const express = require('express');
const router = express.Router();
const { mockData, generateId } = require('./mockData');

// Get all orders (Admin)
router.get('/', (req, res) => {
    res.json(mockData.orders);
});

// Get all orders for a user
router.get('/user/:userId', (req, res) => {
    const orders = mockData.orders.filter(o => o.user === req.params.userId);
    res.json(orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
});

// Get single order by ID
router.get('/:id', (req, res) => {
    const order = mockData.orders.find(o => o._id === req.params.id);
    if (!order) {
        return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
});

// Create new order
router.post('/', (req, res) => {
    const orderNumber = 'VP' + Date.now() + Math.floor(Math.random() * 1000);
    
    const newOrder = {
        _id: generateId('order'),
        orderNumber,
        ...req.body,
        orderStatus: 'pending',
        paymentStatus: 'completed',
        createdAt: new Date().toISOString()
    };
    
    mockData.orders.push(newOrder);
    
    // Clear user's cart after order
    if (req.body.user && mockData.carts[req.body.user]) {
        mockData.carts[req.body.user] = { items: [], subtotal: 0 };
    }
    
    res.status(201).json(newOrder);
});

// Update order status (Admin)
router.put('/:id/status', (req, res) => {
    const orderIndex = mockData.orders.findIndex(o => o._id === req.params.id);
    if (orderIndex === -1) {
        return res.status(404).json({ message: 'Order not found' });
    }
    
    const { orderStatus, trackingNumber } = req.body;
    mockData.orders[orderIndex] = {
        ...mockData.orders[orderIndex],
        orderStatus,
        trackingNumber
    };
    
    res.json(mockData.orders[orderIndex]);
});

// Cancel order
router.put('/:id/cancel', (req, res) => {
    const orderIndex = mockData.orders.findIndex(o => o._id === req.params.id);
    if (orderIndex === -1) {
        return res.status(404).json({ message: 'Order not found' });
    }
    
    if (mockData.orders[orderIndex].orderStatus !== 'pending') {
        return res.status(400).json({ message: 'Cannot cancel order in current status' });
    }
    
    mockData.orders[orderIndex].orderStatus = 'cancelled';
    res.json(mockData.orders[orderIndex]);
});

module.exports = router;
