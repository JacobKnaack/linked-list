# JS Linked List

![build passing](https://travis-ci.com/JacobKnaack/linked-list.svg?branch=master)

Node library for creating and manipulating linked list data structures.

## Installation

Available on NPM

```bash
npm install @nohat/js-linked-list
```

## Usage

Import package

```js
const LinkedList = require('@nohat/js-linked-list');
```
or common js
```js
import LinkedList from '@nohat/js-linked-list';
```

Use class methods to manipulate lists

```js
const List = new LinkedList();

List.insert('My First Node');

const index0 = List.get({ index: 0 });
```

