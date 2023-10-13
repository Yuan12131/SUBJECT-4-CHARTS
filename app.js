const http = require('http');

http.createServer(function(req, res){
  console.log(req.method)
  console.log(req.url)

  let writeHeadObject = {
    'Content-Type' : 'text-html'
  }

  res.writeHead(200, writeHeadObject)

}).listen(8080);