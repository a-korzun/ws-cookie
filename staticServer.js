// @ts-check

const express = require('express');
const https = require('https');
const { key, cert } = require('./ssl');

const PORT = 3001;
const COOKIE_NAME = 'X-Access-Token';

const app = express();
const server = https.createServer({ key, cert }, app);

app.use(express.static('public'));

app.use(function (req, res, next) {
  if (!req.cookies || !req.cookies[COOKIE_NAME]) {
    res.cookie(COOKIE_NAME, 'foo', { maxAge: 900000, httpOnly: true, sameSite: false, secure: false, path: '/' });
    return next();
  }

  next();
});

app.get('/auth', (req, res) => {
  res.send('Hello World!');
});

server.listen(PORT, () => { console.log(`static listening on ${PORT}`) });