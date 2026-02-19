const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    youtubeLink: { type: String, required: true },
    youtubeId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    tingkatan: { type: Number, required: true, min: 1, max: 5 },
    kelas: { type: [String], enum: ['IS', 'IK', 'AK', 'AG', 'ABU', 'ABI'], required: true },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Video', videoSchema);