// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt (num) {
  //num to string
//15
  let str = num.toString();
//"15"
  let reversed = str.split('').reverse().join('');
// "51"
return  parseInt(reversed) * Math.sign(num);

}

module.exports = reverseInt;