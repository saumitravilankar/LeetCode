/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let result = new ListNode(0);
    let result_curr = result;
    while (list1) {
        result_curr.next = list1;
        result_curr = result_curr.next;
        list1 = list1.next;
    }
    while (list2) {
        result_curr.next = list2;
        result_curr = result_curr.next;
        list2 = list2.next;
    }
    let arr = []
    while (result.next) {
        arr.push(result.next.val)
        result.next = result.next.next
    }
    arr = arr.sort((a, b) => a - b)
    let newResult = new ListNode(0)
    let newResult_curr = newResult;
    for (let i = 0; i < arr.length; i++) {
        const node = new ListNode(arr[i])
        newResult_curr.next = node;
        newResult_curr = newResult_curr.next;
    }
    return newResult.next
};