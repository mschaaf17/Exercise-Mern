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
