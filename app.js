const http = require('http');

const sever = http.createServer((req,res) => {
    res.write('<h1>Hello world</h1>');
    res.end();
});
sever.listen(8080, 'localhost');
