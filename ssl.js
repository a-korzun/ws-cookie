const fs = require('fs');

const key = fs.readFileSync('./cert.key');
const cert = fs.readFileSync('./cert.pem');

module.exports = { key, cert };
