import * as echarts from 'echarts';
export default function topChart() {
  var data = [70, 34, 60, 78, 69];
  var titlename = ['NEO', 'NEO', 'NEO', 'NEO', 'NEO'];
  var valdata = [702, 350, 610, 793, 664];
  var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
  const option = {
    // 基于准备好的dom，初始化echarts实例
    //图标位置
    grid: {
      top: '10%',
      left: '18%',
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
          color: '#02a6b6',
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
}
