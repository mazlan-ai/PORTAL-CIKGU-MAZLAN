// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/portal_cikgu_mazlan', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => console.log(err));

// User authentication setup
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Find user by id and return user object.
  // Replace with your user model:
  // User.findById(id).then(user => done(null, user));
});

// Google OAuth setup
passport.use(new GoogleStrategy({
  clientID: 'YOUR_GOOGLE_CLIENT_ID',
  clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  // User login logic, save user to database.
  // Replace with your user model:
  // new User({ ... }).save().then(user => done(null, user));
}));

// API routes
app.get('/api/tutorials', (req, res) => {
  // Get video tutorials from the database
});

app.post('/api/auth/register', (req, res) => {
  // User registration logic
});

app.post('/api/auth/login', (req, res) => {
  // User login logic
});

app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/'); // Success redirect
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});