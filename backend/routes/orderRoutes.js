const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Get all orders for a user
router.get('/user/:userId', async (req, res) => {
    try {
        const orders = await Order.find({ user: req.params.userId })
            .populate('items.product')
            .sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get single order by ID
router.get('/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
            .populate('user', '-password')
            .populate('items.product');
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create new order
router.post('/', async (req, res) => {
    try {
        // Generate unique order number
        const orderNumber = 'VP' + Date.now() + Math.floor(Math.random() * 1000);
        
        const order = new Order({
            ...req.body,
            orderNumber
        });
        
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update order status (Admin)
router.put('/:id/status', async (req, res) => {
    try {
        const { orderStatus, trackingNumber } = req.body;
        
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { orderStatus, trackingNumber },
            { new: true }
        );
        
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json(order);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Cancel order
router.put('/:id/cancel', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        
        if (order.orderStatus !== 'pending') {
            return res.status(400).json({ message: 'Cannot cancel order in current status' });
        }
        
        order.orderStatus = 'cancelled';
        await order.save();
        
        res.json(order);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all orders (Admin only)
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find()
            .populate('user', 'firstName lastName email')
            .sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
