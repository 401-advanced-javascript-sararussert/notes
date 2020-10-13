'use strict';

require('dotenv').config();
const express = require('express');
const validateEntry = require('./lib/input.js');
const Note = require('./lib/notes.js');


const app = express();
let actualArgv = process.argv;
let validNote = validateEntry(actualArgv);
let object = new Note(validNote);
object.execute();



// app.get('/status', (request, response) => {
//   const currentStatus = status(request);
//   response.status(200).json(currentStatus);
// });




app.listen(process.env.PORT, () => console.log('server up') );