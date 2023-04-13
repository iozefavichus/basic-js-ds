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
class Queue {
constructor(){
  this.first = null;
  this.last = null;
  this.size = 0;
}
  getUnderlyingList() {
    let curr = this.first;
    let str = "";
    while (curr) {
        str += curr.element + " ";
        curr = curr.next;
    }
    return  str;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.size===0) {
      this.first = newNode
      this.last = newNode
    }
    else {
      this.last.next = newNode
      this.last = newNode
    }
    this.size++
    return this
  }

  dequeue() {
    if (this.isEmpty()) return null
    const itemToBeRemoved = this.first

    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return itemToBeRemoved

  }
}

module.exports = {
  Queue
};
