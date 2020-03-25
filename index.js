const express = require('express');
const WS = require('ws');

const port = 3000;
const COOKIE_NAME = 'X-Access-Token';

const app = express();

app.use(express.static('public'));

app.use(function (req, res, next) {
  if (!req.cookies || !req.cookies[COOKIE_NAME]) {
    res.cookie(COOKIE_NAME, 'kek', { maxAge: 900000, httpOnly: true });
    return next();
  }

  next();
});

app.get('/auth', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const wss = new WS.Server({ port: 8080 });

wss.on('connection', function connection(ws, req) {
  const cookie = req.headers['cookie'];

  console.log('cookie recieved', cookie);
});