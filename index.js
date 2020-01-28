
let http = require('http')
http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Content-Type', 'application/json');
    let resp;
    req.on('data', function(chunk){
        resp = String(chunk);
        resp = JSON.parse(resp);
    }).on('end', function() {
        res.end(resp);
    });
}).listen(3000, '127.0.0.1', () => console.log('Server is listening on port:' + 3000));