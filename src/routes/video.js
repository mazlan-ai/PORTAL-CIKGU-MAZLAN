const express = require('express');
const router = express.Router();

// Mock data store for videos
let videos = [];

// GET / - Retrieve all videos
router.get('/', (req, res) => {
    res.json(videos);
});

// GET /tingkatan/:tingkatan - Retrieve videos by tingkatan
router.get('/tingkatan/:tingkatan', (req, res) => {
    const tingkatan = req.params.tingkatan;
    const filteredVideos = videos.filter(video => video.tingkatan === tingkatan);
    res.json(filteredVideos);
});

// GET /tingkatan/:tingkatan/kelas/:kelas - Retrieve videos by tingkatan and kelas
router.get('/tingkatan/:tingkatan/kelas/:kelas', (req, res) => {
    const { tingkatan, kelas } = req.params;
    const filteredVideos = videos.filter(video => video.tingkatan === tingkatan && video.kelas === kelas);
    res.json(filteredVideos);
});

// POST / - Admin uploads a video
router.post('/', (req, res) => {
    const { title, description, tingkatan, kelas, youtubeUrl } = req.body;
    const id = videos.length + 1;
    const thumbnail = `https://img.youtube.com/vi/${youtubeUrl.split('v=')[1]}/hqdefault.jpg`;
    const newVideo = { id, title, description, tingkatan, kelas, youtubeUrl, thumbnail };
    videos.push(newVideo);
    res.status(201).json(newVideo);
});

// PUT /:id - Update video information
router.put('/:id', (req, res) => {
    const videoId = parseInt(req.params.id);
    const video = videos.find(v => v.id === videoId);
    if (video) {
        Object.assign(video, req.body);
        res.json(video);
    } else {
        res.status(404).json({ message: 'Video not found' });
    }
});

// DELETE /:id - Delete a video
router.delete('/:id', (req, res) => {
    const videoId = parseInt(req.params.id);
    videos = videos.filter(v => v.id !== videoId);
    res.status(204).send();
});

module.exports = router;