//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var allergiesAList = {
   eggs : 1
  ,peanuts : 2
  ,shellfish : 4
  ,strawberries : 8
  ,tomatoes : 16
  ,chocolate : 32
  ,pollen : 64
  ,cats : 128
}

function decimalToBinaryArrayTInvertedTruncate(num) {

  if (num === 0) {  
    return '0';
  }

  let binary = '';

  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }

  if (binary.length > 8){
      binary = binary.slice(-8);
  }

  return Array.from(binary).reverse();
}

function returnAllergiesAListBasedInAllergiesNum(allergiesNum){
  
  var userAllergiesAList = [];
  
  var allergiesBinArray = decimalToBinaryArrayTInvertedTruncate(allergiesNum);
  
  for (var index = 0 ; index < allergiesBinArray.length ; index ++ ){
      
    var allergieName = Object.keys(allergiesAList)[index];

    if(allergiesBinArray[index] == 1){
        userAllergiesAList.push(allergieName);
    }
  }
  return userAllergiesAList;
}

export class Allergies {
  constructor(allergieNumValue) {
    this.userAllergiesAList = returnAllergiesAListBasedInAllergiesNum(allergieNumValue);
    //throw new Error('Remove this statement and implement this function');
  }

  list() {
    return this.userAllergiesAList;
    //throw new Error('Remove this statement and implement this function');
  }

  allergicTo(allergieName) {
    return this.userAllergiesAList.includes(allergieName);
    //throw new Error('Remove this statement and implement this function');
  }
}

