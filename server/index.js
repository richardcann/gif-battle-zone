/* eslint consistent-return:0 */

const express = require('express');
const request = require('request');
const cors = require('cors');
const logger = require('./util//logger');

const argv = require('./util/argv');
const port = require('./util//port');
const setup = require('./middlewares/frontendMiddleware');
const { resolve } = require('path');

const app = express();

// enable cors
const corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};
app.use(cors(corsOption));

// getting twitter trends in london
app.get('/twitter_trends', (req, res) => {
  request.get({
    url:`https://api.twitter.com/1.1/trends/place.json?id=44418`,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `OAuth oauth_consumer_key="cDZT2V1kG05HWdcz3UbwlBfUk",oauth_token="604858048-61eSfrcP0KkfMPXo1sCPI1Nme3z1ZAOuMkZlL6Id",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1542876569",oauth_nonce="BoPWHNWFMyM",oauth_version="1.0",oauth_signature="aFajkcTbREZdckh%2FTB3M7mx%2FbdE%3D"`
    },
  }, (err, r, body) => {
    if (err) {
      return res.send(500, { message: err.message });
    }
    res.send(body);
  });
});

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }
  logger.appStarted(port, prettyHost);
});
