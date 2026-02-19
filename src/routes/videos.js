const express = require('express');
const router = express.Router();

// Array to store video tutorials (mock database)
let tutorials = [];

// Endpoint to fetch all video tutorials
router.get('/', (req, res) => {
    res.json(tutorials);
});

// Endpoint to fetch a single video tutorial by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const tutorial = tutorials.find(t => t.id === id);
    if (!tutorial) return res.status(404).json({ message: 'Tutorial not found' });
    res.json(tutorial);
});

// Endpoint to create a new video tutorial
router.post('/', (req, res) => {
    const { title, url } = req.body;
    const newTutorial = { id: `${tutorials.length + 1}`, title, url };
    tutorials.push(newTutorial);
    res.status(201).json(newTutorial);
});

// Endpoint to update a video tutorial
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, url } = req.body;
    const tutorialIndex = tutorials.findIndex(t => t.id === id);
    if (tutorialIndex === -1) return res.status(404).json({ message: 'Tutorial not found' });
    tutorials[tutorialIndex] = { id, title, url };
    res.json(tutorials[tutorialIndex]);
});

// Endpoint to delete a video tutorial
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const tutorialIndex = tutorials.findIndex(t => t.id === id);
    if (tutorialIndex === -1) return res.status(404).json({ message: 'Tutorial not found' });
    tutorials.splice(tutorialIndex, 1);
    res.status(204).end();
});

module.exports = router;