var StaticServer = require('static-server');
var BgGreen = "\x1b[42m"

var server = new StaticServer({
  rootPath: './dist',            // required, the root of the server file tree
  port: 8888,               // required, the port to listen
  cors: '*',                // optional, defaults to undefined
  followSymlink: true,      // optional, defaults to a 404 error
  templates: {
    index: 'index.html',      // optional, defaults to 'index.html'
    notFound: '404.html'    // optional, defaults to undefined
  }
});
 
server.start(function () {
  console.log("Docuisy UI Ready!")
  console.log('\x1b[42m%s\x1b[0m', 'UI: localhost:' + server.port);
});
 
server.on('request', function (req, res) {
  // req.path is the URL resource (file name) from server.rootPath
  // req.elapsedTime returns a string of the request's elapsed time
});
 
server.on('symbolicLink', function (link, file) {
  // link is the source of the reference
  // file is the link reference
  console.log('File', link, 'is a link to', file);
});
 
server.on('response', function (req, res, err, file, stat) {
  // res.status is the response status sent to the client
  // res.headers are the headers sent
  // err is any error message thrown
  // file the file being served (may be null)
  // stat the stat of the file being served (is null if file is null)
 
  // NOTE: the response has already been sent at this point
});




// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/', function(req, res){
// res.sendfile('./dist/index.html');
// });

// io.on('connection', function(socket){
// console.log('a user connected');
// });

// http.listen(8080, function(){
// console.log('listening on *:8080');
// });