const ALLERGENS = {
  1: "eggs",
  2: "peanuts",
  4: "shellfish",
  8: "strawberries",
  16: "tomatoes",
  32: "chocolate",
  64: "pollen",
  128: "cats"
};

export class Allergies {
  constructor(allergieId) {
    this.allergies = this.setAllergies(allergieId);
  }

  setAllergies(allergieId) {
    const allergies = [];

    const binaryRepresentation = this.stringToBinary(allergieId);
    const reverseBinaryRepresentation = this.reverseString(binaryRepresentation);

    for (let index = 0; index < reverseBinaryRepresentation.length; index++) {      
      const currentBit = reverseBinaryRepresentation[index];

      if(currentBit == 1){
        const retrievedAllergie = this.retrieveAllergie(index);
        allergies.push(retrievedAllergie);
      }
    }
    return allergies;
  }

  list() {
    return this.allergies;
  }

  allergicTo(allergen) {
    return this.allergies.includes(allergen);
  }

  stringToBinary(str) {
    return str.toString(2);
  }

  binaryToInteger(bit) {
    return Math.pow(2, bit)
  }

  reverseString(str) {
    return str.split('').reverse().join('');
  }    

  retrieveAllergie(index) {
    const key = this.binaryToInteger(index);
    return ALLERGENS[key];
  }
}