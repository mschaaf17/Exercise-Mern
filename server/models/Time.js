const { Schema, model } = require('mongoose');

const timeSchema = new Schema({
  time: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now,

  }
});

const Time = model('Time', timeSchema);
module.exports = Time;
