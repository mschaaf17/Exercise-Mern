const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    exercises: [Exercise]
  }

  # type Exercise {
  #   _id: ID
  #   exerciseName: String
  #   userExercise: [userExercises]
  # }

  # new
<<<<<<< HEAD
  type Exercise {
    _id: ID
    exerciseCategory: String
    username: String
=======
  type ExerciseCategory {
    _id: ID
    exerciseName: String
  }

  type Exercise {
    _id: ID
    username: String
    exerciseCategory: ExerciseCategory
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
    weight: Int
    repetitions: Int
    time: Int
    notes: String
    createdAt: String
  }

<<<<<<< HEAD
  type ExerciseCategory {
    _id: ID
    exerciseName: String
  }

=======
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
  #   type userExercises {
  #     _id: ID
  #     username: String
  #   weight: Int
  #   repetitions: Int
  #   time: Int
  #   notes: String
  #   createdAt: String
  # }

  type Auth {
    token: ID!
    user: User
  }

  type Player {
    username: String
    totalTime: Int
  }

<<<<<<< HEAD
=======
  type UserData {
    weeklyData: String
    monthlyWeight: String
    exercises: String
  }

>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    exercises: [Exercise]
    exercise(_id: ID!): Exercise
<<<<<<< HEAD
    userExercise(createdAt: String): Exercise
    exerciseNames: [ExerciseCategory]
    # exercise(exerciseName: String): Exercise
    topPlayers: [Player]
=======
    # exercise(exerciseName: String): Exercise
    topPlayers: [Player]
    userData: UserData
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
<<<<<<< HEAD
    addExerciseName(exerciseName: String!): ExerciseCategory
    addExercise(
      exerciseCategory: String!
      # username: String
=======
    addExercise(
      exerciseName: String!
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
      weight: Int
      repetitions: Int
      time: Int
      notes: String
    ): Exercise

    # addExercise(exerciseName: String!): Exercise
    # addUserExercise(exerciseId: ID!, weight: Int, repetitions: Int, time: Int, notes: String): Exercise
<<<<<<< HEAD
    removeExercise(exerciseId: ID!): Exercise

=======
    # removeUserExercise(exerciseId: ID!, userExerciseId: ID!): Exercise
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
  }
`;

module.exports = typeDefs;
