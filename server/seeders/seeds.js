const seedUsers = require('./user_seeds');
const seedExercise = require('./exercise_seeds');
const db = require('../config/connection');

db.once('open', async () => {
  try {
    await seedUsers();
    await seedExercise();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
