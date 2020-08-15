#!/usr/bin/env node

console.log("\r\n \/$$$$$$$                                \/$$                    \r\n| $$__  $$                              |__\/                    \r\n| $$  \\ $$  \/$$$$$$   \/$$$$$$$ \/$$   \/$$ \/$$  \/$$$$$$$ \/$$   \/$$\r\n| $$  | $$ \/$$__  $$ \/$$_____\/| $$  | $$| $$ \/$$_____\/| $$  | $$\r\n| $$  | $$| $$  \\ $$| $$      | $$  | $$| $$|  $$$$$$ | $$  | $$\r\n| $$  | $$| $$  | $$| $$      | $$  | $$| $$ \\____  $$| $$  | $$\r\n| $$$$$$$\/|  $$$$$$\/|  $$$$$$$|  $$$$$$\/| $$ \/$$$$$$$\/|  $$$$$$$\r\n|_______\/  \\______\/  \\_______\/ \\______\/ |__\/|_______\/  \\____  $$\r\n                                                       \/$$  | $$\r\n                                                      |  $$$$$$\/\r\n                                                       \\______\/ \r\n")

var fs = require('fs')
var resolve = require('path').resolve
var join = require('path').join
var cp = require('child_process')
var os = require('os')

// get library path
var lib = resolve(__dirname, '../')

// npm binary based on OS
var npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm'

fs.readdirSync(lib)
  .forEach(function (mod) {
    var modPath = join(lib, mod)
    // ensure path has package.json
    if (!fs.existsSync(join(modPath, 'package.json'))) return

    if(mod == 'engine'){
        // Run Api
        cp.spawn(npmCmd, ['start'], { env: process.env, cwd: modPath, stdio: 'inherit' })
    }
    
    if(mod == 'web'){
        // Run Web
        cp.spawn('node', ['web.js'], {cwd: modPath, stdio: 'inherit' })

    }

})

