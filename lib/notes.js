'use strict';

const NoteModel = require('./model/notes-schema.js');
const mongoose = require('mongoose');
const { db } = require('./model/notes-schema.js');

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
      this.delete();
    } else if (this.action === '--list') {
      this.list();
    }
  }

  add() {
    const newNote = new NoteModel({
      text: this.payload,
      category: this.category,
    });

    newNote.save()
      .then(note => {
        console.log('note saved: ' + note.text);
      })
      .catch(console.log);
  }

  list() {
    NoteModel.find({})
      .then(info => console.log(info))
  }

  delete() {
    NoteModel.findByIdAndDelete(this.payload);
  }
}

module.exports = Note;