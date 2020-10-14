'use strict';

const Note = require('../lib/notes.js');
const spy = jest.spyOn(console, 'log').mockImplementation()

describe('Tests for executing a valid object and adding a note to the console', () => {
  beforeEach(() => {
    spy.mockClear()
  })
  test('It should not log to console when the object is false', () => {
    let testNote1 = new Note({action: 'a', payload: 'this will not work!'});
    testNote1.execute();
    expect(console.log).toBeCalledTimes(0);
  })
  test('If object is valid console.log the text from the note', () => {
    let testNote2 = new Note({action: '-a', payload: 'this will work!'});
    testNote2.execute();
    expect(console.log).toBeCalledTimes(1);
  })
})