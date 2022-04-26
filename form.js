var url = require('url');
var http = require('http');
var adr = 'https://jackie-egidio.github.io/stock_ticker/';
var q = url.parse(adr, true);

console.log(q.host); 
console.log(q.pathname); 

http.createServer(function (req, res) {
    console.log("in createServer");
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    var qobj = url.parse(req.url, true).query;
    var c_or_t = qobj.c_or_t;
    var comp_or_tick = qobj.com_or_tick_input;
    
    res.write(comp_or_tick);
    res.write(c_or_t);

    var MongoClient = require('mongodb').MongoClient;
    url = "mongodb+srv://dummy_user_2:Dajhlfhdalkfdkal@cluster0.uinkd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    // Connect to the db
    // MongoClient.connect(url, function (err, db) {
    //     console.log("connected successfully");
    //     if(err) throw err;

    //     database = db.db("stock_ticker");
    //     collection = database.collection("companies");

    //     // database find code
    //     if (c_or_t == "Company") {
    //       res.write(collection.find( { company: comp_or_tick } ));
    //     } else {
    //       res.write(collection.find( { ticker: comp_or_tick } ));
    //     }
    //     console.log("queried successfully");
    // });
}).listen(8080);

// var q = url.parse(req.url, true).query;
//   var filename = "." + q.pathname;
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     } 
//     res.writeHead(200, {'Content-Type': 'text/html'});
      
//     var element = q.;
//     res.write("hello");
//     return res.end();
