const http = require('http'); // http 불러오기
const fs = require('fs'); // fs 불러오기

// 서버 구축
http.createServer(function(req, res){
  console.log(req.method)
  console.log(req.url)

  let writeHeadObject = {
    'Content-Type' : 'text-html'
  }

  res.writeHead(200, writeHeadObject)

  // index.html 읽기
  fs.readFile("./index.html", function(err, data){
    if(err){
      console.error("파일을 읽지 못했습니다.")
    } else {
      res.end(data)
    }
  })

}).listen(8080); // 포트번호 8080