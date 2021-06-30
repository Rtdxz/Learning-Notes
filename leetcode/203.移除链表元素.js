/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let newHead = new ListNode(null);
  newHead.next = head;
  let now = newHead;
  while (now.next) {
    if (now.next.val == val) {
      now.next = now.next.next
    }
    else {
      now = now.next
    }
  }
  return newHead.next;


};
// @lc code=end

