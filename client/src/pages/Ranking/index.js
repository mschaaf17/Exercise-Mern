import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import '../../utils/flexible';
import './index.css';

import {
  hourChart,
  weightChart,
  topChart,
  analysisChart,
} from '../../components/Charts/';
import { QUERY_ANALYSIS_DATA } from '../../utils/queries';

function Ranking() {
  const { loading, data } = useQuery(QUERY_ANALYSIS_DATA);
  // const { loading2, data2 } = useQuery(QUERY_UER_DATA);
  // console.log(data2);
  console.log(data);
  const topPlayers = data?.topPlayers;
  const weightData = data?.userData?.sixMonthWeight;
  useEffect(() => {
    hourChart();
    weightChart(weightData);
    topChart(topPlayers);
    analysisChart();
  }, [data]);

  return (
    <div className="mainbox">
      <div className="panel">
        <h2>Exercise Hours</h2>
        <div className="chart hour"></div>
        <div className="panel-footer"></div>
      </div>
      <div className="panel">
        <h2>Top 5 Players</h2>
        <div className="chart ranking"></div>
        <div className="panel-footer"></div>
      </div>
      <div className="panel">
        <h2>Weight Track</h2>
        <div className="chart weight"></div>
        <div className="panel-footer"></div>
      </div>

      <div className="panel">
        <h2>Exercise Analysis</h2>
        <div className="chart analysis"></div>
        <div className="panel-footer"></div>
      </div>
      <div className="panel panel-blank"></div>
      <div className="panel panel-blank"></div>
    </div>
  );
}

export default Ranking;
