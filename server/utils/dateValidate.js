<<<<<<< HEAD
const withInLastWeek = utcTime => {
  let Day = new Date(utcTime);
  const dateArray = Day.toLocaleString().split(',')[0].split('/');
=======
// format 2022/4/2 to 2022/04/02
function formatDate(date) {
  const monthValue =
    date.getMonth() + 1 <= 9
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1;

  const dateValue = date.getDate() <= 9 ? '0' + date.getDate() : date.getDate();

  return date.getFullYear() + '/' + monthValue + '/' + dateValue;
}

const withInLastWeek = utcTime => {
  let Day = new Date(utcTime);
  let dateArray = Day.toLocaleString().split(',')[0].split('/');

  dateArray = dateArray.map(el => (parseInt(el) <= 9 ? '0' + el : el));
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
  Day = dateArray[2] + '/' + dateArray[0] + '/' + dateArray[1];

  let date = new Date();

  date.setDate(date.getDate() - 7 - date.getDay() + 1);

<<<<<<< HEAD
  const lastMonday =
    date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
  // console.log(lastMonday);

  date.setDate(date.getDate() + 6);

  const lastSunday =
    date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
  console.log(lastMonday, lastSunday, Day);
  return lastMonday <= Day && lastSunday >= Day;
};

module.exports = { withInLastWeek };
=======
  const lastMonday = formatDate(date);

  date.setDate(date.getDate() + 6);

  const lastSunday = formatDate(date);
  // console.log(lastMonday, lastSunday, Day);
  return lastMonday <= Day && lastSunday >= Day;
};

const withInThisWeek = utcTime => {
  let Day = new Date(utcTime);
  let dateArray = Day.toLocaleString().split(',')[0].split('/');

  dateArray = dateArray.map(el => (parseInt(el) <= 9 ? '0' + el : el));

  Day = dateArray[2] + '/' + dateArray[0] + '/' + dateArray[1];

  let date = new Date();
  date.setDate(date.getDate() - date.getDay() + 1);
  // console.log(date);
  thisMonday = formatDate(date);

  return Day >= thisMonday;
};

module.exports = { withInLastWeek, withInThisWeek };
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
