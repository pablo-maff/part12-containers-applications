const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config()
const middleware = require('./util/middleware')

const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');
const testingRouter = require('./routes/testing');

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/todos', todosRouter);

if (process.env.NODE_ENV === 'test') {
  app.use('/testing', testingRouter)
}

app.use(middleware.unknownEndpoint)

module.exports = app;
