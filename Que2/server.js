const http = require('http');
const fs = require('fs');
const port = 2020; 

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      
      fs.readFile('gethello.html', 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    } else if (req.url === '/gethello') {
      
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello NodeJS!!');
    } else {
      
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  } else {
    
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});


server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
