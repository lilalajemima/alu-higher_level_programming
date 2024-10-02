#!/usr/bin/node
// this script displays the status code of a GET request
const request = require('request');
const myArgs = process.argv.slice(2);
request(myArgs[0], function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('code: ' + response.statusCode);
  }
});