const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    pathImages: String,
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    workingUser: Boolean,

    login: String,
    password: String,
    ConfirmPassword: String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
