import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_EXERCISE = gql`
  mutation addExercise($exerciseName: String!, $weight: Int, $repetitions: Int, $time: Int, $notes: String) {
    addExercise(exerciseName: $exerciseName, weight: $weight, repetitions: $repetitions, time: $time, notes: $notes) {
      _id
      exerciseName
      weight
      repetitions
      notes
      createdAt
    }
  }
`;

// export const ADD_USER_EXERCISE = gql`
//   mutation addUserExercise($exerciseId: ID!, $weight: Int, $repetitions: Int, $time: Int, $notes: String) {
//     addUserExercise(exerciseId: $exerciseId, weight: $weight, repetitions: $repetitions, time: $time, notes: $notes ) {
//       _id
//       userExercise {
//         _id
//         weight
//       repetitions
//       username
//       notes
//       createdAt
//       }
//     }
//   }
// `;

export const REMOVE_USER_EXERCISE = gql `
mutation removeUserExercise($exerciseId: ID!, $userExerciseId: ID!) {
  removeUserExercise(exerciseId: $exerciseId, userExerciseId: $userExerciseId) {
        _id
  }
}
`
