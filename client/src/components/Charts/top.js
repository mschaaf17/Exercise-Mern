import * as echarts from 'echarts';
export default function topChart(dataArr = []) {
  var data = dataArr.map(el => el.totalTime);
  var titlename = dataArr.map(el => el.username);
  var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
  const option = {
<<<<<<< HEAD
    // 基于准备好的dom，初始化echarts实例
    //图标位置
    grid: {
      top: '10%',
      left: '35%',
=======

    grid: {
      top: '10%',
      left: '25%',
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
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
<<<<<<< HEAD
        color: '#02a6b6',
=======
        color: 'black',
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
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
<<<<<<< HEAD
      name: '条',
=======
    
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
      type: 'bar',
      yAxisIndex: 0,
      data: data,
      barCategoryGap: 50,
<<<<<<< HEAD
      barWidth: 20,
      itemStyle: {
        normal: {
          barBorderRadius: 24,
=======
      barWidth: 23,
      barBorderRadius: 2,
      itemStyle: {
        normal: {
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
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
  const myChart = echarts.init(document.querySelector('.ranking'));
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  });
}
