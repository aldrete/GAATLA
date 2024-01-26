class Training {
    constructor(id, type, fightingStyle) {
        this.id = id;
        this.setType(type);
        this.fightingStyle = fightingStyle;
    }

    setType(type) {
        const validTypes = ['Airbending', 'Waterbending', 'Earthbending', 'Firebending', 'Weapon', 'Technology'];

        if (!validTypes.includes(type)) {
            throw new Error('Invalid training type. Choose from: airbending, waterbending, earthbending, firebending, weapon, technology.');
        }

        this.type = type;
    }
}

module.exports = Training;
