'use strict';

const LinkedList = require('../');

describe('Testing the linked list module', () => {
  describe('Module produces a linked list', () => {
    const List = new LinkedList({ data: 1 });
    it('Can produce default Nodes', () => {
      expect(List.head).exists;
      expect(List.head.data).exists;
      expect(List.head.next).exists;
      expect(typeof List.head).toBe('object');
    });
  });

  describe('Module can insert nodes', () => {
    const List = new LinkedList();
    it('Can insert nodes', () => {
      expect(List.insert(200).data).toEqual(200);
      expect(List.insert(1).data).toEqual(1);
    });
    it('Can properly add next values', () => {
      expect(typeof List.head.next).toBe('object');
      expect(List.head.next.data).toEqual(1);
    });
    it('Can properly add previous values', () => {
      expect(typeof List.head.next.previous).toBe('object');
      expect(List.head.next.previous.data).toEqual(200);
    });
  });

  describe('Module can select Nodes', () => {
    const List = new LinkedList({ data: 1 });
    it('Can can select by index', () => {
      expect(List.get({ index: 0 }).data).toEqual(1);
      expect(List.get({ index: 1 })).toBe(undefined);
    });
    it('Can select by data value', () => {
      expect(List.get({ data: 1 }).data).toEqual(1);
      expect(List.get({ data: 'wrong' })).toEqual(undefined);
    });
  });

  describe('Module can determine if a value is present', () => {
    const List = new LinkedList({ data: 'string data' });
    it('Returns the node id its found', () => {
      expect(List.includes('string data')).toEqual(true);
      expect(List.includes(1)).toEqual(false);
    });
  });

  describe("Module can traverse itself", () => {
    const List = new LinkedList();
    for (let i = 1; i <= 5; i++) {
      List.insert(i);
    };
    it('Has correct list head and length', () => {
      const traversal = List.traverse();
      expect(traversal.length).toEqual(5);
      expect(traversal[0]).toEqual(List.head);
    });
  });

  describe("Module can shuffle the order of List Items", () => {
    const List = new LinkedList();
    const compare = new LinkedList();
    for (let i = 1; i <= 11; i++) {
      List.insert(i);
      compare.insert(i);
    };

    it('changes node order', () => {
      expect(List.shuffle().shuffle().traverse()).not.toEqual(compare.traverse());
    });
  });

  describe('Module can reverse itself', () => {
    it('Can return the list in reverse order', () => {
      const list = new LinkedList();
      for (let x = 1; x <= 5; x++) {
        list.insert(x);
      }

      // expect list to have values 1 through 5
      expect(list.head.data).toEqual(1);
      expect(list.head.next.data).toEqual(2);
      list.reverse();

      // list should contain reversed values
      expect(list.head.data).toEqual(5);
      expect(list.tail.data).toEqual(1);
    })
  })

  describe('Module can remove nodes', () => {
    it('Removed Node is not present in List', () => {
      const List = new LinkedList();
      for (let i = 1; i <= 5; i++) {
        List.insert(i);
      }
      expect(List.remove(2).data).toEqual(2);
      expect(List.head.next.data).toEqual(3);
      expect(List.head.next.previous).toEqual(List.head);
      expect(List.traverse().length).toEqual(4);
    });
  });

  describe('Module can insert before', () => {
    it('Inserts before a value', () => {
      const list = new LinkedList();
      list.insert(2);
      list.insert(4);
      list.insert(3);
      list.insertBefore(3, 1)
      expect(list.head.next.next.data).toBe(1);
      expect(list.tail.data).toBe(3);
    });
  });

  describe('Module can insert after', () => {
    it('Inserts after a given value', () => {
      const list = new LinkedList();
      list.insert(1);
      list.insert(3);
      list.insertAfter(3, 4);
      list.insertAfter(4, 5);
      list.insertAfter(1, 2);
      expect(list.head.data).toBe(1);
      expect(list.head.next.data).toBe(2);
      expect(list.head.next.next.next.data).toBe(4);
      expect(list.head.next.next.next.next.data).toBe(5);
    });
  });

  describe('Module can find a node by position from the end', () => {
    it('returns a node or null', () => {
      const list = new LinkedList();
      list.insert(1);
      list.insert(3);
      list.insert(5);
      expect(list.kthFromEnd(4)).toBe(null);
      expect(list.kthFromEnd(2)).toBe(1);
    })
  })
});
