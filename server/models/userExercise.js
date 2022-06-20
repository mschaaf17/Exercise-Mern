const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const userExerciseSchema = new Schema(
  {
    username: {
        type: String,
        required: true
      },
      weight: {
        type: Number
        // require: 'Please enter the weight for this exercise'
  
      },
      repetitions: {
        type: Number
        // required: 'How many reps did you do?'
      },
      time: {
        type: Number
        // require: 'Enter 0'
      },
      notes: {
        type: String
      },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = userExerciseSchema;
