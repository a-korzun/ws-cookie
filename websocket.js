// @ts-check

const express = require('express');
const cors = require('cors');
const WS = require('ws');
const https = require('https');
const { key, cert } = require('./ssl');

const PORT = 8080;

const app = express();
app.use(cors({
  preflightContinue: true,
  credentials: true,
}));

const server = https.createServer({ key, cert }, app);

const wss = new WS.Server({ server });

wss.on('connection', function connection(ws, req) {
  const cookie = req.headers['cookie'];

  console.log('cookies recieved: ', cookie);
});

app.get('/', (req, res) => {
  console.log(req.headers);
});

server.listen(PORT, () => { console.log(`ws listening on ${PORT}`) });
