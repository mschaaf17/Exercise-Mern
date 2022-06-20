const { Schema, model } = require('mongoose');
const userExerciseSchema = require('./userExercise');

const exerciseSchema = new Schema(
  {
    exerciseName: {
      type: String,
      // required: 'You need to provide a name for your exercise',
      minlength: 1,
      maxlength: 280
    },
    userExercise: [userExerciseSchema]
    
  },
  {
    toJSON: {
      getters: true
    }
  }
);



const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;

