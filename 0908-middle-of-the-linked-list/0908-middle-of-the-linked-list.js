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
var middleNode = function (head) {
    if (!head) return null;
    let temp = head;
    let length = 0;
    while (temp) {
        temp = temp.next;
        length++
    }
    console.log(length, '----------length')
    let half = -Math.round(-(length / 2))
    console.log(half, '----------half')
    let i = 0;
    temp = head;
    while (i < half) {
        temp = temp.next;
        console.log(temp, '------------temp')
        i++
    }
    return temp;
};