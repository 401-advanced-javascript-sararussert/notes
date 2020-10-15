'use strict';

require('dotenv').config();
const express = require('express');
const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');
const mongoose = require('mongoose');


const app = express();
mongoose.connect('mongodb://localhost:27017/notesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('we are connected to mongo');
  })
  .catch(err => console.error(err))


let actualArgv = process.argv;
let validNote = new Input(actualArgv);
if (validNote.valid() === true) {
  let object = new Note(validNote);
  object.execute();
} else {
  console.log('Please enter a valid command');
}



app.get('/status', (request, response) => {
  const currentStatus = status(request);
  response.status(200).json(currentStatus); 
});


