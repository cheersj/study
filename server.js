// server.js
var express = require('express');
var path = require('path');

var app = module.exports = express();

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
  // Here we require the prerender middleware that will handle requests from Search Engine crawlers
  // We set the token only if we're using the Prerender.io service
  //app.use(require('prerender-node').set('prerenderToken', 'SzVrVatDuL87ys3qVWQR'));
  app.use(express.static(path.join(__dirname, '')));
};

// This will ensure that all routing is handed over to AngularJS
app.get('*', function(req, res){
    res.sendfile(__dirname);
});

app.listen(8888);
console.log("Go Prerender Go!");