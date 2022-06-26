import * as echarts from 'echarts';
<<<<<<< HEAD
export default function analysisChart() {
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
          radius: ['10%', '70%'],
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
          data: [
            { value: 40, name: 'rose 1' },
            { value: 38, name: 'rose 2' },
            { value: 32, name: 'rose 3' },
            { value: 30, name: 'rose 4' },
            { value: 28, name: 'rose 5' },
            { value: 26, name: 'rose 6' },
            { value: 22, name: 'rose 7' },
            { value: 18, name: 'rose 8' },
          ],
        },
      ],
    };
    const myChart = echarts.init(document.querySelector('.analysis'));
    myChart.setOption(option);
    window.addEventListener('resize', function () {
      myChart.resize();
    });
}
=======
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
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
