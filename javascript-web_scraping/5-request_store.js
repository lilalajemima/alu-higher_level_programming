#!/usr/bin/node
// this script saves the content of a webpage into a file
const request = require('request');
const fs = require('fs');
const myArgs = process.argv.slice(2);
request(myArgs[0], function (err, response, body) {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(myArgs[1], body, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
});