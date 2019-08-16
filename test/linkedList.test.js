'use strict';

const LinkedList = require('../');

describe('testing the linked list module', () => {
  test('module produces a linked list', () => {
    const List = new LinkedList(1);
    expect(typeof List).toBe('object');
    expect(typeof List.head).toBe('object');
  });

  // test('module can add nodes to an existing Linked List', () => {
  //   const List = new LinkedList()
  // });
});
