'use strict';

var parseArgs = require('minimist');
const argv = require('minimist')(process.argv.slice(2));

let actualArgv = process.argv;

class Input {
  constructor(array) {
    this.action = array[2];
    this.payload = array[3];
  }

  valid() {
    if (this.action !== '-a' && this.action !== '--add') {
      console.log('please make valid command entry');
      return false;
    } else if (!this.payload) {
      console.log('please enter a valid note');
      return false;
    } else {
      console.log('true you win');
      return true;
    }
  }
}


module.exports = Input;

