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
    let result = new ListNode(0)
    let result_curr = result;
    const mySet = new Set();
    while (head !== null) {
        if (!mySet.has(head.val)) {
            mySet.add(head.val);
            const node = new ListNode(head.val)
            result_curr.next = node;
            result_curr = result_curr.next;
        }
        head = head.next;
    }
    return result.next;
};