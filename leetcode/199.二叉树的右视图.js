/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function (root) {
  let queue = [];
  let result = [];
  if (!root) return result;
  queue.push(root)
  while (queue.length > 0) {

    let length = queue.length;

    for (let i = 0; i < length; i++) {
      if (i == length - 1) {
        result.push(queue[0].val)
      }
      let top = queue[0];
      queue.shift();

      if (top.left) queue.push(top.left);
      if (top.right) queue.push(top.right);

    }

  }
  return result;
};
// @lc code=end

