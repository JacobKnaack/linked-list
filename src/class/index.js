'use strict';

const path = require('path');
const fs = require('fs');

const classes = {};

fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf('.') && file !== path.basename(module.filename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    let constructor = require(`./${file}`);
    classes[path.parse(file).name] = constructor;
  });

module.exports = classes;