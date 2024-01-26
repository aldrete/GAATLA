class SpecializedBendingForm {
    constructor(mainBending, specializedBending) {
        this.setMainBending(mainBending);
        this.setSpecializedBending(specializedBending);
    }

    setMainBending(mainBending) {
        // Assuming main bending must be one of the four elements: 'water', 'earth', 'fire', 'air'
        const validMainBending = ['water', 'earth', 'fire', 'air'];

        if (!validMainBending.includes(mainBending)) {
            throw new Error('Invalid main bending form. Choose from: water, earth, fire, air.');
        }

        this.mainBending = mainBending;
    }

    setSpecializedBending(specializedBending) {
        // Assuming specialized bending can be any string, but you can add more validation if needed
        this.specializedBending = specializedBending;
    }
}

module.exports = SpecializedBendingForm;
