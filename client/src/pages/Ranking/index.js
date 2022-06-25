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
import { QUERY_EXERCISE_DATA } from '../../utils/queries';

function Ranking() {
  const { loading, data } = useQuery(QUERY_EXERCISE_DATA);
  console.log(data);

  const topPlayers = data?.topPlayers;
  const weightData = data?.userData?.monthlyWeight;
  const exerciseAnalysis = data?.userData?.exercises;

  useEffect(() => {
    hourChart();
    weightChart(weightData);
    topChart(topPlayers);
    analysisChart(exerciseAnalysis);
  }, [data]);

  return (
    <div className="mainbox">
      <div className="panel">
        <h2>Weekly Data</h2>
        <div className="chart hour"></div>
        <div className="panel-footer"></div>
      </div>
      <div className="panel">
        <h2>Top 5 of Last Week</h2>
        <div className="chart ranking"></div>
        <div className="panel-footer"></div>
      </div>
      <div className="panel">
        <h2>Weight Tracker</h2>
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
