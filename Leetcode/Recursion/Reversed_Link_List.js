//Reverse a singly linked list

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let newHead = null;
var reverseList = function(head) {
    newHead = null;
    if(head == [])
        return [];
    reverse(head, null);
    return newHead;
};

function reverse(head, prev){
    if(head === null){
        return null;
    }else if(head.next === null){
        newHead = head;
        head.next = prev;
        return;
    }
    
    reverse(head.next, head);
    head.next = prev;
}