const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const exerciseSchema = new Schema(
  {
    exerciseCategory: {
      type: Schema.Types.ObjectId,
      ref: 'ExerciseCategory',
    },
    username: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      // require: 'Please enter the weight for this exercise'
    },
    repetitions: {
      type: Number,
      // required: 'How many reps did you do?'
    },
    time: {
      type: Number,
      // require: 'Enter 0'
    },
    notes: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
<<<<<<< HEAD
      get: timestamp => dateFormat(timestamp),
=======
      // get: timestamp => dateFormat(timestamp),
>>>>>>> 37f70119ccaeffebcc0b8f90b2af86c3421840e2
    }
  }
  // {
  //   toJSON: {
  //     getters: true,
  //   },
  // }
);

const Exercise = model('Exercise', exerciseSchema);
module.exports = Exercise;
