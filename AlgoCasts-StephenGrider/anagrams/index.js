// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


//Solution 1

//Time
//Space: 

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

//How the RegExp works:
//  /[^h]/g will do a global search for characters NOT in the brackets
//  \w is used to find a word character

function cleanString(str) {
  return str.replace(/[^\w] /g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

//------------------------------

//Solution 2

//Time
//Space: 

// function anagrams(stringA, stringB) {
//     let str1 = stringA.replace(/[^\w] /g, '').toLowerCase().split('').sort().join('');
//     let str2 = stringB.replace(/[^\w] /g, '').toLowerCase().split('').sort().join('');
//    return str1 === str2;
// }

//------------------------------

//Solution 3

//Time
//Space:

//function anagrams(stringA, stringB) {
//   const obj1 = objMap(stringA);
//     const obj2 = objMap(stringB);
      
//         if (Object.keys(obj1).length !== Object.keys(obj2).length){
//             return false
//         }
//         for(let key in obj1){
//             if (obj1[key] !== obj2[key]){
//                 return false;
//             }
//         }
//         return true;
//     }
      
//    function objMap(str){
//     let obj = {};    
  //     for (let char of str.replace(/[^\w] /g, '').toLowerCase()){
  //         if(!obj[char]){
  //             obj[char] = 1;
  //         } else {
  //             obj[char] ++;
  //         }
  //     }
  //    return obj;
      
  //  }