import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import '../../utils/flexible';
import './index.css';

function Ranking() {
  useEffect(() => {
    (function () {
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
            color: '#02a6b',
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
                color: '#02a6b',
                width: 2,
              },
            },
            // y轴分割线
            splitLine: {
              lineStyle: {
                color: 'rgb(235,215,255,.6)',
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
    })();

    (function () {
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
              color: '#012f4a',
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
    })();

    (function () {
      var data = [70, 34, 60, 78, 69];
      var titlename = ['NEO', 'NEO', 'NEO', 'NEO', 'NEO'];
      var valdata = [702, 350, 610, 793, 664];
      var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
      const option = {
        // 基于准备好的dom，初始化echarts实例
        //图标位置
        grid: {
          top: '10%',
          left: '22%',
          bottom: '10%',
        },
        xAxis: {
          show: false,
        },
        yAxis: [
          {
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
              color: '#fff',
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
          {
            show: false,
            inverse: true,
            data: valdata,
            axisLabel: {
              textStyle: {
                fontSize: 12,
                color: '#fff',
              },
            },
          },
        ],
        series: [
          {
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: data,
            barCategoryGap: 50,
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 20,
                color: function (params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                },
              },
            },
            label: {
              normal: {
                show: true,
                position: 'inside',
                formatter: '{c}%',
              },
            },
          },
          {
            name: '框',
            type: 'bar',
            yAxisIndex: 1,
            barCategoryGap: 50,
            data: [100, 100, 100, 100, 100],
            barWidth: 15,
            itemStyle: {
              normal: {
                color: 'none',
                borderColor: '#00c1de',
                borderWidth: 3,
                barBorderRadius: 15,
              },
            },
          },
        ],
      };
      const myChart = echarts.init(document.querySelector('.ranking'));
      myChart.setOption(option);
      window.addEventListener('resize', function () {
        myChart.resize();
      });
    })();

    (function () {
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
    })();
  });

  return (
    <div className="mainbox">
      <div className="column">
        <div className="panel bar">
          <h2>Exercise Hours</h2>
          <div className="chart hour"></div>
          <div className="panel-footer"></div>
        </div>
      </div>
      <div className="column">
        <div className="panel line">
          <h2>Weight Change</h2>
          <div className="chart weight"></div>
          <div className="panel-footer"></div>
        </div>
      </div>
      <div className="column">
        <div className="panel line">
          <h2>Top5 Players of Last Week</h2>
          <div className="chart ranking"></div>
          <div className="panel-footer"></div>
        </div>
      </div>
      <div className="column">
        <div className="panel line">
          <h2>Exercise Analysis</h2>
          <div className="chart analysis"></div>
          <div className="panel-footer"></div>
        </div>
      </div>
    </div>
  );
}

export default Ranking;
