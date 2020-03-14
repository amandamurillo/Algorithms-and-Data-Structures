// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


function chunk(array, size) {

  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size))
    index += size
  }

  return chunked;
}

//chunked.push(array.slice(0, 2)) [1, 2]
//index = 2

//chunked.push(array.slice(2, 4)) [3, 4]
//index = 4 

//chunked.push(array.slice(4, 8)) [5]

// if end is greater than the length of the sequence, slice extracts thru to the end of the sequence (arr.length)



function chunk(array, size) {

  const chunked = [];
  for (let element of array) {
    const last = chunked[chunked.length -1];

      if(!last || last.length === size) {
        chunked.push([element])
      } else {
        last.push(element);

      }
  }

  return chunked;
}