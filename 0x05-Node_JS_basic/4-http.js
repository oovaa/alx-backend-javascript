var http = require('http');
http
  .createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello Holberton School!');
    response.statusCode = 200;
  })
  .listen(1245);

console.log('Server running at http://127.0.0.1:1245/');
