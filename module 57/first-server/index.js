const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('My first server');
});

app.get('/data', (req, res) => {
  res.send('My first server is changeeee');
});

app.listen(port, () => {
  console.log(`My first server is runnig: ${port}`);
});
