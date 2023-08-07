const ALLERGENS = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128
};

export class Allergies {
  constructor(allergieId) {
    this.allergieId = allergieId;
  }

  list() {
    const allergies = [];
    for (const allergie in ALLERGENS) {
      if (this.allergicTo(allergie)) {
        allergies.push(allergie);
      }
    }
    return allergies;
  }

  allergicTo(allergie) {
    return (this.allergieId & ALLERGENS[allergie]) !== 0;
  }
}