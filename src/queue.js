const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }

}
class Queue {
  constructor(){
    this.head=null;
    this.tail=this.head;

  }
  getUnderlyingList() {
    let start=this.tail;
    let list=new ListNode(start.value);
    list.next=start.next;
    return list;
  }

  enqueue(q) {
    let elem=new ListNode(q);
    if (this.head==null) {
      this.head=elem;
      this.tail=this.head;
    } else {
      this.head.next=elem;
      this.head=this.head.next;
    }
  }

  dequeue() {
    let elem=this.tail.value;
    this.tail=this.tail.next;
    return elem;
  }
}

module.exports = {
  Queue
};
