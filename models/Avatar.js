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

    validateArrayLength(array, maxLength, propertyName) {
        if (!Array.isArray(array) || array.length > maxLength) {
            throw new Error(`${propertyName} must be an array with at most ${maxLength} objects.`);
        }
        return array;
    }
}
module.exports = Companion;
