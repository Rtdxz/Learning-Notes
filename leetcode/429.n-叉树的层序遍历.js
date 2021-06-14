/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let queue = [];
  let result = [];
  if (!root) return result;
  queue.push(root)
  while (queue.length) {
    let length = queue.length;
    let storey = [];
    for (let i = 0; i < length; i++) {

      let top = queue[0];
      storey.push(top.val);
      queue.shift();

      if (top.children) {
        for (let j = 0; j < top.children.length; j++) {

          if (top.children[j]) {

            queue.push(top.children[j]);
          }
        }
      }
    }
    result.push(storey);
  }
  return result;
};
// @lc code=end

