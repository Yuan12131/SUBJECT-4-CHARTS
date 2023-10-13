const { listCharts } = require('billboard-top-100');

listCharts((err, charts) => {
  console.log(charts);
  const chartsArr = [];

  for (let i = 0; i < charts.length; i++){
    for (let j = chartsArr; j <= chartsArr.length; j++){
      chartsArr[j] = charts[i].name + charts[i].url
      break;
    }
  }

});
