const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  numberExpedition: {
    type: Number,
    required: [true]
  },
  description: {
    type: String,
    required: [true]
  },
  dateExpedition: {
    type: String,
    required: [true]
  },
  caveName: {
    type: String,
    required: [true]
  },
  photoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Photo"
  }
});

module.exports = { schema };
