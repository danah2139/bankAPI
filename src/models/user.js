const mongoose = require("mongoose");
const isIsraeliIdValid = require("israeli-id-validator");

const User = mongoose.model("User", {
  _id: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
    async validate(value) {
      if (!isIsraeliIdValid(value))
        throw "Passport id is not a valid Israeli ID number";
    },
  },
  name: { type: String },
  credit: { type: Number, default: 0, min: 0 },
  cash: {
    type: Number,
    default: 0,
    min: 0,
    validate(value) {
      if (value < -this.credit)
        throw "Cash can't be less than the credit allows";
    },
  },
  isActive: { type: Boolean, default: true },
});

module.exports = User;
