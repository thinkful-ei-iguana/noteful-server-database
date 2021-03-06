require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV, CLIENT_ORIGIN } = require('./config');
const foldersRouter = require('./Folders/Folders-Router');
const notesRouter = require('./Notes/Notes-Router');

const app = express();
app.use(cors());
app.use(morgan(NODE_ENV === 'production' ? 'tiny' : 'common'));
app.use(helmet());


app.use('/api/folders', foldersRouter);
app.use('/api/notes', notesRouter);

app.get('/', (req, res) => {
  res.send('Hello boilerplate!');
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
