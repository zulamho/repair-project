const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: Number,
    square: Number,
    pathImages: [String],
    description: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    address: String,
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
