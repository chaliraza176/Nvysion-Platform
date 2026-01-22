const express = require('express');
const router = express.Router();
const { mockData } = require('./mockData');

// Get all categories
router.get('/', (req, res) => {
    res.json(mockData.categories);
});

// Get single category by slug
router.get('/:slug', (req, res) => {
    const category = mockData.categories.find(c => c.slug === req.params.slug);
    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
});

module.exports = router;
