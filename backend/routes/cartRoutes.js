const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const mongoose = require('mongoose');

// Get cart for user
router.get('/:userId', async (req, res) => {
    try {
        // Validate userId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.userId)) {
            return res.json({ items: [], subtotal: 0 });
        }

        let cart = await Cart.findOne({ user: req.params.userId })
            .populate('items.product');
        
        if (!cart) {
            cart = new Cart({ user: req.params.userId, items: [] });
            await cart.save();
        }
        
        // Transform items to match frontend expected format
        const transformedItems = cart.items.map(item => ({
            id: item.product?._id || item._id,
            _id: item._id,
            name: item.product?.name || 'Product',
            price: item.price,
            quantity: item.quantity,
            selectedOption: item.material || 'Standard',
            icon: item.product?.icon || '📦',
            gradient: item.product?.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            image: item.product?.images?.[0] || ''
        }));
        
        res.json({ items: transformedItems, subtotal: cart.subtotal });
    } catch (err) {
        console.error('Cart fetch error:', err);
        res.status(500).json({ message: err.message });
    }
});

// Add item to cart
router.post('/:userId/items', async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.userId)) {
            return res.status(400).json({ message: 'Invalid user ID' });
        }

        let cart = await Cart.findOne({ user: req.params.userId });
        
        if (!cart) {
            cart = new Cart({ user: req.params.userId, items: [] });
        }
        
        const { product, quantity, material, size, customization, price } = req.body;
        
        // Validate product ID
        const productId = mongoose.Types.ObjectId.isValid(product) ? product : null;
        
        if (!productId) {
            return res.status(400).json({ message: 'Invalid product ID' });
        }
        
        // Check if item already exists
        const existingItemIndex = cart.items.findIndex(
            item => item.product.toString() === productId && 
                    item.material === material && 
                    item.size === size
        );
        
        if (existingItemIndex > -1) {
            cart.items[existingItemIndex].quantity += quantity || 1;
        } else {
            cart.items.push({ 
                product: productId, 
                quantity: quantity || 1, 
                material, 
                size, 
                customization, 
                price 
            });
        }
        
        await cart.save();
        await cart.populate('items.product');
        
        // Transform items
        const transformedItems = cart.items.map(item => ({
            id: item.product?._id || item._id,
            _id: item._id,
            name: item.product?.name || 'Product',
            price: item.price,
            quantity: item.quantity,
            selectedOption: item.material || 'Standard',
            icon: item.product?.icon || '📦',
            gradient: item.product?.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            image: item.product?.images?.[0] || ''
        }));
        
        res.json({ items: transformedItems, subtotal: cart.subtotal });
    } catch (err) {
        console.error('Cart add error:', err);
        res.status(400).json({ message: err.message });
    }
});

// Update cart item quantity
router.put('/:userId/items/:itemId', async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.params.userId });
        if (!cart) return res.status(404).json({ message: 'Cart not found' });
        
        const item = cart.items.id(req.params.itemId);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        
        item.quantity = req.body.quantity;
        await cart.save();
        await cart.populate('items.product');
        
        // Transform items
        const transformedItems = cart.items.map(item => ({
            id: item.product?._id || item._id,
            _id: item._id,
            name: item.product?.name || 'Product',
            price: item.price,
            quantity: item.quantity,
            selectedOption: item.material || 'Standard',
            icon: item.product?.icon || '📦',
            gradient: item.product?.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            image: item.product?.images?.[0] || ''
        }));
        
        res.json({ items: transformedItems, subtotal: cart.subtotal });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Remove item from cart
router.delete('/:userId/items/:itemId', async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.params.userId });
        if (!cart) return res.status(404).json({ message: 'Cart not found' });
        
        cart.items.pull({ _id: req.params.itemId });
        await cart.save();
        await cart.populate('items.product');
        
        // Transform items
        const transformedItems = cart.items.map(item => ({
            id: item.product?._id || item._id,
            _id: item._id,
            name: item.product?.name || 'Product',
            price: item.price,
            quantity: item.quantity,
            selectedOption: item.material || 'Standard',
            icon: item.product?.icon || '📦',
            gradient: item.product?.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            image: item.product?.images?.[0] || ''
        }));
        
        res.json({ items: transformedItems, subtotal: cart.subtotal });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Clear cart
router.delete('/:userId', async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.params.userId });
        if (!cart) return res.status(404).json({ message: 'Cart not found' });
        
        cart.items = [];
        cart.subtotal = 0;
        await cart.save();
        
        res.json({ items: [], subtotal: 0 });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
