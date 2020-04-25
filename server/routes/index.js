const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send('Express working!');
});

router.get('/api', (req, res, next) => {
  res.status(200).send({ data: "I love the new React AWESOME!!!" });
});

module.exports = router;
