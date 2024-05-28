const express = require('express');
const router = express.Router();
const { Todo } = require('../mongo');

router.post('/reset', async (_, res) => {
  await Todo.deleteMany({})

  res.sendStatus(204).end()
})

module.exports = router;
