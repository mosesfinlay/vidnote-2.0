const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Regular expression for validating a user email address
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const UserSchema = new Schema({
  firstName: { 
    type: String,
    required: true 
  },
  lastName: { 
    type: String,
    required: true 
  },
  emailAddress: { 
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: v => emailRegex.test(v),
      message: props => `${props.value} is not a valid email address!`
    }
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;