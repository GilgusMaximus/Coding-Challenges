//Swap every 2 adjacent values of the list

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
var swapPairs = function(head) {
    if(head === null){
        return null;
    }else if(head.next === null){
        return head;
    }
    let value = head.val;
    head.val = head.next.val;
    head.next.val = value;
    swapPairs(head.next.next);
    return head;
};