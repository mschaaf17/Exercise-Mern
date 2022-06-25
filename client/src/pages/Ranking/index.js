import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import '../../utils/flexible';
import './index.css';

import {
  WeekChart,
  WeightChart,
  TopChart,
  AnalysisChart,
} from '../../components/Charts/';

import { QUERY_EXERCISE_DATA } from '../../utils/queries';
import { useState } from 'react';

function Ranking() {
  const { loading, data } = useQuery(QUERY_EXERCISE_DATA);
  // console.log(data);
  const [weeklyData, setWeeklyData] = useState([]);
  const [weightData, setWeightData] = useState([]);
  const [topData, setTopData] = useState([]);
  const [analysisData, setAnalysisData] = useState([]);

  // const topPlayers = data?.topPlayers;
  // const weightData = data?.userData?.monthlyWeight;
  // const exerciseData = data?.userData?.exercises;
  // const weeklyData = data?.userData?.weeklyData;
  useEffect(() => {
    if (data) {
      const topData = data?.topPlayers;
      const weightData = data?.userData?.monthlyWeight;
      const analysisData = data?.userData?.exercises;
      const weekData = data?.userData?.weeklyData;

      weekData && setWeeklyData(weekData);
      weightData && setWeightData(weightData);
      topData && setTopData(topData);
      analysisData && setAnalysisData(analysisData);
    }

    // WeekChart(weeklyData);
    // weightChart(weightData);
    // TopChart(topData);
    // AnalysisChart(analysisData);
  }, [data]);

  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div className="mainbox">
      <WeekChart weeklyData={weeklyData} />
      <WeightChart weightData={weightData} />
      <AnalysisChart analysisData={analysisData} />
      <TopChart topData={topData} />
    </div>
  );
}

export default Ranking;
