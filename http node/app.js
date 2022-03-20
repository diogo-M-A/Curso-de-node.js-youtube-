var http = require('http');
http.createServer(function(req, res){
    res.end('Hi everyone! this is my node server');
}).listen(8081);

console.log('server rodando');
