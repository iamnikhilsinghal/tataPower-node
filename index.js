let http = require('http');                             // to import and module
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});    // set headers
  res.end('Hello World!');                              // ui content
}).listen(8080);                                        //port

// req- get some request from broswer
// res- send some response to broswer