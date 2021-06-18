function quicksort(arr) {
  let start = 0;
  let end = arr.length - 1;
  sort(start, end)
  function sort(start, end) {

    if (start < end) {
      let index = part(start, end);
      sort(start, index - 1);
      sort(index + 1, end);
    }

  }


  function part(start, end) {
    let i = start;
    let j = end;
    let p = arr[start];
    while (i < j) {
      while (i < j && arr[j] >= p) {
        j--
      }
      if (i < j) {
        arr[i] = arr[j]
      }
      while (i < j && arr[i] <= p) {
        i++
      }
      if (i < j) {
        arr[j] = arr[i]
      }
    }
    arr[i] = p;
    return i;
  }
  return arr
}
console.log(quicksort([5, 4, 3, 2, 1]))