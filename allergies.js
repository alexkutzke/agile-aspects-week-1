//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const allergiesTypes = {
  "eggs": 1,
  "peanuts": 2,
  "shellfish": 4,
  "strawberries": 8,
  "tomatoes": 16,
  "chocolate": 32,
  "pollen": 64,
  "cats": 128
}

export class Allergies {
  constructor(allergiesValueInput) {
    this.allergiesValueInput = allergiesValueInput
  }

  list() {
    return Object.keys(allergiesTypes).filter(allergy => this.allergicTo(allergy));
  }

  allergicTo(allergy) {
    if(allergiesTypes[allergy] & this.allergiesValueInput){
      return true
    }
    return false
  }
}

