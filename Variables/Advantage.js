const Advantage = {
    "Fire": ["Air"],
    "Air": ["Water"],
    "Water": ["Earth"],
    "Earth": ["Fire"],
    "Spirit": ["Weapon"],
    "Technology": ["Spirit"],
    "Weapon": ["Technology"],
};

function isElementStronger(attacker, defender) {
    return Advantage[attacker] && Advantage[attacker].includes(defender) ? attacker : defender;
}

function isElementWeaker(attacker, defender) {
    return Advantage[defender] && Advantage[defender].includes(attacker) ? defender : attacker;
}

module.exports = { relationships, isElementStronger, isElementWeaker };