const { AuthenticationError } = require('apollo-server-express');
const { User, Exercise, ExerciseCategory } = require('../models');
const { signToken } = require('../utils/auth');
const { withInLastWeek } = require('../utils/dateValidate');

const resolvers = {
  Query: {
    me: async (parent, args) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-_v -password')
          .populate('exercises');
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find().select('-__v -password').populate('exercises');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('exercises');
    },
    // get all exercises
    // exercises: async () => {
    //   return Exercise.find().sort({ createdAt: -1 });
    // }
    // should query all exercises or by username
    exercises: async (parent, args, context) => {
      // const params = username ? { username } : {};
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .sort({ createdAt: -1 })
          .populate('exercises');
        console.log(userData);
        return userData?.exercises;
      }
      throw new AuthenticationError('You are not logged in');
    },
    exercise: async (parent, { _id }) => {
      return Exercise.findOne({ _id });
    },
    userExercise: async (parent, {_createdAt}) => {
      return Exercise.findOne({_createdAt})
    },
    exerciseNames: async (parent, args, context) => {
      return ExerciseCategory.find({})
    },

    topPlayers: async () => {
      const topArray = [];
      return User.find({})
        .populate('exercises')
        .select('username exercises')
        .then(data => {
          data.forEach(el => {
            let totalTime = 0;
            el.exercises
              // only choose data within lastweek
              .filter(el => withInLastWeek(el.createdAt))
              .forEach(el => {
                totalTime += el.time;
              });
            topArray.push({ username: el.username, totalTime });
          });
          // return the top 3 user who has the most exercise time
          return topArray.sort((a, b) => b.totalTime - a.totalTime).slice(0, 5);
        });
      throw new AuthenticationError(
        'Something wrong when retrieving top players'
      );
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);

      return { token, user };
    },
    addExerciseName: async (parent, args, context) => {
      if (context.user) {
        const exercise = await ExerciseCategory.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { exercises: exercise._id } },
          { new: true }
        );
        console.log(exercise);
        return exercise;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    removeExercise: async (parent, {exerciseId}, context) => {
      try {
        console.log(exerciseId)
      if (context.user) {
        console.log('hello')
        const deletedExercise = await Exercise.findOneAndUpdate(
          {_id: exerciseId},
          {$pull: { exercises: {_id: exerciseId} }},
          {new: true}
        )
        console.log(deletedExercise)
        return deletedExercise
      }
      throw new AuthenticationError('You need to be logged in.')
    }
    catch(err) {
      throw new AuthenticationError (err)
    }
    },
//   addExercise: async (parent, args) => {
//     const updatedExercise = await Exercise.create(args)
//     return updatedExercise
// },

// addExercise: async (parent, args, context) => {
//   const updatedExercise = await Exercise.create(args)
//   const user = await User.findOneAndUpdate(
//     {_id: context.user._id},
//     {$push: updatedExercise._id}
//   )
//   console.log(user)
//   return user
// },
addExercise: async (parent, {exerciseCategory, weight, repetitions, time, notes}, context) => {
 if (context.user) {
  const loggedExercise = await Exercise.create({weight, repetitions, time, notes, username: context.user.username})

   await ExerciseCategory.findOneAndUpdate(
    {_id: exerciseNames._id},
    {$push: {exercises: loggedExercise._id }},
    {new: true}

  )
  return loggedExercise
 }
 throw new AuthenticationError ('Log in please')
 
 
},

}
}

    // removeUserExercise: async (parent, {exerciseId, userExerciseId}, context) => {
    //   try {
    //     console.log(exerciseId)
    //   if (context.user) {
    //     console.log('hello')
    //     const deletedExercise = await Exercise.findOneAndUpdate(
    //       {_id: exerciseId},
    //       {$pull: { userExercise: {_id: userExerciseId} }},
    //       {new: true}
    //     )
    //     console.log(deletedExercise)
    //     return deletedExercise
    //   }
    //   throw new AuthenticationError('You need to be logged in.')
    // }
    // catch(err) {
    //   throw new AuthenticationError (err)
    // }
    // }
    // },
//   },
// };

module.exports = resolvers;
