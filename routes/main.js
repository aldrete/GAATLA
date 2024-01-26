// routes/gameRoutes.js
const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

// Define routes for the game API
router.post('/start', gameController.startNewGame);

// Add more routes as needed

module.exports = router;