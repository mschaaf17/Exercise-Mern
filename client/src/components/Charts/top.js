import * as echarts from 'echarts';
import { useEffect } from 'react';

const getOption = (topData) => {
  if (topData.length !== 0) {
    var data = topData.map(el => el.totalTime);
    var titlename = topData.map(el => el.username);
    var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
    const option = {
      grid: {
        top: '10%',
        left: '25%',
        right: '0%',
        bottom: '10%',
      },
      xAxis: {
        show: false,
      },
      yAxis: {
        show: true,
        data: titlename,
        inverse: true,
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: 'black',
          rich: {
            lg: {
              backgroundColor: '#339911',
              color: '#fff',
              borderRadius: 15,
              // padding: 5,
              align: 'center',
              width: 15,
              height: 15,
            },
          },
        },
      },

      series: {
        type: 'bar',
        yAxisIndex: 0,
        data: data,
        barCategoryGap: 50,
        barWidth: 23,
        barBorderRadius: 2,
        itemStyle: {
          normal: {
            color: function (params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num];
            },
          },
        },
        label: {
          normal: {
            show: true,
            // position: 'inside',
            formatter: '{c} mins',
          },
        },
      },
    };
    return option;
  }
  return {};
};

export default function TopChart({ topData }) {
  useEffect(() => {
    const myChart = echarts.init(document.querySelector('.ranking'));
    myChart.setOption(getOption(topData));
    window.addEventListener('resize', function () {
      myChart.resize();
    });
  }, [topData]);

  return (
    <>
      <div className="panel">
        <h2>Star Players</h2>
        <div className="chart ranking"></div>
        <div className="panel-footer"></div>
      </div>
      <div className="panel panel-blank"></div>
      <div className="panel panel-blank"></div>
    </>
  );
}
