// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

  const vowels = ["a", "e", "i" , "o", "u"]
  let count = 0;

  //loop thru string and if str[i] matches any vowel, count ++

  for(let char of str.toLowerCase()) {
      if(vowels.includes(char)) {
        count ++;
      }
  }
  return count;
}