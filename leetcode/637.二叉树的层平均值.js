/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let result = [];
  let queue = [];
  if (!root) return result;
  queue.push(root);
  while (queue.length > 0) {
    let length = queue.length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
      sum += queue[0].val;
      let top = queue[0];
      queue.shift();
      if (top.left) queue.push(top.left);
      if (top.right) queue.push(top.right);
    }
    result.push(sum / length);
  }
  return result;
};
// @lc code=end

