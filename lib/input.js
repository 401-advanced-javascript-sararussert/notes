'use strict';

var parseArgs = require('minimist');
const argv = require('minimist')(process.argv.slice(2));

let actualArgv = process.argv;
let commandArray = ['-a', '--add', '--delete', '--list'];
class Input {
  constructor(array) {
    this.action = array[2];
    this.payload = array[3];
    this.category = array[5];
  }
  
  valid() {
    if (!commandArray.includes(this.action)) {
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

