const http = require('http');
const fs = require('fs')
const port = 3000;

const requestHandler = (request, response) => {
  fs.writeFileSync('world.txt', 'Hello to this great world', 'utf8');
  response.end();
}

const server = http.createServer(requestHandler);

server.listen(port, (err) =>{
  if(err) {
    return console.log(`You have an error:  ${err}`);
  }


  console.log(`server is listening on ${port}`);
});
