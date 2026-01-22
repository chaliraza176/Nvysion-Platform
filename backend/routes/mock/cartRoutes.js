const express = require('express');
const router = express.Router();
const { mockData, generateId } = require('./mockData');

// Get cart for user
router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    
    if (!mockData.carts[userId]) {
        mockData.carts[userId] = { items: [], subtotal: 0 };
    }
    
    res.json(mockData.carts[userId]);
});

// Add item to cart
router.post('/:userId/items', (req, res) => {
    const userId = req.params.userId;
    const { product, quantity, material, size, customization, price } = req.body;
    
    if (!mockData.carts[userId]) {
        mockData.carts[userId] = { items: [], subtotal: 0 };
    }
    
    // Check if item already exists
    const existingItemIndex = mockData.carts[userId].items.findIndex(
        item => item.product === product && item.material === material && item.size === size
    );
    
    if (existingItemIndex > -1) {
        mockData.carts[userId].items[existingItemIndex].quantity += quantity;
    } else {
        mockData.carts[userId].items.push({
            _id: generateId('item'),
            product,
            quantity,
            material,
            size,
            customization,
            price
        });
    }
    
    // Calculate subtotal
    mockData.carts[userId].subtotal = mockData.carts[userId].items.reduce(
        (total, item) => total + (item.price * item.quantity), 0
    );
    
    res.json(mockData.carts[userId]);
});

// Update cart item quantity
router.put('/:userId/items/:itemId', (req, res) => {
    const { userId, itemId } = req.params;
    const { quantity } = req.body;
    
    if (!mockData.carts[userId]) {
        return res.status(404).json({ message: 'Cart not found' });
    }
    
    const itemIndex = mockData.carts[userId].items.findIndex(i => i._id === itemId);
    if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }
    
    mockData.carts[userId].items[itemIndex].quantity = quantity;
    
    // Recalculate subtotal
    mockData.carts[userId].subtotal = mockData.carts[userId].items.reduce(
        (total, item) => total + (item.price * item.quantity), 0
    );
    
    res.json(mockData.carts[userId]);
});

// Remove item from cart
router.delete('/:userId/items/:itemId', (req, res) => {
    const { userId, itemId } = req.params;
    
    if (!mockData.carts[userId]) {
        return res.status(404).json({ message: 'Cart not found' });
    }
    
    mockData.carts[userId].items = mockData.carts[userId].items.filter(i => i._id !== itemId);
    
    // Recalculate subtotal
    mockData.carts[userId].subtotal = mockData.carts[userId].items.reduce(
        (total, item) => total + (item.price * item.quantity), 0
    );
    
    res.json(mockData.carts[userId]);
});

// Clear cart
router.delete('/:userId', (req, res) => {
    const userId = req.params.userId;
    mockData.carts[userId] = { items: [], subtotal: 0 };
    res.json(mockData.carts[userId]);
});

module.exports = router;
