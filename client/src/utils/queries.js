// import { gql } from '@apollo/client';

// export const QUERY_EXERCISES = gql`
//   query {
//     exercises {
//       _id
//       exerciseName
//       userExercise {
//         weight
//       repetitions
//       username
//       notes
//       createdAt
//       }

//     }
//   }
// `;

// export const QUERY_EXERCISE = gql`
//   query exercise($id: ID!) {
//     exercise(_id: $id) {
//       _id
//       exerciseName
//       userExercise {
//         weight
//       repetitions
//       username
//       notes
//       createdAt
//       }
//     }
//   }
// `;

// export const QUERY_USER = gql`
//   query user($username: String!) {
//     user(username: $username) {
//       _id
//       username
//       email
//     exercises {
//       exerciseName
//       userExercise {
//         weight
//         time
//         repetitions
//         notes
//         createdAt
//       }
//     }
//   }
//   }
// `;

// export const QUERY_ME = gql`
//   {
//     me {
//       _id
//       username
//       email
//     exercises {
//       exerciseName
//       userExercise {
//         weight
//         time
//         repetitions
//         notes
//         createdAt
//       }
//        }
//     }
//   }
// `;

// // export const QUERY_ME_BASIC = gql`
// //   {
// //     me {
// //       _id
// //       username
// //       email
// //       friendCount
// //       friends {
// //         _id
// //         username
// //       }
// //     }
// //   }
// // `;

import { gql } from '@apollo/client';

// export const QUERY_EXERCISES = gql`
//   query exercises($username: String) {
//   exercises(username: $username) {
//     exercises {
//       _id
//       exerciseName
//       username
//        weight
//       repetitions
//       notes
//       createdAt
//       }

//     }
//   }
// `;

export const QUERY_EXERCISES = gql`
  query {
    exercises {
      _id
<<<<<<< HEAD
      # exerciseName
      weight
      repetitions
      time
=======
      exerciseCategory
      weight
      repetitions
      username
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
      notes
      createdAt
    }
  }
`;

<<<<<<< HEAD
export const QUERY_NAMES = gql`
query ExerciseNames {
  exerciseNames {
    _id
    exerciseName
  }
}
`

=======
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
export const QUERY_EXERCISE = gql`
  query exercise($id: ID!) {
    exercise(_id: $id) {
      _id
      exerciseName
      username
      weight
      repetitions
      notes
      createdAt
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      exercises {
        exerciseName
        _id
        weight
        time
        repetitions
        notes
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      exercises {
        _id
        exerciseName
        weight
        time
        repetitions
        notes
        createdAt
      }
    }
  }
`;

<<<<<<< HEAD
export const QUERY_TOP_PLAYERS = gql`
=======
export const QUERY_EXERCISE_DATA = gql`
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
  {
    topPlayers {
      username
      totalTime
    }
<<<<<<< HEAD
=======
    userData {
      weeklyData
      monthlyWeight
      exercises
    }
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
  }
`;

// export const QUERY_ME_BASIC = gql`
//   {
//     me {
//       _id
//       username
//       email
//       friendCount
//       friends {
//         _id
//         username
//       }
//     }
//   }
// `;
