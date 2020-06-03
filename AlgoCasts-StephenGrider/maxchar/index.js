// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//solution 1 - obj map

// create an obj assigning character and character count to key : value pairs. 

function maxChar(str) {

//create a char map
const charMap = {};
let maxChar = "";
let max = 0;

  /* Loop 1 : String loop
  loop thru given String to find greatest value, return key pair
  */
for (let char of str) {
  //if there exists a value for the char, just add 
  if(charMap[char]){
    charMap[char] ++;
  }
  //else charMap {key: value} = {char, 1}
  else {
    charMap[char] = 1; 
  }
}
  /* Loop 2 : Object loop
  loop thru charMap to find greatest value, return key pair
  */

  for(let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      //keep track of key
      maxChar = char;
    }
  }
return maxChar;
}
