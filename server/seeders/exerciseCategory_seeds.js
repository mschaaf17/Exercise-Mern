const { ExerciseCategory } = require('../models/');

const exerciseList = [
  'Pull Ups',
  'Push Ups',
  'Lat Pull Downs',
  'Crunches',
  'Sit Ups',
];

const seedCategory = async () => {
  await ExerciseCategory.deleteMany();
  for (item of exerciseList) {
    await ExerciseCategory.create({ exerciseName: item });
  }
};

module.exports = seedCategory;
