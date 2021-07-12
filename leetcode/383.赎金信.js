/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let map = new Map()
  for (let i = 0; i < magazine.length; i++) {
    if (!map.has(magazine[i])) {
      map.set(magazine[i], 1);
    }
    else {
      map.set(magazine[i], map.get(magazine[i]) + 1);
    }
  }
  for (let j = 0; j < ransomNote.length; j++) {
    if (!map.has(ransomNote[j])) {
      return false;
    }
    map.set(ransomNote[j], map.get(ransomNote[j]) - 1);
    if (map.get(ransomNote[j]) < 0) {
      return false
    }
  }
  return true
};
// @lc code=end

