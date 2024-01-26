class Technique {
  constructor(name, level, type, basicTechnique) {
    this.name = name;
    this.setLevel(level);
    this.setType(type);
    this.basicTechnique = this.setBasicTechnique(basicTechnique);
  }

  setBasicTechnique(basicTechnique) {
    switch (basicTechnique) {
      case 1: return ["Defend & Manuver"];
      case 2: return ["Advance & Attack"];
      case 3: return ["Evade & Observe"];
      default:
        throw new Error('Invalid basic technique. Choose from: 1, 2, 3.');
    }
  }

  setLevel(level) {
    const validLevels = ['learn', 'practice', 'master'];

    if (!validLevels.includes(level)) {
      throw new Error('Invalid technique level. Choose from: learn, practice, master.');
    }

    this.level = level;
  }

  setType(type) {
    const validTypes = ['universal', 'group', 'rare', 'specialized bending'];

    if (!validTypes.includes(type)) {
      throw new Error('Invalid technique type. Choose from: universal, group, rare, specialized bending.');
    }

    this.type = type;
  }
}

module.exports = Technique;


// new Technique("Pinpoint Aim", learn, 'universal', 1) the adamant
// new Technique("Tag Team", learn, 'universal', 1) the bold
// new Technique("Divert", learn, 'universal', 1) the Guardian
// new Technique("OverPower", learn, 'universal', 2) the Hammer
// new Technique("Wall of Perfection", learn, 'group', 1) the icon
// new Technique("Disorient", learn, 'group', 2) the Idealist
// new Technique("Slide Around the Blow", learn, 'group', 3) the Pillar
// new Technique("Steady Stance", learn, 'group', 1) Prodigy
// new Technique("Sweep the Leg", learn, 'universal', 2) Rouge
// new Technique("Break", learn, 'universal', 2) Succesor