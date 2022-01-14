const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'customer'
  },
  date: {
    type: Date,
    default: Date.now
  },
  avatar: {
    type: String
  },
  passwordForUpdate: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('user', UserSchema);
