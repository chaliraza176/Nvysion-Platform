const express = require('express');
const router = express.Router();
const { mockData, generateId, saveMockData } = require('./mockData');

// Get all users
router.get('/', (req, res) => {
    const users = mockData.users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
    res.json(users);
});

// Get user by ID
router.get('/:id', (req, res) => {
    const user = mockData.users.find(u => u._id === req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
});

// Register new user
router.post('/register', (req, res) => {
    const { firstName, lastName, email, password, phone, agreeToTerms, emailPreferences } = req.body;

    // Check if user exists
    const existingUser = mockData.users.find(u => u.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = {
        _id: generateId('user'),
        firstName,
        lastName,
        email,
        password,
        phone: phone || '',
        role: 'user',
        agreeToTerms: agreeToTerms || false,
        emailPreferences: emailPreferences || { promotional: true, orderUpdates: true },
        savedAddresses: [],
        createdAt: new Date().toISOString()
    };

    mockData.users.push(newUser);
    saveMockData();

    const { password: pwd, ...userWithoutPassword } = newUser;
    res.status(201).json({
        message: 'User registered successfully',
        user: userWithoutPassword
    });
});

// Login user
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = mockData.users.find(u => u.email === email);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const { password: pwd, ...userWithoutPassword } = user;
    res.json({
        message: 'Login successful',
        user: userWithoutPassword
    });
});

// Update user profile
router.put('/:id', (req, res) => {
    const userIndex = mockData.users.findIndex(u => u._id === req.params.id);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    const { firstName, lastName, phone, emailPreferences } = req.body;
    mockData.users[userIndex] = {
        ...mockData.users[userIndex],
        firstName: firstName || mockData.users[userIndex].firstName,
        lastName: lastName || mockData.users[userIndex].lastName,
        phone: phone || mockData.users[userIndex].phone,
        emailPreferences: emailPreferences || mockData.users[userIndex].emailPreferences
    };
    saveMockData();

    const { password, ...userWithoutPassword } = mockData.users[userIndex];
    res.json(userWithoutPassword);
});

// Add address
router.post('/:id/addresses', (req, res) => {
    const userIndex = mockData.users.findIndex(u => u._id === req.params.id);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    mockData.users[userIndex].savedAddresses.push({
        _id: generateId('addr'),
        ...req.body
    });
    saveMockData();

    res.json(mockData.users[userIndex].savedAddresses);
});

// Delete user
router.delete('/:id', (req, res) => {
    const userIndex = mockData.users.findIndex(u => u._id === req.params.id);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    mockData.users.splice(userIndex, 1);
    saveMockData();
    res.json({ message: 'User deleted successfully' });
});

module.exports = router;
