'use strict';

const express = require('express');
const router = express.Router();

// Dummy data for demonstration purposes
const users = [{ email: 'mazlan@qalish.com', role: 'admin' }];

// Middleware to authenticate users and retrieve user role
const authenticate = (req, res, next) => {
    // This is a placeholder for actual authentication logic
    // In practice, you would verify tokens and extract user info from a database
    const userEmail = req.user?.email;
    req.user = users.find(user => user.email === userEmail) || null;
    next();
};

// GET /profile - Get user profile
router.get('/profile', authenticate, (req, res) => {
    if (!req.user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json({ email: req.user.email, role: req.user.role });
});

// POST /google - OAuth callback
router.post('/google', (req, res) => {
    // Placeholder for Google OAuth callback logic
    // You would handle Google token verification and user signup/login here
    const email = req.body.email; // Extracted from the Google payload
    const user = users.find(user => user.email === email);
    if (user) {
        // User logged in
        return res.json({ message: 'User logged in', user });
    } else {
        // User signed up (in a real app, you would add this user to your database)
        res.json({ message: 'User signed up', email });
    }
});

// POST /logout - Logout user
router.post('/logout', (req, res) => {
    // Placeholder for logout logic (e.g., invalidate tokens)
    res.json({ message: 'User logged out' });
});

module.exports = router;