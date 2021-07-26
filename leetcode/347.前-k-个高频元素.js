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
  let buildHeap = function (array) {
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
  return res;
};
// @lc code=end

