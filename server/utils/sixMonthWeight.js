// change utcTime into YYYY/MM to compare
function dateFormat(utcTime) {
  let dayArray = new Date(utcTime)
    .toLocaleDateString()
    .split(',')[0]
    .split('/');
  // change 2022/4 to 2022/04
  return [dayArray[2], dayArray[0] <= 9 ? '0' + dayArray[0] : dayArray[0]].join(
    '/'
  );
}

// get the past month's time in YYYY/MM format to compare later
function getPastMonth(number) {
  let date = new Date();
  let pastDate = date.setMonth(date.getMonth() - number);
  let dayArray = new Date(pastDate)
    .toLocaleDateString()
    .split(',')[0]
    .split('/');
  // change 2022/4 to 2022/04
  return [dayArray[2], dayArray[0] <= 9 ? '0' + dayArray[0] : dayArray[0]].join(
    '/'
  );
}

const sixMonthWeight = data => {
  const monthlyWeight = {};

  
  data
    // change time format to 'YYYY/MM'
    .map(el => ({ time: dateFormat(el.time), weight: el.weight }))
    // only deal with recent 6 months' data
    .filter(el => el.time >= getPastMonth(5))
    .forEach(el => {
      const monthIndex = parseInt(el.time.split('/')[1]) - 1;
      if (!monthlyWeight[monthIndex]) {
        monthlyWeight[monthIndex] = [];
        return;
      }
      monthlyWeight[monthIndex].push(el);
    });

  for (let k in monthlyWeight) {
    let average = monthlyWeight[k]
      .map(el => el.weight)
      .reduce((num, item, index) => {
        if (index != monthlyWeight[k].length - 1) {
          return num + item;
        } else {
          return (num + item) / monthlyWeight[k].length;
        }
      }, 0);
    monthlyWeight[k] = parseInt(average);
  }
  return JSON.stringify(monthlyWeight);
};

module.exports = { sixMonthWeight };
