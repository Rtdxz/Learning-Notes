/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  /*  if (root == null) return 0;
   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1; */
  if (root == null) return 0;
  let queue = [];
  queue.push(root);
  let depth = 0;
  while (queue.length) {
    let size = queue.length;
    depth++;
    for (let i = 0; i < size; i++) {
      let top = queue.shift();
      if (top) {
        if (top.left) queue.push(top.left);
        if (top.right) queue.push(top.right);
      }

    }
  }
  return depth
};
// @lc code=end

