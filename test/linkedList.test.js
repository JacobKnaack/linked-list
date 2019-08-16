'use strict';

const LinkedList = require('../');

describe('testing the linked list module', () => {
  test('Module produces a linked list', () => {
    const List = new LinkedList(1);
    expect(List.head).exists;
    expect(List.head.data).exists;
    expect(List.head.next).exists;
    expect(typeof List.head).toBe('object');
  });

  test('Module can insert nodes', () => {
    const List = new LinkedList();
    expect(List.insert(200).data).toEqual(200);
    expect(List.insert(1).data).toEqual(1);
    expect(typeof List.head.next).toBe('object');
    expect(typeof List.head.next.previous).toBe('object');
  });

  test('Module can select an index if it exists', () => {
    const List = new LinkedList(1);
    expect(List.get(0)).toEqual(1);
    expect(List.get(1)).toBe(undefined);
  });

  test('Module can remove nodes', () => {
    const List = new LinkedList(1);
    expect(List.remove(1)).toEqual({ data: 1, next: null, previous: null });
    expect(List).toEqual({ head: null });
  })
});
