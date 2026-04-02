const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Registration", registrationSchema);