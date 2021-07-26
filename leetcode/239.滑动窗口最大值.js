/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {

  let pushQueue = function (queue, value) {
    while (queue.length != 0 && value > queue[queue.length - 1]) {
      queue.pop()
    }
    queue.push(value);

  }
  let popQueue = function (queue, value) {
    if (queue.length != 0 && value == queue[0]) {
      queue.shift()
    }
  }

  let queue = [];
  let res = [];
  for (let i = 0; i < k; i++) {
    pushQueue(queue, nums[i]);

  }

  res.push(queue[0]);
  for (let i = k; i < nums.length; i++) {
    popQueue(queue, nums[i - k]);
    pushQueue(queue, nums[i]);

    res.push(queue[0])

  }
  return res;


};
// @lc code=end

