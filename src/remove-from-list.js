const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list,k){
let head=list;
let prev=null;
let next=null;
while (head!==null){
if (head.value!=k) prev=head;
if (head!==null && head.value==k){
  while (head!==null && head.value==k) head=head.next;
  if (prev!==null){
    next=head;
    prev.next=next;
    prev=prev.next;}
    else{
      prev=list;
      prev.value=head.value;
      prev.next=head.next;
    }
}
if (head!== null) head=head.next;
}
return list;
}

module.exports = {
  removeKFromList
};
