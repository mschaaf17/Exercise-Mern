const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    exercises: [Exercise]
  }

  type Exercise {
    _id: ID
    exerciseName: String
    userExercise: [userExercises]
  }

    type userExercises {
      _id: ID
      username: String
    weight: Int
    repetitions: Int
    time: Int
    notes: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    exercises(username: String): [Exercise]
    exercise(_id: ID!): Exercise
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addExercise(exerciseName: String!): Exercise
    addUserExercise(exerciseId: ID!, weight: Int, repetitions: Int, time: Int, notes: String): Exercise
    removeUserExercise(exerciseId: ID!): Exercise
  }
`;

module.exports = typeDefs;
