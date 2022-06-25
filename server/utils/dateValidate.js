const withInLastWeek = utcTime => {
  let Day = new Date(utcTime);
  const dateArray = Day.toLocaleString().split(',')[0].split('/');
  Day = dateArray[2] + '/' + dateArray[0] + '/' + dateArray[1];

  let date = new Date();

  date.setDate(date.getDate() - 7 - date.getDay() + 1);

  const lastMonday =
    date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
  // console.log(lastMonday);

  date.setDate(date.getDate() + 6);

  const lastSunday =
    date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
  // console.log(lastMonday, lastSunday, Day);
  return lastMonday <= Day && lastSunday >= Day;
};

module.exports = { withInLastWeek };
