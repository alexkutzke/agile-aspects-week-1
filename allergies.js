//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var allergieList = {
  eggs : 1
  ,peanuts : 2
  ,shellfish : 4
  ,strawberries : 8
  ,tomatoes : 16
  ,chocolate : 32
  ,pollen : 64
  ,cats : 128
}

function decimalToBinaryArrayTInvertedTruncate(number) {

  if (number === 0) {  
    return '0';
  }

  let binary = '';

  while (number > 0) {
    binary = (number % 2) + binary;
    number = Math.floor(number / 2);
  }

  if (binary.length > 8){
      binary = binary.slice(-8);
  }

  return Array.from(binary).reverse();
}

function returnsAllergiesListBasedInAllergieNumber(allergiesNumber){
  
  var userAllergieList = [];
  
  var allergiesBinArray = decimalToBinaryArrayTInvertedTruncate(allergiesNumber); //1010101
  
  for (var index = 0 ; index < allergiesBinArray.length ; index ++ ){
      
    var allergieName = Object.keys(allergieList)[index];

    if(allergiesBinArray[index] == 1){
        userAllergieList.push(allergieName);
    }
  }
  return userAllergieList;//userAllergieList
}

export class Allergies {
  constructor(allergieNumberValue) {
    this.userAllergiesList = returnsAllergiesListBasedInAllergieNumber(allergieNumberValue);
  }

  list() {
    return this.userAllergiesList;
  }

  allergicTo(allergieName) {
    return this.userAllergiesList.includes(allergieName);
  }
}

