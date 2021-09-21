const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: Number,
    number: Number,
    pathImages: String,
    description: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
