'use strict';

const jwt = require('jsonwebtoken');
const config = require('../config');

// Middleware for JWT authentication
const authenticateJWT = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Get token from header

    if (token) {
        jwt.verify(token, config.JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403); // Forbidden
            }
            req.user = user;
            next(); // Pass the execution to the next middleware
        });
    } else {
        res.sendStatus(401); // Unauthorized
    }
};

module.exports = authenticateJWT;