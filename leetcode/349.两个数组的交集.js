/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return intersection(nums2, nums1);
  }
  let result = [];
  let map = new Map();
  nums2.forEach((ele) =>
    map[ele] = true
  );
  nums1.forEach(function (ele) {
    if (map[ele]) {
      result.push(ele);
      map[ele] = false;
    }
  }

  );
  return result;
};
// @lc code=end

