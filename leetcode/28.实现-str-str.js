/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var getKMPnext = function (s) {
  let array = Array.from(s);

  let next = [];
  next[0] = 0;
  let j = 0;
  for (let i = 1; i < array.length; i++) {

    while (j > 0 && array[i] !== array[j]) {
      j = next[j - 1];

    }
    if (array[i] === array[j]) {

      j++;
    }

    next[i] = j;

  }

  return next;
}


var strStr = function (haystack, needle) {
  if (needle === "") return 0;
  if (haystack.length < needle.length) return -1;
  let next = getKMPnext(needle);

  let j = 0;
  for (let i = 0; i < haystack.length; i++) {

    while (j > 0 && needle[j] !== haystack[i]) {
      j = next[j - 1];
    }
    if (needle[j] === haystack[i]) {
      j++;
    }
    if (j == needle.length) {
      console.log(i, j)
      return i - j + 1;
    }
  }
  return -1;
};
// @lc code=end

