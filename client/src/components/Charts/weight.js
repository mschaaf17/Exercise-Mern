import * as echarts from 'echarts';
import { useEffect } from 'react';

const getOption = weightData => {
  if (!weightData.length !== 0) {
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
    if (weightData.length !== 0) {
      const weight = JSON.parse(weightData);
      monthArray = Object.keys(weight).map(el => months[el]);
      weightArray = Object.values(weight);
      max = Math.max(...weightArray, suggestValue) + 5;
      min = Math.min(...weightArray, suggestValue) - 5;

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

      return option;
    }
  }
  return {};
};

export default function WeightChart({ weightData }) {
  useEffect(() => {
    const myChart = echarts.init(document.querySelector('.weight'));
    myChart.setOption(getOption(weightData));
    window.addEventListener('resize', function () {
      myChart.resize();
    });
  });
  return (
    <div className="panel">
      <h2>Weight Tracker</h2>
      <div className="chart weight"></div>
      <div className="panel-footer"></div>
    </div>
  );
}
