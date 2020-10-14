'use strict';

class Note {
  constructor(object) {
    this.action = object.action;
    this.payload = object.payload;
  }

  execute() {
    if (this.action === '-a' || this.action === '--add') {
      this.add();
    }
  }

  add() {
    let newNote = { id: 1, text: this.payload};
    console.log(newNote.text);
  }
}

module.exports = Note;