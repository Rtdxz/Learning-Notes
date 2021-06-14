/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let queue = [];
  let result = [];
  if (!root) return queue;

  queue.push(root);
  while (queue.length > 0) {
    let storey = [];
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let top = queue[0];
      queue.shift();
      storey.push(top.val);

      if (top.left) { queue.push(top.left); console.log(top.left.val); }
      if (top.right) { queue.push(top.right); console.log(top.right.val) }

    }
    result.push(storey);
  }
  return result;
};
// @lc code=end

