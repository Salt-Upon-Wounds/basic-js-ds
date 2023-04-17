const { NotImplementedError, ListNode } = require('../extensions/index.js');

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
class Queue {
  constructor() {
    this.list = null;
  }
  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    if (this.list === null) {
      this.list = new ListNode(value);
    } else {
      let tmp = this.list
      while (tmp.next !== null) {
        tmp = tmp.next;
      }
      tmp.next = new ListNode(value);
    }
  }

  dequeue() {
    if (this.list !== null) {
      if (this.list.next !== null) {
        let tmp = this.list.value;
        this.list = this.list.next;
        return tmp;
      } else {
        let tmp = this.list.value;
        this.list = null;
        return tmp;
      }
    }
  }
}

module.exports = {
  Queue
};
