/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let map = new Map();
  let count = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (!map.get(nums1[i] + nums2[j])) {
        map.set(nums1[i] + nums2[j], 1)
      }
      else {
        map.set(nums1[i] + nums2[j], map.get(nums1[i] + nums2[j]) + 1)
      }

    }
  }

  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      if (map.has(0 - nums3[i] - nums4[j])) {
        count += map.get(0 - nums3[i] - nums4[j]);
      }
    }
  }
  return count;
  console.log(map)
};
// @lc code=end

