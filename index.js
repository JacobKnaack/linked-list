'use strict';

const Node = require('./src/node');

class LinkedList {
  constructor(value) {
    this.head = value ? new Node(value) : null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }


  get(pointer) {

  }

  listNodes() {

  }
}

module.exports = LinkedList;
