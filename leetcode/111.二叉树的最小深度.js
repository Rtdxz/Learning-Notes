/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
  /* if (root == null) return 0;
  if (root.left == null && root.right != null) {
    return 1 + minDepth(root.right)
  }
  if (root.left != null && root.right == null) {
    return 1 + minDepth(root.left)
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1 */

  let queue = [];
  let depth = 0;
  let flag = false
  if (!root) return 0;
  queue.push(root)
  while (queue.length) {
    let size = queue.length
    depth++;
    for (let i = 0; i < size; i++) {
      let top = queue.shift();
      if (top) {
        if (top.left) queue.push(top.left)
        if (top.right) queue.push(top.right)
        if (!top.left && !top.right) {
          flag = true
          break;
        }
      }
    }
    if (flag) {
      break
    }
  }
  return depth
};
// @lc code=end

