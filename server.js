const http = require('http')
const url = require('url')
http.createServer((req, res) => {
    console.log(req.method, req.url);

    res.sendFile(__dirname + '/index.html')
}).listen(8080, 'localhost')