const express = require('express');
const router = express.Router();

// Mock users store
let users = [];

// POST /auth/google - Google OAuth login
router.post('/google', (req, res) => {
    const { googleId, email, name, profilePicture } = req.body;
    
    // Check if user exists
    let user = users.find(u => u.googleId === googleId);
    
    if (!user) {
        // Create new user
        const role = email === 'mazlan@qalish.com' ? 'admin' : 'pelajar';
        user = {
            id: users.length + 1,
            googleId,
            email,
            name,
            profilePicture,
            role,
            createdAt: new Date()
        };
        users.push(user);
    }
    
    // Return user and mock JWT token
    res.json({
        user,
        token: `jwt-token-${user.id}`,
        message: 'Login successful'
    });
});

// GET /auth/profile - Get current user profile
router.get('/profile', (req, res) => {
    // In production, this would use JWT token from headers
    res.json({
        message: 'User profile endpoint',
        note: 'Implement JWT verification middleware'
    });
});

// POST /auth/logout - Logout
router.post('/logout', (req, res) => {
    res.json({ message: 'Logout successful' });
});

// GET /auth/users - Get all users (admin only)
router.get('/users', (req, res) => {
    res.json(users);
});

module.exports = router;