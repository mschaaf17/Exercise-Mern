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
  type Exercise {
    _id: ID
    exerciseCategory: String
    username: String
    weight: Int
    repetitions: Int
    time: Int
    notes: String
    createdAt: String
  }

  type ExerciseCategory {
    _id: ID
    exerciseName: String
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

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    exercises: [Exercise]
    exercise(_id: ID!): Exercise
    userExercise(createdAt: String): Exercise
    exerciseNames: [ExerciseCategory]
    # exercise(exerciseName: String): Exercise
    topPlayers: [Player]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addExerciseName(exerciseName: String!): ExerciseCategory
    addExercise(
      exerciseCategory: String!
      # username: String
      weight: Int
      repetitions: Int
      time: Int
      notes: String
    ): Exercise

    # addExercise(exerciseName: String!): Exercise
    # addUserExercise(exerciseId: ID!, weight: Int, repetitions: Int, time: Int, notes: String): Exercise
    removeExercise(exerciseId: ID!): Exercise

  }
`;

module.exports = typeDefs;
