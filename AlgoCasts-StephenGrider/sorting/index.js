// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i -1); j++) {
      if (arr[j] > arr[j+1]) {
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
  
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
      indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {

  if (arr.length === 1) {
    return arr;
  }
  //take input array, split it in two and call merge fx
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right) {
  //create results arr
  const results = [];
//while there are still elements in both arrays
  while(left.length && right.length) {
    //if first element in left arr is less than first element in right
    if (left[0] < right[0]) {
      //shift element into results arr
      results.push(left.shift());
    } else {
      //shift element into results arr
      results.push(right.shift());
    }
  }

//if one of the arrays is empty, return results plus any additonal elements in not empty array
// creates a new empty array
  return [ ...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
