/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let result = [];
  let map = new Map();
  let mapnum = new Map();
  nums1.forEach(
    function (ele) {
      if (!map[ele]) map[ele] = 1;
      else {
        map[ele] += 1;
      }
    }
  )
  nums2.forEach(
    function (ele) {
      if (map[ele]) {
        if (mapnum[ele]) {
          mapnum[ele]++;
        }
        else {
          mapnum[ele] = 1;
        }
        if (mapnum[ele] <= map[ele])
          result.push(ele);

      }
    }
  )
  return result;
};
// @lc code=end

