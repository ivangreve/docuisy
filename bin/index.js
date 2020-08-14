#!/usr/bin/env node
//var api = require('./docuisy_api')

var params = process.argv
var docuisyPath = params[1].split('bin')[0]
var enginePath = docuisyPath + 'engine'
var webPath = docuisyPath + 'web'
console.log(webPath)

console.log("Iniciando...")
var exec = require('child_process').exec



var fs = require('fs')
var resolve = require('path').resolve
var join = require('path').join
var cp = require('child_process')
var os = require('os')

// get library path
var lib = resolve(__dirname, '../')

// npm binary based on OS
var npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm'

// install http-server globally
//cp.spawn(npmCmd, ['i', '-g', 'http-server' ], { stdio: 'inherit' })

fs.readdirSync(lib)
  .forEach(function (mod) {
    var modPath = join(lib, mod)
    // ensure path has package.json
    if (!fs.existsSync(join(modPath, 'package.json'))) return

    // install folder
    if(mod == 'engine'){
        //cp.spawn(npmCmd, ['i'], { env: process.env, cwd: modPath, stdio: 'inherit' })
        cp.spawn(npmCmd, ['start'], { env: process.env, cwd: modPath, stdio: 'inherit' })
    }
    
    if(mod == 'web'){
        // Run web
        cp.spawn('node', ['web.js'], {cwd: modPath, stdio: 'inherit' })

    }

})

