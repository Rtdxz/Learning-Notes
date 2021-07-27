/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let swap = function (items, i, j) {
    if (i == j) return;
    let temp = items[i];
    items[i] = items[j];
    items[j] = temp;

  }
  //大顶堆做法
  /*  let buildHeap = function (array) {
     for (let i = Math.floor((array.length - 2) / 2); i >= 0; i--) {
       heapify(array, array.length - 1, i)
     }
   }
   let heapify = function (array, heapSize, i) {
     while (true) {
       let maxIndex = i;
       if (i * 2 + 1 <= heapSize && array[i * 2 + 1][1] > array[maxIndex][1]) {
         maxIndex = i * 2 + 1;
 
       }
 
       if (i * 2 + 2 <= heapSize && array[i * 2 + 2][1] > array[maxIndex][1]) {
 
         maxIndex = i * 2 + 2;
         console.log('r')
       }
       if (maxIndex == i) break;
       swap(array, maxIndex, i);
       i = maxIndex;
     }
   }
 
   let map = new Map();
   let res = []
   for (let i = 0; i < nums.length; i++) {
     if (map.has(nums[i])) {
       map.set(nums[i], map.get(nums[i]) + 1)
     }
     else {
       map.set(nums[i], 1);
     }
   }
 
   if (map.size <= k) {
     return [...map.keys()]
   }
   let heap = Array.from(map);
   buildHeap(heap);
   console.log(heap)
   for (let i = heap.length - 1; i >= heap.length - k; i--) {
     swap(heap, i, 0);
     res.push(heap[i][0])
     heapify(heap, i - 1, 0);
     // console.log(heap)
 
   }
   return res; */



  //小顶堆做法
  let heapify = function (heap, map, k, i) {
    while (true) {
      let minIndex = i;
      if (2 * i + 1 < k && map.get(heap[2 * i + 1]) < map.get(heap[minIndex])) {
        minIndex = 2 * i + 1
      }
      if (2 * i + 2 < k && map.get(heap[2 * i + 2]) < map.get(heap[minIndex])) {
        minIndex = 2 * i + 2
      }
      if (minIndex == i) break;
      swap(heap, i, minIndex);
      i = minIndex;
    }

  }
  let buildHeap = function (array, map, k) {
    for (let i = Math.floor((array.length - 2) / 2); i >= 0; i--) {
      heapify(array, map, k, i)
    }
  }
  let heap = [];
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    }
    else {
      map.set(nums[i], 1)
    }
  }
  if (map.size <= k) {
    return [...map.keys()]
  }
  let array = Array.from(map);
  console.log(array)
  for (let i = 0; i < array.length; i++) {
    //堆未到达对应大小时，一直推入
    if (i < k) {
      heap.push(array[i][0])

      //当堆到达对应k大小时再构建一个小顶堆
      if (heap.length == k) {

        buildHeap(heap, map, k)

      }
    }
    //对之后的元素进行判断，如果对应的频率比堆顶大，则进行替换掉
    //如果频率比堆顶小则不处理
    //最后剩下的这个k大的小顶堆中就是前k高频的数
    else if (array[i][1] > map.get(heap[0])) {
      //替换
      heap[0] = array[i][0];
      //从堆顶再次进行堆化，保证堆顶为最小元素
      heapify(heap, map, k, 0)
      //不断剔除最小元素最后剩下的就是k大的元素
    }
  }

  return heap.reverse();

};
// @lc code=end

