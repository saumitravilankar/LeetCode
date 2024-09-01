/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    const mySet = new Set();
    while (head) {
        if (!mySet.has(head.val)) {
            mySet.add(head.val);
        }
        head = head.next;
    }
    let result = new ListNode(0)
    let result_curr = result;
    for (const item of mySet) {
        const node = new ListNode(item)
        result_curr.next = node;
        result_curr = result_curr.next;
    }
    return result.next;
};