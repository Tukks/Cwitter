
// We need to use the express framework: have a real web servler that knows how to send mime types etc.
var express=require('express');

// Init globals variables for each module required
var app = express()
    , http = require('http')
    , server = http.createServer(app)
    , io = require('socket.io').listen(server);

// launch the http server on given port
server.listen(8080);

// Indicate where static files are located. Without this, no external js file, no css...
app.use(express.static(__dirname + '/'));

// routing
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/follower.html');
});/**
 * Created by giuse_000 on 19/11/2014.
 */
