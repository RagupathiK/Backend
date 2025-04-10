const mongoose = require("mongoose");

const Users = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  UserName: {
    type: String,
    required: true,
  },
  PassWord: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Authendication' , Users)
