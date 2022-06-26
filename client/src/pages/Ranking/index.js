import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import '../../utils/flexible';
import './index.css';

import {
<<<<<<< HEAD
  hourChart,
=======
  weekChart,
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
  weightChart,
  topChart,
  analysisChart,
} from '../../components/Charts/';
<<<<<<< HEAD
import { QUERY_TOP_PLAYERS } from '../../utils/queries';

function Ranking() {
  const { loading, data } = useQuery(QUERY_TOP_PLAYERS);
  console.log(data);
  const topPlayers = data?.topPlayers;
  useEffect(() => {
    hourChart();
    weightChart();
    topChart(topPlayers);
    analysisChart();
=======
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
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
  }, [data]);

  return (
    <div className="mainbox">
      <div className="panel">
<<<<<<< HEAD
        <h2>Exercise Hours</h2>
=======
        <h2>Weekly Data</h2>
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
        <div className="chart hour"></div>
        <div className="panel-footer"></div>
      </div>
      <div className="panel">
<<<<<<< HEAD
        <h2>Top 5 Players</h2>
        <div className="chart ranking"></div>
        <div className="panel-footer"></div>
      </div>
      <div className="panel">
        <h2>Weight Track</h2>
        <div className="chart weight"></div>
        <div className="panel-footer"></div>
      </div>
=======
        <h2>Star Players</h2>
        <div className="chart ranking"></div>
        <div className="panel-footer"></div>
      </div>
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2

      <div className="panel">
        <h2>Exercise Analysis</h2>
        <div className="chart analysis"></div>
        <div className="panel-footer"></div>
      </div>
<<<<<<< HEAD
=======
      <div className="panel">
        <h2>Weight Tracker</h2>
        <div className="chart weight"></div>
        <div className="panel-footer"></div>
      </div>
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
      <div className="panel panel-blank"></div>
      <div className="panel panel-blank"></div>
    </div>
  );
}

export default Ranking;
