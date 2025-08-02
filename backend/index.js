const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 5000;

app.use(cors());

function getData() {
  return JSON.parse(fs.readFileSync(__dirname + '/data.json', 'utf-8'));
}

app.get('/api/user', (req, res) => {
  const data = getData();
  res.json(data.user);
});

app.get('/api/leaderboard', (req, res) => {
  const data = getData();
  res.json(data.leaderboard);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});