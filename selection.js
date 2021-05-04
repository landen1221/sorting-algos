function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallest = arr[i];
    let jVal = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < smallest) {
        smallest = arr[j];
        jVal = j;
      }
    }

    arr[jVal] = arr[i];
    arr[i] = smallest;
  }
  return arr;
}

console.log(selectionSort([1, 8, 6, 4]));

module.exports = selectionSort;
