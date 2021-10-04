const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema(
  {
    name: String,
    price: Number,
    address: String,
    square: Number,
    description: String,
    pathImages: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    application: [
      mongoose.Schema({
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          unique: true,
        },
        accepted: Boolean,
      }),
    ],
  },

  { timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
