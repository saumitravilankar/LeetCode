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
var reverseList = function (head) {
    // let temp = head;
    // let prev = null
    // // let length = 0;
    // // while (temp) {
    // //     temp=temp.next;
    // //     length++
    // // }
    // // temp=head;
    // // console.log(temp)
    // // for (let i = 0;i<length;i++){
    // while (temp !== null) {
    //     let next = temp.next;
    //     temp.next = prev;
    //     prev = temp;
    //     temp = next;
    // }
    // return temp;
    // Initialize pointers
    let prev = null; // Previous node starts as null
    let curr = head; // Current node starts at the head

    // Traverse the list
    while (curr !== null) {
        let next = curr.next; // Save the next node

        curr.next = prev; // Reverse the link

        // Move pointers forward
        prev = curr; // Move prev to the current node
        curr = next; // Move curr to the next node
    }

    // prev is now the new head of the reversed list
    return prev;
};