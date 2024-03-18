const http = require('http');
const addUser = require('./users');

// Create server

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('addUser');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});