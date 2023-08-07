const ALERGENICOS = {
  'eggs': 1,
  'peanuts': 2,
  'shellfish': 4,
  'strawberries': 8,
  'tomatoes': 16,
  'chocolate': 32,
  'pollen': 64,
  'cats': 128
};

class Allergies {
  constructor(score) {
    this.score = score;
  }

  allergicTo(alergia) {
    return (this.score & ALERGENICOS[alergia]) !== 0;
  }

  list() {
    return Object.keys(ALERGENICOS).filter(alergia => this.allergicTo(alergia));
  }
}

module.exports = Allergies;
