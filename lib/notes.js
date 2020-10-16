'use strict';

const NoteActions = require('./model/notes-collection.js')
let runFunction = new NoteActions();
const mongoose = require('mongoose');


class Note {
  constructor(object) {
    this.action = object.action;
    this.payload = object.payload;
    this.category = object.category;
  }

  execute() {
    if (this.action === '-a' || this.action === '--add') {
      console.log('trying to add');
      this.add();
    } else if (this.action === '--delete') {
      console.log('trying to delete');
      this.delete();
    } else if (this.action === '--list') {
      console.log('trying to list');
      this.list();
    }
  }

  add() {
    return runFunction.create(this)
  }

  list() {
    return runFunction.read(this.payload);
  }

  delete() {
    return runFunction.delete(this.payload)
  }
}

module.exports = Note;