const { Exercise, User, ExerciseCategory } = require('../models/');

const generateExercise = async userList => {

  const exerciseList = await ExerciseCategory.find({});

  for (let i = 0; i <= 1000; i++) {
    //   create new exercise
    const exerciseInstance = {
      // random exercise category
      exerciseCategory:
        exerciseList[Math.floor(Math.random() * exerciseList.length)]._id,
      username: userList[Math.floor(Math.random() * 21)].username,
      weight: Math.floor(Math.random() * 15 + 125),
      repetitions: Math.floor(Math.random() * 30 + 30),
      time: Math.floor(Math.random() * 30 + 10),
      createdAt: new Date(
        new Date().setDate(
          new Date().getDate() - Math.floor(Math.random() * 181)
        )
      ),
    };
    // save data to User document's exercises
    await Exercise.create(exerciseInstance)
      .then(data =>
        User.findOneAndUpdate(
          { username: data.username },
          {
            $push: {
              exercises: data._id,
            },
          },
          { new: true }
        )
      )
      .catch(error => console.log(error));
  }
};

const seedExercise = async () => {
  // delete old data
  await Exercise.deleteMany({});
  //find all the user
  const userList = await User.find({}).select('username');
  //add exercises
  await generateExercise(userList);
};

module.exports = seedExercise;
