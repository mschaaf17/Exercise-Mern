// const data = [
//   { categoryName: 'push up', time: 25 },
//   { categoryName: 'push up', time: 25 },
//   { categoryName: 'push up', time: 25 },
//   { categoryName: 'push up', time: 25 },
//   { categoryName: 'push up2', time: 25 },
//   { categoryName: 'push up2', time: 25 },
//   { categoryName: 'push up2', time: 25 },
//   { categoryName: 'push up2', time: 25 },
//   { categoryName: 'push up2', time: 25 },
//   { categoryName: 'push up2', time: 25 },
//   { categoryName: 'push up3', time: 25 },
//   { categoryName: 'push up3', time: 25 },
//   { categoryName: 'push up3', time: 25 },
//   { categoryName: 'push up3', time: 25 },
//   { categoryName: 'push up3', time: 25 },
//   { categoryName: 'push up3', time: 25 },
//   { categoryName: 'push up4', time: 25 },
//   { categoryName: 'push up5', time: 25 },
// ];

function exerciseAnalysis(data = []) {
  const categoryData = {};

  data.forEach(el => {
    if (!categoryData[el.categoryName]) {
      categoryData[el.categoryName] = el.time;
    }
    categoryData[el.categoryName] += el.time;
  });
  return JSON.stringify(categoryData);
}

module.exports = exerciseAnalysis;
