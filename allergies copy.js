const ALLERGENT_SCORE_MAP = {
  'eggs': 1,
  'peanuts': 2,
  'shellfish': 4,
  'strawberries': 8,
  'tomatoes': 16,
  'chocolate': 32,
  'pollen': 64,
  'cats': 128
};

const ALLERGIES = Object.keys(ALLERGENT_SCORE_MAP);
export class Allergies {
  constructor(allergyScore) {
    this.allergyScore = allergyScore;
  }
  list() {
    return ALLERGIES.filter(this.allergicTo.bind(this)); //passing fn looses this hence the bind
  }
  allergicTo(allergent) {
    return Boolean(this.allergyScore & ALLERGENT_SCORE_MAP[allergent]);
  }
}