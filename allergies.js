//
// This is only a SKELETON file for the "Allergies" exercise. It"s been provided as a
// convenience to get you started writing code faster.
//

const allergies = {
  1: "eggs", 
  2: "peanuts", 
  4: "shellfish", 
  8: "strawberries",
  16: "tomatoes", 
  32: "chocolate", 
  64: "pollen", 
  128: "cats"};

export class Allergies {
  allergiesBitwise = 0;
  constructor(allergiesBitwise) {
    this.allergiesBitwise = allergiesBitwise;
  }

  list() {
    return Object.keys(allergies)
      .filter(allergyKey => this.allergiesBitwise & allergyKey)
      .map(i => allergies[i]);
  }

  allergicTo(allergyName) {
    return this.list().includes(allergyName);
  }
}

