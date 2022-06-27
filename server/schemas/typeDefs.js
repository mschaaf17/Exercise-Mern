const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # type Exercise {
  #   _id: ID
  #   exerciseName: String
  #   userExercise: [userExercises]
  # }
  type ExerciseCategory {
    _id: ID
    exerciseName: String
  }
  type Exercise {
    _id: ID
    username: String
    exerciseCategory: ExerciseCategory
    weight: Int
    repetitions: Int
    time: Int
    notes: String
    createdAt: String
  }
  type User {
    _id: ID
    username: String
    email: String
    exercises: [Exercise]
  }

  type Time {
    _id: ID
    date: Date
    time: Int
  }
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
  type UserData {
    weeklyData: String
    monthlyWeight: String
    exercises: String
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    exercises: User
    exercise(_id: ID!): Exercise
    # exercise(exerciseName: String): Exercise
    topPlayers: [Player]
    userData: UserData
    exerciseNames: [ExerciseCategory]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addExerciseName(exerciseName: String!): ExerciseCategory
    addExercise(
      exerciseName: String!
      weight: Int
      repetitions: Int
      time: Int
      notes: String
    ): Exercise
    editUser(email: String!, username: String!): Auth
    removeExercise(_id: ID! ): Exercise
    saveTime(time: Int): Time
  }
`;

module.exports = typeDefs;