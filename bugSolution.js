const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World!');
    res.end(); // Added res.end() here
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end(); // Added res.end() here
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});