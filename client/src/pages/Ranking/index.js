import React, { useEffect } from 'react';
import '../../utils/flexible';
import './index.css';
import {
  hourChart,
  weightChart,
  topChart,
  analysisChart,
} from '../../components/Charts/';

function Ranking() {
  useEffect(() => {
    hourChart();
    weightChart();
    topChart();
    analysisChart();
  });

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
