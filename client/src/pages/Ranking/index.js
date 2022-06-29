import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import '../../utils/flexible';
import './index.css';
import Footer from '../../components/Footer/index.js'

import {
  weekChart,
  weightChart,
  topChart,
  analysisChart,
} from '../../components/Charts/';
import { QUERY_EXERCISE_DATA } from '../../utils/queries';

function Ranking() {
  const { loading, data } = useQuery(QUERY_EXERCISE_DATA);
  // console.log(data);

  const topPlayers = data?.topPlayers;
  const weightData = data?.userData?.monthlyWeight;
  const exerciseData = data?.userData?.exercises;
  const weeklyData = data?.userData?.weeklyData;


  useEffect(() => {
    weekChart(weeklyData);
    weightChart(weightData);
    topChart(topPlayers);
    analysisChart(exerciseData);
  }, [data]);

  return (
    <div className="mainbox">
      <div className="panel">
        <h2>Weekly Data</h2>
        <div className="chart hour"></div>
        <div className="panel-footer"></div>
      </div>
      <div className="panel">
        <h2>Star Players</h2>
        <div className="chart ranking"></div>
        <div className="panel-footer"></div>
      </div>

      <div className="panel">
        <h2>Exercise Analysis</h2>
        <div className="chart analysis"></div>
        <div className="panel-footer"></div>
      </div>
      <div className="panel">
        <h2>Weight Tracker</h2>
        <div className="chart weight"></div>
        <div className="panel-footer"></div>
      </div>
      <div className="panel panel-blank"></div>
      <div className="panel panel-blank"></div>
      <Footer/>
    </div>
  );
}

export default Ranking;
