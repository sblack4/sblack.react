// content of index.js
const http = require('http')  
const port = 8080

const requestHandler = (request, response) => {  
   var body = '';
   request.on('data', function(data) {
      body += data;
   });
   request.on('end', function() {
      // Data received completely.
      console.log(body);
   });

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end()
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})