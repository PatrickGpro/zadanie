const express = require('express');
const cors = require('cors');
const { Client } = require('ssh2');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/delay', (req, res) => {
  const conn = new Client();
  const startTime = Date.now();

  conn.on('ready', () => {
    console.log('SSH Connection Established');
    conn.exec('ping -c 1 10.40.50.2', (err, stream) => {
      if (err) {
        res.status(500).json({ error: 'SSH Command Failed', details: err.message });
        conn.end();
        return;
      }

      let output = '';
      stream.on('data', (data) => {
        output += data.toString();
      });

      stream.on('close', () => {
        const endTime = Date.now();
        const elapsed = endTime - startTime;
        res.json({
          message: `Ping output: ${output}`,
          serverTime: `${elapsed} ms`
        });
        conn.end();
      });
    });
  }).connect({
    host: '10.40.50.2',
    username: 'uczen',
    password: 'uczenpti'
  });

  conn.on('error', (err) => {
    res.status(500).json({ error: 'SSH Connection Failed', details: err.message });
  });
});

app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});
