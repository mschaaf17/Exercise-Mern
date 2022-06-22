import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import '../../utils/flexible';
import './index.css';

function Ranking() {
  // 指定图表的配置项和数据
  const option1 = {
    // title: {
    //   text: 'ECharts 入门示例',
    // },
    // 多个颜色用于线型图
    // color: ['pink', 'blue'],
    // 提示框信息
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 默认为直线，可选line shadow
        type: 'shadow',
      },
    },
    // 图例框
    // legend: {
    // 如果series中已经有name，legend里面可以删掉
    // data: ['销量2'],
    // },
    xAxis: {
      data: ['Pull Ups', 'Push Ups', 'Lat Pull Downs', 'Crunches', 'Sit Ups'],
      // 刻度标签字体颜色 大小
      axisLabel: {
        color: '#02a6b',
        fontSize: '12',
      },
      // 刻度线位置 -
      axisTick: {
        // 不显示
        show: false,
        //  和柱子居中
        // alignWithLabel: true,
      },
      // 不显示x坐标轴的样式
      axisLine: {
        show: false,
      },
    },
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: '#02a6b',
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#02a6b',
            width: 2,
          },
        },
        // y轴分割线
        splitLine: {
          lineStyle: {
            color: 'rgb(235,215,255,.3)',
          },
        },
      },
    ],

    // 工具箱组件 - 下载
    // toolbox: {
    //   feature: { saveAsImage: {} },
    // },
    //网格 可以控制图表大小
    grid: {
      left: '0%',
      top: '20px',
      right: '4%',
      bottom: '3%',
      // 显示刻度
      containLabel: true,
    },

    //   yAxis: {
    //     type: 'category',
    // // 和坐标轴之间空隙
    //     boundaryGap: false,
    //   },
    series: [
      {
        // 如果series中已经有name，legend里面可以删掉
        name: '销量',
        // 也可以是line
        type: 'bar',
        // 柱子宽度
        barWidth: '25%',
        // 柱子圆角
        itemStyle: {
          barBorderRadius: 5,
        },
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };

  useEffect(() => {
    const myChart1 = echarts.init(document.querySelector('.chart'));
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);
    // 基于准备好的dom，初始化echarts实例
    window.onresize = myChart1.resize;
  });

  return (
    <div className="mainbox">
      <div className="column">
        <div className="panel bar">
          <h2>Workout Hour</h2>
          <div className="chart">Chart</div>
          <div className="panel-footer"></div>
        </div>
        <div className="panel line">
          <div className="panel-footer"></div>
        </div>
        <div className="panel pie">
          <div className="panel-footer"></div>
        </div>
      </div>

      <div className="column">
        <div className="panel bar">
          <h2>Workout time</h2>
          <div className="chart">Chart</div>
          <div className="panel-footer"></div>
        </div>
        <div className="panel line">
          <div className="panel-footer"></div>
        </div>
        <div className="panel pie">
          <div className="panel-footer"></div>
        </div>
      </div>
    </div>
  );
}

export default Ranking;
