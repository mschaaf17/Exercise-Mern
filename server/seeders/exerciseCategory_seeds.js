const { exerciseCategory } = require('../models/');

const exerciseList = [
  'Pull Ups',
  'Push Ups',
  'Lat Pull Downs',
  'Crunches',
  'Sit Ups',
];

const seedCategory = async () => await exerciseCategory.create(exerciseList.map(item=>{}));
module.exports = seedCategory;
