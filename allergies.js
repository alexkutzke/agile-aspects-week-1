// Array com as alergias
const allergies = [
  "eggs",
  "peanuts",
  "shellfish",
  "strawberries",
  "tomatoes",
  "chocolate",
  "pollen",
  "cats"
];

// Classe Allergies
export class Allergies {
  constructor(score) {
    this.score = score;
    this.myAllergies = [];

    // Converte o score em binário e reverte para trabalhar da esquerda para a direita
    const binaryScore = convertToBin(this.score).split('').reverse();

    // Percorre o array de alergias e verifica se o bit correspondente está definido em 1
    for (let i = 0; i < binaryScore.length && i < allergies.length; i++) {
      if (binaryScore[i] === '1') {
        // Se o bit estiver definido, adiciona a alergia ao array myAllergies
        this.myAllergies.push(allergies[i]);
      }
    }
  }

  // Retorna a lista de alergias
  list() {
    return this.myAllergies;
  }

  // Verifica se é alérgico a um item específico
  allergicTo(item) {
    return this.myAllergies.includes(item);
  }
}

// Função para converter o número em binário
function convertToBin(score) {
  return (score >>> 0).toString(2);
}