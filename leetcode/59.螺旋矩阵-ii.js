/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let startx = 0, starty = 0;
  let offset = 1;
  let count = 1;
  let loop = Math.floor(n / 2);
  let mid = Math.floor(n / 2);
  let i, j;
  let res = new Array(n);
  for (let k = 0; k < n; k++) {
    res[k] = new Array(n);
  }
  while (loop--) {
    i = startx;
    j = starty;
    for (j = starty; j < starty + n - offset; j++) {
      res[i][j] = count++;
    }
    for (i = startx; i < startx + n - offset; i++) {
      res[i][j] = count++
    }
    for (; j > starty; j--) {
      res[i][j] = count++;
    }
    for (; i > startx; i--) {
      res[i][j] = count++
    }
    startx++;
    starty++;
    offset += 2

  }
  if (n % 2) {
    res[mid][mid] = count
  }
  return res;
};
// @lc code=end

