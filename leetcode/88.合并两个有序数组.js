/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  /* if (n === 0) { nums1 = nums1 }
  else {
    let p = nums1.length - 1;
    let p1 = m - 1;
    let p2 = n - 1;
    while (p1 >= 0 && p2 >= 0) {
      if (nums1[p1] < nums2[p2]) {
        nums1[p--] = nums2[p2--];

      }
      else {

        nums1[p--] = nums1[p1--];

      }
    }
    while (p2 >= 0) {
      nums1[p--] = nums2[p2--];

    }
  } */
  for (let i = 0; i < n; i++) { nums1[i + m] = nums2[i] } nums1.sort((a, b) => a - b);
};
// @lc code=end

