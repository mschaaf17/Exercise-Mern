import * as echarts from 'echarts';
import { useEffect } from 'react';

// const data = {
//   Crunches: [144, 136],
//   'Sit Ups': [122, 158],
//   'Push Ups': [85, 115],
//   'Lat Pull Downs': [113, 121],
//   'Pull Ups': [31, 71],
// };

const getOption = weeklyData => {
  if (weeklyData.length !== 0) {
    const weekly = JSON.parse(weeklyData);
    const categoryArr = Object.keys(weekly);
    const timeArr = Object.values(weekly).map(el => el[0]);
    const repetitionArr = Object.values(weekly).map(el => el[1]);
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 默认为直线，可选line shadow
          type: 'shadow',
        },
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
      legend: {
        data: ['Time', 'Repetition'],
        top: '0%',
        right: '5%',
      },

      calculable: true,
      xAxis: [
        {
          type: 'category',
          // prettier-ignore
          data: categoryArr,
          axisTick: { show: false },
          axisLine: {
            show: false,
          },
          interval: '0',
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: 'Time',
          type: 'bar',
          data: timeArr,
          markPoint: {
            data: [
              // { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' },
            ],
          },
          barWidth: '23',

          itemStyle: {
            color: '#F8B448',
            barBorderRadius: 3,
            barWidth: '8',
          },
        },
        {
          name: 'Repetition',
          type: 'bar',
          data: repetitionArr,
          markPoint: {
            data: [
              // { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' },
            ],
          },
          barWidth: '20',
          barcategoryGap: '0',
          barGap: '1',
          itemStyle: {
            color: '#1089E7',
            barBorderRadius: 3,
          },
        },
      ],
    };
    return option;
  }
  return {};
};

export default function WeekChart({ weeklyData }) {
  useEffect(() => {
    const myChart = echarts.init(document.querySelector('.hour'));

    myChart.setOption(getOption(weeklyData));
    window.addEventListener('resize', function () {
      myChart.resize();
    });
  }, [weeklyData]);

  return (
    <div className="panel">
      <h2>Weekly Data</h2>
      <div className="chart hour"></div>
      <div className="panel-footer"></div>
    </div>
  );
}
