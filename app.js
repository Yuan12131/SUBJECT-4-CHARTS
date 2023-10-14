const http = require('http'); // http 불러오기
const fs = require('fs'); // fs 불러오기

// 서버 구축
http.createServer(function(req, res){
  // index.html 읽기
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, {'Content-Type' : 'text-html'})
    fs.readFile("./index.html", function(err, data){
      if(err){
        console.error("파일을 읽지 못했습니다.")
      } else {
        res.end(data)
      }
    })
  }
}).listen(8080); // 포트번호 8080