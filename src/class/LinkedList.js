'use strict';

const Node = require('./Node');

class LinkedList {
  constructor(args) {
    this.head = args ? new Node(args.data) : null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return this.head;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
      current.next.previous = current;
      return current.next;
    }
  }


  get(index) {
    if (index > -1) {
      let current = this.head;
      let i = 0;
      while ((current !== null) && (i < index)) {
        current = current.next;
        i++;
      }
      return current !== null ? current.data : undefined;
    } else {
      return undefined;
    }
  }

  traverse() {
    let current = this.head;
    let result = {};
    while (current !== null) {
      current = current.next;
      result[current.data] = current;
    }

    return result;
  }

  includes(value) {
    let current = this.head;
    while (current !== null) {
      current = current.next;
      if (current.data) {
        return current;
      }
    }

    return undefined;
  }

  remove(value) {
    let current = this.head;
    while (current !== null) {
      if (current.data === value) {
        this.head = current.next;
        return current;
      }
    }

    return undefined;
  }
}

module.exports = LinkedList;