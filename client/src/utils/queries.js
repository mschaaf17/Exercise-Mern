import { gql } from '@apollo/client';

export const QUERY_EXERCISES = gql`
  query {
    exercises {
      _id
      exerciseName
      userExercise {
        weight
      repetitions
      username
      notes
      createdAt
      }
      
    }
  }
`;


export const QUERY_EXERCISE = gql`
  query exercise($id: ID!) {
    exercise(_id: $id) {
      _id
      exerciseName
      userExercise {
        weight
      repetitions
      username
      notes
      createdAt
      }
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
      userExercise {
        weight
        time
        repetitions
        notes
        createdAt
      }
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
      exerciseName
      userExercise {
        weight
        time
        repetitions
        notes
        createdAt
      }
       }
    }
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
