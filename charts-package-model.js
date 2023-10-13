const { listCharts } = require('billboard-top-100');

listCharts((err, charts) => {
  console.log(charts);
});

var chartsArr = [];
