'use strict';

function Note(object) {
  this.action = object.action;
  this.payload = object.payload
}

Note.prototype.execute = function() {
  if (this.action === '-a' || this.action === '--add') {
    this.add();
  }
}

Note.prototype.add = function() {
  let newNote = { id: 1, text: this.payload};
  console.log(newNote.text);
}

module.exports = Note;