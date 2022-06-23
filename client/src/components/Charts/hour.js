import * as echarts from 'echarts';
export default function hourChart() {
  // 指定图表的配置项和数据
  const option = {
    // title: {
    //   text: 'ECharts 入门示例',
    // },
    // 多个颜色用于线型图
    color: ['rgb(2, 166, 182)'],
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
      data: ['Marh', 'Push Ups', 'Lat Pull Downs', 'Crunches', 'Sit Ups'],
      // 刻度标签字体颜色 大小
      axisLabel: {
        color: '#02a6b6',
        fontSize: '10',
        interval: 0,
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
          color: '#4c9bfd',
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgb(235,215,255,.8)',
            width: 1,
          },
        },
        // y轴分割线
        splitLine: {
          lineStyle: {
            color: 'rgb(235,215,255,.8)',
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
      top: '14%',
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
          barBorderRadius: 3,
        },
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };
  const myChart = echarts.init(document.querySelector('.hour'));
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  });
}
