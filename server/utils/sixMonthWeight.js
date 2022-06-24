const data = [
  { time: '2022-05-31T05:33:10.239Z', weight: 138 },
  { time: '2022-06-16T05:33:10.278Z', weight: 139 },
  { time: '2022-05-29T05:33:10.370Z', weight: 127 },
  { time: '2022-06-07T05:33:10.412Z', weight: 133 },
  { time: '2022-06-09T05:33:10.416Z', weight: 132 },
  { time: '2022-06-10T05:33:10.430Z', weight: 129 },
  { time: '2022-06-05T05:33:10.477Z', weight: 127 },
  { time: '2022-06-11T05:33:10.515Z', weight: 138 },
  { time: '2022-06-24T05:33:10.622Z', weight: 130 },
  { time: '2022-06-16T05:33:10.930Z', weight: 132 },
  { time: '2022-06-24T05:33:10.990Z', weight: 132 },
  { time: '2022-06-07T05:33:11.079Z', weight: 138 },
  { time: '2022-06-08T05:33:11.133Z', weight: 139 },
  { time: '2022-05-30T05:33:11.146Z', weight: 126 },
  { time: '2022-06-24T05:33:11.196Z', weight: 136 },
  { time: '2022-06-21T05:33:11.226Z', weight: 129 },
  { time: '2022-06-22T05:33:11.266Z', weight: 125 },
  { time: '2022-06-15T05:33:11.294Z', weight: 133 },
  { time: '2022-05-27T05:33:11.325Z', weight: 130 },
  { time: '2022-06-19T05:33:11.336Z', weight: 138 },
  { time: '2022-06-13T05:33:11.350Z', weight: 132 },
  { time: '2022-06-03T05:33:11.387Z', weight: 134 },
  { time: '2022-06-13T05:33:11.605Z', weight: 126 },
  { time: '2022-06-12T05:33:11.614Z', weight: 138 },
  { time: '2022-06-05T05:33:11.706Z', weight: 131 },
  { time: '2022-05-28T05:33:11.925Z', weight: 130 },
  { time: '2022-06-18T05:33:11.964Z', weight: 128 },
  { time: '2022-05-27T05:33:11.971Z', weight: 131 },
  { time: '2022-06-17T05:33:12.005Z', weight: 132 },
];

function dateFormat(utcTime) {
  const dayArray = new Date(utcTime)
    .toLocaleDateString()
    .split(',')[0]
    .split('/');
  return [dayArray[2], dayArray[0]].join('/');
}

function getPastMonth(number) {
  let date = new Date();
  let pastDate = date.setMonth(date.getMonth() - number);
  const dayArray = new Date(pastDate)
    .toLocaleDateString()
    .split(',')[0]
    .split('/');
  return [dayArray[2], dayArray[0]].join('/');
}

// console.log(getPastMonth(6));

const getPastSixMonthWeight = data => {
  const MonthlyWeight = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
  return (
    data
      // change time format to 'YYYY-MM'
      .map(el => ({ time: dateFormat(el.time), weight: el.weight }))
      .forEach(el => {
        console.log(el);
        switch (el.time) {
          case getPastMonth(1):
            MonthlyWeight[1].push[el];
            break;
          case getPastMonth(2):
            MonthlyWeight[2].push[el];
            break;
          case getPastMonth(3):
            MonthlyWeight[3].push[el];
            break;
          case getPastMonth(4):
            MonthlyWeight[4].push[el];
            break;
          case getPastMonth(5):
            MonthlyWeight[5].push[el];
            break;
          case getPastMonth(6):
            MonthlyWeight[6].push[el];
            break;
        }
      })
  );
};

getPastSixMonthWeight(data);
