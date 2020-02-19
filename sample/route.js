const express = require('express');
const router = express.Router();
const sleep = require('../sleep')

// Handles calls to get the local time.
router.get('/', async (req, res) => {
  const start = new Date();
  console.log('entering /sample endpoint handler');
  await sleep(200);
  res.setHeader('Content-Type', 'application/json')
  const elapsed = new Date() - start;
  console.log(`/sample elapsed = ${elapsed} ms`)
  res.send({ 'message': 'This is a sample JSON response body.' });
});

module.exports = router;
