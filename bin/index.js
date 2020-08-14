#!/usr/bin/env node
//var api = require('./docuisy_api')

var params = process.argv
var docuisyPath = params[1].split('bin')[0]
var enginePath = docuisyPath + 'node_modules/docuisy_api'
var webPath = docuisyPath + 'node_modules/docuisy_web'
console.log(webPath)

console.log("Iniciando...")
var exec = require('child_process').exec

var server = exec('cd ' + enginePath + ' && node server.js',
  function(err, stdout, stderr) {
    if (err) throw err;
    else console.log("Server...");
});

var web = exec('cd ' + webPath + ' && npm run serve',
  function(err, stdout, stderr) {
    if (err) throw err;
    console.log(stout);
});
