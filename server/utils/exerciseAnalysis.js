function exerciseAnalysis(data = []) {
  const categoryData = {};

  data.forEach(el => {
    if (!categoryData[el.categoryName]) {
      categoryData[el.categoryName] = el.time;
      return;
    }
    categoryData[el.categoryName] += el.time;
  });
  return JSON.stringify(categoryData);
}

module.exports = {exerciseAnalysis};
