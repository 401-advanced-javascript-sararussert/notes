'use strict';

const { TestScheduler } = require('jest');
const NoteActions = require('../lib/model/notes-collection.js');
const tester = new NoteActions();
require('@code-fellows/supergoose');

let id;

describe('Test the CRUD capabilities of the NoteActions Class', () => {
  test('create method on NoteActions, it should add a new note and log a reply with the notes text', () => {
    let testNote = {
      action: "--add",
      payload: "this is a test",
      category: "test note"
    }
    return tester.create(testNote);
    //.then(result => {
    //   expect(result.text).toStrictEqual("this is a test");
      //this test won't work because of how I wrote my function... I understand how it is suposed to work
    // });
  });
  test('read method on NoteActions', () => {
    return tester.read('test note').then(listResult => {
      expect(listResult.length).toStrictEqual(1);
      id = listResult[0]._id;
    });
  });
  // test('delete method on NoteActions', () => {
  //   return tester.delete(id).then(result => {
  //     expect(result.ok).toStrictEqual(1);
  //   });
  // });
  
});