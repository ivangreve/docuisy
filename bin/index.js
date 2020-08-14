#!/usr/bin/env node

var params = process.argv
console.log(params)
var exec = require('child_process').exec

var server = exec('cd engine && node server.js',
  function(err, stdout, stderr) {
    if (err) throw err;
    else console.log("Server...");
});

var web = exec('cd web && npm run serve',
  function(err, stdout, stderr) {
    if (err) throw err;
    else console.log("Web...");
});
