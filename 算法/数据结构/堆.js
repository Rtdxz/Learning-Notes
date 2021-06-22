(function () {
  //公用交换函数
  function swap(items, i, j) {
    if (i == j) return;
    let temp = items[i];
    items[i] = items[j];
    items[j] = temp;
  }


  //插入建堆
  function insert(key) {
    items.push(key);
    let i = items.length - 1;
    while (i / 2 > 0 && items[i] > items[Math.floor(i / 2)]) {
      swap(items, i, Math.floor(i / 2));
      i = Math.floor(i / 2);
    }
  }

  //小顶堆为例

  // 原地建堆(堆化)
  // 从前往后、自下而上式堆化建堆（将当前节点与父节点比较）
  function buildHeap1(items, heapSize) {
    while (heapSize < items.length - 1) {
      heapSize++;
      heapify1(items, heapSize);
    }
  }
  //堆化
  function heapify1(items, i) {
    while (Math.floor((i - 1) / 2) >= 0 && items[i] < items[Math.floor((i - 1) / 2)]) {
      swap(items, i, Math.floor((i - 1) / 2));
      i = Math.floor((i - 1) / 2);
    }
  }
  let items1 = [5, 2, 3, 4, 1];
  // buildHeap1(items, 0);
  // console.log(items)



  // 从后往前、自上而下式堆化建堆（将当前节点与左右子节点比较）
  function buildHeap2(items, heapSize) {
    //从最后一个非叶子节点开始，因为叶子节点没有子节点
    for (let i = Math.floor((heapSize-1) / 2); i >=0; i--) {
      heapify2(items, heapSize, i);
    }
  }
    //堆化
  function heapify2(items, heapSize, i) {
    while (true) {
      var minIndex = i;
      if (2 * i +1<= heapSize && items[minIndex] > items[i * 2+1]) {
        minIndex = 2 * i+1;
      }
      if (2 * i + 2 <= heapSize && items[minIndex] > items[i * 2 + 2]) {
        minIndex = 2 * i + 2;
      }
      //minIndex没有变化，说明两个子节点都比当前节点大
      if (minIndex === i) break;
      swap(items, minIndex, i);
      i = minIndex;
    }
  }

  let items2=[5, 2, 3, 4, 1]
  buildHeap2(items2,items2.length-1);
  // console.log(items2)


  //堆排序
  function heapSort(array) {
    buildHeap2(array,array.length-1);
    console.log(array)
    for (let i = array.length - 1; i >= 0; i--){
      swap(array, i, 0);
      heapify2(array, i-1, 0);
    }
  
  }
  let array = [1,2,3,4,5];
  heapSort(array);
  console.log(array)

}())
