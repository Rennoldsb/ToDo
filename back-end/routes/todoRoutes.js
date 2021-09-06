var express = require('express');
var router = express.Router();
const User = require('../models/user');

router.get('/todo', (req, res) => {
  User.findOne({ username: req.user.username }, (e, data) => {
    res.json(data.todos);
  });
});

router.post('/todo', async (req, res) => {
  User.findOne({ username: req.user.username }).then((user) => {
    id_num = user.todos.length;
    user.todos.push({ task: req.body.task, refID: id_num });
    user.save().then(res.send('Task Updated'));
  });
});

module.exports = router;
