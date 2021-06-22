function swap(arr, i, j) {
  if (i === j) return;

  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  
}

function buildHeap(arr) {
  let heapSize = arr.length - 1;
 
  for (let i = Math.floor((heapSize - 1) / 2); i >= 0; i--) {
    
    heapify(arr, heapSize, i);
    
  }
  
}

function heapify(arr, heapSize, i) {
 
  let maxIndex = i;
  while (true) {
  if (2 * i + 1 <= heapSize && arr[maxIndex] < arr[2 * i + 1]) {
     maxIndex = 2 * i + 1; 
  } 
  if (2*i+2<=heapSize&&arr[maxIndex]<arr[2*i+2]) {
    maxIndex=2*i+2
  }
  
    if (maxIndex === i) break;
    swap(arr, maxIndex, i);
    i = maxIndex;
    
  }
}

function heapSort(arr) {
  buildHeap(arr);

  for (let i = arr.length - 1; i >= 0; i--){
    console.log(i)
    swap(arr,i,0);
    console.log(arr)
    heapify(arr, i - 1,0);
    console.log(arr)
  }
  return arr
}
console.log(heapSort([5,4,3,2,1]))