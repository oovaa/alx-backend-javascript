const http = require('http');
const countStudents = require('./3-read_file_async');
// @ts-check

// Remove the declaration of the unused variable
const dbname = process.argv.length == 2 ? process.argv[1] : '';

let app = http.createServer((req, res) => {
  if (req.url == '/') {
    console.log('Hello Holberton School!');
    res.end();
  } else if (req.url == '/students') {
    console.log('This is the list of our students');
    countStudents(dbname);
    res.end();
  }
  res.statusCode = 200;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
});

app.listen(3000);

console.log('server is listining on port 3000');

module.exports = app;
