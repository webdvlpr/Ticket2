const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
//   first_name
// last_name
// email
// phone
// password
// company
// department
// region_number
// region_name
// appartment
// address
// city
// ward
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone : {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  company: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required : true
  },
  region_number: {
    type: Number,
    required: true
  },
  region_name : {
    type: String,
    required: true
  },
  appartment : {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type :String,
    required: true
  },
  ward : {
    type: String,
    required: true
  },
  ticket: [{ type: mongoose.Types.ObjectId, ref: "ticket", required: true }],
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
