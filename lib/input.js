'use strict';

var parseArgs = require('minimist');
const argv = require('minimist')(process.argv.slice(2));

let actualArgv = process.argv;

class Input {
  constructor(array) {
    this.action = array[2];
    this.payload = array[3];
    this.category = array[5];
  }

  valid() {
    if (this.action !== '-a' && this.action !== '--add' && this.action !== '-d' && this.action !== '--delete' && this.action !== '--list') {
      console.log('please enter a valid command');
      return false;
    } else if (!this.payload) {
      console.log('please enter a valid note');
      return false;
    } else {
      return true;
    }
  }
}


module.exports = Input;

