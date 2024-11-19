const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('Hello, this is the home page!');
});

router.get('/about', (req, res) => {
  res.send('Hello, this is the about page!');
});

module.exports = router;