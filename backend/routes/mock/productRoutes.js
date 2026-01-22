const express = require('express');
const router = express.Router();
const { mockData, generateId } = require('./mockData');

// Get all products
router.get('/', (req, res) => {
    let products = [...mockData.products];
    const { category, subcategory, featured, inStock, sort } = req.query;
    
    if (category) {
        products = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    if (subcategory) {
        products = products.filter(p => p.subcategory.toLowerCase() === subcategory.toLowerCase());
    }
    if (featured === 'true') {
        products = products.filter(p => p.featured);
    }
    if (inStock === 'true') {
        products = products.filter(p => p.inStock);
    }
    
    // Sorting
    if (sort === 'price-low') {
        products.sort((a, b) => a.startingPrice - b.startingPrice);
    } else if (sort === 'price-high') {
        products.sort((a, b) => b.startingPrice - a.startingPrice);
    } else if (sort === 'rating') {
        products.sort((a, b) => b.rating.average - a.rating.average);
    }
    
    res.json(products);
});

// Search products
router.get('/search/:query', (req, res) => {
    const query = req.params.query.toLowerCase();
    const products = mockData.products.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );
    res.json(products);
});

// Get product by slug
router.get('/:slug', (req, res) => {
    const product = mockData.products.find(p => p.slug === req.params.slug);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
});

// Create new product (Admin)
router.post('/', (req, res) => {
    const newProduct = {
        _id: generateId('prod'),
        ...req.body,
        createdAt: new Date().toISOString()
    };
    mockData.products.push(newProduct);
    res.status(201).json(newProduct);
});

// Update product (Admin)
router.put('/:id', (req, res) => {
    const productIndex = mockData.products.findIndex(p => p._id === req.params.id);
    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }
    
    mockData.products[productIndex] = {
        ...mockData.products[productIndex],
        ...req.body
    };
    
    res.json(mockData.products[productIndex]);
});

// Delete product (Admin)
router.delete('/:id', (req, res) => {
    const productIndex = mockData.products.findIndex(p => p._id === req.params.id);
    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }
    
    mockData.products.splice(productIndex, 1);
    res.json({ message: 'Product deleted successfully' });
});

module.exports = router;
