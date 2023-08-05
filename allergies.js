//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/*class Alergia {
  cod;
  nome;
  constructor(cod, nome) {
    this.cod = cod;
    this.nome = nome;
  }
}*/
export class Allergies {

  alergias = [
    {cod: 1, nome: 'eggs'},
    {cod: 2, nome: 'peanuts'},
    {cod: 4, nome: 'shellfish'},
    {cod: 8, nome: 'strawberries'},
    {cod: 16, nome: 'tomatoes'},
    {cod: 32, nome: 'chocolate'},
    {cod: 64, nome: 'pollen'},
    {cod: 128, nome: 'cats'}
  ]
  constructor() {
    throw new Error('Remove this statement and implement this function');
  }

  list() {
    throw new Error('Remove this statement and implement this function');
  }

  allergicTo() {
    throw new Error('Remove this statement and implement this function');
  }
}

