'use strict';

const Input = require('../lib/input.js');

describe('Tests validity of users entry', () => {
  test('It should return true when a valid entry is made', () => {
    let test1 = new Input([0, 1, '-a', 'This is a valid string'])
    expect(test1.valid()).toStrictEqual(true);
    let test2 = new Input([0, 1, '--add', 'This is a valid string'])
    expect(test2.valid()).toStrictEqual(true);
  })
    test('When user entry is valid it should create a new instance of note with an action and a payload property', () => {
      let test5 = new Input([0, 1, '-a', 'test passed'])
      expect(test5.action).toStrictEqual('-a');
      expect(test5.payload).toStrictEqual('test passed')
    })
  
  test('It should return false when an invalid entry is made', () => {
    let test3 = new Input(['-b', 'This is an invalid string'])
    expect(test3.valid()).toStrictEqual(false);
    let test4 = new Input(['--anything', 'This is an invalid string'])
    expect(test4.valid()).toStrictEqual(false);
  })
})
