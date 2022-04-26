var url = require('url');
var http = require('http');
var fs = require('fs');
var adr = 'https://jackie-egidio.github.io/stock_ticker/';
var q = url.parse(adr, true);

// var sqlite3 = require('sqlite3').verbose();
// var express = require('express');
// var http = require('http');
// var path = require("path");
// var bodyParser = require('body-parser');
// var helmet = require('helmet');
// var rateLimit = require("express-rate-limit");

console.log(q.host); 
console.log(q.pathname); 

http.createServer(function (req, res) {
    console.log("in createServer");
    
    var qobj = url.parse(req.url, true).query;
    var c_or_t = qobj.c_or_t;
//     var input.qobj.input;
    res.write(c_or_t);
//   var q = url.parse(req.url, true).query;
//   var filename = "." + q.pathname;
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     } 
//     res.writeHead(200, {'Content-Type': 'text/html'});
      
//     var element = q.;
//     res.write("hello");
//     return res.end();
}).listen(8080);
