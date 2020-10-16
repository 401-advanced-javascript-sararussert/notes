require('mongoose');
const NoteModel = require('./notes-schema.js');



class NoteActions {
  constructor() {
    this.model = NoteModel;
  }

  read(categoryName) {
      this.model.find({category: categoryName}).then(info => console.log(info));
  }

  create(note) {
    let newNote = new this.model({
      text: note.payload,
      category: note.category
    });
    return newNote.save()
      .then(info => console.log('note saved: ' + info.text))
  }

  update() {
    // no requirement for this function
  }

  delete(id) {
    this.model.deleteOne({ _id: id}, function (err) {});
  }
}


module.exports = NoteActions;
