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
      // get: timestamp => dateFormat(timestamp),
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
