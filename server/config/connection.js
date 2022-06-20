const mongoose = require('mongoose');


// mongoose port name change?
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/practice', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;
