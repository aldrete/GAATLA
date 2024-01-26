
const Moves = require('../Variables/Moves');
class Companion {
  constructor(id, name, nation, training, stats, fightingTechnique, background, moves, demeanor, look, hometown, principles) {
    this.id = id;
    this.name = name;
    this.nation = nation;
    this.training = training;
    this.stats = stats;
    this.fightingTechnique = fightingTechnique;
    this.background = this.validateArrayLength(background, 2, 'background');
    this.moves = this.validateArrayLength(moves, 2, 'moves');
    this.demeanor = this.validateArrayLength(demeanor, 1, 'demeanor');
    this.look = this.validateArrayLength(look, 3, 'look');
    this.hometown = this.validateArrayLength(hometown, 1, 'hometown');
    this.principles = this.validateArrayLength(principles, 2, 'principles');
  }

  selectRandomMoves() {
    if (Moves.length < 16) {
      throw new Error('Not enough moves to select from.');
    }

    const initialIndex = Math.floor(Math.random() * 6) + 10; // Random index between 10 and 15
    const finalIndex = Math.min(initialIndex + 2, Moves.length);

    const selectedMoves = Moves.slice(initialIndex, finalIndex);

    return selectedMoves;
  }

  validateArrayLength(array, maxLength, propertyName) {
    if (!Array.isArray(array) || array.length > maxLength) {
      throw new Error(`${propertyName} must be an array with at most ${maxLength} objects.`);
    }
    return array;
  }
}
module.exports = Companion;
