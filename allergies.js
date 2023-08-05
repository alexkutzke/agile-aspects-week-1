// Jessika Tironi e Maria Eduarda Franke

const ALLERGENS = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128
}

export class Allergies {

  constructor(allergyScore = 0) {
    this.allergyScore = allergyScore;
  }

  getAllergies() {
    return Object.keys(ALLERGENS).filter(allergen => this.isAllergicTo(allergen));
  }

  isAllergicTo(allergen) {
    return !!(this.allergyScore & ALLERGENS[allergen]); // Bitwise AND
  }

}