// Rahula Palu Caleffi and Natan Felipe Oliveira da Rosa

export class Allergies {
  constructor(score) {
    console.log("score", this.score);
    this.allergyList = [
      { name: "eggs", score: 1 },
      { name: "peanuts", score: 2 },
      { name: "shellfish", score: 4 },
      { name: "strawberries", score: 8 },
      { name: "tomatoes", score: 16 },
      { name: "chocolate", score: 32 },
      { name: "pollen", score: 64 },
      { name: "cats", score: 128 },
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
