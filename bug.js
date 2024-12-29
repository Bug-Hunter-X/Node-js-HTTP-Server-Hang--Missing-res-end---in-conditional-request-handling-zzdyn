const http = require('http');

const server = http.createServer((req, res) => {
  // The error is here: Missing a call to res.end() in some cases
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    // Missing res.end() here. If this branch is executed without res.end(), the client will hang.
    res.write('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});