const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  callDate: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model('Log', logSchema);
