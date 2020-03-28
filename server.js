
var express = require("express");

var app = express();

app.use(express.static('public'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/pages', express.static(__dirname + '/public/pages'));
app.use('/img', express.static(__dirname + '/public/img'));

var server = app.listen(9005, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
