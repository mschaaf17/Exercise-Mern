const { withInThisWeek } = require('./dateValidate.js');

function getWeeklyData(data = []) {
  let weeklyArray = {};
  data
    .filter(el => withInThisWeek(el.createdAt))
    .forEach(el => {
      if (!weeklyArray[el.categoryName]) {
        weeklyArray[el.categoryName] = [el.time, el.repetitions];

        return;
      }
      const updatedArr = [
        weeklyArray[el.categoryName][0] + el.time,
        weeklyArray[el.categoryName][0] + el.repetitions,
      ];
      weeklyArray[el.categoryName] = updatedArr;
    });
  return JSON.stringify(weeklyArray);
}

module.exports = { getWeeklyData };
