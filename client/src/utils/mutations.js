// import { gql } from '@apollo/client';

// export const LOGIN_USER = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

// export const ADD_USER = gql`
//   mutation addUser($username: String!, $email: String!, $password: String!) {
//     addUser(username: $username, email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

// export const ADD_EXERCISE = gql`
//   mutation addExercise($exerciseName: String!) {
//     addExercise(exerciseName: $exerciseName) {
//       _id
//       exerciseName
//       userExercise {
//        _id
//       }
//     }
//   }
// `;

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

// export const REMOVE_USER_EXERCISE = gql `
// mutation removeUserExercise($exerciseId: ID!, $userExerciseId: ID!) {
//   removeUserExercise(exerciseId: $exerciseId, userExerciseId: $userExerciseId) {
//         _id
//   }
// }
// `

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

export const EDIT_USER = gql`
  mutation editUser($username: String!, $email: String!) {
    editUser(username: $username, email: $email) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_EXERCISE = gql`
  mutation addExercise(
    $exerciseName: String!
    $weight: Int
    $repetitions: Int
    $time: Int
    $notes: String
  ) {
    addExercise(
      exerciseName: $exerciseName
      weight: $weight
      repetitions: $repetitions
      time: $time
      notes: $notes
    ) {
      _id
      exerciseCategory {
        _id
        exerciseName
      }
      weight
      time
      repetitions
      notes
      createdAt
    }
  }
`;

export const ADD_EXERCISE_NAME = gql`
mutation addExerciseName($exerciseName: String!) {
  addExerciseName (exerciseName: $exerciseName) {
    exerciseName
  }
}
`

export const REMOVE_USER_EXERCISE = gql`
  mutation removeUserExercise($exerciseId: ID!, $userExerciseId: ID!) {
    removeUserExercise(
      exerciseId: $exerciseId
      userExerciseId: $userExerciseId
    ) {
      _id
    }
  }
`;