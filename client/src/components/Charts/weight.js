import * as echarts from 'echarts';
<<<<<<< HEAD
export default function weightChart () {
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
=======
export default function weightChart(data) {
  let monthArray = [];
  let weightArray = [];
  let max;
  let min;
  let suggestValue = 120;
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Spt',
    'Oct',
    'Nov',
    'Dec',
  ];
  if (data) {
    const weightData = JSON.parse(data);
    monthArray = Object.keys(weightData).map(el => months[el]);
    weightArray = Object.values(weightData);
    max = Math.max(...weightArray, suggestValue) + 5;
    min = Math.min(...weightArray, suggestValue) - 5;
  }

  const option = {
    color: ['#ed3f35', '#1089E7'],
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
      data: monthArray,
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
      min: min,
      max: max,
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
        name: 'Your Weight',
        type: 'line',
        stack: 'Total',
        data: weightArray,
        // smooth: true,
      },
      {
        name: 'Recommended',
        type: 'line',
        stack: 'Total2',
        // showSymbol: false,
        data: [125, 125, 125, 125, 125, 125, 125],
      },
    ],
  };
  const myChart = echarts.init(document.querySelector('.weight'));
  myChart.setOption(option);
  window.onresize = myChart.resize;
}
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
