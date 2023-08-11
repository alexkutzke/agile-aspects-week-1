class Allergies {
  
  constructor(value=0) {
    this.value = value;
    this.allergens = {
      'eggs' : 1,
      'peanuts' : 2,
      'shellfish' : 4,
      'strawberries' : 8,
      'tomatoes' : 16,
      'chocolate' : 32,
      'pollen' : 64,
      'cats' : 128
    };
  }

  list() {
    let allergens = [];
    for (const item in this.allergens) {
      if (this.value & this.allergens[item]) {
        allergens.push(item);
      }
    }
    return allergens;    
  } 
  
  allergicTo(allergie="") {
    if (this.allergens[allergie]) {
      return (this.value & this.allergens[allergie]) > 0;
    }
    return false;
  }
}
export { Allergies }
