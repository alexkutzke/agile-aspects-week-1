//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const EGGS = 7;
const PEANUTS = 6;
const SHELLFISH = 5;
const STRAWBERRIES = 4;
const TOMATOES = 3;
const CHOCOLATE = 2;
const POLLEN = 1;
const CATS = 0;

function converteDecimalParaBinario(decimal) {
  var binario = (decimal >>> 0).toString(2);

  if (binario.length < 8) {
    const zero = '0';
    const falta = 8 - binario.length;

    for (let index = 0; index < falta; index++) {
      binario = zero.concat(binario);
    }
  } else if (binario.length > 8) {
      binario = binario.slice(binario.length - 8, binario.length);
  } 
  return binario;
}

export class Allergies {
  constructor(scoreAlergia) {
   this.scoreBinario = converteDecimalParaBinario(scoreAlergia);
  }

  list() {
    var alergias = [];

    if(this.scoreBinario.charAt(EGGS) == '1')
      alergias.push('eggs');
    
    if(this.scoreBinario.charAt(PEANUTS) == '1')
      alergias.push('peanuts');
    
    if(this.scoreBinario.charAt(SHELLFISH) == '1')
      alergias.push('shellfish');
    
    if(this.scoreBinario.charAt(STRAWBERRIES) == '1')
      alergias.push('strawberries');
    
    if(this.scoreBinario.charAt(TOMATOES) == '1')
      alergias.push('tomatoes');
    
    if(this.scoreBinario.charAt(CHOCOLATE) == '1')
      alergias.push('chocolate');
    
    if(this.scoreBinario.charAt(POLLEN) == '1')
      alergias.push('pollen');
    
    if(this.scoreBinario.charAt(CATS) == '1')
      alergias.push('cats');
    

    return alergias;
  }

  allergicTo(alergia) {
    if(alergia === 'eggs' && this.scoreBinario.charAt(EGGS) == '1')
      return true;
    else if(alergia === 'peanuts' && this.scoreBinario.charAt(PEANUTS) == '1')
      return true;
    else if(alergia === 'shellfish' && this.scoreBinario.charAt(SHELLFISH) == '1')
      return true;
    else if(alergia === 'strawberries' && this.scoreBinario.charAt(STRAWBERRIES) == '1')
      return true;
    else if(alergia === 'tomatoes' && this.scoreBinario.charAt(TOMATOES) == '1')
      return true;
    else if(alergia === 'chocolate' && this.scoreBinario.charAt(CHOCOLATE) == '1')
      return true;
    else if(alergia === 'pollen' && this.scoreBinario.charAt(POLLEN) == '1')
      return true;
    else if(alergia === 'cats' && this.scoreBinario.charAt(CATS) == '1')
      return true;
    else
      return false;
    
  }
}