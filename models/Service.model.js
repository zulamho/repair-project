const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema(
  {
    name: String,
    price: Number,
    square: Number,
    pathImages: String,
    description: String,
    address: String,
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
