import * as echarts from 'echarts';
export default function analysisChart(data) {
  const chartData = [];
  if (data) {
    const categoryData = JSON.parse(data);
    for (let k in categoryData) {
      chartData.push({ name: k, value: categoryData[k] });
    }
  }
  const option = {
    legend: {
      show: false,
      top: 'bottom',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'blue',
        fontSize: '13',
      },
    },
    series: [
      {
        name: 'Exercise Analysis',
        type: 'pie',
        radius: ['10%', '90%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        label: {
          fontSize: 13,
        },
        labelLine: {
          // 连接到图形的线长度
          length: 10,
          // 连接到文字的线长度
          length2: 10,
        },
        data: chartData,
      },
    ],
  };
  const myChart = echarts.init(document.querySelector('.analysis'));
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  });
}
