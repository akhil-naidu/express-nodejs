const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ user: 'Akhil', age: 26 });
});

router.get('/new', (req, res) => {
  res.render('index', { title: 'User Form' });
});

module.exports = router;
