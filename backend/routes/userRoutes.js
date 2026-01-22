const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all users (Admin only)
router.get('/', async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Register new user
router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, password, phone, agreeToTerms } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user (in production, hash password with bcrypt)
        const user = new User({
            firstName,
            lastName,
            email,
            password, // In production: await bcrypt.hash(password, 10)
            phone,
            agreeToTerms
        });

        await user.save();
        
        // Remove password from response
        const userResponse = user.toObject();
        delete userResponse.password;

        res.status(201).json({
            message: 'User registered successfully',
            user: userResponse
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Login user
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // In production: const isMatch = await bcrypt.compare(password, user.password);
        const isMatch = password === user.password;
        
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Remove password from response
        const userResponse = user.toObject();
        delete userResponse.password;

        res.json({
            message: 'Login successful',
            user: userResponse
            // In production: add JWT token here
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update user profile
router.put('/:id', async (req, res) => {
    try {
        const { firstName, lastName, phone, emailPreferences } = req.body;
        
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { firstName, lastName, phone, emailPreferences },
            { new: true }
        ).select('-password');

        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Add address
router.post('/:id/addresses', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.savedAddresses.push(req.body);
        await user.save();

        res.json(user.savedAddresses);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete user
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
