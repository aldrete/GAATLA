class Inventory {
    constructor(name) {
        this.name = name;
        this.inventory = [];
    }

    // Add an item to the inventory
    addItem(item, quantity = 1) {
        const existingItem = this.inventory.find((invItem) => invItem.name === item.name);

        if (existingItem) {
            existingItem.quantity += quantity;
            console.log(`${this.name} added ${quantity} ${item.name}(s) to the inventory.`);
        } else {
            this.inventory.push({ ...item, quantity });
            console.log(`${this.name} added ${quantity} ${item.name}(s) to the inventory.`);
        }
    }

    // Remove an item from the inventory
    removeItem(item, quantity = 1) {
        const existingItem = this.inventory.find((invItem) => invItem.name === item.name);

        if (existingItem) {
            if (existingItem.quantity <= quantity) {
                const index = this.inventory.indexOf(existingItem);
                this.inventory.splice(index, 1);
                console.log(`${this.name} removed ${existingItem.quantity} ${item.name}(s) from the inventory.`);
            } else {
                existingItem.quantity -= quantity;
                console.log(`${this.name} removed ${quantity} ${item.name}(s) from the inventory.`);
            }
        } else {
            console.log(`${this.name} doesn't have ${item.name} in the inventory.`);
        }
    }

    // Use an item from the inventory
    useItem(item, quantity = 1) {
        const existingItem = this.inventory.find((invItem) => invItem.name === item.name);

        if (existingItem && existingItem.quantity >= quantity) {
            // Logic to use the item (e.g., consume a consumable, unlock a door with a key)
            existingItem.quantity -= quantity;
            console.log(`${this.name} used ${quantity} ${item.name}(s) from the inventory.`);
        } else {
            console.log(`${this.name} doesn't have enough ${item.name}(s) in the inventory.`);
        }
    }
}

module.exports = Inventory;
