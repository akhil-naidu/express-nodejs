const express = require('express');

const router = express.Router();

const users = [{ name: 'Ankur', age: 25 }];

router.get('/', (req, res) => {
  res.json({ api: 'working' });
});

router.post('/', (req, res) => {
  const logic = true;

  const { name, age } = req.body;

  const newUser = { name, age };
  users.push(newUser);

  if (logic) {
    res.send({ message: 'success', users: users });
  } else {
    res.status(400).send({ message: 'error' });
  }
});

module.exports = router;
