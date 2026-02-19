const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  role: {
    type: String,
    enum: ['admin', 'pelajar'],
    required: true,
  },
  tingkatan: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required: true,
  },
  kelas: {
    type: String,
    enum: ['IS', 'IK', 'AK', 'AG', 'ABU', 'ABI'],
    required: true,
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;