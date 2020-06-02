// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib (n) {
//the first two numbers are 0 and 1 in the sequence. The sequence computations begin at f(2) because that is the first time you can add the two numbers  

  //first two are a given
 const result = [0,1]

 // i is the tracking of positions
 for (let i = 2; i <= n; i++) {
   const a = result[i - 1] ;
   const b = result[i - 2];

   result.push(a + b) ;
 }

  return result[n];
}
module.exports = fib;


// recursive solution: 
// function memoize(fn) {
//   const cache = {};
//   return function (...args) {
//     if (cache[args]) {
//       return cache[args];
//     }

//     const result = fn.apply(this, args);
//     cache[args] = result;

//     return result;
//   }
// }

// function slowFib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n -2);
// }

// const fib = memoize(slowFib);

