// const faker = require('faker');
const userSeeds = require('./userSeed.json');
const exerciseSeeds = require('./exerciseSeed.json');
const db = require('../config/connection');
const { Exercise, User } = require('../models');

db.once('open', async () => {
  try {
    await Exercise.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    await Exercise.create(exerciseSeeds)

    // for (let i = 0; i < exerciseSeeds.length; i++) {
    //   const { _id, exerciseName } = await Exercise.create(exerciseSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { username: thoughtAuthor },
    //     {
    //       $addToSet: {
    //         thoughts: _id,
    //       },
    //     }
    //   );
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});