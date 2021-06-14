/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */


// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var getNext = function (s) {
  let j = 0;
  let next = [];
  next[0] = 0;
  for (let i = 1; i < s.length; i++) {
    while (j > 0 && s[j] !== s[i]) {
      j = next[j - 1];
    }

    if (s[j] === s[i]) {
      j++;

    }
    next[i] = j;

  }
  return next;
}
var repeatedSubstringPattern = function (s) {

  return s.length % (s.length - getNext(s)[s.length - 1]) === 0 && getNext(s)[s.length - 1] !== 0
};


// @lc code=end

