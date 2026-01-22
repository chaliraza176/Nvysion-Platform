const express = require('express');
const router = express.Router();

router.get('/status', (req, res) => {
    res.json({
        configured: false,
        mode: 'test',
        message: 'Simple test route works!'
    });
});

router.get('/categories', (req, res) => {
    res.json([
        { id: 'test', name: 'Test Category' }
    ]);
});

module.exports = router;
