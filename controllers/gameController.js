// controllers/gameController.js
const Game = require('../models/Game');

class GameController {
  startNewGame(req, res) {
    // Logic to start a new game
    const newGame = new Game(1, 'My Game');
    res.json(newGame);
  }

  // Add more controller methods as needed
}

module.exports = new GameController();
