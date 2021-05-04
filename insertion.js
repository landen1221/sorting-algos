function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i]; // 8
    let j = i - 1;

    while (currVal < arr[j] && j > -1) {
      j--;
    }

    if (j >= -1 && j !== i - 1) {
      arr.splice(i, 1);
      arr.splice(j + 1, 0, currVal);
    }
  }

  return arr;
}

console.log(insertionSort([5, 8, 1, 3, 15, 36, 2, 8, 9, 7]));

module.exports = insertionSort;
