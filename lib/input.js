'use strict';

var parseArgs = require('minimist');
const argv = require('minimist')(process.argv.slice(2));

let actualArgv = process.argv;

function validateEntry(arg) {
  if (arg[2] !== '-a' && arg[2] !== '--add') {
    console.log('please make valid command entry');
  } else if (!arg[3]) {
    console.log('please enter a valid note');
  } else {
    return new Note(arg);
  }
}

function Note(array) {
  this.action = array[2];
  this.payload = array[3];
}


// validateEntry(actualArgv);

// console.log(actualArgv);
// console.log(argv);

//validateEntry(actualArgv);

module.exports = validateEntry;

