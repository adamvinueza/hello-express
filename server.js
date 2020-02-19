const express = require('express');
const sample = require('./sample/route');
const sleep = require('./sleep');
const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
  const start = new Date();
  console.log('entering / endpoint handler');
  await sleep(100);
  const elapsed = new Date() - start;
  console.log(`/ elapsed = ${elapsed} ms`)
  res.send('Hello, from Express!');
});

app.use('/sample', sample)

const server = app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

module.exports = server;
