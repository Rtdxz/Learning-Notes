/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {

  /* 无脑做法
   nums.sort((a, b) => b-a)
  console.log(nums)
  return nums[k-1];
   */

  // 堆做法
  let swap = function (nums, i, j) {
    let temp = nums[i] + nums[j];
    nums[i] = temp - nums[i];
    nums[j] = temp - nums[j];
  }

  let heapify = function (nums, heapSize, i) {
    let maxIndex = i;
    while (true) {
      if (2 * i + 1 <= heapSize && nums[maxIndex] < nums[2 * i + 1]) {
        maxIndex = 2 * i + 1;
      }
      if (2 * i + 2 <= heapSize && nums[maxIndex] < nums[2 * i + 2]) {
        maxIndex = 2 * i + 2;
      }
      if (i === maxIndex) break;

      swap(nums, i, maxIndex);
      i = maxIndex;
    }
  }

  let buildHeap = function (nums) {
    let length = nums.length - 1;
    for (let i = Math.floor((length - 1) / 2); i >= 0; i--) {
      heapify(nums, length, i);
    }
  }

  buildHeap(nums);
  console.log(nums)
  let heapSize = nums.length - 1;
  //这里要执行k此堆化，每一次都将最大的与最后交换，然后将堆的大小变小
  //再进行一次堆化，这样进行k次，堆顶元素就是第k大的元素
  for (let i = nums.length - 1; i > nums.length - k; i--) {
    swap(nums, 0, i);
    heapSize--;
    heapify(nums, heapSize, 0)
    console.log(nums)
  }

  return nums[0]
};
// @lc code=end

