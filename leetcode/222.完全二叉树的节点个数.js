/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function (root) {
  /* if (root == null) return 0;
  return countNodes(root.left) + countNodes(root.right) + 1 */

  //迭代
  let queue = [];

  let res = 0
  if (!root) return 0;
  queue.push(root)
  while (queue.length) {
    let size = queue.length

    for (let i = 0; i < size; i++) {
      let top = queue.shift();
      res++
      if (top) {
        if (top.left) queue.push(top.left)
        if (top.right) queue.push(top.right)

      }
    }
  }
  return res
};
// @lc code=end

