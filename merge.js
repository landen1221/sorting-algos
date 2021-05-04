function merge(arr1, arr2) {
  let result = [];
  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < arr1.length && idx2 < arr2.length) {
    if (arr1[idx1] < arr2[idx2]) {
      result.push(arr1[idx1]);
      idx1++;
    } else {
      result.push(arr2[idx2]);
      idx2++;
    }
  }

  while (idx1 < arr1.length) {
    result.push(arr1[idx1]);
    idx1++;
  }

  while (idx2 < arr2.length) {
    result.push(arr2[idx2]);
    idx2++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

let x = [1, 3, 5, 7, 8, 9, 10, 1, 4, 5, 6];

console.log(mergeSort(x));

module.exports = { merge, mergeSort };
