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


  get(args) {
    let current = this.head;
    if (Object.keys(args).includes('index')) {
      if (args.index > -1) {
        let i = 0;
        while ((current !== null) && (i < args.index)) {
          current = current.next;
          i++;
        }
        return current !== null ? current : undefined;
      } else {
        return undefined;
      }
    }

    if (args.data) {
      while (current !== null) {
        if (current.data === args.data) {
          return current;
        }
        current = current.next;
      }

      return undefined;
    }
  }

  traverse(callback) {
    let current = this.head;
    let result = [];
    while (current !== null) {
      result.push({
        data: current.data,
        next: current.next,
        previous: current.previous,
      });
      if (typeof callback === 'function') callback(current);
      current = current.next;
    }

    return result;
  }

  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  /**
   * Mutates the current list and shuffles the order of list items
   */

  shuffle() {
    let current = this.head;
    const list1 = [];
    const list2 = [];
    const result = [];

    // splits list nodes into two arrays
    while (current !== null) {
      if (list2.length > list1.length) {
        list1.push(current.data);
      } else {
        list2.push(current.data);
      }
      current = current.next;
    }

    // Create array of shuffled nodes;
    while (list1.length !== 0 || list2.length !== 0) {
      const flip = (Math.floor(Math.random() * 2) == 0);
      let first = undefined;
      let second = undefined;

      if (list1.length) first = new Node(list1[0]);
      if (list2.length) second = new Node(list2[0]);

      if (flip && first && second) {
        result.push.apply(result, [first, second]);
      } else if (!flip && first && second) {
        result.push.apply(result, [second, first]);
      } else {
        if (first) result.push(first);
        if (second) result.push(second);
      }

      if (list1.length) list1.shift();
      if (list2.length) list2.shift();
    }

    // convert array into new linked list values;
    result.forEach((node, i, arr) => {
      if (arr[i + 1] && !arr[i - 1]) {
        node.next = arr[i + 1];
      } else if (arr[i + 1] && arr[i - 1]) {
        node.next = arr[i + 1];
        node.previous = arr[i - 1];
      } else {
        node.previous = arr[i - 1];
      }
    });
    this.head = result[0];

    return this;
  }

  reverse() {
    let current = this.head;
    let tmp = null;
    while (current) {
      tmp = current.previous;
      current.previous = current.next;
      current.next = tmp;
      current = current.previous;
    }

    if (tmp !== null) {
      this.head = tmp.previous;
    }
    return this;
  }

  remove(value) {
    let removed;
    if (this.head.data === value) {
      removed = Object.assign({}, this.head);
      delete this.head;
      this.head = this.head.next;
      return removed;
    }

    let current = this.head;
    while (current !== null) {
      if (current.next.data === value) {
        removed = Object.assign({}, current.next);
        let next = current.next.next;
        delete current.next;
        current.next = next;
        current.next.previous = current;
        return removed;
      }
      current = current.next;
    }

    return undefined;
  }
}

module.exports = LinkedList;