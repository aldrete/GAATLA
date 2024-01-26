class Stats {
    constructor() {
        this.creativity = this.getRandomStatValue();
        this.focus = this.getRandomStatValue();
        this.harmony = this.getRandomStatValue();
        this.passion = this.getRandomStatValue();
    }

    getRandomStatValue() {
        const randomNumber = Math.random();
        if (randomNumber < 0.1) {
            return this.getRandomValueFromRange(-3, -2);
        } else if (randomNumber < 0.4) {
            return this.getRandomValueFromRange(-2, -1);
        } else if (randomNumber < 0.7) {
            return this.getRandomValueFromRange(-1, 0);
        } else if (randomNumber < 0.9) {
            return this.getRandomValueFromRange(0, 1);
        } else {
            return this.getRandomValueFromRange(1, 2);
        }
    }

    getRandomValueFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}


module.exports = Stats;
