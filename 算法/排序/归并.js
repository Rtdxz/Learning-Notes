function mergeSort(arr) {
  if (arr.length == 1) return arr
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);

  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right))

  function merge(left, right) {
    let i = 0;
    let j = 0;
    let a = left && left.length;
    let b = right && right.length;
    let result = [];
    while (i < a && j < b) {
      if (left[i] < right[j]) {
        result.push(left[i++])
      }
      else {
        result.push(right[j++])
      }
    }
    while (i < a) {
      result.push(left[i++])
    }
    while (j < b) {
      result.push(right[j++])
    }
    return result;
  }
}

console.log(mergeSort([5, 4, 3, 2]))