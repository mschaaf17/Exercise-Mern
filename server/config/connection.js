const mongoose = require('mongoose');


// mongoose port name change?
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/practice', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;
