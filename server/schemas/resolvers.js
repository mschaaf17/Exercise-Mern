const { AuthenticationError } = require('apollo-server-express');
const { User, Exercise } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    me: async (parent, args) => {
      if (context.user) {
      const userData = await User.findOne({_id: context.user._id})
      .select('-_v -password')
      .populate('exercises')
      return userData
    }
    throw new AuthenticationError('Not logged in')

  },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('exercises')
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('exercises');
    },
    // get all exercises
    // exercises: async () => {
    //   return Exercise.find().sort({ createdAt: -1 })
    //   .populate('exerciseName');
    // },
    // should query all exercises or by username
    exercises: async (parent, args, context) => {
      // const params = username ? { username } : {};
      if (context.user)  {
      const userData = await User.findOne({_id: context.user._id}).sort({ createdAt: -1 }).populate("exercises")
        console.log(userData)
      return userData?.exercises
      }
      throw new AuthenticationError('You are not logged in')
    },
    exercise: async (parent, { _id }) => {
      return Exercise.findOne({ _id });
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user)

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
      const token = signToken(user)

      return { token, user };
    },
addExercise: async (parent, args, context) => {
  if (context.user) {
    const exercise = await Exercise.create({ ...args, username: context.user.username });

    await User.findByIdAndUpdate(
      { _id: context.user._id },
      { $push: { exercises: exercise._id } },
      { new: true }
    );

    return exercise;
  }

  throw new AuthenticationError('You need to be logged in!');
},
addUserExercise: async (parent, { exerciseId, weight, repetitions, time, notes}, context) => {
  if (context.user) {
    const updatedExercise = await Exercise.findOneAndUpdate(
      { _id: exerciseId },
      { $push: { userExercise: {weight, repetitions, time, notes, username: context.user.username} }},
      { new: true, runValidators: true}
    )
    return updatedExercise
  }
  throw new AuthenticationError('You need to be logged in.')
},

removeUserExercise: async (parent, {exerciseId, userExerciseId}, context) => {
  try {
    console.log(exerciseId)
  if (context.user) {
    console.log('hello')
    const deletedExercise = await Exercise.findOneAndUpdate(
      {_id: exerciseId},
      {$pull: { userExercise: {_id: userExerciseId} }},
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
}
}
}

// const resolvers = {
//   Query: {
//     me: async (parent, args, context) => {
//       if (context.user) {
//         const userData = await User.findOne({ _id: context.user._id })
//           .select('-__v -password')
//           // user exercises to populate not all
//           .populate('exercises')


//         return userData;
//       }

//       throw new AuthenticationError('Not logged in');
//     },
//     users: async () => {
//       return User.find()
//         .select('-__v -password')
//         .populate('exercises')
//     },
//     user: async (parent, { username }) => {
//       return User.findOne({ username })
//         .select('-__v -password')
//         .populate('exercises');
//     },
//     exercises: async (parent, { username }) => {
//       const params = username ? { username } : {};
//       return Exercise.find(params).sort({ createdAt: -1 });
//     },
//     exercise: async (parent, { _id }) => {
//       return Exercise.findOne({ _id });
//     }
//   },

//   Mutation: {
//     addUser: async (parent, args) => {
//       const user = await User.create(args);
//       const token = signToken(user);

//       return { token, user };
//     },
//     login: async (parent, { email, password }) => {
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw new AuthenticationError('Incorrect credentials');
//       }

//       const correctPw = await user.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError('Incorrect credentials');
//       }

//       const token = signToken(user);
//       return { token, user };
//     },
//     addExercise: async (parent, args, context) => {
//       if (context.user) {
//         const exercise = await Exercise.create({ ...args, username: context.user.username });

//         await User.findByIdAndUpdate(
//           { _id: context.user._id },
//           { $push: { exercises: exercise._id } },
//           { new: true }
//         );

//         return exercise;
//       }

//       throw new AuthenticationError('You need to be logged in!');
//     },
//     addUserExercise: async (parent, {exerciseId, weight, repetitions, time, notes}, context) => {
//       if (context.user) {
//         const updatedExercise = await Exercise.findOneAndUpdate(
//           {_id: exerciseId },
//           {$push: {userExercise: {weight, repetitions, time, notes, username: context.user.username}}},
//           {new: true, runValidators: true}
//         )
//         return updatedExercise
//       }
//       throw new AuthenticationError('You need to be logged in!');

//     }

//   }
// };

module.exports = resolvers;
