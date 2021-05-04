/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr) {
  let pivot = arr[0];
  let smaller = [];
  let larger = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) smaller.push(arr[i]);
    else larger.push(arr[i]);
  }

  return { array: [...smaller, pivot, ...larger], idx: smaller.length };
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort() {}

console.log(pivot([5, 3, 7, 2, 6]));

module.exports = quickSort;
