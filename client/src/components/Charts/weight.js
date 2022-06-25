import * as echarts from 'echarts';
export default function weightChart(data) {
  const recentWeight = data.map(el => el !== 0);
  const option = {
    color: ['#ed3f35', '#00f2f1'],
    tooltip: {
      trigger: 'axis',
    },
    // 图例字体颜色 样式
    legend: {
      textStyle: {
        color: '#4c9bfd',
      },
      right: '10%',
    },

    grid: {
      top: '14%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      //显示边框
      show: false,
      // borderColor: '#012f4a',
      containLabel: true,
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
      axisLine: {
        show: false,
      },
      axisTick: {
        // 刻度不显示
        show: false,
      },
      axisLabel: {
        color: '#4c9bfd',
      },
    },
    yAxis: {
      type: 'value',
      min: 115,
      max: 135,
      axisLine: {
        show: false,
      },
      axisTick: {
        // 刻度不显示
        show: false,
      },
      axisLabel: {
        color: '#4c9bfd',
      },
      splitLine: {
        lineStyle: {
          color: 'rgb(235,215,255,.8)',
        },
      },
    },
    series: [
      {
        name: 'pounds',
        type: 'line',
        stack: 'Total',
        data: [120, 122, 121, 125, 132, 132, 130],
        smooth: true,
      },
      {
        name: 'recommended pounds',
        type: 'line',
        stack: 'Total2',
        showSymbol: false,
        data: [125, 125, 125, 125, 125, 125, 125],
      },
    ],
  };
  const myChart = echarts.init(document.querySelector('.weight'));
  myChart.setOption(option);
  window.onresize = myChart.resize;
}
