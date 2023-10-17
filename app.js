const http = require('http'); // http 불러오기
const fs = require('fs'); // fs 불러오기

// 서버 구축
// sungmin : server 변수에 담기
let server = http.createServer(function(req, res){
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
}); // 포트번호 8080

let PORT = 8080
server.listen(8080, (err) => {
  
})
