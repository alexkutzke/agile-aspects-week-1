// Rahula Palu Caleffi and Natan Felipe Oliveira da Rosa

export class Allergies {
  constructor(score) {
    this.allergyList = [
      { name: "cats", score: 128 },
      { name: "pollen", score: 64 },
      { name: "chocolate", score: 32 },
      { name: "tomatoes", score: 16 },
      { name: "strawberries", score: 8 },
      { name: "shellfish", score: 4 },
      { name: "peanuts", score: 2 },
      { name: "eggs", score: 1 },
    ];

    this.score = score;
  }

  list() {
    const allergies = [];
    for (const allergy of this.allergyList) {
      if ((this.score & allergy.score) !== 0) {
        allergies.push(allergy.name);
      }
    }
    return allergies;
  }

  allergicTo(item) {
    const allergy = this.allergyList.find((a) => a.name === item);
    if (!allergy) {
      return false;
    }
    return (this.score & allergy.score) !== 0;
  }
}
