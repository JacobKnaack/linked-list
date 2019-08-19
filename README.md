# Linked List

![build passing](https://travis-ci.com/JacobKnaack/linked-list.svg?branch=master)

Node library for creating and manipulating linked list data structures.

## Installation

Currently only available as a local node module.

Get source code using git

```bash
git clone https://github.com/JacobKnaack/linked-list.git
```

Install using node

```bash
npm install
```

## Usage

Import from source code

```js
const LinkedList = require('path/to/linked-list');
```
or common js
```js
import LinkedList from 'path/to/linked-list';
```

Use class methods to manipulate lists

```js
const List = new LinkedList();

List.insert('My First Node');

const index0 = List.get({ index: 0 });

```