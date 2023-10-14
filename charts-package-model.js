// 파일 생성을 위한 fs 불러오기
const fs = require('fs');

// 빌보드 차트 데이터가 담긴 npm 패키지 불러오기
const { listCharts } = require('billboard-top-100');

// 패키지를 새로운 배열에 담아 html 문서를 생성하기 위한 함수 선언
listCharts((err, charts) => {
  let chartArray = []; // 데이터가 새로 담길 배열

  for (let i = 0; i < charts.length; i++){
    for (let j = chartArray.length; j <= chartArray.length; j++){
      // a태그를 붙여 이름을 누르면 해당 url로 이동할 수 있도록 데이터를 배열
        chartArray[j] = "<a href = " + charts[i].url +">" + charts[i].name + "</a><br>"; 

        // 배열을 문자열로 변경하여 index.html이란 파일명에 데이터로 입력하여 문서 생성
        fs.writeFile('index.html', chartArray.join(''), function() {
          console.log('File created');
        });
        
      }
    }
  });