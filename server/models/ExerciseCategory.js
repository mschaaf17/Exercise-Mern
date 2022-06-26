const { Schema, model } = require('mongoose');

const exerciseCategorySchema = new Schema({
  exerciseName: {
    type: String,
    // required: 'You need to provide a name for your exercise',
    minlength: 1,
    maxlength: 280,
  },
});

const ExerciseCategory = model('ExerciseCategory', exerciseCategorySchema);
module.exports = ExerciseCategory;
