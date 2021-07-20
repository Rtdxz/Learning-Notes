/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let reverse = function (s, begin, end) {

    // console.log(s)
    while (begin < end) {
      console.log(s[begin])
      console.log(s[end])
      let temp = s[begin];
      s[begin] = s[end];
      s[end] = temp;
      begin++;
      end--;


    }
    // console.log(s)

  }
  s = s.split('')
  for (let i = 0; i < s.length; i += 2 * k) {
    if (i + k <= s.length - 1) {
      // console.log(i + k)
      reverse(s, i, i + k - 1);

      continue;
    }
    reverse(s, i, s.length - 1)
  }

  s = s.join('')
  console.log(s)
  return s;

};
// @lc code=end

