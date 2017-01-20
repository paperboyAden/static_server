var express = require('express');
var server = express();

var port = 8080; //think of it as the door number to the server

server.get('/', function(request, response){
   response.sendFile('index.html', {root: __dirname + '/public/html'});

});
server.listen(port, function(){
console.log('Now listening on port', port);
});
