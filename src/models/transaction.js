const mongoose = require("mongoose");
const validator = require("validator");
const User = require("./user");

const Transaction = mongoose.model("Transaction", {
  fromId: { type: String, required: true },
  toId: {
    type: String,
    async validate(value) {
      if (!(await User.findById(value))) throw "user was not found";
    },
  },
  actionType: { type: String, required: true },
  amount: { type: Number, required: true, min: 0 },
  date: {
    type: Date,
    default: new Date(),
  },
});
module.exports = Transaction;
