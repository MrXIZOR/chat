var data;
var http = require('http');
var fs = require('fs');
var chat = require('./chat');
http.createServer(function(req, res) {
    switch(req.url) {
        case '/publish':
            var body = '';
            req.on('readable', function() {
                data = req.read();
                if(data) {
                    body += data;
                }
            }).on('end', function() {
                body = JSON.parse(body);
                chat.publish(body.message);
            });
            break;
        case '/subscribe':
            chat.subscribe(req, res);
            break;
        case '/':
            var file = fs.readFileSync('./index.html');
            res.end(file);
    }
}).listen(3000);
