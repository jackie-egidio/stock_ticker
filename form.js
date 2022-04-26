var url = require('url');
var http = require('http');
var fs = require('fs');
var adr = 'https://jackie-egidio.github.io/stock_ticker/';
var q = url.parse(adr, true);

console.log(q.host); 
console.log(q.pathname); 

http.createServer(function (req, res) {
    console.log("in createServer");
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("hello");
    return res.end();
  });
}).listen(8080);
