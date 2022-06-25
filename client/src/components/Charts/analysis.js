import * as echarts from 'echarts';
import { useEffect } from 'react';
const getOption = analysisData => {
  if (analysisData.length !== 0) {
    const chartData = [];
    const analysis = JSON.parse(analysisData);
    console.log(analysis);
    for (let k in analysis) {
      chartData.push({ name: k, value: analysis[k] });
    }
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
          radius: ['10%', '90%'],
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
          data: chartData,
        },
      ],
    };
    return option;
  }
  return {};
};

export default function AnalysisChart({ analysisData }) {
  useEffect(() => {
    const myChart = echarts.init(document.querySelector('.analysis'));
    myChart.setOption(getOption(analysisData));
    window.addEventListener('resize', function () {
      myChart.resize();
    });
  }, [analysisData]);

  return (
    <div className="panel">
      <h2>Exercise Analysis</h2>
      <div className="chart analysis"></div>
      <div className="panel-footer"></div>
    </div>
  );
}
